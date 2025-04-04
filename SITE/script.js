document.getElementById('adicionarInfo').addEventListener('click', function(){document.getElementById
    ('novaInfoForm').style.display='block';
})

document.getElementById('salvarInfo').addEventListener('click', function() {
    let novaInfo = document.getElementById('novaInfo').value;
    if(novaInfo){
        let p = document.createElement('p');
        p.textContent = novaInfo;
        document.getElementById('perfil').appendChild(p);
        document.getElementById('novaInfoForm').style.display = 'none';
    }
  })

document.getElementById('removerInformacao').addEventListener('click', function() {
    let perfil = document.getElementById('perfil');
    let paragrafo = document.getElementsByTagName('p');

    if(paragrafo.length > 2){

        perfil.removeChild(paragrafo[paragrafo.length - 1])

    }

})

//BOTÕES MINHAS UC's

document.getElementById('adicionarInfoUCs').addEventListener('click', function(){document.getElementById
    ('novaInfoFormUCs').style.display='block';
})

document.getElementById('salvarInfoUCs').addEventListener('click', function() {
    let novaInfoUCs = document.getElementById('novaInfoUCs').value;
    if(novaInfoUCs){
        let p = document.createElement('p');
        p.textContent = novaInfoUCs;
        document.getElementById('ucs').appendChild(p);
        document.getElementById('novaInfoFormUCs').style.display = 'none';
    }
})

document.getElementById('removerInformacaoUCs').addEventListener('click', function() {
    let ucs = document.getElementById('ucs');
    let paragrafo = document.getElementsByTagName('p');

    if(paragrafo.length > 2){

        ucs.removeChild(paragrafo[paragrafo.length - 1])

    }

})

document.getElementById('validarCPF').addEventListener('click', function() {

    let campoCPF = campoCPF.value.length

    if(campoCPF == 3 || campoCPF ==7){
        campoCPF.value += "."
    } else if (campoCPF == 11){
        campoCPF.value += "-"
    }

})