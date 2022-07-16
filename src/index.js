const init = () => {
  


    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const input = e.target.children[1].value
        // console.log(input)

        fetch(`http://localhost:3000/movies/${input}`)
        .then(res => res.json())
        .then(movies => {
            const title = document.querySelector('#movieDetails').children[0]
            const summary = document.querySelector('#movieDetails').children[1]

            
            title.innerText = movies.title
            summary.innerText = movies.summary

            // const summary
        })

        

    })






}

document.addEventListener('DOMContentLoaded', init);