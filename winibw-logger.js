function LOGGER(fileName, path, delimiter) {
    this.setLogFile(fileName, path);
    this.delimiter = delimiter || "\t";
}

LOGGER.prototype = {
    setLogFile:
        function (fileName, path) {
            this.fileName = fileName || 'LOG';
            this.path = path || '\\listen';
            this.theRelativePath = this.path + '\\' + this.fileName;
        },
    log:
        function (message) {
            var out = utility.newFileOutput();
            out.createSpecial('ProfD', this.theRelativePath);
            var idn = activeWindow.getVariable('P3GPP');
            out.writeLine(new Date() + this.delimiter + idn + this.delimiter + message);
            out.close();
        }
};