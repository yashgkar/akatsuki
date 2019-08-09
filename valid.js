function validate()
{
    var confname = document.form.name.value;
    var confemail = document.form.email.value;
    var req_mail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
    if (confname==""||confname==null)
    {
        alert("\nName can't be empty !!!");
        return false;
    }
    if(confemail==""||confemail==null)
    {
        alert("\nEnter e-mail !!!");
        return false;
    }
    else if(!req_mail.test(confemail))
    {
        alert("Invalid Mail");
        return false;
    }
}