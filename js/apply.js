$('button#recruit-btn.recruit.btn.btn-primary').on('click', () => {
    console.log("Clicked");
    $('#apply-form').empty();

    let htmlString = `<center><h2 style="margin-bottom: 5%;">RECRUIT</h2></center>
    <form class="form-style-3 row">
        <div class="form-group col-md-6" action="apply.php" method="post" enctype="multipart/form-data">
            <input type="text" name="contact-name" placeholder="Name"  class="form-control" id="input_name" required="">
        </div>
        <div class="form-group col-md-6">
            <input type="text" name="company-name" placeholder="Company Name"  class="form-control" id="input_name">
        </div>
        <div class="form-group col-md-6">
            <input type="number" name="contact-number" placeholder="Phone No"  class="form-control" id="input_name" required="">
        </div>
        <div class="form-group col-md-6">
            <input type="email" name="contact-email" placeholder="Email" class="form-control" id="input_email" required="">
        </div>
        <div class="form-group col-md-12">
            <textarea name="idea" placeholder="Your Idea" class="form-control" id="textarea_message" rows="4"></textarea>
        </div>
        <div class="form-group col-md-12">
            <textarea name="skills-required" placeholder="Skills Required" class="form-control" id="textarea_skills" rows="2"></textarea>
        </div>
        <div class="form-group col-md-6">
            <input type="hidden" name="MAX_FILE_SIZE" value="1000000" />
            Upload your idea file in pdf format: <input type="file" name="ideafile" placeholder="Upload your detailed idea" class="form-control" id="ideafile">
        </div>
        <div class="col-md-12">
            <input name="recruiterBtn" id="btn_submit_recruiter" type="submit" title="Contact Us"></input>
        </div>
        <div id="alert-msg" class="alert-msg"><?php echo $message; ?></div>
    </form>`

    $('#apply-form').html(htmlString);
})

$('button#be-recruited.recruit.btn.btn-primary').on('click', () => {
    console.log("Clicked");
    $('#apply-form').empty();

    let htmlString = `<center><h2 style="margin-bottom: 5%;">BE RECRUITED</h2></center>
    <form class="form-style-3 row" action="apply.php" method="post" enctype="multipart/form-data">
        <div class="form-group col-md-6">
            <input type="text" name="contact-name" placeholder="Name"  class="form-control" id="input_name" required="">
        </div>
        <div class="form-group col-md-6">
            <input type="number" name="contact-number" placeholder="Phone No"  class="form-control" id="input_name" required="">
        </div>
        <div class="form-group col-md-12">
            <input type="email" name="contact-email" placeholder="Email" class="form-control" id="input_email" required="">
        </div>
        <div class="form-group col-md-12">
            <textarea name="skills-known" placeholder="Skills Known" class="form-control" id="textarea_skills" rows="2"></textarea>
        </div>
        <div class="form-group col-md-12">
            <input type="url" name="resume" placeholder="Link to your Resume"  class="form-control" id="input_resume_link" required="">
        </div>
        <div class="col-md-12">
            <input name="recruitedBtn" id="btn_submit_recruited" type="submit" title="Contact Us"></input>
        </div>
        <div id="alert-msg" class="alert-msg"><?php echo $message; ?></div>
    </form>`

    $('#apply-form').html(htmlString);
})