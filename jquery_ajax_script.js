$(() => {
    let list = $('#people')
    let page = 1

    if (page <= 2) {

    }

    $('#fetch').click(() => {
        $.get('https://reqres.in/api/users?page=' + page, (data) => {
            page++
            for (let p of data.data) {
                let avatar = '<img src="' + p.avatar + '" width="100">'
                list.append(
                    $('<li>' + avatar + p.first_name + ' ' + p.last_name + '</li>')
                )
            }
        })
    })
})