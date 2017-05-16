function field_focus(field, ID)
  {
    if(field.value == ID)
    {
      field.value = '';
    }
  }

  function field_blur(field, ID)
  {
    if(field.value == '')
    {
      field.value = ID;
    }
  }


function popup() 
{
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
