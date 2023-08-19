
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Name Fun</title>
    <link rel="stylesheet" href="name.css">
</head>
<body>
    <header>
        <h1>Welcome to Name Fun Zone</h1>
    </header>
    <main>
        <p>Check Toda'y luck</p><br>
        <label for="name">Enter your Name</label>
        <input class="nameinput" id="nameinput" placeholder="Enter name in Small Letters" type="text" autofocus="on" autocomplete="on" required>
        <br><br>
        <button type="submit" id="trybtn" onclick="clk()">Try It</button>
        <button type="reset" id="restbt" class="restbtn" onclick="rst()">Pause</button>
        <div id="inc"></div>
        <div class="resultcontainer">
             <video id="video" width="320" height="240" controls style="display: none;">
                <source id="sour" src="bad video/kalyanavalkai.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            <p id="sampo"> Try Your Luck </p><br>
            <p id="sampt">
            </p><br>
            <p id="sampth"></p><br>
            <p id="sampf"></p><br>
            <p id="sampfi">
                    <div class="outer" id="get">
                        <div class="inner">
                            <p id="luckvalue">0</p>
                        </div>
                    </div>
            </p><br>
            
        </div>
    </main>
       
    <script src="Namejs.js"></script>
</body>
</html>
