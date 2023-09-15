// Abstract Factory
class ThemeFactory {
  createButton() {}
  createInput() {}
}

// Concrete Factory 1
class DarkThemeFactory extends ThemeFactory {
  createButton() {
    return new DarkButton();
  }

  createInput() {
    return new DarkInput();
  }
}

// Concrete Factory 2
class LightThemeFactory extends ThemeFactory {
  createButton() {
    return new LightButton();
  }

  createInput() {
    return new LightInput();
  }
}

// Abstract Product: Button
class Button {
  render() {}
}

// Concrete Product: Dark Button
class DarkButton extends Button {
  render() {
    console.log("Rendering a dark button");
  }
}

// Concrete Product: Light Button
class LightButton extends Button {
  render() {
    console.log("Rendering a light button");
  }
}

// Abstract Product: Input
class Input {
  render() {}
}

// Concrete Product: Dark Input
class DarkInput extends Input {
  render() {
    console.log("Rendering a dark input");
  }
}

// Concrete Product: Light Input
class LightInput extends Input {
  render() {
    console.log("Rendering a light input");
  }
}

// Client Code
function createAndRenderUI(factory) {
  const button = factory.createButton();
  const input = factory.createInput();

  button.render();
  input.render();
}

const darkThemeFactory = new DarkThemeFactory();
const lightThemeFactory = new LightThemeFactory();

createAndRenderUI(darkThemeFactory);
createAndRenderUI(lightThemeFactory);
