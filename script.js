var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Implement the WindowsButton.
var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.render = function () {
        // Render the Windows-style button.
    };
    WindowsButton.prototype.onClick = function (f) {
        // Attach a Windows event handler to the button.
    };
    return WindowsButton;
}());
// Implement the HTMLButton.
var HTMLButton = /** @class */ (function () {
    function HTMLButton() {
    }
    HTMLButton.prototype.render = function () {
        // Return HTML code for the button.
    };
    HTMLButton.prototype.onClick = function (f) {
        // Attach a browser event handler to the button.
    };
    return HTMLButton;
}());
// Define the abstract factory interface.
var Dialog = /** @class */ (function () {
    function Dialog() {
    }
    Dialog.prototype.render = function () {
        var _this = this;
        var okButton = this.createButton();
        okButton.onClick(function () { return _this.closeDialog(); });
        okButton.render();
    };
    Dialog.prototype.closeDialog = function () {
        // Implement dialog closing logic here.
    };
    return Dialog;
}());
// Implement the WindowsDialog factory.
var WindowsDialog = /** @class */ (function (_super) {
    __extends(WindowsDialog, _super);
    function WindowsDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsDialog.prototype.createButton = function () {
        return new WindowsButton();
    };
    return WindowsDialog;
}(Dialog));
// Implement the WebDialog factory.
var WebDialog = /** @class */ (function (_super) {
    __extends(WebDialog, _super);
    function WebDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebDialog.prototype.createButton = function () {
        return new HTMLButton();
    };
    return WebDialog;
}(Dialog));
// Application class
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.initialize = function () {
        var config = this.readApplicationConfigFile();
        if (config.OS === "Windows") {
            this.dialog = new WindowsDialog();
        }
        else if (config.OS === "Web") {
            this.dialog = new WebDialog();
        }
        else {
            throw new Error("Error! Unknown operating system.");
        }
    };
    Application.prototype.main = function () {
        this.initialize();
        this.dialog.render();
    };
    Application.prototype.readApplicationConfigFile = function () {
        // Implement reading application configuration logic here.
        return { OS: "Windows" }; // Example configuration for demonstration.
    };
    return Application;
}());
// Create an instance of the Application class and run the main method.
var app = new Application();
app.main();
