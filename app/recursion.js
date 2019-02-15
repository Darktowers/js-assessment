recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    let files = []
    findAllFiles = async (directory, dirName) => {
      if (dirName) {
        if (directory.dirName == dirName) {
          directory.files.map(file => {
            files.push(file)
          })
          if (directory.subDirs.length > 0) {
            directory.subDirs.map(async directory => {
              await findAllFiles(directory, directory.dirName)
            })
          }
        } else {
          if (directory.subDirs.length > 0) {
            directory.subDirs.map(async directory => {
              await findAllFiles(directory, dirName)
            })
          }
        }
      } else {
        directory.files.map(file => {
          files.push(file)
        })
        if (directory.subDirs.length > 0) {
          directory.subDirs.map(async directory => {
            await findAllFiles(directory)
          })
        }
      }
    }
    findAllFiles(data, dirName)
    return files
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    let fibo = (n) => n < 2 ? n : fibo(n - 1) + fibo(n - 2);
    return fibo(n)
  },
};
