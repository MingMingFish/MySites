<?php
    echo "目前執行的檔案名稱：". $_SERVER['PHP_SELF']."<br>";
    echo "伺服器使用的軟體：".$_SERVER['SERVER_SOFTWARE']. "<br>";
    echo "文件的根目錄：". $_SERVER['DOCUMENT_ROOT']. "<br>";
    echo "使用者相關資訊：".$_SERVER['HTTP_USER_AGENT']. "<br>";
    echo "遠端使用者的位址：".$_SERVER['REMOTE_ADDR']. "<br>";
    echo "遠端使用者的連線埠：". $_SERVER['REMOTE_PORT']. "<br>";
    echo "遠端使用者接受的語言：". $_SERVER['HTTP_ACCEPT_LANGUAGE']."<br>";
    echo "本機伺服器的位址：".$_SERVER['SERVER_ADDR']."<br>";
    echo "本機伺服器的連線埠：". $_SERVER['SERVER_PORT']. "<br>";
    echo "本機執行檔的搜尋路徑：".$_SERVER['PATH']."<br>";
    echo "本機現在執行的php檔全路徑名：".$_SERVER['SCRIPT_FILENAME']."<br>";
    echo  "本機現在執行的php檔：".$_SERVER['SCRIPT_NAME']."<br>";
    echo "本機Windows的路徑：".$_SERVER['SystemRoot']."<br>";
?>