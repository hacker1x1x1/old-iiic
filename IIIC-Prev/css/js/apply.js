$('button#recruit-btn.recruit.btn.btn-primary').on('click', () => {
    console.log("Clicked");
    $('#apply-form').empty();

    let htmlString = `<center><h2 style="margin-bottom: 5%;">RECRUIT</h2></center>
    <form class="form-style-3 row">
        <div class="form-group col-md-6">
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
            <textarea name="contact-message" placeholder="Your Idea" class="form-control" id="textarea_message" rows="4"></textarea>
        </div>
        <div class="form-group col-md-12">
            <textarea name="skills-required" placeholder="Skills Required" class="form-control" id="textarea_skills" rows="2"></textarea>
        </div>
        <div class="col-md-12">
            <button id="btn_submit" type="submit" title="Contact Us">Submit</button>
        </div>
        <div id="alert-msg" class="alert-msg"></div>
    </form>`

    $('#apply-form').html(htmlString);
})

$('button#be-recruited.recruit.btn.btn-primary').on('click', () => {
    console.log("Clicked");
    $('#apply-form').empty();

    let htmlString = `<center><h2 style="margin-bottom: 5%;">BE RECRUITED</h2></center>
    <form class="form-style-3 row">
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
            <button id="btn_submit" type="submit" title="Contact Us">Submit</button>
        </div>
        <div id="alert-msg" class="alert-msg"></div>
    </form>`

    $('#apply-form').html(htmlString);
})