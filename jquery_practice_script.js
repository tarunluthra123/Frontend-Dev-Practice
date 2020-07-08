$(() => {
    $('div').text('This is the new div text that is modified')
    $('div.item').html('<b>Item text</b>')
    $('#one').html('<b><i>One</i></b>')

    let ob = $('#one')
    ob.attr('height', '2000')
    ob.css('color', 'blue')

    $('#four').attr('style', 'color:red').text('Four').html('<b>Four</b>').css('font-size', '20pt')


    let inputbox = $('#inputbox')
    let list = $('#list')

    $('#prepend').click(() => {
        console.log('In the prepend click function');
        let text = inputbox.val()
        list.prepend($('<li>' + text + '</li>'))
        inputbox.val("")
    })

    $('#append').click(() => {
        console.log('In the append click function');
        let text = inputbox.val()
        list.append($('<li>' + text + '</li>'))
        inputbox.val("")
    })
})
