const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);
    const inputWrapper = document.querySelector('.input-wrapper'),
        catchInputs = inputWrapper.querySelectorAll('input');

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e){
            if (e.key.match(/[^a-z 0-9]/ig)){
                e.preventDefault();
            }
        });
    });

    catchInputs.forEach(item => {
        item.autocomplete = "off";
    });
}

export default checkTextInputs;