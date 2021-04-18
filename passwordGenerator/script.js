var keylist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"
        var tmp = ""
        function generatePass(plength) {
            tmp = ''
            for (i = 0; i < plength; i++) {
                tmp += keylist.charAt(Math.floor(Math.random() * keylist.length))
            }
            return tmp;
        }

        function populateform(enterLength) {
            document.passGen.output.value = generatePass(enterLength)
        }