# Review Javascript, Backend, Frontend, Express, MongoDB

1.  Why is folder structure important ?
    To help us modularize our code, modularize- is breaking up our code into smaller more tangible code/easier to work with.
    Scenario: When growing number of files that are growing we can seperate using different folders helps not being repetive.
    when does folder structure matter when coding: when we are trying to navigate to a specific location in our project, if not in correct location; wont work.
    How to figure out where you are/currently located: **pwd** print working directory
    **ls** lists everything is current directory, **ls -a** lists hidden files and directories!
    Seperating concerns.
    Folder structure is important to make sure team is all on the same page. communication is the key
    When modularizing code we remove repetition.
    The code is being reused by importing and exporting to different files
2.  When to use which folders like controllers and utils? (Deployment?), naming conventions?

    Util/Helper - Utility and helper are functions/folders where you can store help for the code. It stores helpful methods that assist your core program that help accomplish core task. EX. The dishwasher, it asssist in doing dishes but not necessary to wash dishes.
    Controller - Controls our functionality in our application, Passing around the controller instead of reinventing the wheel. Instead of all task being in API route the controller is how you access the functionallity so that the API routes dont have to run around and do everything. The controller eliminates repetition
    Models - Is just the structure in which your data is going to look like in object or JSON form.
    Global object, var, documents, fs libraty, os, there are a lot of global objects, they exist on your machine.
    Const is a variable that needs to be declared before being used. It needs to be defined prior to execution.

    Data /Fixture - Data folder is storing in a specific format and it depends on which format we use. When we are playing with data it can be stored as an array or objects eventually we can connect scripts/ hey we have information in there and this is where we will be getting our information on.
    API - it is where we place our routes to communicate our front ends or programs communicating with each other
    Views - nis just a folder where we hold our ejs files (this will change)
    Public - to keep static files, images of any kind, png, js,
    Route(s) - What routes are doing API and routes pretty much go together it just depends on where you are working.
    Routes are generally how you organize The area where you hold your API endpoints

    They will determine the preferred

3.  Conditional statements, logic?
    Scenario: Let's say if you need a program to perform a task when a condition is met.
    if statements allow you to run code _if_ a condition is met, but what if the condition hasn't been met? That code goes in the else statements or else if if you want to add other conditions if the first condition as not been met.
    if / else I like to think about it as left or right
    if is yes and else is no, but if could be no and else could be yes that just depend on how you configure your conditionals.
    Flowcharts are useful for mapping out the _flow_ logic of if and else statements and their conditions.

    Switch- Evaluates expressions in a parantheses
    Case- Is the code that's meant to run if the expression equals a certain value.
    Break- Exit the switch statement once a case condition is met.
    Default- Runs when no other case has been met (The else of switch statements)

4.  Syntax and how to search them ? MDN?
    It will be an issue until you are comfortable writing code. Alot of syntax just takes time and practice. Doing small problems will help you work with with your syntax. Foccus on fundamentals and build modularized things and it will become easier. Try to code as much as possible. If you dont know or rememeber how to use a specific syntax or task use google.
    If asking AI think about how you formulate the the question. When working with AI be as specific as possible, _please refer to class session and recording for more specific info_.

5.  Hoisting and overall placing certain items so that they exist when you use them ? making sure that certain things like variables and objects are being defined before use, the act of using functions or the word var to hoist, aka putting things at the top of the file.
    Ex. If the let num = 8 is placed under console log it will return an error
    let num = 8;
    const add(n) => {
    let totalnum = n + num;
    return totalnum;
    }
    console.log(add(6));

6.  Order in which they go in ?
    You could create an order but adding an order to something defeats the purpose of knowing what the item does. The context matters. There is technically no order. You can build your websites from scratch and do it in whatever order you want. Best practice is to think about it need basis. Ask yourself, "do I need this?" Order the dependencies of your project based off of need.Think about knowing what tool is and do I need that tool. Make sure you test your code as you are making it, if not you will break your code.

    7. Implementing API ? ( connecting to different APIs, What is RESTful?)
       Represational
       State
       Transfer
       It is an architecture style that defines how systems should be interacted with.
       They are stateless- they dont need to worry about their state- for everything to run will be under request.
       Examples... google, facebook, they use RESTful API's.
       Is the pokemon API a restful API. Yes
       Implementing API's
       All API's are different, we can have API's that are not only RESTful but in different types ex. SOAP, RPC.
       API keys - Public and Private/ put them in .env

7.  Backend and, Frontend concepts ?
    2 ways to run JS front end back end
    front end the engine (browser) back end the terminal (node runtime envormnment)
    Node has access to modules such as fs, process, net
    Browser has access to modules such as window, history, document
    They can both do it all but one can do things the other cant do and vice-versa

8.  Parsing data from an array into an object ?
    How to know paths to get the values of items in objects with arrays in them.
    and from an object into an array? Nested Structures?
    Refer to parsing_data.js
    It comes down to knowing what that data looked likes. Test to see what the data is.

9.  async / await ? syntax, then etc. and when to use async functions?
    You may need to resolve a promise. You can use call backs to find asynchronis functions. To resolve an async call is to create an async function.
    Async function is for as to solve ansynchronis activities. If you dont resolve it correctly you will get a pending promise when you solve it you get the data. Dont dismay if you get back a pending promise it means you are hitting the endpoint, you are going in the right direction.
    Refer to asyn_await.js

10. Middleware ?
    Express middileware is a function that receives the request and response onjects of an HTTP request/response cycle. Basically something the data passes through and whatever the middleware has in it will dictate execution.
11. Brief MongoDB navigation how to.
    You will want to look at your projects.
    Whenever on the page it will default you to work on project.
    Once in project you can filter/serch for data.
    There are options like overview and metrics a lot of the options are performanced based and you wont have/need those until you have clients.
    If you are struggling with MongoDB gooey make projects and familiarize. There are a lot of buttons so try using them and exploring the platform.
    When creating cluster it will tell you how much space you have.

12. How do frameworks like React, Vue, or Angular improve front-end development? Where does it live in the res and req cycle?
    refer to package.jason
    whenever we start it it already comes with demo code, go ito app.js/src
    So remove all the junk you dont need in code template
    app.css- delete
    index.css - delete
    remove all things you dont need from template

13. Big O Notation - CS theoryBrief-general discussion on web hosting, and what are the different types (shared, VPS, cloud, dedicated)? (How do we choose between hosting providers like Vercel, Netlify, AWS, or DigitalOcean?)? Resources to learn from?
    We will come back to this question.

14. How to study outside of class (what to focus, any habits or routines that make self-study more effective)
    In all honesty you just need to code. The more you do it the better. Just watching it is not enough you may understand some concepts here and there yeah but there is a difference when you do it yourself.
    Have a study partners, do mock intervies, ask each other techinical questions.
    One thing I have heard a lot is in the morning before you start anything tackle a quesiton from leap code or a technical question.
    It gets you mind right for the diy
    Be curious, look things up, want to learn
    Be consistent make sure that you are not only working today but everyday. If you work once a week you will not be benefit in the long run, if you work on it daily you add on to the knowlege give yourself a minimum of 20-30 minutes a day. Actually code and read code, familiarize yourself.
    Hopefully that is enough
    ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    ::::::::::::::::::::::'''''````     ```````''::::::::::::::::::::::::::::
:::::::::::::::::'``                 .,,;;,     ```:::::::::::::::::::::::
::::::::::::::'`              .,;;!!''`'             ``'':::::::::::::::::
:::::::::::::'            ,;!!!!''       ,;!!!>           `'::::::::::::::
:::::::::::::         ..,;!!!'         ;!!!!''               `::::::::::::
::::::::::::'     ``!!!!!!'         ,;!!''                     `':::::::::
:::::::::::' d$c    `                       `::::::
:::::::::' d$??$$$$c   '     '                                       `::::
::::::::',d"    $$$$$c          .,,,,,,,,,,.                          `:::
:::::::',$"     ?$$$$$$ccc$$$$$$$$$$$$$$$$$$$$$$hc,                    `::
::::::: dC,z$r   "$$$$$$$$$$$$$$$$$$$??????$$$$$$$$$c,                  ::
::::::: $$$$P'   ,$$$$$$$$"$$$$$$P""       "$$$$$$$$$$r   ;!!!;;;;;;;,   :
::::::: $$P",d     $$$$$$"z$""         zc   $$$$$$$$$$$  !!!!!!!!!!!!!!  `
::::::' $$ c$$cc. d$$$$$$.""      .,.."$$$.,$$$$$$$$$$$  `!'  ````````'  `
:::::: d$'c$$P""$.`?$$$$$$$$cr ,d$$$$$,<$$$$$$$$$$$$$$$   !
::::: z$F $$"   $'. $$$$$$$$$ d$$$$$$$>`$$$$$$$$$$$$$""
:::',d$$L`$$    ",d $$$$$$$$L $$$$P" ' ;$$$$$$$$$$P"                     .
::: $$$$$c`?    c$$ $$$$$$$$$ $$$P     $$$$$$$$$$$                       :
::',$$$$$$$c ,cc $F,$$$$$$$$$r`$$>    z$$$$$$$$$$F                      .:
:: d$$$$$$$$ $$$$$$$$$$$$$$$$$.'??- ,d$$$$$$$$$$$L                      ::
:: $$$$$$$$$.`""?$$$$$$$$$$$$$$$ccd$$$$$$$$$$$$$$$c,                   :::
:';$$$$$$$$$$L  ,$$$$$$$$F`$$$$$$$$$$$$$$$$$$$$$$$$>                  ::::
: d$$$$$$$$$$$cc$$$$$$$$$$ ?$$$$$$$$$$$$$$$$$$$$$$"                 .:::::
: $$$$$$$$$$$$$$$$$$$$$$$$L`?$$$$$$$$$$$$$$$$$$$P'       .zc$$$hc  :::::::
: $$$$$$$$F"$$$$$$$$$$$$P"". ?$$$$$$$$$$$$$$$$$$$hc,   .z$$$$$$$$h :::::::
 .$$$$$$$$h.`"?????"".,ccd$$h."$$$$$$$$$$$$$$$$$$$$$hcc$$$P"","$$$ :::::::
 <$$$$$$$$$$$$cc -c$$$$$$$$$$$r`$$$$$$$$$$$$$$$$$$$$$$$P".zd$F $$P :::::::
 d$$$$$$$$$$$$$$h ?$$$$$$$$??"  `$$$$$$$$$$$$$$$$$$$$$$h ?$$$ d$P .:::::::
 $$$$$$$$$$$$$$$$h. `""""        $$$$$$$$$$$$$$$$$$$$$$$F $$$$$P :::::::::
,$$$$$$$$$$$$$$$$$$c             $$$$$$$$$$$$$$$$$$$$"?" z$$$$" .:::::::::
<$$$$$$$$$$$$$$$$$$$c          ,d$$$$$$$$$$$$$$$??$$$c,c$$$$$' :::::::::::
`$$$$$$$$$$$$$$$$$$$$hc,,.,,,zd$$$$$$$$$$$$$$$$$F $$$$$$$$$F .::::::::::::
 $$$$$$$$$$$$$$$$$$$$$"$$$$$$P"$$$$$$$$$$$$$$$$$> `????""" .::::::::::::::
.'$$$$$$$$$$$$$$$$$$$$cc;,"",;c$$$$$$$$$$$$$$$$P  :::..:::::::::::::::::::
: `$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"  .::::::::::::::::::::::::
::  "?$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$P"",= ::::::::::::::::::::::::::
:::.  `"?$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$P"".zd" :::::::::::::::::::::::::::
::::::    `"?$$$$$$$$$$$$$$$$$$$$$??"" ,cd$$' ::::::::::::::::::::::::::::
:::''         """?????????????"""   .zc$$$$' :::::::::::::::::::::::::::::
`.xnM c,                         ,cd$$$$$$F ::::::::::::::::::::::::::::::
MMMMM $$$$$cc,.           .,,cd$$$$$$$$$$P  ::::::::::::::::::::::::::::::
MMMMP,$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$??""   `'``.zc,`:::::::::::::::::::::
MMMM d$$$$$$$$$$$$$$$$$$$$$$$$$??""..r zd$$h. d$$$$$h `:::::::::::::::::::
MMMM $$$$$$$$$$$$$$$$$$$$$$P".,r-"""" d$$$$$$c`$$$$$$$c`::::::::::'''````
    MMMP $$$$$$$$$$$$$$$$$??".,ndP ,c$$$c ?$$$$$$$c`$$$$$$$.`::::::'`.zc$$$$$c
MMM z$$$$$$$$$$$$??"".nmMMMM",$$$$$$$h $$$$$$$$."$$$$$$$ `::' ,c$$$$$$$$$$
MM>,$$$$$$$$??"".xnMMM"".,..."$$$$$$$$.<$$$$$$$$ ?$$$$$$h `,c$$$$$$$$$$$F
MM d$$$$$P".,nMMMMMMMP d$$$$$ ?$$$$$$$h $$$$$$$$L $$$$$$$c`$$$$$$$$$$??".:
P z$$P"_.nMMMPMMMMMMM d$$$$$$L $$$$$$$$c ?$$$$$$$.?$$$$$$$c`$$$$$P""...:::
 -"".nMMMMMMM `MMMMMP $"?$$$$$."$$$$$$$$h $$$$$$$h ?$$$$$$$.`$P"" .:::::::
    .ndMMMMMMMMMM' `MMMM`<$ "$$$$$h ?$$$$$$$$.`$$$$$$$c ?$$$$$$$." ,;,`:::::::
MMMMMMMMP"",;;<;`MMM,<$$ $$$$$$c $$$$$$$$$ "$$$$$$$hd$$$$$$$$c !!!> `:::::
MMMPP" ,; "Mmn ,$$$$$$$$c$$$$$$$$$$$$$$$$$$$$$"d$$$P'.!!!!!!!; ::
;!!!!!!!!!!!!!!!!!!;`T" d$$$$$$$$$$$$$$$$$$$$$$F<$$$$F z$$P",;!!!!!!!!!> `
!!!!!!!!!!!!!!!!!!!!!; d$$$$$$$$$$$$P $$$$$$??",$$$$hc$P" ;!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!! z$$$$$$$$$$CL.,c$$$$$$$c$$$$$$$$" ;!!!!!!!!!!!!!!!!>
!!!!!!!!!!!!!!!!!!!!`<$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" ;!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!! $$$$$$$$$$$$$$$$$$$$$$$$$$$$P" ;!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!! z$$$$$$$$$$$$$$$$$$$$$$$$$$$" ;!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!',$$$$$$$$$$$$$$$$$$$$$$$$$P" ;!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!! $$$$$$$$$$$$$$$$$$$$$$$$$" ;!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!! $$$$$$$$$$$$$$$$$$$$$$$$F

                                 ...,?77??!~~~~!???77?<~....
                            ..?7`                           `7!..
                        .,=`          ..~7^`   I                  ?1.
           ........  ..^            ?`  ..?7!1 .               ...??7
          .        .7`        .,777.. .I.    . .!          .,7!
          ..     .?         .^      .l   ?i. . .`       .,^
           b    .!        .= .?7???7~.     .>r .      .=
           .,.?4         , .^         1        `     4...
            J   ^         ,            5       `         ?<.
           .%.7;         .`     .,     .;                   .=.
           .+^ .,       .%      MML     F       .,             ?,
            P   ,,      J      .MMN     F        6               4.
            l    d,    ,       .MMM!   .t        ..               ,,
            ,    JMa..`         MMM`   .         .!                .;
             r   .M#            .M#   .%  .      .~                 .,
           dMMMNJ..!                 .P7!  .>    .         .         ,,
           .WMMMMMm  ?^..       ..,?! ..    ..   ,  Z7`        `?^..  ,,
              ?THB3       ?77?!        .Yr  .   .!   ?,              ?^C
                ?,                   .,^.` .%  .^      5.
                  7,          .....?7     .^  ,`        ?.
                    `<.                 .= .`'           1
                    ....dn... ... ...,7..J=!7,           .,
                 ..=     G.,7  ..,o..  .?    J.           F
               .J.  .^ ,,,t  ,^        ?^.  .^  `?~.      F
              r %J. $    5r J             ,r.1      .=.  .%
              r .77=?4.    ``,     l ., 1  .. <.       4.,
              .$..    .X..   .n..  ., J. r .`  J.       `'
            .?`  .5        `` .%   .% .' L.'    t
            ,. ..1JL          .,   J .$.?`      .
                    1.          .=` ` .J7??7<.. .;
                     JS..    ..^      L        7.:
                       `> ..       J.  4.
                        +   r `t   r ~=..G.
                        =   $  ,.  J
                        2   r   t  .;
                  .,7!  r   t`7~..  j..
                  j   7~L...$=.?7r   r ;?1.
                   8.      .=    j ..,^   ..
                  r        G              .
                .,7,        j,           .>=.
             .J??,  `T....... %             ..
          ..^     <.  ~.    ,.             .D
        .?`        1   L     .7.........?Ti..l

,`           L  .    .%    .`! `j, 
 .^             .  ..   .` .^ .?7!?7+. 1
.`              .  .`..`7.  .^  ,` .i.;
.7<..........~<<3?7!`  4. r` G%
J.` .!           % 
                            JiJ           .`
.1. J
?1. .'  
 7<..%
