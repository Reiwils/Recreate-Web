const form = document.getElementById('form');
const username = document.getElementById('username');
const fullNAME = document.getElementById('full-name');
const email = document.getElementById('email');
const alamat = document.getElementById('alamat');
const password = document.getElementById('password');
const rpassword = document.getElementById('rpassword');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs(){
    const usernamevalue = username.value.trim();
    const fullNAMEvalue = fullNAME.value.trim();
    const alamatvalue = alamat.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const rpasswordvalue = rpassword.value.trim();
    var vemail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // VALIDASI USERNAME  
    if(usernamevalue === ''){
        setErrorFor(username,'Username Harus DiIsi')
    }else if(usernamevalue.length  > 12){
        setErrorFor(username,'Username Harus Kurang Dari 12 Huruf');
    }else if(usernamevalue.length < 8){
        setErrorFor(username,'Username Harus Lebih Dari 8 Huruf');
    }else{
        setSuccessFor(username,'Username DiTerima');
    }

    // VALIDASI FULL NAME
    if( fullNAMEvalue=== ''){
        setErrorFor(fullNAME,'Nama Lengkap Harus DiIsi')
    }else if(fullNAMEvalue.length  <= 2){
        setErrorFor(fullNAME,'Nama Lengkap minimal 1 kata');
    }else{
        setSuccessFor(fullNAME,'Nama Lengkap DiTerima');
    }

    // VALIDASI ALAMAT
    if( alamatvalue=== ''){
        setErrorFor(alamat,'Alamat Harus DiIsi')
    }else{
        setSuccessFor(alamat,'Alamat DiTerima');
    }

    // VALIDASI EMAIL
    if( emailvalue=== ''){
        setErrorFor(email,'Email Harus DiIsi');
    }else if(!emailvalue.match(vemail)){
        setErrorFor(email,'Email Tidak Valid');
    }else{
        setSuccessFor(email,'Email DiTerima');
    }

    // VALIDASI EMAIL
    if(passwordvalue === '') {
		setErrorFor(password, 'Password Tidak Boleh kosong');
	}else{
		setSuccessFor(password,'Password DiTerima');
	}

    // Validasi Cek Password
    if(rpasswordvalue === '') {
		setErrorFor(rpassword, 'password Tidak Boleh Kosong');
	} else if(passwordvalue !== rpasswordvalue) {
		setErrorFor(rpassword, 'password Tidak Sama');
	} else{
		setSuccessFor(rpassword,'Password Berahasil Di Input');
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'conten-form error';
	small.innerText = message;
}

function setSuccessFor(input,message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'conten-form success';
	small.innerText = message;
}



