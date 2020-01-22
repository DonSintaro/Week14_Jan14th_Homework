function render(uniqueBurgerName) {return `

<div class="input-group mb-3">
          <input type="text" class="form-control burgerName" placeholder=${uniqueBurgerName} aria-label="Recipient's username" aria-describedby="button-addon2" readonly>
        </div>
`      
}

exports.render = render;