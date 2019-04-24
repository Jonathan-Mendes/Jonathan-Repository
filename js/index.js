var jogador = 1
var g1 = 0
var g2 = 0
var g3 = 0
var g4 = 0
var g5 = 0
var g6 = 0
var g7 = 0
var g8 = 0
var j1 = 0
var j2 = 0
var j3 = 0
var j4 = 0
var j5 = 0
var j6 = 0
var j7 = 0
var j8 = 0



start()

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
		if(imgA1){
			trocaImg(imgA1)
			imgA1 = false
			validar('a1')
		}
	}
	imgA2.onclick = function(){
		if(imgA2){
			trocaImg(imgA2)
			imgA2 = false
			validar('a2')
		}
	}
	imgA3.onclick = function(){
		if(imgA3){
			trocaImg(imgA3)
			imgA3 = false
			validar('a3')
		}
	}
	imgB1.onclick = function(){
		if(imgB1){
			trocaImg(imgB1)
			imgB1 = false
			validar('b1')
		}
	}
	imgB2.onclick = function(){
		if(imgB2){
			trocaImg(imgB2)
			imgB2 = false
			validar('b2')
		}
	}
	imgB3.onclick = function(){
		if(imgB3){
			trocaImg(imgB3)
			imgB3 = false
			validar('b3')
		}
	}
	imgC1.onclick = function(){
		if(imgC1){
			trocaImg(imgC1)
			imgC1 = false
			validar('c1')
		}
	}
	imgC2.onclick = function(){
		if(imgC2){
			trocaImg(imgC2)
			imgC2 = false
			validar('c2')
		}
	}
	imgC3.onclick = function(){
		if(imgC3){
			trocaImg(imgC3)
			imgC3 = false
			validar('c3')
		}
	}
}

function trocaImg(img){
	img.src = endereco()
	trocaPlayer()
}

function trocaPlayer(){
	if(jogador === 1){
		jogador = 2
	}else if(jogador === 2){
		jogador = 1
	}
}

function endereco(end){
	if(jogador === 1){
		// console.log("jogador1")
		return "img/x.jpg"
	}else if(jogador === 2){
		// console.log("jogador2")
		return "img/o.jpg"
	}
}

function validar(v){
	
	if(v === 'a1'){
		
		if(jogador === 1){
			g1++
			g4++
			g7++
			if(g1 === 3 || g4 === 3 || g7 === 3){
				player2Win()
			}
		}else{
			j1++
			j4++
			j7++
			if(j1 === 3 || j4 === 3 || j7 === 3){
				player1Win()
			}
		}	
	}else if(v === 'a2'){
		
		if(jogador === 1){
			g1++
			g5++
			if(g1 === 3 || g5 ===  3){
				player2Win()
			}
		}else{
			j1++
			j5++
			if(j1 === 3 || j5 === 3){
				player1Win()
			}
		}
	}else if(v === 'a3'){
		if(jogador === 1){
			g1++
			g6++
			g8++
			if(g1 === 3 || g6 ===  3 || g8 === 3){
				player2Win()
			}
		}else{
				j1++
				j6++
				j8++
				if(j1 === 3 || j6 === 3 || j8 === 3){
					player1Win()
				}
			}
	}else if(v === 'b1'){
		if(jogador === 1){
			g2++
			g4++
			if(g2 === 3 || g4 ===  3){
				player2Win()
			}
		}else{
			j2++
			j4++
			if(j2 === 3 || j4 === 3){
				player1Win()
			}
		}
	}else if(v === 'b2'){
		if(jogador === 1){
			g2++
			g5++
			g7++
			g8++
			if(g2 === 3 || g5 ===  3 || g7 === 3 || g8 === 3){
				player2Win()
			}
		}else{
			j2++
			j5++
			j7++
			j8++
			if(j2 === 3 || j5 === 3 || j7 === 3 || j8 === 3){
				player1Win()
			}	
		}
	}else if(v === 'b3'){
		if(jogador === 1){
			g2++
			g6++
			if(g2 === 3 || g6 ===  3){
				player2Win()
			}
		}else{
			j2++
			j6++
			if(j2 === 3 || j6 === 3){
				player1Win()
			}
			}
	}else if(v === 'c1'){
		if(jogador === 1){
			g3++
			g4++
			g8++
			if(g3 === 3 || g4 ===  3 || g8 === 3){
				player2Win()
			}
		}else{
			j3++
			j4++
			j8++
			if(j3 === 3 || j4 === 3 || j8 === 3){
				player1Win()
				}
			}
	}else if(v === 'c2'){
		if(jogador === 1){
			g3++
			g5++
			if(g3 === 3 || g5 ===  3){
				player2Win()
			}
		}else{
			j3++
			j5++
			if(j3 === 3 || j5 === 3){
				player1Win()
			}
		}
	}
	else if(v === 'c3'){
		if(jogador === 1){
			g3++
			g6++
			g7++
			if(g3 === 3 || g6 ===  3 || g7 === 3){
				player2Win()
			}
		}else{
			j3++
			j6++
			j7++
			if(j3 === 3 || j6 === 3 || j7 === 3){
				player1Win()
			}
		}
	}
}
function player2Win(){
	console.log("player 2 ganhou")
}

function player1Win(){
	console.log("Player 1 ganhou")
}
