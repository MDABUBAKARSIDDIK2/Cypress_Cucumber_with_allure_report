class locatorsPage{
   
    // signin
    signinbar = "//a[@class='logged-out-user-menu-btn btn btn-secondary']"
    email = "//input[(@id='j_username')]"
    password = "//input[@name='j_password']"
    signin= "(//button[@class='btn btn-block'])[1]"
    book = "(//a[@href='/book?ref=nm'])[1]"
   ////////////signin with invalis password
   Wrong_email_phone_or_password = '//p[normalize-space()="Wrong email/phone or password"]'
   signinpage = '//a[@class="logged-out-user-menu-btn btn btn-secondary]'

/////////Change my Account information

    profileicon  = "(//span[@class='user-name'])[1]"
    myaccount  = "(//a[normalize-space()='My Account'])[1]"
    changeprofilepicture = "(//span[@id='js--edit-image'])[1]"
    choosefile = "//input[@id='photo']"
    save = '//input[@id="imageInfo"]'

////////fictionbook read
    viewall = '//a[@id="js--btn-view-all-fiction"]'




////search item any

    search = "//input[@id='js--search']"
    alorjholok = '//img[@alt="Alor Jholok"]'
 /////mouse
    mouse  = "//img[@alt='Mouse']"
    wired_mouse = '(//div[@class="book-text-area"])[1]'


/////sign out
    signout = '//a[normalize-space()="Sign Out"]'




}
export default locatorsPage;
