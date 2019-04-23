var jogador =1

initialize()
start()

function initialize(){
	// jogador = 1
	start()
}

function start(){
	play(jogador)
}

function play(player){

	var imgA1 = document.getElementById('a1')
	var imgA2 = document.getElementById('a2')
	var imgA3 = document.getElementById('a3')
	var imgB1 = document.getElementById('b1')
	var imgB2 = document.getElementById('b2')
	var imgB3 = document.getElementById('b3')
	var imgC1 = document.getElementById('c1')
	var imgC2 = document.getElementById('c2')
	var imgC3 = document.getElementById('c3')
	
	imgA1.onclick = function(){
		imgA1.src = endereco()
		trocaPlayer() 
	}
	imgA2.onclick = function(){
		imgA2.src = endereco()
		trocaPlayer() 
	}
	imgA3.onclick = function(){
		imgA3.src = endereco()
		trocaPlayer() 
	}
	imgB1.onclick = function(){
		imgB1.src = endereco()
		trocaPlayer() 
	}
	imgB2.onclick = function(){
		imgB2.src = endereco()
		trocaPlayer() 
	}
	imgB3.onclick = function(){
		imgB3.src = endereco()
		trocaPlayer() 
	}
	imgC1.onclick = function(){
		imgC1.src = endereco()
		trocaPlayer() 
	}
	imgC2.onclick = function(){
		imgC2.src = endereco()
		trocaPlayer() 
	}
	imgC3.onclick = function(){
		imgC3.src = endereco()
		trocaPlayer() 
	}

}

function trocaPlayer(){
	if(jogador === 1){
		jogador = 2
	}else if(jogador === 2){
		jogador = 1
	}
	console.log(jogador)
}

function endereco(end){
	if(jogador === 1){
		console.log("jogador1")
		return "img/x.jpg"
	}else if(jogador === 2){
		console.log("jogador2")
		return "img/o.jpg"
	}
}