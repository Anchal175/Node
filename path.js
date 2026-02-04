const path = require('path');

// current file ka path
console.log("File name:", path.basename(__filename));
console.log("Folder name:", path.dirname(__filename));

// extension
console.log("Extension:", path.extname(__filename));

// join
console.log("Join:", path.join('users', 'anchal', 'file.txt'));

// absolute or not
console.log("Is Absolute:", path.isAbsolute(__filename));

// normalize
console.log("Normalize:", path.normalize('/users//anchal/../file'));

// parse
console.log("Parse:", path.parse(__filename));

// resolve
console.log("Resolve:", path.resolve('users', 'anchal'));

// separator & delimiter
console.log("Separator:", path.sep);
console.log("Delimiter:", path.delimiter);

// Windows vs POSIX
console.log("Win32 Join:", path.win32.join('a', 'b'));
console.log("POSIX Join:", path.posix.join('a', 'b'));
