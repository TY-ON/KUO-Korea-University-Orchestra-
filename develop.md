# KUO-Korea-University-Orchestra-
Web of Korea University Orchestra

# Design
+ https://www.figma.com/design/Tg35bH2iE4fzs8rzIy4wz4/%EC%BF%A0%EC%98%A4%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8?node-id=0-1&t=Tswlp7xvMilGd8xH-1

# configuration
## main setting
+ uWSGI - nginx - flask 
using nginx as reverse proxy

## other info
virtualenv name : "KUO__web"
For test, proxy to WSL

# developing
+ 2024/07/14 alpha 0.0.1
    + basic structure of urls
    + setting docker to run server structure
        flask - uWGSI - nginx 
    + example of each page
        + no contents in support
        + alumni goto naver cafe
        + others have examples

+ 2024/08/07 alpha 0.0.2
    + menubar design apply
        + FreePik icon

+ 2024/08/14 alpha 0.0.3
    + set GNB and main content of introduction briefly
    + design applied when vw is 1250px+

+ 2024/08/28 alpha 0.0.4
    + making grid in consert_details