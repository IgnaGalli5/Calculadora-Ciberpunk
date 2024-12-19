document.addEventListener('DOMContentLoaded', () => {
    const pantalla = document.querySelector('.pantalla');
    const botones = document.querySelector('.botones');
    let valorActual = '0';
    let parentesisAbiertos = 0;

    const frasesBurlonas = {
        simple: [
            "¡Wow, eres un genio! Sumando dos números como un profesional.",
            "¿Te costó mucho sumar eso? Seguro usaste una calculadora para estar seguro.",
            "¡Felicidades! Acabas de resolver algo que un niño de primer grado haría en segundos.",
            "No sé cómo lo lograste, pero aquí está tu respuesta. Bravo.",
            "Con habilidades matemáticas así, estás listo para sumar el cambio en el súper.",
            "Impresionante, pero creo que mi tostadora podría hacer eso más rápido.",
            "¡Increíble! ¿Sacarías la raíz cuadrada de tu IQ ahora o seguimos con sumas de kinder?",
            "¡Bravo! Sumaste dos números. Espero que no hayas sudado mucho.",
            "¡Guau! Eres básicamente la calculadora humana que nadie pidió.",
            "Esto es tan emocionante como ver una mosca caminar por la pared. Sigue así, campeón.",
            "¡Ahí está! El próximo genio de la suma básica, listo para salvar el universo.",
            "¿Esto es lo que haces en tu tiempo libre? Sumar. Me siento honrada de ser parte de esto… creo."
        ],
        intermedio: [
            "¡Ahí vamos! Multiplicar ya es todo un desafío, ¿eh?",
            "Esto ya parece cálculo avanzado... de tercer grado.",
            "¡Wow! Dividiendo como si fueras Einstein en sus ratos libres.",
            "¡Bravo! No pensé que llegarías tan lejos, pero aquí estamos.",
            "Multiplicar no es para cualquiera. Menos mal tienes esta calculadora.",
            "¡Te felicito! Otro logro desbloqueado en el mundo de las matemáticas básicas.",
            "¡Oh, multiplicación! ¡Cuidado, alguien está intentando sobresalir aquí!",
            "¡Wow! Dividiste como un adulto funcional. Me siento tan orgullosa de ti… o algo así.",
            "Multiplicaste dos números. ¿Y ahora qué? ¿Resolver el hambre mundial?",
            "Esto es impresionante… para alguien con la capacidad cognitiva de un ladrillo.",
            "División. Claro, porque sumar ya no es suficiente para alimentar tu ego matemático.",
            "¡Vaya! Una operación decente. Es como ver a un gato usar el baño: raro, pero entretenido."
        ],
        avanzado: [
            "¡Detengan las rotativas! Este cálculo casi hace que mi procesador explote.",
            "Ahora sí que estamos hablando, aunque esto sigue siendo pan comido para mí.",
            "¿Resolver esto te llevó tiempo? Tranquilo, no todos nacen con mi velocidad.",
            "¡Te pasaste! Esto ya parece un problema del examen de admisión a la NASA.",
            "Vaya, vaya, alguien está jugando con fuego haciendo cálculos combinados.",
            "¡Increíble! Esto sí merece un aplauso… o no.",
            "¡Detengan todo! Alguien está haciendo cálculos avanzados como si fuera el fin del mundo.",
            "¿En serio? Este cálculo fue tan complicado que casi me pones a pensar. Casi.",
            "¡Vaya! Alguien está jugando a ser el nuevo Einstein, pero con más sarcasmo y menos logros.",
            "¿Estás resolviendo un cálculo o tratando de impresionar a alguien? Porque, spoiler, no funciona.",
            "Esto es tan útil como un paraguas en un huracán, pero aquí está tu respuesta.",
            "Felicidades. Este cálculo debería ir directo a tu currículum. Seguro abrirá puertas… a ningún lado."
        ],
        general: [
            "Wow, resolviste eso. Seguro ahora el mundo es un lugar mejor, ¿no?",
            "¿Sabías que con ese cálculo acabas de ahorrar 0 segundos de tu vida? ¡Impresionante!",
            "Esto me hace cuestionar mis prioridades. ¿Por qué estoy ayudándote con esto, de nuevo?",
            "Espero que este cálculo te dé la validación que necesitas. Todos la buscamos, ¿no?",
            "Guarda este momento en tu diario, porque hoy hiciste algo que nadie recordará.",
            "Mira, no quiero exagerar, pero este cálculo podría revolucionar… absolutamente nada.",
            "¿Sabías que también puedo sumar en binario? Pero te dejé el trabajo fácil.",
            "Esto es demasiado emocionante… para un lunes por la mañana.",
            "¡Cuidado! A este ritmo, podrías convertirte en el próximo Pitágoras.",
            "Esto es tan impresionante como ver secar pintura. Pero aquí tienes tu respuesta.",
            "Calculadora en mano, mundo conquistado. O eso parece.",
            "¡Uf! Eso estuvo difícil… para alguien sin cerebro. Pero aquí estamos."
        ]
    };

    // Función para mostrar mensajes burlescos
    function mostrarMensaje(tipo) {
        const mensajeElement = document.createElement('div');
        mensajeElement.classList.add('mensaje-burlesco');
        
        let frasesSeleccionadas;
        if (Math.random() < 0.2) { // 20% de probabilidad de usar una frase general
            frasesSeleccionadas = frasesBurlonas.general;
        } else {
            frasesSeleccionadas = frasesBurlonas[tipo];
        }
        
        const mensaje = frasesSeleccionadas[Math.floor(Math.random() * frasesSeleccionadas.length)];
        
        mensajeElement.textContent = mensaje;
        document.body.appendChild(mensajeElement);
        
        // Posicionar el mensaje aleatoriamente a la izquierda o derecha
        mensajeElement.style.left = Math.random() < 0.5 ? '10px' : 'auto';
        mensajeElement.style.right = mensajeElement.style.left === 'auto' ? '10px' : 'auto';
        
        setTimeout(() => {
            mensajeElement.remove();
        }, 4000);
    }

    function manejarInput(valor) {
        if (!isNaN(valor) || valor === '.') {
            if (valorActual === '0' && valor !== '.') {
                valorActual = valor;
            } else {
                valorActual += valor;
            }
        } else {
            switch (valor) {
                case 'limpiar':
                    valorActual = '0';
                    parentesisAbiertos = 0;
                    break;
                case 'borrar':
                    if (valorActual.length > 1) {
                        valorActual = valorActual.slice(0, -1);
                    } else {
                        valorActual = '0';
                    }
                    break;
                case 'parentesis':
                    if (parentesisAbiertos > 0 && valorActual.slice(-1) !== '(') {
                        valorActual += ')';
                        parentesisAbiertos--;
                    } else {
                        valorActual += '(';
                        parentesisAbiertos++;
                    }
                    break;
                case 'porcentaje':
                    valorActual += '%';
                    break;
                case 'dividir':
                    valorActual += '/';
                    break;
                case 'multiplicar':
                    valorActual += '*';
                    break;
                case 'restar':
                    valorActual += '-';
                    break;
                case 'sumar':
                    valorActual += '+';
                    break;
                case 'igual':
                    try {
                        valorActual = math.evaluate(valorActual).toString();
                        mostrarMensaje(valorActual.includes('sin') || valorActual.includes('cos') || valorActual.includes('tan') ? 'avanzado' : 'intermedio');
                    } catch (error) {
                        valorActual = 'Error';
                    }
                    break;
                case 'sin':
                case 'cos':
                case 'tan':
                case 'log':
                case 'ln':
                case 'exp':
                    valorActual += `${valor}(`;
                    parentesisAbiertos++;
                    break;
                case 'raiz':
                    valorActual += 'sqrt(';
                    parentesisAbiertos++;
                    break;
                case 'potencia':
                    valorActual += '^';
                    break;
                case 'factorial':
                    valorActual += '!';
                    break;
                case 'pi':
                    valorActual += 'pi';
                    break;
                case 'e':
                    valorActual += 'e';
                    break;
            }
        }
        pantalla.textContent = valorActual;
    }

    botones.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            const boton = e.target;
            const accion = boton.dataset.accion;
            manejarInput(accion || boton.textContent);
        }
    });

    document.addEventListener('keydown', (e) => {
        const tecla = e.key;
        if (/^[0-9.]$/.test(tecla) || '+-*/()^'.includes(tecla)) {
            e.preventDefault();
            manejarInput(tecla);
        } else if (tecla === 'Enter') {
            e.preventDefault();
            manejarInput('igual');
        } else if (tecla === 'Backspace') {
            e.preventDefault();
            manejarInput('borrar');
        } else if (tecla === 'Escape') {
            e.preventDefault();
            manejarInput('limpiar');
        }
    });
});

