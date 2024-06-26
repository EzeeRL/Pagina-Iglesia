import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cancionero.css";
import Footer from "../components/footer.jsx";

const Coros = () => {
  const coros = [
    {
      id: "1",
      titulo: "A Dios sea la gloria",
      letra:
        "A Dios sea la gloria, al mundo El dió\nAl Hijo Bendito, que por nos murió;\nExpió los pecados de quien en El cree,\nAbriónos la senda hacia Dios por la fe.\n\n¡Gloria a Dios!¡Gloria a Dios!\nQue de tal modo amó\nAl que lejos de El\nEn pecado se halló.\nVenid por el hijo al gran Dios Salvador,\nY dadle la gloria por tan grande amor.\n\nLa sangre de Cristo la obra efectuó,\nPara todo creyente perdón alcanzó;\nSi en Cristo confía el más vil pecador,\nPerdón en el acto le otorga el Señor.\n\nInmensa la obra de Cristo en la cruz,\nEnorme la culpa se ve por su luz:\nAl mundo El vino, nos iluminó,\nY por nuestras culpas el Justo murió.",
    },
    {
      id: "2",
      titulo: "A quien iré en necesidad?",
      letra:
        "¿A quién iré en necesidad?\r\n¿A quién iré en busca de paz?\r\nY ¿quién podrá mi vida saciar de verdad?\r\n¿Quién más tendrá de mi compasión,\r\ny entenderá mi corazón?\r\n¿Quién cambiará mi eternidad, \r\nsino Tu, Jesús?\r\n\r\nCristo, ¿a dónde más podría ir?\r\nCristo, ¿qué otro lugar puede existir?\r\nSólo Tu tienes palabras de amor,\r\ncamino al Padre y verdad eres Tu",
    },
    {
      id: "3",
      titulo: "A ti la gloria!",
      letra:
        "¡A ti la gloria, oh nuestro Señor! \r\nA ti la victoria, gran Libertador.\r\nTe alzaste pujante, lleno de poder, \r\nmás que el sol radiante al amanecer.\r\n\r\n¡A ti la gloria, oh nuestro Señor! \r\n¡A ti la victoria, gran Libertador!\r\n\r\nLibre de pena, nuestro Rey Jesús, \r\nrompe las cadenas de la esclavitud.\r\nQuien muera al pecado, en Dios vivirá, \r\nha resucitado, ya no morirá.\r\n\r\nGozo, alegría reinen por doquier, \r\nporque Cristo hoy día, muestra su poder.\r\nVanle aclamando como vencedor, \r\nángeles cantando himnos al Señor.",
    },
    {
      id: "4",
      titulo: "A Ti, el alfa y la omega, el principio y el fin",
      letra:
        "A Ti, el alfa y la omega, el principio y el fin,\r\ny el gran Yo Soy, me rindo.\r\nA Ti, el Todopoderoso, el que es y que será\r\ny el gran Yo Soy, me entrego.\r\n\r\n// Yo quiero que gobiernes mi vida, \r\nme doy en sacrificio a Ti.\r\nYo quiero que Tú ordenes mi caminar, \r\nque siempre viva en tu voluntad. //",
    },
    {
      id: "5",
      titulo: "A tus pies",
      letra:
        "A Tus pies, arde mi corazón\r\nA Tus pies, entrego lo que soy\r\nEse lugar de mi seguridad\r\nDonde nadie me puede señalar\r\n\r\nMe perdonaste\r\nMe acercaste a Tu presencia\r\nMe levantaste\r\nHoy me postro a adorarte\r\n\r\nNo hay lugar más alto, más grande\r\nQue estar a Tus pies, que estar a Tus pies\r\nNo hay lugar más alto, más grande\r\nQue estar a Tus pies, que estar a Tus pies\r\n\r\nA Tus pies, arde mi corazón\r\nA Tus pies, entrego lo que soy\r\nEse lugar de mi seguridad\r\nDonde nadie me puede señalar\r\n\r\nMe perdonaste\r\nMe acercaste a Tu presencia\r\nMe levantaste\r\nHoy me postro a adorarte\r\n\r\nNo hay lugar más alto, más grande\r\nQue estar a Tus pies, estar a Tus pies\r\nNo hay lugar más alto, más grande\r\nQue estar a Tus pies, estar a Tus pies\r\n\r\n/Y aquí permaneceré\r\nPostrado a Tus pies\r\nY aquí permaneceré\r\nA los pies de Cristo/\r\n\r\nNo hay lugar más alto, más grande\r\nQue estar a Tus pies, que estar a Tus pies\r\nNo hay lugar más alto, más grande\r\nQue estar a Tus pies, estar a Tus pies",
    },
    {
      id: "6",
      titulo: "Abre mis ojos, oh Cristo",
      letra:
        "Salmos 8: 1\r\n\r\nAbre mis ojos, oh Cristo.\r\nAbre mis ojos, Señor.\r\nYo quiero verte, yo quiero verte.\r\n\r\nAl contemplar tu majestad\r\nY el resplandor de tu gloria\r\nDerrama tu amor y poder\r\nMientras cantamos Santo Santo\r\n\r\nSanto, Santo, Santo (3 veces)\r\nYo quiero verte",
    },
    {
      id: "7",
      titulo: "Abre mis ojos, quiero ver a Cristo",
      letra:
        "Abre mis ojos, quiero ver a Cristo, \r\ny contemplarle, decirle: Te amo.\r\nAbre mi oído, ayúdame a oírle, \r\nabre mi corazón, para conocerle.",
    },
    {
      id: "8",
      titulo: "Adoramos por siempre al Creador",
      letra:
        "Adoramos por siempre al Creador, \r\na Ti Señor, alzamos hoy la voz.\r\nTu nombre Santo es, tu nombre Santo es.\r\n\r\nCuan santo eres Tú, Santa Trinidad, \r\nRey de reyes y el Señor.\r\nTu nombre es, tu nombre es, \r\ntu nombre Santo es.",
    },
    {
      id: "9",
      titulo: "Al Cordero de Dios sea la gloria",
      letra:
        "Al Cordero de Dios sea la gloria, \r\nal Cordero de Dios sea la honra,\r\npor su muerte en la cruz, \r\npor su sangre vertida por mí.\r\nGloria al Cordero de Dios.",
    },
    {
      id: "10",
      titulo: "Al Cordero que murió ",
      letra:
        "Al Cordero que murió \r\ny está sentado en majestad,\r\npor su grande redención \r\ny por su eterna dignidad.\r\nTodo el honor, fortaleza y gloria, \r\ntodo el poder y nuestro amor.\r\n\r\nEres el Señor, eres el Señor.\r\nEres el Señor, eres el Señor.",
    },
    {
      id: "11",
      titulo: "Al entrar a tu santo lugar",
      letra:
        "Al entrar a tu santo lugar,\r\nme asombra que me pueda acercar\r\npara ver tu gloria y tu belleza\r\ny adorarte en intimidad.\r\n\r\nEn confianza yo me puedo acercar,\r\nde tu mesa quiero participar,\r\ntodo lo que puedo hacer es postrarme\r\ny con mis labios proclamar.\r\n\r\nMi pan, mi luz, mi oración, eres tu Jesús. \r\nMi Dios, mi amor y mi canción, eres tu Jesús, sólo Tu.\r\n\r\n/Me cuidas, me abrazas, me cantas, me amas./",
    },
    {
      id: "12",
      titulo: "Al estar en la presencia de tu divinidad",
      letra:
        "Al estar en la presencia de tu divinidad,\r\nal contemplar la hermosura de tu santidad.\r\nMi espíritu se alegra en tu majestad. \r\nTe adoro a Ti, te adoro a Ti.\r\nCuando veo la grandeza de tu dulce amor,\r\ny compruebo la pureza de tu corazón.\r\nMi espíritu se alegra en tu majestad. \r\nTe adoro a Ti, te adoro a Ti.\r\n\r\nY al estar aquí delante de Ti te adoraré.\r\nPostrado ante Ti, mi corazón te adora oh Dios.\r\nY siempre quiero estar \r\npara adorarte y contemplar tu santidad. \r\nTe adoro a Ti Señor, te adoro a Ti.",
    },
    {
      id: "13",
      titulo: "Al Señor Jesús loemos ",
      letra:
        "Al Señor Jesús loemos \r\nPorque tanto le debemos,\r\nLo que somos y tenemos \r\nSólo es nuestro en Él.\r\n\r\nEs Jesús su nombre amado,\r\nA su pueblo El ha salvado;\r\nEs el triunfo asegurado\r\nPor su gran poder.\r\n\r\n¡Oh, confiad en este amigo!\r\nNos liberta del peligro,\r\nNos es hoy un fuerte abrigo\r\nY hasta el fin será.\r\n\r\nCumpliráse nuestro anhelo,\r\nEn el día en que sin velo\r\nLe veremos en el cielo-\r\nAl Señor Jesús.",
    },
    {
      id: "14",
      titulo: "Al único que es digno de recibir ",
      letra:
        "1ªTimoteo 1:17\r\n\r\nAl único que es digno de recibir \r\nhonra y gloria, fuerza y poder.\r\nAl Dios y Padre eternal, \r\ninvisible pero real, a Él hoy ministramos loor.\r\n\r\nTe coronamos Señor y Rey Jesús. \r\nTe coronamos Señor y Rey Jesús.\r\nAdoramos tu nombre, nos rendimos a tus pies,\r\nconsagramos todo nuestro ser a Ti.\r\nConsagramos todo nuestro ser a Ti.\r\nConsagramos todo nuestro ser a Ti.",
    },
    {
      id: "15",
      titulo: "Alabado sea tu nombre ",
      letra:
        "Alabado sea tu nombre \r\nporque Tú nos has marcado el camino,\r\nalabado sea tu nombre, \r\npor tu gracia hoy podemos amarte.\r\n\r\nTú nos diste vida, \r\ny no es cualquier vida,\r\nes eterna porque Tú eres eterno. \r\nAlabado sea tu nombre.",
    },
    {
      id: "16",
      titulo: "Alabanzas, alabanzas sean ",
      letra:
        "Alabanzas, alabanzas sean \r\nelevadas a nuestro Señor.\r\nAlabanzas, alabanzas sean \r\nelevadas a nuestro Señor.\r\nAlabanzas puras, alabanzas santas.\r\nAlabanzas, alabanzas sean \r\nelevadas a nuestro Señor.",
    },
    {
      id: "17",
      titulo: "Aleluya el Señor está aquí ",
      letra:
        "Aleluya el Señor está aquí \r\ny su presencia por siempre en nosotros está.\r\nAleluya el Señor está aquí \r\ny su presencia por siempre en nosotros está.\r\nAlabadle por su grandeza, \r\ndadle gloria por sus proezas,\r\npor su hermosura y santidad.",
    },
    {
      id: "18",
      titulo: "Aleluya, aleluya nuestro Dios Poderoso es Rey",
      letra:
        "Aleluya, aleluya nuestro Dios Poderoso es Rey.\r\nAleluya, aleluya.\r\n\r\nSanto Santo, eres Tu Dios Poderoso Rey.\r\nDigno eres Tú, Cordero de Dios, eres Santo.",
    },
    {
      id: "19",
      titulo: "Amado Jesucristo",
      letra:
        "Amado Jesucristo,\nsólo Tu eres digno,\nde gloria y de honor.\nTe coronamos Rey y Señor.\n\nTe damos alabanzas,\nsoberano Salvador.\nDe corazones puros\nrecibe esta ofrenda de amor.",
    },
    {
      id: "20",
      titulo: "Aquel que la buena obra empezó",
      letra:
        "Filipenses 1:6\r\n\r\nAquel que la buena obra empezó, \r\naquel que la buena obra empezó,\r\nserá fiel en completarla, \r\nÉl es fiel en completarla.\r\nEl que la comenzó \r\nserá fiel en completarla en ti.",
    },
    {
      id: "21",
      titulo: "Aquí estás Te vemos mover",
      letra:
        "/Aquí estás Te vemos mover\nTe adoraré, Te adoraré\nAquí estás Obrando en mí\nTe adoraré, Te adoraré/\n\n/ Milagroso, abres camino\nCumples promesas Luz en tinieblas\nMi Dios, así eres Tú /\n\nAquí estás Sanando mi corazón\nTe adoraré, Te adoraré\nAquí estás Tocando mi corazón\nTe adoraré, Te adoraré\n\n/Milagroso, abres camino Cumples promesas\nLuz en tinieblas. Mi Dios, así eres Tú/\n\nAquí estás, Tocando mi corazón\nTe adoraré, Te adoraré\n\nAquí estás, Sanando mi corazón\nTe adoraré, Te adoraré.\n\n(Hoy y siempre, Te llamamos)\nMilagroso, abres camino\nCumples promesas\nLuz en tinieblas\nMi Dios, así eres Tú\n\nMilagroso, abres camino\nCumples promesas\nLuz en tinieblas\nMi Dios, así eres Tú\n\nAsí eres Tú (así eres Tú)\nAsí eres Tú (así eres Tú)\nAsí eres Tú (así eres Tú)\nAsí eres Tú (así eres Tú)\n\n//Aunque no pueda ver, estás obrando\nAunque no pueda ver, estás obrando\nSiempre estás, siempre estás obrando\nSiempre estás, siempre estás obrando//\n\n/Milagroso, abres camino\nCumples promesas\nLuz en tinieblas\nMi Dios, así eres Tú/\n\nSolo así eres Tú (así eres Tú)\nAsí eres Tú (así eres Tú)\nAsí eres Tú (así eres Tú)\nAsí eres Tú (así eres Tú)",
    },
    {
      id: "22",
      titulo: "Aqui estoy rendido por tu majestad",
      letra:
        "Aqui estoy rendido por tu majestad,\r\ncubierto por tu gracia Señor.\r\nAqui estoy, sabiendo que soy un pecador\r\ncubierto por tu sangre señor\r\n\r\nEncontré el mas inmenso amor por mi,\r\ntu vida entregaste, en el Gran Sacrificio.\r\n\r\nMajestad, Majestad\r\ntu gracia me encontró tal cual soy\r\nno era nada y tu me diste valor.\r\n\r\nAqui estoy, rendido por tu amor que me das,\r\ntu perdon me hace perdonar.\r\nAqui estoy, se que tu deseo soy\r\nSanto por gloria y poder.\r\n\r\nEncontré el mas inmenso amor por mi,\r\ntu vida entregaste, en el Gran Sacrificio.\r\n\r\nMajestad, Majestad\r\ntu gracia me encontró tal cual soy\r\nno era nada\r\ny tu me diste valor\r\n\r\nMajestad, Majestad\r\ntu amor me cambia al habitar\r\nen presencia de tu majestad.\r\n(se repite coro 1 vez)",
    },
    {
      id: "23",
      titulo: "Atráeme a Ti, no me dejes ir",
      letra:
        "Atráeme a Ti, no me dejes ir.\r\nLo rindo todo una vez más\r\na cambio de tu amistad.\r\nYo te anhelo a Ti, solamente a Ti.\r\nPues nadie más en tu lugar,\r\nme abrazará con tanto amor.\r\nGuíame Señor de regreso a Ti.\r\n\r\n/Te anhelo a Ti, Señor te necesito.\r\nTe anhelo a Ti, dime que cerca estás./",
    },
    {
      id: "24",
      titulo: "Aún antes de hablar, tu voz podía oír",
      letra:
        "Aún antes de hablar, tu voz podía oír\r\nHas sido tan bueno para mí\r\nAntes de respirar, soplaste tu aliento en mí\r\nHas sido tan bueno para mí\r\n\r\nTu amor me envuelve, me sostiene\r\nAmor sin condición\r\nMe persigue y deja, las noventa y nueve\r\nY va por mí\r\n\r\nNo puedo ganarlo, ni merecerlo\r\nTu amor se entregó por mí\r\nTu amor me envuelve, me sostiene\r\nAmor sin condición\r\n\r\nCuando enemigo fui\r\nTu amor luchó por mí\r\nHas sido tan bueno para mí\r\nCuando indigno fui\r\nPagaste el precio por mí\r\nHas sido tan bueno para mí\r\n\r\nTu amor me envuelve, me sostiene\r\nAmor sin condición\r\nMe persigue y deja las noventa y nueve\r\nY va por mí\r\n\r\nNo puedo ganarlo, ni merecerlo\r\nTu amor se entregó por mí\r\nTu amor me envuelve, me sostiene\r\nAmor sin condición, ¡yeah!\r\n\r\n/No hay sombra que no alumbres\r\nMonte que no escales\r\nPara encontrarme a mí\r\nNo hay pared que no derrumbes\r\nCadena que no rompas\r\nPara encontrarme a mí/\r\n\r\nTu amor me envuelve, me sostiene\r\nAmor sin condición\r\nMe persigue y deja las noventa y nueve\r\nY va por mí\r\n\r\nNo puedo ganarlo, ni merecerlo\r\nTu amor se entregó por mí\r\nTu amor me envuelve, me sostiene\r\nAmor sin condición",
    },
    {
      id: "25",
      titulo: "Bendeciré a Jehová en todo tiempo",
      letra:
        "Salmos 34: 1-4\r\n\r\nBendeciré a Jehová en todo tiempo, \r\nsu alabanza en mi boca estará.\r\nEn Jehová se gloriará mi alma, \r\nlo oirán los mansos y se alegrarán.\r\nEngrandeced a Jehová conmigo \r\ny exaltemos a una su nombre.\r\nBusqué a Jehová y el me oyó \r\ny de todos mis temores me libró.",
    },
    {
      id: "26",
      titulo: "Brillemos en un mundo que vive sin luz.",
      letra:
        "Brillemos en un mundo que vive sin luz.\r\nMostremos el amor que nos dejó Jesús.\r\nLlevemos vida y esperanza.\r\nPodrán hallar en Dios confianza.\r\nBrillemos en un mundo que vive sin luz.",
    },
    {
      id: "27",
      titulo: "Bueno es alabar oh Señor, tu nombre",
      letra:
        "Bueno es alabar oh Señor, tu nombre.\r\nDarte gloria, honra y honor, por siempre.\r\nBueno es alabarte Jesús, \r\ny gloriarme en tu poder.\r\n\r\n/ Porque grande eres Tu, \r\ngrandes son tus obras.\r\nPorque grande eres Tu, \r\ngrande es tu amor, grande es tu gloria./\r\n\r\nBueno es alabarte Señor.",
    },
    {
      id: "28",
      titulo: "Bueno es alabarte, oh Jehová",
      letra:
        "Salmos 92:1\r\n\r\nBueno es alabarte, oh Jehová,\r\ny cantar salmos a tu nombre.\r\nOh Altísimo. Salmos 92:1.",
    },
    {
      id: "29",
      titulo: "Buscas caminos sin saber",
      letra:
        "Buscas caminos sin saber, \r\nbuscas salidas a tu ser,\r\npero no encuentras la verdad.\r\nBuscas en vicios y no hallas, \r\npedís consejos no te dan,\r\nte sentís solo y no querés hablar.\r\n\r\nPero hoy te vengo a decir \r\nlo que hizo Cristo en mí.\r\nUna nueva vida Él me dio, \r\ny ahora feliz estoy.\r\n\r\nSi querés encontrar la paz, \r\ntenés que reconocer \r\nque no sos nada sin Jesús.\r\nEn una cruz por ti Él murió, \r\ny su sangre derramó por salvarte a vos.",
    },
    {
      id: "30",
      titulo: "Cada cosa en la vida, tiene su justo lugar",
      letra:
        "Eclesiastés 3:1-8\r\n\r\nCada cosa en la vida, tiene su justo lugar,\r\ncada cosa tiene un tiempo \r\npara hacerse realidad.\r\nEs por eso que preciso \r\nque me enseñes a mirar,\r\nlo que tengo por delante \r\ny el presente que esta acá.\r\n\r\nEnséñame a vivir el hoy de tal manera,\r\nque mañana, \r\nno tenga que reprocharme el ayer.\r\nEnséñame a vivir el hoy de tal manera,\r\nque mañana, \r\nno tenga que reprocharme el ayer. Enséñame.\r\n\r\nTiempo de nacer, tiempo de morir,\r\ntiempo de llorar, también de reír,\r\ntiempo de buscar, tiempo de perder,\r\ntiempo de saber lo que hay que hacer.\r\nEs por eso que preciso \r\nque me enseñes a vivir,\r\ny a no equivocarme cuando tenga que elegir.",
    },
    {
      id: "31",
      titulo: "Cada día con Cristo me llena de perfecta paz",
      letra:
        "Cada día con Cristo me llena de perfecta paz,\r\ncada día con Cristo le amo más y más.\r\nÉl me salva y guarda, \r\ny sé que pronto volverá (a buscarme)\r\nY vivir con Cristo, más dulce cada día será,\r\nY vivir con Cristo, más dulce cada día será.",
    },
    {
      id: "32",
      titulo: "Cada mañana al despertar",
      letra:
        "Cada mañana al despertar,\r\ny por la noche al descansar,\r\nagradezco tus bondades a mi vida,\r\npor todo lo que me permites disfrutar.\r\n\r\nAleluya, Aleluya, Aleluya,\r\nagradecido estoy por tu bondad.",
    },
    {
      id: "33",
      titulo: "Celebrad a Cristo celebrad",
      letra:
        "//// Celebrad a Cristo celebrad. ////\r\nResucitó, resucitó, y hoy vive para siempre.\r\nResucitó, resucitó, \r\n/// vamos a celebrar ///, resucitó el Señor.",
    },
    {
      id: "34",
      titulo: "Cerca de Ti yo quiero estar",
      letra:
        "Juan 10\r\n\r\nCerca de Ti yo quiero estar\r\npara escuchar tu voz y aprender de Ti.\r\nQuiero ser un reflejo de tu amor.\r\nYo quiero vivir sólo en tu voluntad.\r\n\r\nJesús tu eres mi buen Pastor.\r\nTu conoces mi camino,\r\nJesús puedo confiar en Ti.\r\nOh, mi Dios, me rindo hoy.",
    },
    {
      id: "35",
      titulo: "Con humildad y sencillez ",
      letra:
        "Hechos 20: 18-21\r\n\r\nCon humildad y sencillez \r\na Ti Señor me acercaré.\r\nEs por tu amor que soy feliz\r\npara decir con todo mi corazón:\r\n\r\nTe amo a Ti no hay más que decir.\r\nMi vida es la prueba de mi amor por Ti.",
    },
    {
      id: "36",
      titulo: "Con mis labios y mi vida  te alabo Señor, te alabo",
      letra:
        "Con mis labios y mi vida \r\nte alabo Señor, te alabo Señor.\r\nCon mis labios y mi vida \r\nte alabo bendito Señor.\r\nPorque Tú has sido precioso para mí, \r\nprecioso para mí, precioso para mí.\r\nPorque Tú has sido precioso para mí, \r\nte alabo bendito Señor.",
    },
    {
      id: "37",
      titulo: "Con toda gloria y toda majestad",
      letra:
        "Con toda gloria y toda majestad,\r\ndiseñador del universo.\r\nDesde su trono eterno nos miró,\r\ny vino aquí como Cordero.\r\n\r\nEntre nosotros quiso caminar,\r\nbuscando al más necesitado.\r\nHasta un leproso pudo abrazar,\r\nllevó mi herida en su costado\r\n\r\nEl que lavó mis pies,\r\nsiendo Rey en su mesa me dió de comer.\r\nMe hizo caminar sobre el mar.\r\nEl único que quiero adorar.\r\n\r\nCon alto precio El nos valoró.\r\nNos dió su vida y su cansancio.\r\nEl hizo al débil fuerte en su poder,\r\ny vió en el pobre un heredero.\r\n\r\nEl que lavó mis pies,\r\nsiendo Rey en su mesa me dió de comer.\r\nMe hizo caminar sobre el mar.\r\nEl único que quiero adorar.\r\nEs Jesús, mi Rey, \r\nel que mi victoria es y es sobre todo.",
    },
    {
      id: "38",
      titulo: "Con todo mi ser te quiero exaltar",
      letra:
        "Con todo mi ser te quiero exaltar,\r\nY decirte que te amo Señor,\r\nY que me gozo al sentir tu perdón.\r\n\r\nCon todo mi ser, te quiero exaltar, \r\nY tomarme fuerte de tu mano,\r\nY caminar contigo a todos lados.\r\n\r\n//Oh, Cristo,\r\nQué hermoso es estar contigo\r\nNada se compara a ser tu amigo\r\nY tenerte dentro de mi corazón.//",
    },
    {
      id: "39",
      titulo: "Con voz de mando y trompeta de Dios",
      letra:
        "1ra Tesalonicenses 4:16\r\n\r\nCon voz de mando y trompeta de Dios.\r\nEn los confines de la tierra se oirá la voz \r\ndel Señor.\r\n\r\nLos muertos en Cristo de sus tumbas volverán \r\ny los que vivimos en las nubes nos levantará, el Señor.\r\n\r\nY en una nube nos encontrará, \r\ny todo ojo entonces le verá.\r\nAl Cordero inmolado, a Jesús el deseado.\r\n\r\nLe veremos tal cual es \r\nen Su gloria y Su poder.",
    },
    {
      id: "40",
      titulo: "Confío en Ti, confío en Ti.",
      letra:
        "Confío en Ti, confío en Ti.\r\nSé que tus promesas cumplirás.\r\nConfío en Ti, confío en Ti.\r\nSé que tus promesas cumpirás.\r\n\r\nEn las duras pruebas, no me dejarás,\r\ncomo el águila Tu me levantarás.\r\nSi, yo  confío en Ti,\r\nyo sólo confío en Ti.",
    },
    {
      id: "41",
      titulo: "Conozco que todo lo puedes, que mi pensamiento no ",
      letra:
        "Job 42:2– 5\r\n\r\nConozco que todo lo puedes,\r\nque mi pensamiento no lo puedo esconder.\r\nHablaba lo que no entendía\r\ny de oídas te había oído.\r\n\r\nMas ahora mis ojos te ven,\r\nyo te preguntaré y Tú me enseñaras.\r\nMas ahora mis ojos te ven,\r\nme rindo a tus pies\r\ny me arrepiento, Señor.",
    },
    {
      id: "42",
      titulo: "Consagrarme todo entero.",
      letra:
        "Himnario: 365\r\n\r\nConsagrarme todo entero.\r\nAlma, vida, y corazón,\r\nEs el íntimo deseo\r\nQue hoy me anima, buen Señor.\r\n\r\nHéme aquí, Señor, \r\nA tus plantas hoy,\r\nPues a ti consagrar quiero\r\nTodo lo que soy.\r\n\r\nAl contrito has prometido\r\nQue de Ti no arrojaras,\r\nHoy propicio eres conmigo\r\nY tu espíritu me das.\r\n\r\nConfesando mis pecados,\r\nQue sin número han de ser,\r\nY arrojando todo a un lado,\r\nA servirte aprenderé.\r\n\r\nMi canción constante sea,\r\nY mi sola inspiración,\r\nProclamar la dicha eterna\r\nDel que vive para Dios.\r\n\r\n¡Oh qué gozo llena mi alma \r\nAl pensar que suyo soy,\r\nY que pronto en las moradas \r\nEstaré de mi Señor!",
    },
    {
      id: "43",
      titulo: "Creo en Dios, Él está dentro de mí",
      letra:
        "Creo en Dios, Él está dentro de mí. \r\nCreo en Dios, desde que a Jesús yo fui.\r\nVoy a Él, cuándo le hablo en oración. \r\nTengo fe que Él escucha mi clamor.\r\n\r\nOh Señor, tú conoces mi interior, \r\nante Ti nada puedo esconder.\r\nClamo hoy, limpia este pobre ser. \r\nLléname cada día más de Ti.",
    },
    {
      id: "44",
      titulo: "Cristo en su amor me guía.",
      letra:
        "Cristo en su amor me guía,\r\nandando cada día muy cerca de mí.\r\nNo desespero, pues se que en el sendero\r\ntomado de su mano cuidará de mí.\r\n\r\nAunque procuren apartarme\r\ndel recto derrotero\r\npoder me infundirá su amor.\r\n\r\nOh Cristo te amo, ya ves te soy sincero,\r\nme amaste Tú primero y siempre te amaré.",
    },
    {
      id: "45",
      titulo: "Cristo es la peña de Oreb ",
      letra:
        "Cristo es la peña de Oreb que está brotando,\r\nagua de vida saludable para ti.\r\nCristo es la peña de Oreb que está brotando,\r\nagua de vida saludable para ti.\r\n\r\nVen a beberla que es más dulce que la miel,\r\nrefresca el alma, refresca todo tu ser.\r\nCristo es la peña de Oreb que está brotando,\r\nagua de vida saludable para ti.\r\n\r\nCristo es el lirio del valle de las flores,\r\nÉl es la rosa blanca y pura de Saron.\r\nCristo es la vida y amor de los amores,\r\nÉl es la eterna fuente de la salvación.",
    },
    {
      id: "46",
      titulo: "Cristo te exalto, Cristo te adoro ",
      letra:
        "Cristo te exalto, Cristo te adoro \r\nPorque Tú eres mi Señor.\r\nSólo a Ti daré la gloria y honor.\r\nCristo te exalto, Cristo te adoro \r\nporque Tú eres mi Señor.\r\nSólo a Ti daré la gloria y honor.\r\n\r\nGloriosa es tu presencia, \r\nme cubre y me da paz.\r\nMi ser siempre proclamará \r\nque sólo Tú eres digno, \r\nque sólo Tú eres digno,\r\nque sólo Tú eres digno de adorar.",
    },
    {
      id: "47",
      titulo: "Cristo, salvador de nuestra vida",
      letra:
        "Cristo, salvador de nuestra vida, \r\nte coronamos hoy por siempre.\r\nCristo, Redentor y soberano, \r\nte damos toda la gloria.\r\n\r\n/Se conmueve nuestra voz ante tanta majestad,\r\ndisfrutamos de tu amor, recibimos tu bondad.\r\nOh Cristo santo, \r\nno hay otro como Tú y hoy te amamos./",
    },
    {
      id: "48",
      titulo: "Crucificado por mí fué Jesús",
      letra:
        "Himnario: 459\r\n\r\nCrucificado por mí fué Jesús,\r\nDe tal manera me amó.\r\nSin murmurar fué llevado a la cruz,\r\nDe tal manera me amó.\r\n\r\nDe tal manera me amó,\r\nDe tal manera me amó;\r\nCristo en la cruz del calvario murió,\r\nDe tal manera me amó.\r\n\r\nEl inocente cordero de Dios,\r\nDe tal manera me amó.\r\nQue por salvarme sufrió muerte atroz,\r\nDe tal manera me amó.\r\n\r\nEn mi lugar padeció aflicción,\r\nDe tal manera me amó.\r\nYa consumó mi eternal salvación,\r\nDe tal manera me amó.",
    },
    {
      id: "49",
      titulo: "Cuan bello es el Señor, cuan hermoso es el Señor.",
      letra:
        "Salmos 27:4\r\n\r\nCuan bello es el Señor, \r\ncuan hermoso es el Señor.\r\nCuan bello es el Señor, hoy le quiero adorar.\r\n\r\nLa belleza de mi Señor nunca se agotará.\r\nLa hermosura de mi Señor \r\nsiempre resplandecerá.",
    },
    {
      id: "50",
      titulo: "Cuán glorioso es el cambio operado en mi ser",
      letra:
        "Cuán glorioso es el cambio operado en mi ser,\r\nViniendo a mi vida el Señor,\r\nHay en mi alma una paz que yo ansiaba tener,\r\nLa paz que me trajo su amor.\r\n\r\n//El vino a mi corazón; //\r\nSoy feliz con la vida que Cristo me dió,\r\nCuando él vino a mi corazón.\r\n\r\nYa no voy por la senda que el mal me trazó,\r\nDo sólo encontré confusión;\r\nMis errores pasados Jesús los borró,\r\nCuando él vino a mi corazón.\r\n\r\nNi una sombra de duda obscurece su amor,\r\nAmor que me trajo el perdón;\r\nLa esperanza que aliento la debo al Señor,\r\nPorque él vino a mi corazón.",
    },
    {
      id: "51",
      titulo: "Cuando Cristo vino a mi corazón, mi vida entera cambió",
      letra:
        "Cuando Cristo vino a mi corazón, \r\nmi vida entera cambió.\r\nSu paz y su amor alejaron de mi \r\nlas dudas, las sombras y el temor.\r\n\r\nMi vida comenzó cuando el Señor llegó \r\ny hoy puedo cantar de su amor.\r\nMi vida comenzó cuando el Señor llegó \r\ny hoy puedo cantar de su amor.\r\n\r\nHoy quiero que Cristo te transforme a ti, \r\nque cambie tu vida también.\r\nPiensa en la cruz donde murió por ti \r\ny ábrele tu corazón.",
    },
    {
      id: "52",
      titulo: "Cuando la trompeta del Señor se toque la final",
      letra:
        "Himnario: 155\r\n\r\nCuando la trompeta del Señor \r\nse toque la final,\r\nCon fulgor apunte el día eternal;\r\nY los redimidos suban \r\na su casa celestial,\r\nCuando allá se pase lista yo estaré.\r\n\r\nCuando allá se pase lista, \r\nCuando allá se pase lista.\r\nCuando allá se pase lista,\r\nCierto estoy que por su gracia allí estaré.\r\n\r\nCuando todas sombras huyan \r\nen la gran resurrección\r\nDe los muertos en Jesús sin corrupción,\r\nY en las nubes al Señor reciban, \r\n¡qué consolación!\r\nCuando allá se pase lista yo estaré.\r\n\r\nTrabajar es mi deseo \r\nsin cesar por el Señor,\r\nSiempre hablando de su gracia y de su amor;\r\nCuando acabe aquí mi obra \r\ny me llame el salvador,\r\nCuando allá se pase lista yo estaré.",
    },
    {
      id: "53",
      titulo: "Cuando nadie me ve, en la intimidad",
      letra:
        "Cuando nadie me ve, en la intimidad\r\nDonde no puedo hablar más que la verdad\r\nDonde no hay apariencias\r\nDonde al descubierto queda mi corazón\r\n\r\nAllí soy sincero\r\nAllí mi apariencia de piedad se va\r\nAllí es Tu gracia lo que cuenta\r\nTu perdón lo que sustenta\r\nPara estar de pie\r\n\r\nY no podría dar la cara\r\nSi no fuera porque soy\r\nRevestido de la gracia\r\nY la justicia del Señor\r\nSi me vieran tal cual soy\r\nSe enterarían que es Jesús\r\nLo que han visto reflejado en mí\r\nTan solo fue su luz\r\n\r\nY es por Tu gracia y Tu perdón\r\nQue podemos ser llamados\r\nInstrumentos de Tu amor\r\nY es por Tu gracia y Tu perdón\r\nMi justicia queda lejos\r\nDe Tu perfección\r\n\r\nY no podría dar la cara\r\nSi no fuera porque soy\r\nRevestido de la gracia\r\nY la justicia del Señor\r\nSi me vieran tal cual soy\r\nSe enterarían que es Jesús\r\nLo que han visto reflejado en mí\r\nTan solo fue su luz\r\n\r\nY es por Tu gracia y Tu perdón\r\nQue podemos ser llamados\r\nInstrumentos de Tu amor\r\nY es por Tu gracia y Tu perdón\r\nMi justicia queda lejos\r\nDe Tu perfección",
    },
    {
      id: "54",
      titulo: "Cuando pienso en tu amor tan bello y te veo a Ti en santidad",
      letra:
        "Cuando pienso en tu amor tan bello \r\ny te veo a Ti en santidad.\r\nY tú divinidad que excede las riquezas \r\nde este mundo.\r\nCuando alcanzo a tu corazón, \r\ncuando yo estoy en tu amor,\r\ncuando todo es como las sombras \r\nal lado de tu luz.\r\n\r\nTe adoro a Ti Señor Jesús, \r\nte adoro a Ti mi salvador.\r\nLa razón por la cual yo vivo es para adorarte.\r\nTe adoro a Ti Señor Jesús, \r\nte adoro a Ti mi salvador.\r\nLa razón por la cual yo vivo (será por Ti).\r\nLa razón por la cual yo vivo (será por Ti).\r\nLa razón por la cual yo vivo es para adorarte.",
    },
    {
      id: "55",
      titulo: "Cuando te alabo arde en mí el fuego de tu Espíritu",
      letra:
        "Cuando te alabo arde en mí \r\nel fuego de tu Espíritu que inunda mi ser.\r\nNo, no, no, no callaré, no callaré,\r\ncon nuevos cantos de alabanzas te exaltaré.",
    },
    {
      id: "56",
      titulo: "Cuando veo tu amor, cuando escucho tu verdad",
      letra:
        "Cuando veo tu amor, \r\ncuando escucho tu verdad,\r\ncuando siento tu calor y admiro tu bondad.\r\n\r\nMe deleito en Ti Señor, yo me gozo sólo en Ti.\r\nMe sustento en tu amor, \r\ny por siempre te alabaré sólo a Ti. \r\n\r\nYo me postro en tu presencia, \r\nte adoro en santidad,\r\nte bendigo con mi vida \r\ny yo quiero ofrendarme a Ti en santidad.",
    },
    {
      id: "57",
      titulo: "Dad gracias de corazón, dad gracias al Santo Dios",
      letra:
        "2ªCorintios 8:9, Santiago 2:5\r\n\r\n// Dad gracias de corazón, \r\ndad gracias al Santo Dios.\r\nDad gracias porque ha dado al Señor Jesús. //\r\n\r\n// Y ahora diga el débil fuerte soy, \r\ndiga el pobre, rico soy\r\npor lo que hizo en la cruz por mí. //\r\n\r\nDad gracias.",
    },
    {
      id: "58",
      titulo: "Damos honor a Ti",
      letra:
        "Damos honor a Ti, damos honor a Ti.\r\nCreador de vida eres Tú.\r\nDamos honor a Ti, damos honor a Ti.\r\nPorque no hay otro Dios como Tú.\r\n\r\nRey de reyes, admirable.\r\nEres el principio y fin.\r\nSoberano y sublime.\r\nEres nuestro salvador. ",
    },
    {
      id: "59",
      titulo: "De gloria en gloria te veo",
      letra:
        "De gloria en gloria te veo. \r\nCuanto más te conozco \r\nquiero saber más de Ti.\r\nMi Dios, cual buen alfarero,\r\nquebrántame, transfórmame, \r\nmoldéame a tu imagen Señor.\r\n// Quiero ser más como Tú, \r\nver la vida como Tú,\r\nser guiado por tu espíritu \r\ny reflejar al mundo tu amor. //",
    },
    {
      id: "60",
      titulo: "De tal manera me amó, que su vida no escatimó",
      letra:
        "De tal manera me amó,\r\nque su vida no escatimó.\r\nHasta el final el se entregó\r\ny a la muerte fue porque me amó.\r\n\r\nDe tal manera me amó,\r\nque no hay forma en que podré pagar,\r\nel precio de su grande amor,\r\npero toda mi alma quiero dar.\r\n\r\nPor su amor yo viviré.\r\nDe su amor yo cantaré.\r\nCon mi Jesús caminaré,\r\nporque El me amó a mi.\r\n\r\nPor su amor yo viviré.\r\nDe su amor yo cantaré.\r\nCon mi Jesús caminaré,\r\nporque El murió por mi.\r\nLe seguiré.",
    },
    {
      id: "61",
      titulo: "Desde el fondo del mar",
      letra:
        "Salmos 148: Salmos 18:31\r\n\r\nDesde el fondo del mar, del más alto lugar\r\ndel mas hondo abismo\r\nte alabaré.\r\n\r\nDesde mi corazón, fuerte o débil esté\r\ncada instante de mi vida\r\ncon gozo yo diré:\r\n\r\nQue Tú eres la Roca Eterna\r\nSeñor sobre Cielo y Tierra, Tú eres Dios\r\n\r\nQue toda criatura adore\r\nque toda nación se postre\r\na Ti Señor, Tú Eres Dios.",
    },
    {
      id: "62",
      titulo: "Desolados ya no más",
      letra:
        "Desolados ya no más Somos herederos con Jesús\r\nExtranjeros ya no más\r\nAhora somos hijos por la Cruz\r\n\r\nSomos iglesia\r\nReino de luz\r\nNuestra bandera la Cruz de Jesús\r\nSomos iglesia\r\nSomos nación\r\nLa tumba vacía es nuestra canción\r\n\r\nExtraviados ya no más\r\nNos llamas de vuelta a nuestro hogar\r\nSeparados ya no más\r\nSiempre a nuestro lado Tú estás\r\n\r\nSomos iglesia\r\nReino de luz\r\nNuestra bandera la Cruz de Jesús\r\nSomos iglesia\r\nSomos nación\r\nLa tumba vacía es nuestra canción\r\n\r\nSomos iglesia\r\nReino de luz\r\nNuestra bandera la Cruz de Jesús\r\nSomos iglesia\r\nSomos nación\r\nLa tumba vacía es nuestra canción\r\n\r\nVivo estas en gloria y honor\r\nReinas en victoria Señor\r\nNuestro ser entona a una voz\r\nCristo eres Dios, Cristo eres Dios\r\n\r\nSomos iglesia\r\nReino de luz\r\nNuestra bandera la cruz de Jesús\r\nSomos iglesia\r\nSomos nación\r\nLa tumba vacía es nuestra canción\r\n\r\nVivo estas en gloria y honor\r\nReinas en victoria Señor\r\nNuestro ser entona a una voz\r\nCristo eres Dios, Cristo eres Dios",
    },
    {
      id: "63",
      titulo: "Digno eres de gloria y alabanza",
      letra:
        "// Digno eres de gloria y alabanza.\r\nLevantamos nuestro canto,\r\nadorándote Señor. //\r\n\r\n// Grande eres Tu, maravillas haces Tu.\r\nNo hay otro como Tu, no hay otro como Tu. //",
    },
    {
      id: "64",
      titulo: "Digno es el Cordero Santo",
      letra:
        "Apocalipsis 4:8-11\r\n\r\nDigno es el Cordero Santo\r\nSanto, Santo es Él\r\nLevantamos nuestra alabanza\r\nal que en el trono está.\r\n\r\nSanto, Santo, Santo\r\nDios Todopoderoso\r\nquien fue, quien es y quien vendrá.\r\n\r\nLa creación hoy canta\r\ny damos gloria a Él.\r\nTú eres digno, por siempre y siempre.",
    },
    {
      id: "65",
      titulo: "Dios está aquí",
      letra:
        "Dios esta aquí, \r\ntan cierto como el aire que respiro,\r\ntan cierto como la mañana se levanta,\r\ntan cierto como que le hablo y me puede oír.\r\n\r\nDios esta aquí, \r\ntan cierto como que un día salvó mi alma\r\ntan cierto como que su Hijo \r\nmurió por ti y por mí,\r\ntan cierto como que te llama y te espera a ti.",
    },
    {
      id: "66",
      titulo: "Dios me abro a Ti",
      letra:
        "Juan 12: 37-43\r\n\r\nDios me abro a Ti, \r\nMe entrego a Ti, Jesús.\r\nEstoy dispuesto y en tus manos, \r\nLo rindo todo Señor.\r\n\r\nAbre mis ojos, déjame verte.\r\nQuita las vendas que me han cegado.\r\nAbre mis ojos, yo quiero verte.\r\nMuestra tu gloria y tu gran bondad.\r\n\r\nQuiero mirar tu hermosura,\r\ny contemplar tu majestad.\r\nAbre mis ojos, Jesucristo. \r\nMuestra tu gloria y tu bondad.",
    },
    {
      id: "67",
      titulo: "Dulce refugio en la tormenta",
      letra:
        "// Dulce refugio en la tormenta\r\nes Jesucristo el salvador \r\nEl me alienta y alimenta\r\ncon su palabra y su amor. //\r\n\r\nVengo a reposar en El,\r\nEl es mi amigo fiel,\r\nuna poderosa y fresca unción\r\nllenará mi corazón\r\n\r\nDulce refugio en la tormenta\r\nes Jesucristo el salvador.",
    },
    {
      id: "68",
      titulo: "El brillo de este mundo se opaca ante Ti",
      letra:
        "El brillo de este mundo se opaca ante Ti,\r\nla gloria de esta tierra nada es.\r\nTodo cae en tu presencia oh Rey, \r\nhermosa es tu presencia, Señor.\r\n\r\n/Tu presencia está aquí, \r\ntu presencia está en mí.\r\nY tu pueblo te recibe alabándote, \r\nhermosa es tu presencia Señor./",
    },
    {
      id: "69",
      titulo: "El Cordero que sufrió (Aquella cruz)",
      letra:
        "\r\nEl Cordero que sufrió\r\nTraicionado fue\r\nEl peso de nuestra maldad\r\nFue puesto sobre Él\r\n\r\nEn silencio, soportó\r\nDolor y humillación\r\nObediente al Padre fue\r\nLa cruz, por mí, cargó\r\n\r\nEn aquella cruz, me salvaste\r\nDerramaste allí Tu amor\r\nMi alma cantará aleluya\r\nGloria y honra a Ti, Señor\r\n\r\nUnigénito de Dios\r\nViniste a redimir\r\nY perdonar a todo aquel\r\nQue se acerca a Ti\r\n\r\nEn aquella cruz, me salvaste\r\nDerramaste allí Tu amor\r\nMi alma cantará aleluya\r\nGloria y honra a Ti, Señor\r\n\r\nÉl pagó por mí, su perdón me dio\r\nPor la sangre que derramó en la cruz\r\nEl pecado ya no me puede atar\r\nLibre soy en Él, libre en verdad\r\n\r\nÉl pagó por mí, su perdón me dio\r\nPor la sangre que derramó en la cruz\r\nEl pecado ya no me puede atar\r\nLibre soy en Él, libre en verdad\r\n\r\nEn aquella cruz, me salvaste\r\nDerramaste allí Tu amor\r\nMi alma cantará aleluya\r\nGloria y honra a Ti, Señor\r\n\r\nA la muerte, Él venció\r\nLa tumba abierta está\r\nAleluya al Salvador\r\nJesús resucitó\r\n\r\nEn aquella cruz, me salvaste\r\nDerramaste allí Tu amor\r\nMi alma cantará aleluya\r\nGloria y honra a Ti, Señor\r\n\r\nGloria y honra a Ti, Señor",
    },
    {
      id: "70",
      titulo: "El Dios que hizo los cielos y la tierra",
      letra:
        "El Dios que hizo los cielos y la tierra\r\nCon el poder de Su palabra\r\nReina con autoridad\r\nEl Dios que aún los vientos le obedecen\r\nUna palabra es suficiente\r\nPara los muertos levantar\r\n\r\nNadie es como Él\r\nOh, gran Yo Soy\r\n\r\nTú eres el Dios que adoramos\r\nTodopoderoso y soberano\r\nGrande en misericordia y poder para salvar\r\nTú eres el Dios que adoramos\r\nQuien derrotó la muerte y el pecado\r\nGlorioso redentor y rey, te adoramos\r\n\r\nEl Dios que descendió de su trono\r\nPara llevar sobre Sus hombros\r\nNuestra culpa y transgresión\r\nJesús, exaltado sobre todo\r\nNombre sobre todo nombre\r\nSolo en Él hay salvación\r\n\r\nNadie es como Él\r\nOh, gran, Yo Soy\r\n\r\nTú eres el Dios que adoramos\r\nTodopoderoso y soberano\r\nGrande en misericordia y poder para salvar\r\nTú eres el Dios que adoramos\r\nQuien derrotó la muerte y el pecado\r\nGlorioso redentor y rey, Te adoramos\r\n\r\nA él sea la gloria y el poder\r\nTodo es de Él y para Él\r\n\r\nTú eres el Dios que adoramos\r\nTodopoderoso y soberano\r\nGrande en misericordia y poder para salvar\r\nTú eres el Dios que adoramos\r\nQuien derrotó la muerte y el pecado\r\nGlorioso redentor y rey, Te adoramos",
    },
    {
      id: "71",
      titulo: "Él es la voz que mis oídos abrió",
      letra:
        "Él es la voz que mis oídos abrió,\r\nLa libertad que mis cadenas rompió\r\nÉl es la luz que mi alma oscura iluminó\r\nÉl es Jesús toda mi vida transformo.\r\n\r\nÉl hizo cambiar mi oído en amor\r\nConvierte en alegría mi dolor.\r\nPuede transformar al mas pecador,\r\nDarle una nueva vida y perdón.\r\nEl hizo que vuelva a latir mi corazón.",
    },
    {
      id: "72",
      titulo: "Él es mi rey ¡Oh cuánto yo le amo!",
      letra:
        "Él es mi rey ¡Oh cuánto yo le amo!\r\nÉl es mi rey, no hay otro como Él.\r\nTodo el día alabanzas yo le canto.\r\nOh aleluya, Él es mi rey.",
    },
    {
      id: "73",
      titulo: "Tumbas a Jardines",
      letra:
        "El mundo busqué\r\nY no pudo llenarme\r\nNingún tesoro que pueda ganar\r\nMe saciará\r\n\r\nMás llegaste tú\r\nMe diste vida nueva\r\nY cada deseo se cumplirá\r\nAquí en tu amor\r\n\r\nOh no hay nada, nada mejor\r\nNo hay nada, nada mejor\r\nNo hay nada, nada mejor que mi Dios.\r\n\r\nVengo a ti,\r\nSin miedo y sin reservas\r\nCada fracaso has visto Señor\r\nY aún tu amigo soy.\r\n\r\nPorque el Dios de los montes,\r\nEs el Dios de los valles,\r\nNo hay lugar que me pueda alejar\r\nDe tu gracia y amor.\r\n\r\n/Oh no hay nada, nada mejor\r\nNo hay nada, nada mejor\r\nNo hay nada, nada mejor que mi Dios/\r\n\r\n/Cambias lamento en danza\r\nDe cenizas traes vida\r\nCambias culpa por gloria\r\nSé que solo tú lo harás/\r\n\r\nDe las ruinas y tumbas\r\nNacen nuevos jardines\r\nResucitas los huesos\r\nSé que solo tú lo harás,\r\nSé que solo tú lo harás.\r\n\r\n/Oh no hay nada, nada mejor\r\nNo hay nada, nada mejor\r\nNo hay nada, nada mejor que mi Dios/\r\n\r\nCambias lamento en danza\r\nDe cenizas traes vida\r\nCambias culpa por gloria,\r\nSé que solo tú lo harás.\r\n\r\nDe las ruinas y tumbas\r\nNacen nuevos jardines\r\nResucitas los huesos\r\nSé que solo tú lo harás\r\nSé que solo tú lo harás\r\nSé que solo tú lo harás",
    },
    {
      id: "74",
      titulo: "El resplandor del Rey vestido en majestad",
      letra:
        "El resplandor del Rey\r\nVestido en majestad\r\n// La tierra alegre está. //\r\n\r\nCubierto está de luz,\r\nvenció la oscuridad,\r\n//la tierra a su voz.//\r\n\r\nCuán grande es Dios, cántale.\r\nCuán grande es Dios, y todos lo dirán:\r\nCuán grande es Dios.\r\n\r\nDía a día Él está.\r\nEl tiempo está en Él.\r\n// Principio y el fin. //\r\n\r\nLa Trinidad en Dios,\r\nEl Padre, Hijo y Espíritu.\r\n// Cordero y El León. //\r\n\r\nCuán grande es Dios, cántale.\r\nCuán grande es Dios,y todos lo dirán:\r\nCuán grande es Dios.\r\n\r\n//Tu nombre sobre todo es,\r\nÉl es digno de alabar.\r\nY mi ser dirá:\r\ncuán grande es Dios.// \r\n\r\nCuán grande es Dios, cántale.\r\nCuán grande es Dios,y todos lo dirán:\r\nCuán grande es Dios.\r\n\r\n// Mi corazón entona la canción:\r\nCuán grande es Él,\r\nCuán grande es Él. //",
    },
    {
      id: "75",
      titulo: "El Señor ha sido tan bueno que quiero alabar su nombre",
      letra:
        "El Señor ha sido tan bueno que \r\nquiero alabar su nombre,\r\nquiero alabar su nombre, \r\nquiero alabar su nombre.\r\nEl Señor ha sido tan bueno que \r\nquiero alabar su nombre.\r\nAlelu, alelu, aleluya.",
    },
    {
      id: "76",
      titulo: "Él viene con poder (El cordero y el león)",
      letra:
        "Él viene con poder\r\nTodo reino lo verá\r\nCadenas romperá\r\nY todos le adorarán\r\nQuién como el Señor Dios fuerte.\r\n\r\nÉl es el León, León de Judá\r\nÉl tiene poder para liberar\r\nTodos se postrarán ante ti\r\nÉl es el Cordero, Cordero inmolado\r\nSu sangre en la cruz borró mi pecado\r\nTodos se postrarán ante el Cordero y el León\r\nTodos se postrarán ante ti\r\n\r\nAbrid las puertas hoy\r\nAl rey de reyes y Señor\r\nEl Dios de salvación\r\nVino a darnos libertad\r\nQuién como el Señor Dios fuerte.\r\n\r\nÉl es el León, León de Judá\r\nÉl tiene poder para liberar\r\nTodos se postrarán ante ti\r\nÉl es el Cordero, Cordero inmolado\r\nSu sangre en la cruz borró mi pecado\r\nTodos se postrarán ante el Cordero y el León\r\nTodos se postrarán ante ti.\r\n\r\n//Quién como el Señor Dios fuerte\r\nQuién como el Señor Dios fuerte//\r\nQuién como el Señor\r\n\r\nÉl es el León, León de Judá\r\nÉl tiene poder para liberar\r\nTodos se postrarán ante ti\r\nÉl es el Cordero, Cordero inmolado\r\nSu sangre en la cruz borró mi pecado\r\nTodos se postrarán ante el Cordero y el León\r\nTodos se postrarán ante ti",
    },
    {
      id: "77",
      titulo: "En Él encuentro plena paz",
      letra:
        "En Él encuentro plena paz, \r\ncuán grande es su gracia.\r\nMe da felicidad sin par, \r\ncuán grande es su amor.\r\n\r\nMe amó primero y me salvó \r\ny ahora en su amor estoy.\r\nBendito Cristo, eterno Señor.",
    },
    {
      id: "78",
      titulo: "En el monte Calvario estaba una cruz (Himnario: 466)",
      letra:
        "Himnario: 466\r\n\r\nEn el monte Calvario estaba una cruz.\r\nde afrenta y dolor.\r\nMas yo amo a Jesús, que murió en la cruz \r\nPor salvar al más vil pecador.\r\n\r\nGloriaréme sólo en la cruz,\r\nEn sus triunfos mi gozo será;\r\nY en el día de eterna salud\r\nMi corona Jesús me dará.\r\n\r\nY aunque el mundo desprecie la cruz de Jesús\r\nPara mí tiene suma atracción:\r\nPues en ella llevó el cordero de Dios\r\n De mi alma la condenación.\r\n\r\nEn la cruz de Jesús do su sangre vertió,\r\nHermosura contemplo sin par;\r\nPues en ella triunfante a la muerte venció,\r\nY mi ser puede santificar.\r\n\r\nYo quisiera seguir en pos de Jesús,\r\nY su menosprecio llevar;\r\nY algún día feliz con los santos en luz,\r\nEn la gloria con El he de estar.",
    },
    {
      id: "79",
      titulo: "En este día feliz, en este santo lugar",
      letra:
        "En este día feliz, en este santo lugar,\r\nquiero tener un encuentro con Dios.\r\nSu amor es real y su paz gozaré, \r\nquiero tener un encuentro con Dios.\r\n\r\nQuiero tener un encuentro con Dios \r\nen este santo lugar de oración.\r\nSu amor es real y su paz gozaré, \r\nquiero tener un encuentro con Dios.",
    },
    {
      id: "80",
      titulo: "En la oscuridad En la tempestad (ruinas gloriosas)",
      letra:
        "En la oscuridad \r\nEn la tempestad\r\nTú me cuidas\r\nEn dificultad\r\nMe levantaré\r\nEn tu gracia\r\n\r\nPor el fuego andaré\r\nY no me quemaré\r\nTu espíritu aviva mi alma\r\nA la cruz miraré\r\nMi temor dejaré\r\nEn la luz de tu gracia señor\r\n\r\nLo que seco y muerto está\r\nTú levantas con poder\r\nY restauras las ruinas\r\nDios por siempre eres rey\r\nMi refugio encuentro\r\nEn la sombra de tu amor\r\nSiempre quiero adorarte\r\nY amarte señor\r\n\r\nAun en el dolor\r\nMi esperanza está\r\nEn tu promesa\r\nCuando débil soy\r\nTu poder me da\r\nNuevas fuerzas\r\n\r\nPor el fuego andaré\r\nY no me quemaré\r\nTu espíritu aviva mi alma\r\nA la cruz miraré\r\nMi temor dejaré\r\nEn la luz de tu gracia señor\r\n\r\nLo que seco y muerto está\r\nTú levantas con poder\r\nY restauras las ruinas\r\nDios por siempre eres rey\r\nMi refugio encuentro\r\nEn la sombra de tu amor\r\nSiempre quiero adorarte\r\nY amarte señor\r\n\r\nLo que seco y muerto está\r\nTú levantas con poder\r\nY restauras las ruinas\r\nDios por siempre eres rey\r\nMi refugio encuentro\r\nEn la sombra de tu amor\r\nSiempre quiero adorarte\r\nY amarte señor",
    },
    {
      id: "81",
      titulo: "En presencia de Jehová",
      letra:
        "En presencia de Jehová,\r\npoderoso Dios Príncipe de Paz\r\nLa Aflicción se va,\r\ncorazones son sanados\r\nEn presencia de El Rey.",
    },
    {
      id: "82",
      titulo: "En Ti confía mi corazón",
      letra:
        "En Ti confía mi corazón, en Ti reposa mi alma.\r\nMi ser descansa en Ti, puedo ser feliz.\r\n\r\nPorque sé que estas obrando \r\ntu perfecta voluntad.\r\nEn mi vida estás obrando \r\ntu perfecta voluntad.",
    },
    {
      id: "83",
      titulo: "Enséñame tus caminos Señor",
      letra:
        "Salmos 86:1\r\n\r\nEnséñame tus caminos Señor, \r\ny andaré en tu luz.\r\nDame un corazón entregado a Ti, \r\npara honrarte oh Dios.\r\n\r\nPurifícame, límpiame Señor, \r\ny líbrame de lo que impida el fluir.\r\nPurifícame, límpiame Señor, \r\ny líbrame de lo que impida el fluir de tu amor.",
    },
    {
      id: "84",
      titulo: "Entra en la presencia de Señor con gratitud ",
      letra:
        "Entra en la presencia de Señor con gratitud \r\ny adórale de corazón.\r\nEntra en la presencia de Señor con gratitud \r\ny alza tu voz con júbilo.\r\n\r\nDa gloria, y honra, y alabanzas al Señor. \r\n¡Oh Cristo! Nombre sin igual.\r\n\r\nBendito sea el Señor, Dios poderoso,\r\nQuien fue, quien es y quien tendrá.\r\nBendito sea el Señor, Dios poderoso.\r\nPor siempre reinará.\r\n\r\nPadre del cielo te adoramos.\r\nAlzamos hoy tu nombre en alto.\r\nQue tu reino se establezca en la alabanza,\r\nde tu pueblo, que declara tu poder.",
    },
    {
      id: "85",
      titulo: "Eres alabado, eres exaltado (Dios de imparable)",
      letra:
        "Eres alabado, eres exaltado\r\nTu nombre levantamos, aleluya, aleluya\r\nEres adorado te glorificamos\r\nTu nombre levantamos, aleluya, aleluya\r\n\r\nA una sola voz, nos unimos hoy\r\nTe cantamos Dios en adoración\r\n\r\n/Dios imparable, Dios de imposibles\r\nInigualable, eres invencible/\r\n\r\n/No tengo temor en mi corazón, tú tienes el control/\r\n\r\n/ No me falta nada si te tengo a ti /\r\n\r\nEres alabado, eres exaltado\r\nTu nombre levantamos, aleluya, aleluya\r\n\r\nA una sola voz, nos unimos hoy\r\nTe cantamos Dios en adoración\r\n\r\n/Dios imparable, Dios de imposibles\r\nInigualable, eres invencible/\r\n\r\n/No tengo temor en mi corazón, tú tienes el control/\r\n\r\n/ No me falta nada si te tengo a ti /\r\n\r\n/Y yo sé quien va conmigo va por mí\r\nY quien a mis enemigos hace huir/\r\n\r\n/Dios imparable, Dios de imposibles\r\nInigualable, eres invencible/\r\n\r\n/No tengo temor en mi corazón, tú tienes el control/\r\n\r\n/ No me falta nada si te tengo a ti /",
    },
    {
      id: "86",
      titulo: "Eres Santo, poderoso (Príncipe de paz)",
      letra:
        'Eres Santo (Eres Santo), \r\nPoderoso (Poderoso)\r\nEres Digno (eres digno), \r\nde alabar (de alabar)\r\nYo te amo (yo te amo),\r\n yo te sirvo (yo te sirvo)\r\nY por siempre (y por siempre), \r\nte seguiré (te seguiré)\r\n\r\nY yo canto y alabo\r\n(Eres el Señor y de reyes Rey)\r\nA aquel que es digno\r\n(Poderoso Dios, digno Emanuel)\r\nYo le amo, le adoro\r\n(Tu el gran "Yo soy" quien todo creo)\r\nY me postro ante tus pies\r\n(Príncipe de paz, Cordero de Dios)\r\n\r\nY yo canto y alabo\r\n(Eres Salvador, vives hoy en mí)\r\nA Aquel que es digno\r\n(Y tu santa voz siempre nos habla de Ti)\r\nYo le amo, le adoro\r\n(Eres Alfa y Omega, Principio y fin)\r\nY me postro ante tus pies\r\n(Jesucristo, Mesías, confío en Ti)\r\n\r\nPríncipe de paz,\r\nYo mi vida entrego a Ti',
    },
    {
      id: "87",
      titulo: "Eres Tú, la única razón de mi adoración",
      letra:
        "Eres Tú, la única razón de mi adoración, \r\noh Jesús.\r\nEres Tú, la esperanza que anhelé tener, \r\noh Jesús,\r\n\r\nConfié en Ti, me has ayudado.\r\nTu salvación me has regalado.\r\nHoy hay gozo en mi corazón, \r\ncon mi canto te alabaré.\r\n\r\nTe alabaré, te glorificaré,\r\nte alabaré, mi buen Jesús.\r\n\r\n// En todo tiempo te alabaré.\r\nEn todo tiempo te adoraré. //",
    },
    {
      id: "88",
      titulo: "Es más que una canción, es más que palabras",
      letra:
        "Es más que una canción, \r\nes más que palabras,\r\nes mi corazón rendido a Ti.\r\nEs lo mejor de mi, lo que vengo a darte,\r\nya no es suficiente una canción.\r\nLo que tu me pidas, yo te quiero dar.\r\n\r\nNo vengo a pedir, no vengo a buscar,\r\nsólo vengo a darte mi ofrenda de amor.\r\nPoder conocer, tu fiel corazón\r\ny darte las gracias, mi amado Señor.\r\nHoy te vengo a bendecir, a Ti.",
    },
    {
      id: "89",
      titulo: "Es por Ti, que juntos hoy estamos aquí.",
      letra:
        "Es por Ti, que juntos hoy estamos aquí.\r\nFue Tu amor, \r\nque de la oscuridad nos sacó.\r\nA una voz, venimos hoy delante de Ti,\r\npara darte el honor.\r\n\r\n/ No a nosotros, oh Dios,\r\nsino a Tu Nombre sea dada la gloria. /\r\n\r\nEres Tu el motivo de nuestra adoración.\r\nLa verdad que nuestro corazón libertó.\r\nNadie más es digno del honor recibir,\r\nte lo damos a Ti.\r\n\r\nNo a nosotros, oh Dios. oh no,\r\nsino a Tu Nombre sea dada la gloria.",
    },
    {
      id: "90",
      titulo: "Es su forma de mirar (Fidelidad)",
      letra:
        "Es su forma de mirar\r\nViendo todo, bien o mal\r\nAun así, Él cubre mi pesar\r\nPor probar su fidelidad\r\n\r\nEs la forma en que provee\r\nToda mi necesidad\r\nHasta su vida derramar\r\nPor probar su fidelidad\r\n\r\nFidelidad, su Fidelidad\r\nTan profunda, tan real\r\nEn mi vida y caminar\r\nMe basta su fidelidad\r\n\r\nEs su forma de cuidar\r\nCada paso en mi andar\r\nNo importando a donde llegará\r\nPor probar su fidelidad\r\n\r\nFidelidad, su fidelidad\r\nTan profunda, tan real\r\nEn mi vida y caminar\r\nMe basta su fidelidad\r\nMe basta su fidelidad\r\n\r\nOh, Tu fidelidad, Tu fidelidad!\r\nCada momento la veo en mi\r\nNada me falta pues todo provee\r\nGrande señor es su fidelidad\r\n\r\nFidelidad, Su fidelidad\r\nTan profunda, tan real\r\nEn mi vida y caminar\r\nMe basta su fidelidad\r\nMe basta su fidelidad",
    },
    {
      id: "91",
      titulo: "Es tu fidelidad tan grande, oh Padre",
      letra:
        "Es tu fidelidad tan grande, oh Padre;\r\nTú dices la verdad, descanso allí.\r\nTu luz rodea mi senda en el mundo,\r\nTu voz me anima; mi fuerza es en ti.\r\n\r\n¡Oh qué fidelidad! ¡Oh qué fidelidad!\r\nNunca me canso de darte loor.\r\nCada mañana es nueva tu gracia;\r\nInalterable es tu gran amor.\r\n\r\nLos enemigos son muy poderosos;\r\nTú eres mi Amigo, oh Dios, fuerte Adalid\r\nEn la batalla me das hoy tu ayuda;\r\nVencido no seré, confiando en ti.\r\n\r\nEn tu presencia, oh Dios, hay gran descanso,\r\nDulce consolación, perfecta paz.\r\nAl ver las glorias de Cristo el Señor\r\nLe hemos de celebrar siempre jamás.",
    },
    {
      id: "92",
      titulo: "Esta aquí, nos gozamos porque Dios esta aquí.",
      letra:
        "Esta aquí, nos gozamos porque Dios esta aquí.\r\nEsta aquí, esta aquí \r\n¡Aleluya nuestro Dios esta aquí!\r\n\r\nEsta en mí, \r\nnos gozamos porque Dios esta en mí.\r\nEsta en mí, esta en mí \r\n¡Aleluya nuestro Dios esta en mí!\r\n\r\nEsta en ti, \r\nnos gozamos porque Dios esta en ti,\r\nesta en ti, esta en ti \r\n¡Aleluya nuestro Dios esta en ti!",
    },
    {
      id: "93",
      titulo: "Estamos reunidos aquí Señor",
      letra:
        "Estamos reunidos aquí Señor, \r\nporque hemos conocido tu amor,\r\ntraemos en nuestros labios \r\nun nuevo cántico de loor,\r\npues tu gloria a llenado este lugar. ¡Aleluya!",
    },
    {
      id: "94",
      titulo: "Este es mi deseo, honrarte a Tí.",
      letra:
        "Este es mi deseo, honrarte a Tí.\r\nCon toda mi vida te adoraré.\r\nCon todas mis fuerzas te adoro hoy.\r\nMi adoración eres Tu.\r\n\r\n/ Hoy te rindo mi ser, te doy mi corazón.\r\nYo vivo para Tí.\r\nEn cada palpitar, mientras haya aliento en mi\r\nDios has tu obra en mi./",
    },
    {
      id: "95",
      titulo: "Este pueblo que has formado",
      letra:
        "Este pueblo que has formado \r\nhoy viene a entregar,\r\nlas ofrendas de sus labios puestas en tu altar.\r\nEste pueblo es tu iglesia que viene a adorar\r\nal Unico, a su Amado, al Rey de libertad.\r\n\r\nY canta ¡Hosanna, gloria aleluya!\r\nOh, Jesús amado tu amor me ha cautivado.\r\nY canta ¡Hosanna, gloria aleluya!\r\nAlabanzas hoy yo traigo a tu nombre Jesús.",
    },
    {
      id: "96",
      titulo: "Fija tus ojos en Cristo",
      letra:
        "Fija tus ojos en Cristo \r\ntan llenos de gracia y amor.\r\nY lo terrenal sin valor será, \r\na la luz del glorioso Señor.",
    },
    {
      id: "97",
      titulo: "Fue tan bello, fue amor.",
      letra:
        "Fue tan bello, fue amor, \r\nlo que me sucedió con el Salvador.\r\nLo que yo era mi Jesús en sus manos tomó,\r\nhizo algo bello y me transformó.\r\n\r\nAlgo bello sucedió, \r\nmi pena y confusión Él comprendió.\r\nSólo pude darle a Dios mi vida tan infiel,\r\npero algo bello hizo Él en mi ser.",
    },
    {
      id: "98",
      titulo: "Gracias Padre por ser mi pastor.",
      letra:
        "Gracias Padre por ser mi pastor. \r\nCada día descubro tu amor.\r\nY aunque sin entender te quiero agradecer,\r\nera ciego mas por tu amor, me hiciste ver.\r\nY hoy puedo creer.",
    },
    {
      id: "99",
      titulo: "Gracias por la cruz, Dios.",
      letra:
        "Gracias por la cruz, Dios, \r\npor el precio, tu paga.\r\nMi pecado y dolor tu amor quitó,\r\ndando gracia eternal.\r\n\r\nGracias por tu amor Dios, \r\npor las manos que herí.\r\nPues tu sangre me limpió y siento al fin,\r\ntu perdón y salvación.\r\n\r\nDigno eres Señor, en tu trono estás.\r\nCoronado con poder, reinas con majestad.\r\nCristo, Hijo de Dios, exaltado Rey.\r\nMoriste en la cruz en mi lugar.\r\nDigno  eres Señor.",
    },
    {
      id: "100",
      titulo: "Hay momentos que las palabras no alcanzan.",
      letra:
        "Hay momentos que las palabras no alcanzan,\r\npara decirte lo que siento por Ti Señor Jesús.\r\n\r\nYo te agradezco por todo lo que hiciste,\r\npor todo lo que haces y todo lo que harás.\r\nYo te agradezco por todo lo que hiciste,\r\npor todo lo que haces y todo lo que harás.",
    },
    {
      id: "101",
      titulo: "Hay momentos que no deberían terminar.",
      letra:
        "Hay momentos que no deberían terminar,\r\nhay segundos que tendrían que ser eternidad.\r\nCuando tu Espíritu Señor actúa dentro mío,\r\ny mi corazón estalla en adoración.\r\n\r\nTe amo mi Señor, se acaban las palabras,\r\nsólo me queda mi alma para cantarte.\r\nTe adoro mi Señor, no hay nada alrededor,\r\nsólo estamos Tú y yo,\r\nsólo estamos Tú y yo.",
    },
    {
      id: "102",
      titulo: "Hay perdón por la sangre de Jesús.",
      letra:
        "Hay perdón por la sangre de Jesús, \r\nhay perdón por su muerte en la cruz.\r\nProclamad que hay perdón, \r\npara todos hay perdón,\r\nLos que acuden al Señor Jesús.",
    },
    {
      id: "103",
      titulo: "Hay un deseo en mi corazón de estar donde Tu estás.",
      letra:
        "1ra Corintios 13\r\n\r\nHay un deseo en mi corazón de estar donde Tu estás.\r\nSe que no hay mejor lugar,\r\nquiero habitar en tu altar.\r\n\r\nHe buscado en otras cosas\r\nel amor sin encontrar.\r\nMe doy cuenta que Tu amor, \r\nmi vida llenará.\r\n\r\nPaciente y bondadoso eres \r\n(así es tu amor)\r\nTodo lo espera y lo soporta \r\n(así es tu amor)\r\nNo tiene envidia ni rencor (\r\nasí es tu amor)\r\nTu amor nunca de ser. \r\nAsí es tu amor.\r\n\r\nMe cuidas, me amas,\r\nme cubres, me abrazas.\r\nMejor que la vida es tu amor.\r\n\r\nTan alto, sublime, eterno, perfecto.\r\nMejor que la vida, es tu amor. \r\nPor mí.",
    },
    {
      id: "104",
      titulo: "Hay una gran promesa",
      letra:
        "Mateo 5:8\r\nHay una gran promesa \r\npara los de limpio corazón.\r\nBienaventurados son \r\npues verán con sus ojos a Dios.\r\n\r\nVeré a Dios, veré a Dios, \r\niré a vivir junto con Él.\r\nVeré a Dios, veré a Dios, \r\ncon sangre Él limpió mi corazón.",
    },
    {
      id: "105",
      titulo: "Hoy estoy alegre porque Tú me amas",
      letra:
        "Hoy estoy alegre porque Tú me amas,\r\nen mi boca hay alabanzas, y es para Ti Jesús.\r\n\r\nAlzo mis manos hacia el cielo. \r\nSi mi Jesús, tuya es mi vida.\r\nMi alma te agradece Jesús por Tus bondades,\r\ny mis ojos hoy te ven allí sentado\r\na la diestra de Jehová y que intercedes\r\npor mi vida porque Tú eres mi abogado.\r\nPorque me amas con amor, amor eterno,\r\ny Tus brazos siempre están allí extendidos,\r\nsé que escuchas mi oración y al escucharla\r\nyo te digo mi Jesús tuya es mi vida.",
    },
    {
      id: "106",
      titulo: "Hoy proclamamos a Cristo que resucitó.",
      letra:
        "Hoy proclamamos a Cristo que resucitó.\r\nCordero santo, omnipotente Hijo de Dios.\r\n\r\n// Por siempre Tú estarás, //\r\n// reinando en majestad, //\r\n// venimos ante Ti, // \r\npara adorarte ¡Oh Rey!",
    },
    {
      id: "107",
      titulo: "Humilde vengo a Ti.",
      letra:
        "Humilde vengo a Ti,\r\na darte gracias hoy,\r\npor el amor que das a mi ser.\r\nHumilde vengo a Ti, \r\na darte gracias hoy,\r\npor el amor que das a mi ser.\r\nPorque Tu vienes a mi vida, \r\ny me das de tu amor.\r\nPorque tu vienes a mi vida,\r\ny me das de tu perdón.\r\nY tu Espíritu ilumina mi ser,\r\nes por eso Dios,\r\nque humilde vengo a Ti.",
    },
    {
      id: "108",
      titulo: "Incomparable, inigualable es tu amor.",
      letra:
        "Incomparable, inigualable es tu amor,\r\ny me rodea.\r\nTu me abrazaste, me sonreíste Señor,\r\na mi pecador.\r\nTu amor me alimenta,\r\ntu amor me sustenta.\r\n\r\nCelebraré tu amor todos los días.\r\nCelebraré tu gran misericordia.\r\nCelebraré tu gracia inmerecida,\r\ncelebraré tu amor.\r\n\r\nInmensurable, inagotable es tu amor,\r\ny nunca cambia.\r\nEstás conmigo y no me puedo escapar\r\naunque lo intente.\r\nTu amor es eterno,\r\ntu amor es perfecto.\r\n\r\n// Celebraré tu amor y tu misericordia \r\noh Dios, oh oh. //\r\n\r\nCelebraré tu amor todos los días.\r\nCelebraré tu gran misericordia.\r\nCelebraré tu gracia inmerecida,\r\ncelebraré tu amor.",
    },
    {
      id: "109",
      titulo: "Jamás podré entender tu gran amor.",
      letra:
        "Jamás podré entender tu gran amor.\r\nTan increíble es lo que has hecho señor\r\nDejar en esa cruz tu vida por amor,\r\nno lo entiendo mas lo acepto así.\r\nPor el mundo morir, luego resucitar.\r\nVida eterna dar. \r\nGracias Señor.",
    },
    {
      id: "110",
      titulo: "Jesucristo es el motivo de mi canción.",
      letra:
        "Jesucristo es el motivo de mi canción,\r\notra razón yo no tengo porque cantar.\r\nLa melodía es Él, toda mi vida está en Él,\r\nJesucristo es el motivo de mi canción.\r\n\r\nMuchas razones para vivir, \r\nmuchas razones para morir,\r\nmuchas razones para dar amor.\r\nNo siempre se saben los porque, \r\nla vida pasa con rapidez,\r\ncada momento yo aprovecharé\r\npara darle mis canciones, \r\nofrecer mis oraciones,\r\nentregar mi vida entera al que todo me da.\r\n\r\nJesucristo es el motivo de mi canción,\r\notra razón yo no tengo porque cantar.\r\nLa melodía es Él, toda mi vida está en Él,\r\nJesucristo es el motivo de mi canción.\r\n\r\nEn una búsqueda sin cesar, \r\nyo no me canso de preguntar\r\nsobre el porque de mis canciones para Dios.\r\nPues Él conoce mi corazón \r\ny existe sólo una razón,\r\nagradecerle toda su bondad.\r\nLe daré de mis canciones\r\ny también mis ilusiones,\r\nes la forma en que puedo expresarle mi amor.",
    },
    {
      id: "111",
      titulo: "Jesús, amado de mi alma.",
      letra:
        "1ra Juan 4:19 - colosenses 1:13-14\r\n\r\n// Jesús, amado de mi alma.\r\nJesús, jamás te dejaré.\r\nMe sacaste de la oscuridad,\r\nme trajiste libertad y ahora sé:\r\nQue te amo, te necesito.\r\nMi precioso Dios, jamás te dejaré.\r\nMi Salvador, mi mejor amigo.\r\nYo te adoraré por la eternidad. // ",
    },
    {
      id: "112",
      titulo: "Jesús, cuánto me amó.",
      letra:
        "Jesús, cuánto me amó. Jesús, por mí murió.\r\nAllí en la cruz yo comprendí \r\nel gran amor de Dios.\r\n\r\nÉl me salvó y hoy voy con Él \r\ny donde voy Él va también.\r\nHoy soy feliz, Cristo es mi Rey \r\nyo cantaré sólo a Él.\r\n\r\nJesús mi Salvador. Jesús dulce canción.\r\nMi alma sosiega en tempestad \r\ne infunde dulce paz.",
    },
    {
      id: "113",
      titulo: "Jesús, Señor de la creación.",
      letra:
        "Jesús, Señor de la creación.\r\nSiendo en forma de Dios, \r\nse despojó a sí mismo.\r\nTomó la semejanza de hombre,\r\ny siendo puro y sin mancha,\r\nentre nosotros vivió.\r\nY asimismo se humilló\r\ntomando forma de siervo\r\nhasta su vida entregar\r\ny en una cruz terminar.\r\n\r\nMás Dios a lo sumo le exaltó,\r\ny su nombre engrandeció\r\npara que ante su autoridad\r\ntoda rodilla se doble\r\ny toda lengua confiese\r\nque Jesús es el Señor.",
    },
    {
      id: "114",
      titulo: "Juntos hoy cantamos (Por su Gracia)",
      letra:
        "Juntos Hoy cantamos\r\nComo hermanos\r\nÉl nos unió\r\nHijos\r\nDe todo pueblo\r\nEste es el tiempo\r\nDe alzar la voz\r\n\r\nNo escucharé al miedo\r\nMi mirada pongo en el cielo\r\nEn tu gracia firme estoy\r\nTú me amas tal como soy\r\nValiente seré, yo sé\r\nMi esperanza está en Él\r\n\r\nCristo\r\nEl que salva\r\nLa esperanza\r\nEstá en Él\r\nCristo\r\nLuz del cielo\r\nRey eterno\r\nAmigo fiel\r\n\r\nNo escucharé al miedo\r\nMi mirada pongo en el cielo\r\nEn tu gracia firme estoy\r\nTú me amas tal como soy\r\nValiente seré, yo sé\r\nMi esperanza está en Él\r\n\r\nSe oirá\r\nEn los cielos\r\nEl sonido de\r\nNuestra adoración\r\nLas murallas\r\nCaen a sus pies\r\nAl oír su voz\r\nPor su gracia\r\nÉl nos limpió\r\nCuán bueno es Dios\r\nSu nombre es Cristo\r\n\r\nSe oirá\r\nEn los cielos\r\nEl sonido de\r\nNuestra adoración\r\nLas murallas\r\nCaen a sus pies\r\nAl oír su voz\r\nPor su gracia\r\nÉl nos limpió\r\nCuán bueno es Dios\r\nSu nombre es Cristo\r\n\r\nSe oirá\r\nEn los cielos\r\nEl sonido de\r\nNuestra adoración\r\nLas murallas\r\nCaen a sus pies\r\nAl oír su voz\r\nPor su gracia\r\nÉl nos limpió\r\nCuán bueno es Dios\r\nSu nombre es Cristo\r\n\r\nSe oirá\r\nEn los cielos\r\nEl sonido de\r\nNuestra adoración\r\nLas murallas\r\nCaen a sus pies\r\nAl oír su voz\r\nPor su gracia\r\nÉl nos limpió\r\nCuán bueno es Dios\r\nSu nombre es Cristo\r\n\r\nCristo\r\nEl que salva\r\nLa esperanza\r\nEstá en Él\r\nCristo\r\nLuz del cielo\r\nRey eterno\r\nAmigo fiel",
    },
    {
      id: "115",
      titulo: "Juntos sintiendo lo mismo",
      letra:
        "Juntos sintiendo lo mismo,\r\nunidos por Cristo Jesús.\r\nCaminando hacia un destino,\r\nel Señor es el camino,\r\nque nos lleva hacia la meta eternal\r\n\r\nJuntos amándonos todos, \r\ncomo nos ama el Señor.\r\nPerdonando las ofensas,\r\ncompartiendo los momentos,\r\nde alegrías y tristezas por igual.",
    },
    {
      id: "116",
      titulo: "Justificados pues por la fe.",
      letra:
        "Romanos 5:1\r\n\r\nJustificados pues por la fe \r\ntenemos paz para con Dios,\r\npor medio de nuestro Señor. \r\nJesucristo el Rey.\r\n\r\nPor quién también tenemos entrada por la fe,\r\na esa gracia en la cual estamos firmes.\r\n// Y nos gloriamos en la esperanza \r\nde la gloria de Dios,\r\ny no sólo eso sino también en la tribulación. //",
    },
    {
      id: "117",
      titulo: "La alegría está en el corazón ",
      letra:
        "La alegría está en el corazón \r\nde aquel que conoce a Jesús.\r\nLa verdadera paz está en aquel \r\nque ya conoce a Jesús.\r\nOh sentimiento más precioso \r\nque viene del Señor,\r\nes el amor de aquel que ya conoce a Jesús.\r\n\r\n¡Aleluya! ¡Aleluya! ¡Aleluya! ¡Aleluya!\r\nOh sentimiento más precioso \r\nque viene del Señor,\r\nes el amor de aquel que ya conoce a Jesús.",
    },
    {
      id: "118",
      titulo: "La Luna entristeció El Sol se apagó (Por siempre)",
      letra:
        "La Luna entristeció El Sol se apagó\r\nCayó El Salvador del mundo\r\n\r\nSu cuerpo en la cruz\r\nSu sangre derramó\r\nEl peso del pecado sobre Él\r\n\r\nAl fin Él suspiró\r\nEl cielo lo ignoró\r\nEl hijo descendió en tinieblas\r\n\r\nLa guerra en el seol\r\nLa muerte derrotó\r\nEl infierno fue al fin vencido\r\n\r\nLa tierra retumbó\r\nLa piedra Él quitó\r\nSu amor perfecto siempre vencerá\r\n\r\nEl Rey resucitó\r\nLa muerte derrotó\r\nGanando la victoria\r\n\r\nPor siempre a Él la gloria es\r\nPor siempre exaltado es\r\nPor siempre Él es digno\r\nVivo está, vivo está\r\n\r\nLa tierra retumbó\r\nLa piedra Él quitó\r\nSu amor perfecto siempre vencerá\r\n\r\nEl Rey resucitó\r\nLa muerte derrotó\r\nGanando la victoria\r\n\r\nPor siempre a Él la gloria es\r\nPor siempre exaltado es\r\nPor siempre Él es digno\r\nVivo está, vivo está\r\n\r\nCanto aleluya\r\nCanto aleluya\r\nCanto aleluya\r\nEl cordero ya venció\r\n\r\nPor siempre a Él la gloria es\r\nPor siempre exaltado es\r\nPor siempre Él es digno\r\nVivo está, vivo está",
    },
    {
      id: "119",
      titulo: "La sangre de Jesús me redimió (Por mi murió)",
      letra:
        "La sangre de Jesús me redimió\r\nMe perdonó y libertad me dio\r\nTu majestad esta dentro de mí\r\nPor siempre creo en Ti\r\nPor siempre creo en TI\r\n\r\nMe inundas con justicia y amor\r\nTu gracia cautivó mi corazón\r\nTu Espíritu me guía a la verdad\r\nTu amor no fallará\r\nTu amor no fallará\r\n\r\nPor amor Dios dio su hijo único Jesús\r\nPor mí murió me dio esperanza y salvación\r\nEn mi lugar su vida entregó en la cruz\r\nMe amo, me amo\r\nAún sin merecerlo",
    },
    {
      id: "120",
      titulo: "La sangre que en la cruz vertió",
      letra:
        "La sangre que en la cruz vertió \r\nfue por ti y para mí.\r\nLa sangre que me da la fuerza día a día \r\njamás perderá poder.\r\n\r\nAlcanza las más altas cumbres \r\ny fluye hasta el valle profundo.\r\nLa sangre que me da la fuerza día a día \r\njamás perderá poder.",
    },
    {
      id: "121",
      titulo: "La única razón de mi adoración.",
      letra:
        "La única razón de mi adoración, \r\neres Tu mi Jesús.\r\nEl único motivo para vivir, \r\neres tu mi Señor.\r\n\r\nLa única verdad está en Ti, \r\neres mi luz y mi salvación.\r\nMi único amor, eres tu Señor, \r\ny por siempre te alabaré.\r\n\r\nTu eres Todo Poderoso, \r\neres Santo y Majestuoso.\r\nEres fuerte, invencible, \r\ny no hay nadie como Tu.",
    },
    {
      id: "122",
      titulo: "Las cadenas de la muerte me quitó (Hay libertad)",
      letra:
        "Las cadenas de la muerte me quitó\r\nPara mí, ya no hay condenación\r\nHay libertad, libertad\r\n\r\nSiendo esclavo del pecado me libró\r\nEn la cruz compró mi redención\r\nY libertad, libertad\r\n\r\nRompió mis cadenas, me dio vida nueva\r\nY al fondo del mar echó mi maldad\r\nLavó mis pecados, y me ha perdonado\r\nSolo en el nombre de Jesús hay libertad\r\n\r\nYo proclamo al que en la cruz por mí murió\r\nY cambió mi duro corazón\r\nPor libertad, libertad\r\n\r\nEl poder de su evangelio me salvó\r\nY no me avergüenzo del Señor\r\nMi libertad, libertad\r\n\r\nRompió mis cadenas, me dio vida nueva\r\nY al fondo del mar echó mi maldad\r\nLavó mis pecados, y me ha perdonado\r\nSolo en el nombre de Jesús hay libertad\r\n\r\nAl que el Hijo, hace libre, es libre en verdad\r\nAl que el Hijo, hace libre, es libre en verdad\r\n\r\n/Rompió mis cadenas, me dio vida nueva\r\nY al fondo del mar echó mi maldad\r\nLavó mis pecados, y me ha perdonado\r\nSolo en el nombre de Jesús hay libertad/\r\nHay libertad",
    },
    {
      id: "123",
      titulo: "Majestad, gloria a su Majestad",
      letra:
        "¡Majestad, gloria a su Majestad! \r\nJesucristo merece todo honor.\r\nMajestad, reino y autoridad. \r\nSuyo el honor, suyo el poder ¡gloria a Él!\r\n\r\nExaltad, engrandeced, su santo nombre.\r\nAdorad, magnificad, a Cristo el Rey.\r\n¡Majestad, gloria a su majestad!\r\n// Cristo murió, resucitó, y hoy es Señor. //",
    },
    {
      id: "124",
      titulo: "Maravilloso Dios, Tú permaneces siempre fiel.",
      letra:
        "Maravilloso Dios, Tú permaneces siempre fiel.\r\nTu gloria y tu poder llenan mi vida de tu ser.\r\nSostenme con tu amor, \r\ncon la victoria y tu perdón,\r\ndesde mi corazón, te canto hoy.",
    },
    {
      id: "125",
      titulo: "Mas el Dios de toda gracia ",
      letra:
        "2ªPedro 5:10\r\n\r\nMas el Dios de toda gracia \r\nque nos llamó a su gloria eterna\r\nos perfeccione y afirme, \r\nfortalezca y establezca.\r\n// A Él sea la gloria, a Él sea el imperio \r\npor los siglos de los siglos. //\r\nAmén, amén, amén, si amén",
    },
    {
      id: "126",
      titulo: "Me gusta estar en tu casa.",
      letra:
        "Me gusta estar en tu casa \r\ncelebrando con tu pueblo.\r\nMe gusta darte honor con mis manos y mi voz.\r\n\r\nRecíbela, recíbela la alabanza que te canto,\r\nRecíbela, recíbela de adentro de mi corazón.\r\n\r\nTú eres omnipotente, no hay otro como Tú.\r\nCuan grandes son tus obras, te amo mi Jesús.",
    },
    {
      id: "127",
      titulo: "Me hace bien cada vez que me encuentro.",
      letra:
        "Me hace bien cada vez que me encuentro \r\ny canto con el pueblo de Cristo.\r\nMe hace bien cada vez que me encuentro \r\ny canto con el pueblo de Cristo.\r\n\r\nQue feliz que se ve cada hermano \r\ndando gloria a Dios, y siempre alabando.\r\nMe hace bien cada vez que me encuentro \r\ny canto con el pueblo de Cristo.",
    },
    {
      id: "128",
      titulo: "Me has tomado en tus brazos ",
      letra:
        "Salmos 73:23-24\r\n\r\nMe has tomado en tus brazos \r\ny me has dado salvación,\r\nde tu amor has derramado en mi corazón,\r\nNo sabré agradecerte lo que has hecho por mi,\r\nsolo puedo darte ahora mi canción,\r\n\r\nYo te doy gracias,\r\ngracias Señor, gracias mi Señor Jesús,\r\nGracias, muchas gracias señor, \r\noh gracias mi Señor Jesús\r\n\r\nEn la cruz diste tu vida,\r\nentregaste todo ahí, \r\nvida eterna regalaste al morir.\r\nPor tu sangre tengo entrada \r\nante el Trono Celestial,\r\npuedo entrar confiadamente ante Tí\r\n\r\nPara darte las gracias, gracias Señor,\r\noh gracias mi Señor Jesús,\r\ngracias Señor, gracias, muchas gracias señor,\r\noh gracias mi Señor Jesús.",
    },
    {
      id: "129",
      titulo: "Mejor es un día en la Casa de Dios",
      letra:
        "Mejor es un día en la Casa de Dios,\r\nque mil años lejos de El.\r\nPrefiero un rincón en la casa de Dios,\r\n// que todo el palacio de un rey. //\r\n\r\nVen conmigo a la Casa de Dios.\r\nCelebraremos juntos su amor.\r\nHaremos fiesta en honor \r\nde Aquél que nos amó.\r\nEstando aqui en la casa de Dios,\r\nAlegraremos su corazón, \r\nle brindaremos ofrendas,\r\nde obediencia y amor.\r\nEn la Casa de Dios.\r\n\r\nArde mi alma, arde mi amor,\r\npor Aquél que me dió la vida.\r\nPor eso le anhela mi corazón,\r\n// anhela de su compañía. //",
    },
    {
      id: "130",
      titulo: "Mi alma estaba rota y herida (Sublime gracia)",
      letra:
        "Mi alma estaba rota y herida\r\nPero Tu gracia la restauró\r\nManos vacías que Tú llenaste\r\nSoy libre en Ti, soy libre en Ti\r\n\r\nSublime gracia del Señor\r\nQue a un pecador salvó\r\nFui ciego mas\r\nHoy veo yo\r\nPerdido y Él me halló\r\n\r\nAhora puedo ver\r\nPuedo ver sus ojos de amor\r\nQuebrantado fue\r\nPara darnos su salvación\r\n\r\nTú no me juzgas por mis fracasos\r\nTú me aceptas tal como soy\r\nToma mi vida como vasija\r\nPara mostrar tu gloria en mí\r\n\r\nSublime gracia del Señor\r\nQue a un pecador salvó\r\nFui ciego mas\r\nHoy veo yo\r\nPerdido y Él me halló\r\nAhora puedo ver\r\nPuedo ver sus ojos de amor\r\nQuebrantado fue\r\nPara darnos su salvación\r\n\r\nSublime gracia del Señor\r\nQue a un pecador salvó\r\nFui ciego mas\r\nHoy veo yo\r\nPerdido y Él me halló\r\nAhora puedo ver\r\nPuedo ver sus ojos de amor\r\nQuebrantado fue\r\nPara darnos su salvación",
    },
    {
      id: "131",
      titulo: "Mi alma se saciará",
      letra:
        "Salmos 63:1\r\n\r\nMi alma se saciará \r\ntan sólo de tu amor y de tu verdad.\r\nEres Tú para mí, rocío matinal, consolador.\r\n\r\nDe mañana te adoraré \r\ny con mi canto te alabaré.\r\nAl ponerse el sol, mi voz elevaré por tu favor.\r\n\r\nEres todo en mi ser, \r\nmi apoyo, mi sostén y un amigo leal.\r\nEncontré salvación, ternura y protección \r\nen Ti Señor.",
    },
    {
      id: "132",
      titulo: "Mi anhelo, es buscar de día y noche.",
      letra:
        "Mi anhelo, es buscar de día y noche,\r\nde tu amor y la ternura de tu Espíritu, Señor.\r\nEn tu presencia hay plenitud de gozo,\r\nen tu presencia, delicias a tu diestra.\r\nPor siempre y para siempre me gozo\r\nen tu presencia.",
    },
    {
      id: "133",
      titulo: "Mi canción es alabanza",
      letra:
        "Mi canción es alabanza \r\nque ofrezco a mi Dios.\r\nMi deseo es adorarle con sincera devoción.\r\nNo me importa como cante, sino la intención,\r\nes ahora adorarle con el corazón.\r\nCon el corazón.\r\n\r\nMi alabanza es un canto \r\nde agradecimiento a Dios. \r\ntodo lo que tengo es suyo, \r\nno merezco nada yo.\r\nSin embargo aunque me olvide \r\nÉl no me olvidará,\r\ny si me marcho muy lejos de mí no se irá. \r\nDe mí no se irá\r\n\r\nAdorarle no es fácil, no le puedo engañar.\r\nÉl sabe mis intenciones, \r\nÉl sabe si hay humildad.\r\nNo es cantarle solamente sino es sentir\r\ncon todo el ser su presencia, es con El vivir.\r\nEs con Él vivir.",
    },
    {
      id: "134",
      titulo: "Mi Cristo, mi Rey.",
      letra:
        "Mi Cristo, mi Rey. \r\nNadie es como Tu.\r\nToda mi vida, quiero exaltar,\r\nlas maravillas de tu amor.\r\n\r\nConsuelo, refugio.\r\nTorre de fuerza y poder.\r\nTodo mi ser, lo que yo soy,\r\nnunca cese de adorar.\r\n\r\nCante al Señor toda la creación.\r\nHonra y poder, majestad sean al Rey.\r\nMontes caerán y el mar rugirá\r\nal sonar de tu nombre.\r\nCanto con goza al mirar tu poder.\r\nPor siempre yo te amaré y diré:\r\nIncomparables promesas me das Señor.",
    },
    {
      id: "135",
      titulo: "Mi Dios y Padre eterno Autor de la creación (El credo)",
      letra:
        "Mi Dios y Padre eterno Autor de la creación, poderoso\r\nTu Espíritu intervino\r\nEl Verbo se encarnó\r\nCristo, tú salvas\r\n\r\nCreo en nuestro Dios, el Padre y en Su Hijo Cristo, el Rey\r\nCreo en el Espíritu Santo. Dios, tres en uno es\r\nCreo que resucitaste, que nos levantarás\r\nCreo en el Nombre de Jesucristo\r\n\r\nMi juez y mi abogado Sufriste en la cruz\r\nMe has perdonado\r\nBajaste a las tinieblas Y en gloria y en poder te levantaste\r\n\r\nCreo en nuestro Dios, el Padre y en Su Hijo Cristo, el Rey\r\nCreo en el Espíritu Santo. Dios, tres en uno es\r\nCreo que resucitaste, que nos levantarás\r\nCreo en el Nombre de Jesucristo\r\n\r\n¡Creo en ti, Jesús!\r\n¡Creo que tú vivo estás!\r\n¡Creo que Jesús es el Señor!\r\n\r\nCreo en nuestro Dios, el Padre\r\nY en Su Hijo Cristo, el Rey\r\nCreo en el Espíritu Santo\r\nDios, tres en uno es\r\nCreo que resucitaste, que nos levantarás\r\n¡Creo en el Nombre de Jesucristo!\r\n\r\nCreo en la vida eterna\r\nCreo en la comunión\r\nCreo que tu pueblo es uno\r\nCreo en tu Iglesia, Dios\r\nCreo que resucitaremos y en gloria volverás\r\n¡Creo en el Nombre de Jesucristo!\r\n\r\nCreo en nuestro Dios, el Padre\r\nY en Su Hijo, Cristo el Rey\r\nCreo en el Espíritu Santo\r\nDios, tres en uno es\r\nCreo que resucitaste, que nos levantarás\r\n¡Creo en el Nombre de Jesucristo!\r\n¡Creo en el Nombre de Jesucristo!",
    },
    {
      id: "136",
      titulo: "Mi pensamiento eres Tú, Señor.",
      letra:
        "Mi pensamiento eres Tú, Señor, \r\nmi pensamiento eres Tú.\r\nMi pensamiento eres Tú, Señor, \r\nmi pensamiento eres Tú.\r\n\r\nPorque Tú, me has dado la vida, \r\nporque Tú, me has dado el existir,\r\nporque Tú, me has dado cariño, \r\nme has dado amor.",
    },
    {
      id: "137",
      titulo: "Mi primer amor eres Tú Jesús.",
      letra:
        "Mi primer amor eres Tú Jesús, \r\nmi alma anhela agradarte.\r\nMi primer amor eres Tú Jesús, \r\nmi alma anhela agradarte.\r\n// Quiero ser fiel a Ti Señor, \r\nquiero ser todo lo que esperas de mí,\r\ny no amarte de palabra, sino de verdad. //\r\nsino de verdad, sino de verdad.",
    },
    {
      id: "138",
      titulo: "Mi vergüenza me sepultó. (Glorioso Día)",
      letra:
        "Mi vergüenza me sepultó \r\nYo buscaba un salvador\r\nMas tu perdón, me liberó\r\n\r\nMuerto estaba en mi interior\r\nMe escondía de Ti, Señor\r\nMas tu perdón, me liberó\r\n\r\nTu voz me habló\r\nY a la muerte venció\r\nGlorioso día, tu sangre me rescató\r\nTu voz me habló\r\nY a la muerte venció\r\nGlorioso día, tu sangre me rescató\r\n\r\nAhora libre soy en tu amor\r\nEs tu gracia la que me sanó\r\nMas tu perdon, a mí me liberó\r\n\r\nTu voz me habló\r\nY a la muerte venció\r\nGlorioso día, tu sangre me rescató\r\nTu voz me habló\r\nY a la muerte venció\r\nGlorioso día, tu sangre me rescató\r\n\r\nDe mi pecado me rescataste\r\nEn tu gloria cadenas se rompen\r\nVivía solo y sin consuelo\r\nAhora soy ciudadano del cielo\r\n\r\nTú me sanaste estando herido\r\nJesús por tu amor yo respiro\r\nTengo futuro, ahora veo\r\nPorque tu voz me habló\r\n\r\nY a la muerte venció\r\nGlorioso día, tu sangre me rescató\r\nTu voz me habló\r\nY a la muerte venció\r\nGlorioso día, tu sangre me rescató",
    },
    {
      id: "139",
      titulo: "Mil veces te fallé, más tú fuiste fiel- (Desde mi interior)",
      letra:
        "Mil veces te fallé, más tú fuiste fiel\r\nTu gracia me levantó, me basta tu amor\r\nDios eterno, tu luz por siempre brillará\r\nY tu gloria, incomparable sin final\r\n\r\nSeñor, tu voluntad permanecerá\r\nEn ti me quiero perder en adoración\r\nDios eterno, tu luz por siempre brillará\r\nY tu gloria, incomparable sin final\r\n\r\nDe mi corazón te doy el control\r\nConsume todo mi interior, Dios\r\nJusticia y amor me abrazan, Señor\r\nTe amo desde mi interior\r\n\r\nDios eterno, tu luz por siempre brillará\r\nY tu gloria, incomparable sin final\r\nEl clamor de mi ser es contigo estar\r\nDesde mi interior clamará",
    },
    {
      id: "140",
      titulo: "Mira Señor Jesús.",
      letra:
        "Mira Señor Jesús, \r\néste es tu pueblo y quiere amarte,\r\nviene a ofrecerte hoy todo su amor.\r\nHoy no viene a buscar, sólo viene a entregar.\r\nMira Señor Jesús, sólo te quiere alabar.",
    },
    {
      id: "141",
      titulo: "Muéstrame tus caminos oh Señor.",
      letra:
        "Salmos 25:4– 5\r\n\r\nMuéstrame tus caminos oh Señor, \r\ny enséñame tus sendas mi Señor.\r\nEncamíname en tu verdad y enséñame \r\nporque Tú eres el Dios de mi salvación.\r\n\r\nEn Ti he esperado, en Ti esperaré. \r\nTodo el día y cada noche,\r\nmuy temprano en la mañana. \r\nEnséñame a esperar en Ti. En Ti Señor.",
    },
    {
      id: "142",
      titulo: "Muy poco falta ya",
      letra:
        "Muy poco falta ya (muy poco falta ya),\r\nmuy pronto volverás (muy pronto volverás).\r\nY nuestro corazón (y nuestro corazón),\r\nno deja de alabar (no deja de alabar).\r\nAquí estoy Señor (aquí estoy Señor),\r\nte espero en mi lugar (te espero en mi lugar).\r\nYa vendrás (ya vendrás)\r\na llevar (a llevar)\r\ntu iglesia al hogar (tu iglesia al hogar).",
    },
    {
      id: "143",
      titulo: "Nadie como Tú.",
      letra:
        "Nadie como Tú, \r\nnadie más llena mi ser como Tú.\r\nPor la eternidad podría  buscar, \r\nmás no hay nadie como Tú.",
    },
    {
      id: "144",
      titulo: "No existe bien para mí que esté fuera de ti.",
      letra:
        "No existe bien para mí que esté fuera de ti,\r\ngracias Dios mío, me siento feliz.\r\nCuán dulce amor Tú me diste, \r\nme asombras Señor,\r\ny hoy quiero darte lo poco que soy.\r\nPuedo sentir en el viento, la lluvia y el sol,\r\nque cada día me muestras tu amor.\r\nComo la arena en el mar, las aves al cantar\r\ny la pureza de un manantial.\r\nAsí eres dulce Jesús cuando me das tu amor,\r\ngracias Señor, gracias Señor, gracias Señor.",
    },
    {
      id: "145",
      titulo: "No existen más motivos, Señor. (A ti sea la Gloria)",
      letra:
        "No existen más motivos, Señor.\r\nVenimos hoy rendidos a Ti.\r\nLa única razón de nuestra adoración hoy, \r\neres Tú.\r\nElevamos olor fragante para Ti, para Ti.\r\n \r\nSólo a Ti sea la gloria, Señor,\r\nLa alabanza y la adoración,\r\nque toda lengua confiese que Tu eres el Señor.\r\nSólo a Ti sea la gloria, Señor.\r\nLa alabanza y la adoración,\r\nQue toda rodilla se postre, \r\nante el único Rey y Dios.",
    },
    {
      id: "146",
      titulo: "No hay amor como el de Cristo.",
      letra:
        "//No hay amor como el de Cristo,\r\nno hay amor como el amor que El da.\r\na mi ser su amor ha dado la libertad.//\r\nGloria al Señor\r\npor el incomparable amor de Dios\r\nGran amor \r\nque ha cubierto toda mi maldad.\r\nNo hay poder que se pueda\r\nigualar a su poder\r\nel poder de su amor.",
    },
    {
      id: "147",
      titulo: "No hay nada mejor que estar contigo.",
      letra:
        "No hay nada mejor que estar contigo,\r\nno hay nada mejor que buscar de tu presencia.\r\nNo hay nada mejor que estar contigo,\r\nno hay nada mejor que buscar de tu presencia.\r\nYo quiebro mi alabastro, lo derramo ante Ti\r\ny el perfume llena este lugar.\r\nQue suba este aroma con un cántico a Ti,\r\nmi Cristo, mi Rey, mi Salvador.",
    },
    {
      id: "148",
      titulo: "No hay problema muy grande.",
      letra:
        "No hay problema muy grande \r\nque Dios no resuelva.\r\nNo hay montaña muy alta \r\nque Dios no la mueva.\r\nNo hay tormenta muy negra \r\nque Dios no la calme.\r\nNo hay dolor ni angustia que Dios no sane.\r\n\r\nSi Él llevó las cargas del mundo \r\nsobre sus hombros,\r\nCristo tus cargas también las llevará.\r\nSi Él llevó las cargas del mundo \r\nsobre sus hombros,\r\nCristo tus cargas también las llevará.",
    },
    {
      id: "149",
      titulo: "Nos reunimos hoy aquí.",
      letra:
        "Nos reunimos hoy aquí, \r\npara adorar el nombre del Señor.\r\nDigno es Cristo el Señor.\r\n\r\nOlvidemos lo demás \r\npensemos sólo en adorarle a Él.\r\nDigno es Cristo el Señor",
    },
    {
      id: "150",
      titulo: "Nuestro canto expresa un sentir.",
      letra:
        "Nuestro canto expresa un sentir \r\ny es preciso que se pueda oír.\r\nEn las calles, en las plazas, \r\nen el campo, en la montaña,\r\na lo largo y a lo ancho del país.\r\n\r\nJesucristo es la verdad, \r\nnuestra fe y nuestro compromiso.\r\nÉl es la vida en plenitud, \r\nÉl es la fuerza Él es la luz,\r\nes la alegría que me alienta a continuar.\r\nEs el poder para cambiar, \r\ntoda una vida y darle más.\r\nJesucristo es la razón para vivir.\r\n\r\nEste es el momento para actuar \r\nen cada rincón cada lugar.\r\nnuestra patria necesita, actitudes decididas\r\nde cristianos que se jueguen de verdad.",
    },
    {
      id: "151",
      titulo: "Nuestros corazones (Jesucristo Basta)",
      letra:
        "Nuestros corazones\r\nInsaciables son\r\nHasta que conocen\r\nA su salvador\r\n\r\nTal y como somos, nos amó\r\nHoy, nos acercamos sin temor\r\n\r\nÉl es el agua que al beber\r\nNunca más tendremos sed\r\nJesucristo basta\r\nJesucristo basta\r\n\r\nMi castigo recibió\r\nY Su herencia me entregó\r\nJesucristo basta\r\nJesucristo basta.\r\n\r\nFuimos alcanzados\r\nPor Su gran amor\r\nCon brazos abiertos\r\nNos recibe hoy\r\n\r\nTal y como somos, nos amó\r\nHoy, nos acercamos sin temor\r\n\r\nÉl es el agua que al beber\r\nNunca más tendremos sed\r\nJesucristo basta\r\nJesucristo basta\r\n\r\nMi castigo recibió\r\nY Su herencia me entregó\r\nJesucristo basta\r\nJesucristo basta\r\n\r\nYeh, uoh\r\nJesucristo basta\r\nUoh, uoh\r\n\r\nTal y como somos, nos amó\r\nHoy, nos acercamos sin temor, sin temor\r\nTal y como somos, nos amó,\r\nHoy, nos acercamos sin temor\r\n\r\nY él es el agua que al beber\r\nNunca más tendremos sed\r\nJesucristo basta\r\nJesucristo basta\r\n\r\nMi castigo recibió\r\nY Su herencia me entregó\r\nJesucristo basta\r\nJesucristo basta.\r\n\r\nAhora hay un futuro\r\nY esperanza fiel\r\nEn Su amor, confiamos\r\nHay descanso en Él.",
    },
    {
      id: "152",
      titulo: "Oh cuánto amo la cruz de Jesús.",
      letra:
        "Oh cuánto amo la cruz de Jesús \r\ny la sangre que en ella vertió.\r\nNo sólo lava mis pecados, \r\nmás transforma toda mi alma\r\na la imagen de aquel que me amó.\r\n\r\nGloriaréme sólo en la cruz, \r\nen sus triunfos mi gozo será.\r\nY en el día de eterna salud, \r\nmi corona Jesús me dará.\r\n\r\nNo sólo lava mis pecados, \r\nmás transforma toda mi alma\r\na la imagen de aquel que me amó.",
    },
    {
      id: "153",
      titulo: "Oh Señor, ya se abrieron las puertas.",
      letra:
        "Oh Señor, ya se abrieron las puertas. \r\nOh Señor, venimos a adorar.\r\nA cantar y a alabar tu nombre \r\nporque tu presencia aquí es realidad.\r\nAleluya, te adoramos Señor. \r\nAleluya, te adoramos Señor.",
    },
    {
      id: "154",
      titulo: "Padre Dios, es tu pueblo que viene alabarte.",
      letra:
        "Padre Dios, es tu pueblo que viene alabarte.\r\nPadre Dios es tu pueblo que viene a adorar.\r\nPadre Dios, es tu pueblo que viene a cantarte.\r\nEs tu pueblo y sólo quiere amarte \r\ndesde ahora y por la eternidad.\r\n\r\nPadre Dios Omnipotente, \r\nPadre Dios el Rey de gloria,\r\nEs tu pueblo y sólo quiere amarte \r\ndesde ahora y por la eternidad.",
    },
    {
      id: "155",
      titulo: "Pertenezco a Ti Señor Jesús.",
      letra:
        "Pertenezco a Ti Señor Jesús,\r\ny no hay nada que pueda borrar\r\nese amor que un día Tú pusiste dentro de mí\r\ny que ahora quiero recordar.\r\nHoy mi vaso cae ante Ti,\r\nderramado a tus pies, Señor.\r\nA rogarte tu perdón por tanta rebelión\r\nque impide que pueda darte mi amor.\r\nAlcanza oh Dios, mi corazón, rómpelo y líbralo\r\nQue Tú puedas a través de mí, \r\nreflejar tu gloria y tu amor.",
    },
    {
      id: "156",
      titulo: "Por amor vino a este mundo.",
      letra:
        "Por amor vino a este mundo.\r\nPor amor se humanó.\r\nPor amor vino al calvario,\r\nJesucristo, mi Señor.\r\nPor amor vertió su sangre,\r\npor amor no vaciló.\r\nPor amor sufrió la culpa,\r\nde este mundo pecador.\r\n\r\nSólo Cristo salva, salva, Cristo salva hoy.\r\nAbrele la puerta de tu corazón.\r\nSólo Cristo salva, salva, Cristo salva hoy.\r\nCambiará tu vida, te dará su amor.",
    },
    {
      id: "157",
      titulo: "Por mucho tiempo busqué (Cantaré de tu amor)",
      letra:
        "Por mucho tiempo busqué, \r\nuna razón de vivir.\r\nEn medio de mil preguntas, \r\ntu amor me respondió.\r\n\r\nAhora veo la luz,  y ya no tengo temor.\r\nTu reino vino a mi vida,  y ahora vivo para Ti.\r\n\r\nCantaré de tu amor, \r\nrendiré mi corazón ante Ti.\r\nTu serás mi pasión, \r\ny mis pasos se guiarán por tu voz.\r\nMi Jesús y mi Rey, de tu gran amor cantaré.",
    },
    {
      id: "158",
      titulo: "Por todo tu amor te doy gracias.",
      letra:
        "Por todo tu amor te doy gracias, \r\npor todo aquello que harás,\r\npor tantas promesas, por ser mi Señor,\r\ntu amor me ha traído hasta aquí, \r\ny hoy te doy gracias.\r\n\r\nTe doy gracias, gracias, Señor. \r\nTe doy gracias, gracias, Señor.\r\nTe doy gracias, gracias.\r\nGracias por darme total libertad, \r\ngracias por todo pecado borrar. \r\nTe doy gracias, oh Cristo gracias,\r\nhoy te doy gracias, gracias.",
    },
    {
      id: "159",
      titulo: "Por tu amor, Tú diste la vida.",
      letra:
        "Por tu amor, Tú diste la vida. \r\nPor tu amor, salvaste la mía.\r\nSoy tu deudor, deudor de por vida, \r\ny quiero servirte, servir por amor.",
    },
    {
      id: "160",
      titulo: "Porque para siempre, Dios, tu misericordia es.",
      letra:
        "Porque para siempre, Dios, tu misericordia es.\r\nPorque para siempre, Dios, tu misericordia es.\r\nMejor que la vida es, mi alma lo sabe bien.\r\nPorque para siempre, Dios, tu misericordia es.\r\nMás vasta que el ancho mar, \r\nmás alta que el cielo está.\r\nPorque para siempre, Dios, tu misericordia es.",
    },
    {
      id: "161",
      titulo: "Puedo confiar en el Señor, no me va a fallar.",
      letra:
        "Puedo confiar en el Señor, no me va a fallar.\r\nPuedo confiar en el Señor, no me va a fallar.\r\nSi el sol llegara a oscurecer, \r\ny a no brillar ya nunca más\r\nigual confío en el Señor, no me va a fallar.\r\n\r\nPuedo descansar, puedo descansar.\r\nPues en su amor, Él me guardará.\r\nSi el sol llegara a oscurecer, \r\ny a no brillar ya nunca más\r\nigual confío en el Señor, no me va a fallar.",
    },
    {
      id: "162",
      titulo: "Puro y santo quiero ser.",
      letra:
        "Puro y santo quiero ser,\r\ntu voluntad obedecer.\r\nCon tu luz enséñame,\r\npor tu amor transfórmame.\r\n\r\nSanto, Santo, Santo Dios.\r\nOh, Santo, Santo, Santo Dios.\r\n\r\nGrande eres, pequeño soy,\r\nalabanzas, Señor te doy.\r\nTu eres Rey sobre mi existir,\r\nmi confianza la tengo en Ti.",
    },
    {
      id: "163",
      titulo: "Que bueno es alabarte o Jehová",
      letra:
        "Salmos 92:1– 2\r\n\r\n¡Que bueno es alabarte o Jehová! \r\nY cantar a tu nombre.\r\n¡Que bueno es alabarte o Jehová! \r\nY cantar a tu nombre.\r\nAnunciar por la mañana tu misericordia \r\ny tu fidelidad cada noche.\r\nAnunciar por la mañana tu misericordia \r\ny tu fidelidad cada noche.",
    },
    {
      id: "164",
      titulo: "Que dulce es estar en tu presencia",
      letra:
        "Salmos 27:4\r\n\r\nQue dulce es estar en tu presencia\r\nContemplando la hermosura de tu santidad\r\nY reconociendo que tu eres Señor\r\nTodopoderoso y el Gran Yo Soy.\r\n\r\nSanto, santo.\r\nMi corazón se une a la melodía angelical.",
    },
    {
      id: "165",
      titulo: "Que sería de mí",
      letra:
        "Que sería de mí si no me hubieras perdonado. \r\nDonde estaría hoy\r\n si no me hubieras alcanzado. \r\nTendría un vacío en mi corazón. \r\nVagaría sin rumbo y sin dirección. \r\n\r\n//Si no fuera por tu gracia y por tu amor.// \r\n\r\nSería como un pájaro herido \r\nque se muere en el suelo. \r\nSería como un ciervo que brama \r\npor agua en el desierto. \r\n\r\n//Si no fuera por tu gracia y por tu amor.// ",
    },
    {
      id: "166",
      titulo: "Que tu amor Señor hoy vuelva a florecer",
      letra:
        "Que tu amor Señor hoy vuelva a florecer,\r\nquiero hoy sentirlo en mi ser.\r\nEs que mi vida Jesús, necesita de Ti,\r\nSeñor, ven a vivir en mí.\r\n\r\nMis alabanzas oh Dios, sólo tienen valor\r\nsi tu estás en mí, Señor.",
    },
    {
      id: "167",
      titulo: "Queremos ser un pueblo fuerte en Ti.",
      letra:
        "Queremos ser un pueblo fuerte en Ti,\r\nque nuestros ojos de tu amor no se separen.\r\nY no permitas que tu obra \r\nacabe como empezó,\r\ndanos las fuerzas para luchar Señor.\r\n\r\nY toma nuestros corazones sólo para ti\r\ny cámbialos Señor por tu amor.\r\nY toma nuestros corazones sólo para ti\r\ny cámbialos Señor por tu amor.",
    },
    {
      id: "168",
      titulo: "¿Quién nos separara del amor de cristo?",
      letra:
        "¿Quién nos separara del amor de cristo?\r\n¿Quién nos alejara del amor de nuestro Dios?\r\n\r\nNi tribulación, ni angustia\r\nPeligro, hambre o desnudez.\r\nNos podrá separar de su amor.\r\n\r\nNi lo alto, ni lo profundo, \r\nNi ninguna otra cosa creada,\r\nNos podrá separar de su amor.\r\n\r\nEn Cristo somos más que vencedores.\r\nEn Cristo somos más que ganadores.\r\nNi la vida, ni la muerte, podrá separarnos.\r\nDel amor de Dios, en Cristo Jesús.",
    },
    {
      id: "169",
      titulo: "¿Quién rompe el poder del pecado? (Gracia Sublime es)",
      letra:
        "¿Quién rompe el poder del pecado?\r\nSu amor es fuerte y poderoso\r\nEl Rey de Gloria el Rey de Majestad\r\n\r\nConmueve al mundo con su estruendo\r\nY nos asombra con maravillas\r\nEl Rey de Gloria el Rey de Majestad\r\n\r\nGracia sublime es perfecto es tu amor\r\nTomaste mi lugar cargaste tu mi cruz\r\nTu vida diste ahí y ahora libre soy\r\nJesús te adoro por lo que hiciste en mí\r\n\r\nPusiste en orden todo el caos\r\nNos adoptaste como tus hijos\r\nEl Rey de gloria el Rey de Majestad\r\n\r\nEl que gobierna con su justicia\r\nY resplandece con su belleza\r\nEl Rey de Gloria el Rey de Majestad\r\n\r\nGracia sublime es perfecto es tu amor\r\nTomaste mi lugar cargaste tu mi cruz\r\nTu vida diste ahí y ahora libre soy\r\nJesús te adoro por lo que hiciste en mí\r\n\r\n//Digno es el Cordero de Dios\r\nDigno es el Rey que la muerte venció//\r\n\r\nGracia sublime es perfecto es tu amor\r\nTomaste mi lugar cargaste tu mi cruz\r\nTu vida diste ahí y ahora libre soy\r\nJesús te adoro por lo que hiciste en mí",
    },
    {
      id: "170",
      titulo: "Quién sino el Señor (Dios poderoso)",
      letra:
        "¿Quién sino el Señor\r\nLas estrellas creó\r\nY su luz limitó?\r\n\r\n¿Quién sino el Señor\r\nSol y Luna formó\r\nMovimiento les dio?\r\n\r\n¿Quién sino el Señor\r\nHace la lluvia venir\r\nTruenos rugir?\r\nTus obras grandes son\r\n\r\nDios poderoso\r\nTú gobiernas la creación\r\nCon tu palabra, Señor\r\nTe exaltaremos\r\n\r\nDios poderoso\r\nDe ti canta la creación\r\nLlenas todo tú, Señor\r\nTe exaltaremos\r\nPor siempre y siempre, oh Dios\r\nOoh, ooh\r\n\r\n¿Quién sino el Señor\r\nHa soñado en el plan\r\nPara al hombre salvar?\r\n\r\n¿Quién sino el Señor\r\nLimpiará al pecador\r\nCon su sangre y amor?\r\n\r\n¿Quién sino el Señor\r\nPuede dar vida y salvar\r\nPor una cruz?\r\nTus planes grandes son\r\n\r\nTodas las cosas\r\nVienen de ti y por ti\r\nOh gran yo soy\r\nTodo es tuyo\r\nY para ti, oh Señor\r\nOh gran yo soy\r\n\r\nTe exaltaremos\r\nPor siempre y siempre oh Dios\r\nOoh, ooh\r\nPor siempre y siempre oh Dios\r\nOoh, ooh",
    },
    {
      id: "171",
      titulo: "Quiero conocerte cada día más a ti",
      letra:
        "Quiero conocerte cada día más a ti\r\nEstar en tu presencia y adorar\r\nRevelanos tu gloria\r\nDeseamos ir mucho más en Ti.\r\nQueremos tu presencia Jesús\r\n\r\nAl que está sentado en el trono\r\nAl que vive para siempre y siempre\r\nSea la gloria, sea la honra y el poder\r\nSea la gloria, sea la honra y el poder",
    },
    {
      id: "172",
      titulo: "Quiero elevar mi alma a tu presencia santa",
      letra:
        "Quiero elevar mi alma a tu presencia santa,\r\ncada nueva mañana tu bondad entregas.\r\nPara escuchar tu voz que guiará mi vida,\r\npara sentir tus manos dirigiendo las mías.\r\n\r\nHazme oír Señor tu misericordia,\r\nhazme ver el camino por doquiera que vaya.\r\nDirige Tú mi vida, alumbra las veredas,\r\nporque a ti Señor he elevado mi alma.\r\n\r\nQue cada nuevo día Señor con tu palabra,\r\nconduzcas mis acciones, \r\nmis dichos y miradas.\r\nRecibas hoy y siempre, mi gratitud y honra\r\ny cante mi corazón, nuevas son cada mañana.",
    },
    {
      id: "173",
      titulo: "Quiero entender, que es lo que mueve tu fiel corazón.",
      letra:
        "Quiero entender, \r\nQue es lo que mueve tu fiel corazón,\r\nY lo que esperas de mi Buen Señor,\r\nPara entregarlo.\r\n Quiero expresar \r\nEsas palabras que quieres oir,\r\nLa oración que me acerque a Tí,\r\nArrepentido.\r\n\r\nQuiero agradar tu corazón,\r\nQuiero clamar por tu perdón.\r\n\r\nDéjanos empezar de nuevo, \r\ny valorar la salvación.\r\nentregarnos por completo,\r\nen adoración.\r\nSi nos desviamos te pedimos\r\nque nos permitas regresar, \r\na expresarte nuevamente \r\nque se trata de Tí.\r\n \r\nSe trata de Tí\r\nSe trata de Tí\r\nSe trata de Tí\r\nSe trata de tu amor por mi, Jesús.\r\nSe trata de Ti",
    },
    {
      id: "174",
      titulo: "Quiero estar adorándote Señor",
      letra:
        "// Quiero estar adorándote Señor,\r\npostrado hoy ante tu altar. //\r\n// Cantando Santo, Santo, Santo es el Señor.\r\nPoderoso para siempre reinarás. //",
    },
    {
      id: "175",
      titulo: "Quiero estar al abrigo del Altísimo.",
      letra:
        "Salmos 91:1– 2\r\n\r\nQuiero estar al abrigo del Altísimo \r\ny morar a la sombra de mi Dios;\r\nhabitar para siempre en tu presencia, \r\nquiero junto a Ti estar.\r\nEsperanza mía eres Tú, castillo fuerte eres Tú,\r\nmi Dios en quien confiaré. \r\nQuiero junto a Ti estar.",
    },
    {
      id: "176",
      titulo: "Quiero expresar mi gratitud",
      letra:
        "Quiero expresar mi gratitud,\r\na Ti que me has dado todo.\r\nuna oración no bastaría,\r\nni el tiempo de toda una vida.\r\nEs más que palabras,\r\ny es más que una canción.\r\n\r\nQuiero vivir agradecido en todo lo que soy.\r\nQue haya siempre la pasión \r\nde amarte con mi vida entera.\r\nPorque es más que palabras, \r\ny es más que una canción.",
    },
    {
      id: "177",
      titulo: "Alabaré al Señor.",
      letra:
        "Recordaré aquella cruz\r\nDonde sangró y murió Jesús\r\nHeridas que por mí sufrió\r\nCrucificado salvador\r\n\r\nSu cuerpo envuelto en dolor\r\nEn el sepulcro reposó\r\nEn soledad él se quedó\r\nJesús, Mesías, el Señor\r\n\r\nAlabaré al Señor, mi Dios\r\nTu nombre yo proclamaré\r\nEternamente te cantaré\r\nSeñor, Señor, mi Dios\r\n\r\nPero al tercer amanecer\r\nUn gran estruendo se escuchó\r\n¿Dónde está muerte tu aguijón?\r\nCristo Jesús resucitó\r\n\r\nAlabaré al Señor, mi Dios\r\nTu nombre yo proclamaré\r\nEternamente te cantaré\r\nSeñor, Señor, mi Dios\r\n\r\nMuy pronto él regresará\r\nSu rostro resplandecerá\r\nEn su presencia estaré\r\nY cara a cara le veré\r\n\r\nAlabaré al Señor, mi Dios\r\nTu nombre yo proclamaré\r\nEternamente te cantaré\r\nSeñor, Señor, mi Dios\r\n\r\nAlabaré al Señor, mi Dios\r\nTu nombre yo proclamaré\r\nEternamente te cantaré\r\nSeñor, Señor, mi Dios\r\nSeñor, Señor, mi Dios",
    },
    {
      id: "178",
      titulo: "Renuévame.",
      letra:
        "Renuévame Señor Jesús, \r\nya no quiero ser igual.\r\nRenuévame Señor Jesús, \r\npon en mí tu corazón.\r\nPorque todo lo que hay dentro de mí, \r\nnecesita ser cambiado Señor.\r\nPorque todo lo que hay dentro de mi corazón, necesita más de Ti.",
    },
    {
      id: "179",
      titulo: "Resucitó.",
      letra:
        "Resucitó, resucitó, \r\ny ya no hay nada que lo pueda vencer.\r\nResucitó, resucitó, \r\nno hay enemigo que lo pueda destruir.\r\nÉl es la fuerza, es el poder, \r\ny juntos le adoramos con todo nuestro ser.\r\nÉl es la fuerza, es el poder, \r\ny juntos le adoramos con todo nuestro ser.",
    },
    {
      id: "180",
      titulo: "Roca eterna, verdadero y fiel.",
      letra:
        "2ªSamuel 22:2– 3\r\n\r\nRoca eterna, verdadero y fiel, \r\nTú prometes cumplir con tu palabra.\r\nRoca eterna, eres justo y fiel, \r\nmi confianza siempre en Ti pondré.\r\n\r\nMi refugio contra la tormenta, \r\nla torre de mi protección,\r\nfortaleza en dificultades, \r\nmi escondedero eres Tú.\r\nSanas todas mis enfermedades, \r\nconsuelas todo mi dolor,\r\neres fuerza al sentirme débil, \r\nmi ayuda en la necesidad.",
    },
    {
      id: "181",
      titulo: "Sendas Dios hará",
      letra:
        "Sendas Dios hará, donde piensas que no hay.\r\nÉl obra de maneras que no podemos entender.\r\nÉl me guiará, a su lado estaré, \r\namor y fuerza me dará,\r\nun camino hará donde no lo hay.\r\n\r\nPor caminos en la soledad me guiará \r\ny agua en el desierto encontraré.\r\nLa tierra pasará, su palabra eterna es. \r\nÉl hará algo nuevo hoy.",
    },
    {
      id: "182",
      titulo: "Señor ¿Quién entrará?",
      letra:
        "Señor ¿Quién entrará a tu santuario \r\npara adorar?\r\nSeñor ¿Quien entrara a tu santuario \r\npara adorar?\r\nEl limpio de manos, de corazón puro \r\ny sin vanidades, que sepa amar.\r\nEl limpio de manos, de corazón puro \r\ny sin vanidades, que sepa amar.\r\n\r\nSeñor, yo quiero entrar a tu santuario \r\npara adorar.\r\nSeñor, yo quiero entrar a tu santuario \r\npara adorar.\r\nDame manos limpias y un corazón puro \r\ny sin vanidades, que sepa amar.\r\nDame manos limpias y un corazón puro \r\ny sin vanidades, que sepa amar.",
    },
    {
      id: "183",
      titulo: "Cuán grande es Él.",
      letra:
        "Señor mi Dios, al contemplar los cielos\r\nel firmamento y las estrellas mil.\r\nAl oír tu voz en los potentes truenos\r\ny ver brillar el sol en su cénit.\r\n\r\nMi corazón entona la canción.\r\nCuán grande es Él, cuán grande es Él.\r\nMi corazón entona la canción.\r\nCuán grande es Él, cuán grande es Él.\r\n\r\nAl recorrer los montes y los valles\r\ny ver las bellas flores al pasar.\r\nAl escuchar el canto de las aves\r\ny el murmurar del claro manantial.\r\n\r\nCuando recuerdo del amor divino\r\nque desde el cielo al Salvador envió.\r\nAquel Jesús que por salvarme vino\r\ny en una cruz sufrió, por mi y murió.\r\n\r\nCuando el Señor me llame a su presencia\r\nal dulce hogar, al cielo de esplendor\r\nle adoraré cantando la grandeza\r\nde su poder y su infinito amor.",
    },
    {
      id: "184",
      titulo: "Señor, Señor Jesús.",
      letra:
        "Señor, Señor Jesús, \r\nyo sé que Tú eres grande,\r\nyo sé que Tú eres fuerte Señor, Señor Jesús\r\n\r\nGloria a Ti yo daré, gloria. \r\nLo haré eternamente.\r\nTe daré por siempre gloria Señor, Señor Jesús.",
    },
    {
      id: "185",
      titulo: "Ser como Cristo mi sólo anhelo es.",
      letra:
        "Ser como Cristo mi sólo anhelo es.\r\nEn mi pensar y obrar, aspiro ser como Él.\r\nSer como Cristo mi sólo anhelo es.\r\nY por su Espíritu como Él seré.",
    },
    {
      id: "186",
      titulo: "Ven ante su trono.",
      letra:
        "Si abatido y dolido estás\r\nY cansado del peso cargar\r\nCristo nos llama\r\nSi al final del camino estás\r\nSin saber hacia dónde mirar\r\nCristo nos llama\r\n\r\nVen ante su trono\r\nEl padre te recibirá\r\nCon sangre preciosa\r\nJesús borró nuestra maldad!\r\n\r\nDeja atrás tu vergüenza y pesar\r\nVen a El ya no esperes más\r\nCristo nos llama\r\nTrae toda tristeza al altar\r\nNueva Vida Jesús te dará\r\nCristo nos llama!\r\n\r\nVen ante su trono\r\nEl padre te recibirá\r\nCon sangre preciosa\r\nJesús borró nuestra maldad\r\nVen ante su trono\r\nEl Padre te recibirá\r\nCon sangre preciosa\r\nJesús borró nuestra maldad!\r\n\r\nOh cuán hermoso\r\nEs nuestro Salvador\r\nCanta aleluya, Cristo vive\r\nNadie es más grande\r\nSolo Él es el Señor\r\nCanta aleluya, Cristo vive\r\nOh cuán hermoso\r\nEs nuestro Salvador\r\nCanta aleluya, Cristo vive\r\nNadie es más grande\r\nSolo Él es el Señor\r\nCanta aleluya, Cristo vive\r\n\r\nVen ante su trono\r\nCon brazos abiertos El está\r\nCon sangre preciosa\r\nJesús borró nuestra maldad\r\nVen ante su trono\r\nEl Padre te recibirá\r\nCon sangre preciosa\r\nJesús borró nuestra maldad!\r\nHasta un día llegar frente a él\r\nDe su amor a todos contaré",
    },
    {
      id: "187",
      titulo: "Siempre estarás a mi lado",
      letra:
        "Efesios 2: 13– Salmos 145:18\r\n\r\nSiempre estarás a mi lado\r\nCon  todo tu amor me cubrirás\r\nMientras yo, tome  tu mano,\r\nSeguro yo voy a estar.\r\n\r\n//Guía mis caminos corrige mis pasos\r\nNo quiero fallarte, Señor Jesús\r\nYo voy alabarte mientras tenga vida\r\nY cuando se acabe por la eternidad.//",
    },
    {
      id: "188",
      titulo: "Siempre te alabaré.",
      letra:
        "Siempre te alabaré, siempre te alabaré,\r\nhay penas, problemas, \r\nque quieren que no sea así.\r\nIgual te alabaré, igual te alabaré,\r\nTú eres mi Rey, mientras viva yo no cambiaré.",
    },
    {
      id: "189",
      titulo: "Siento tu amor que viene sobre mí.",
      letra:
        "Siento tu amor que viene sobre mí, \r\nsiento que una nube desciende.\r\nSiento tu amor que viene sobre mí, \r\nsiento que una nube desciende.\r\nLlévame a tu hogar, arriba, \r\nque mi lámpara esté siempre encendida.\r\nQuiero adorarte, bendecirte Señor.",
    },
    {
      id: "190",
      titulo: "Soberano, soberano.",
      letra:
        "Soberano, soberano, \r\ncielo y tierra están en tus manos.\r\nEl trono y la corona tuyos son, \r\nsomos tus siervos, Tú eres el amo. Señor.\r\nVen, cantemos a Jesús, \r\nexaltemos a nuestro Salvador.\r\nAdórale, alábale, es digno nuestro Rey.\r\nHosanna, hosanna, hosanna al Señor.\r\nHosanna, hosanna, hosanna al Señor.",
    },
    {
      id: "191",
      titulo: "Sobre los montes y el mar.",
      letra:
        "Sobre los montes y el mar\r\ntu amor aún llega hasta mí \r\ny abriré mi corazón \r\nme entregaré todo a Tí.\r\n\r\nMe alegra estar en la verdad\r\ny alzaré mi voz, Señor\r\ncantando siempre del amor que Tú me diste.\r\n\r\nCantaré de tu amor por siempre (4 veces)\r\n\r\nSobre los montes y el mar\r\ntu amor aún llega hasta mí\r\ny abriré mi corazón\r\nme entregaré todo a Tí.\r\n\r\nMe alegra estar en la verdad \r\nfeliz estoy que estés en mí.\r\nDe Ti yo cantaré por tu misericordia.\r\n\r\nCantaré de tu amor por siempre (4 veces)\r\n\r\nQuiero celebrarte y cantar a Tí en amor.\r\nSi el mundo te conociera\r\ncantaría igual ,\r\ncomo lo hacemos hoy.",
    },
    {
      id: "192",
      titulo: "Solamente a Dios ¡gloria a Dios!",
      letra:
        "Solamente a Dios ¡gloria a Dios!\r\nNuestra voz se eleve al cielo loando al Señor.\r\nSolamente a Dios ¡gloria a Dios!\r\nNuestra voz se eleve al cielo loando al Señor.",
    },
    {
      id: "193",
      titulo: "Solamente en Cristo, solamente en Él.",
      letra:
        "Hechos 4:12\r\n\r\nSolamente en Cristo, solamente en Él.\r\nLa salvación se encuentra en Él.\r\nNo hay otro nombre dado a los hombres,\r\nsolamente en Cristo, solamente en Él.",
    },
    {
      id: "194",
      titulo: "Sólo el poder de Dios puede cambiar tu ser.",
      letra:
        "Sólo el poder de Dios puede cambiar tu ser,\r\nlas pruebas yo te doy, \r\nÉl me ha cambiado a mí.\r\nNo ves que soy feliz sirviendo al Señor.\r\nNueva criatura soy, nueva soy.",
    },
    {
      id: "195",
      titulo: "Solo por tu misericordia que hoy libre soy.",
      letra:
        "//Solo por tu misericordia que hoy libre soy\r\nNo hay nadie en toda la tierra como tu Señor.\r\nMás fuerte que los rayos del sol\r\nasí es el poder de tu amor y solo tu gracia liberó\r\nmi corazón//\r\n\r\nSolo en Ti salvo soy,\r\nlleno esta mi corazón.\r\nEs tu perdón lo que mi vida trasformó\r\nDios guíame y muéstrame \r\nyo de tu mano no me soltare\r\nYo confío en ti, yo confío en ti, solo en Ti señor",
    },
    {
      id: "196",
      titulo: "Somos el pueblo de Dios.",
      letra:
        "1ªPedro 2:9– 10\r\n\r\nSomos el pueblo de Dios,\r\nSomos un pueblo especial.\r\nLlamados para anunciar, las virtudes de Aquel\r\nQue nos llamó a su luz.\r\nSomos el pueblo de Dios\r\nSu sangre nos redimió\r\nY su Espíritu dio para darnos poder\r\nY ser testigos de Él.\r\n\r\nY llevaremos su gloria a cada pueblo y nación.\r\nTrayéndoles esperanza y nuevas de salvación.\r\nY su amor nos impulsa, \r\nno nos podemos callar.\r\nAnunciaremos al mundo, de su amor y verdad.",
    },
    {
      id: "197",
      titulo: "Soy feliz, soy feliz, porque Cristo me salvó.",
      letra:
        "Soy feliz, soy feliz, porque Cristo me salvó,\r\nahora vivo con Jesús, \r\nporque Él es mi redentor.\r\nVolver atrás no quiero más,\r\nno hay nada que el mundo pueda dar.\r\nSoy feliz, soy feliz, porque Cristo me salvó.",
    },
    {
      id: "198",
      titulo: "Tal como soy.",
      letra:
        "Tal como soy Señor,\r\nsin nada que ofrecer más que mi canción.\r\nNo tengo mas que darte, \r\npues todo es tuyo Señor.\r\nTal como soy Señor,\r\nsin nada que entregar más que el corazón.\r\nMe rindo todo a ti;\r\ntómame Señor, tal como soy.\r\n\r\nAcéptame como ofrenda de amor;\r\ncomo un sacrificio agradable en tu honor.\r\nGrato perfume yo quiero ser Señor. ",
    },
    {
      id: "199",
      titulo: "Tan cerca de mí",
      letra:
        "/Tan cerca de mí, tan cerca de mí,\r\nque hasta lo puedo tocar, Jesús está aquí./\r\n\r\nLe hablaré sin miedo al oído,\r\nle contaré cosas que hay en mí.\r\nY que sólo a Él le interesarán\r\npues es más que amigo, para mí.\r\n\r\nTan cerca de mí, tan cerca de mí,\r\nque hasta lo puedo tocar, Jesús está aquí.\r\n\r\nMírale a tu lado caminando\r\ny paseándose en la multitud.\r\nMuchos ciegos van, porque no le ven\r\nciegos de ceguera espiritual.\r\nTan cerca de ti, tan cerca de ti,\r\nque hasta le puedes tocar, Jesús esta aquí.\r\n\r\nTan cerca de mí, tan cerca de mí,\r\nque hasta lo puedo tocar, Jesús está aquí.",
    },
    {
      id: "200",
      titulo: "Te alabaré, no importa como esté.",
      letra:
        "Te alabaré, no importa como esté. \r\nTe alabaré, en ti yo tengo fe.\r\nAunque los ojos dejen de brillar,\r\naunque la voz se acabe y no quiera cantar.\r\nAunque los ojos dejen de brillar,\r\naunque la voz se acabe y no quiera cantar.\r\n\r\nTe serviré, no importa como esté. \r\nTe serviré, en Ti yo tengo fe.\r\nAunque el dolor comience a preguntar,\r\naunque la luz se apague y no quiera brillar.\r\nAunque el dolor comience a preguntar,\r\naunque la luz se apague y no quiera brillar.\r\n\r\nMe alegraré en Cristo mi Señor. \r\nMe alegraré en Ti mi Salvador.\r\nSi alguna vez sin fuerza he de quedar,\r\nTú eres mi fortaleza y Tú me harás andar.\r\nSi alguna vez sin fuerza he de quedar,\r\nTú eres mi fortaleza y Tú me harás andar.",
    },
    {
      id: "201",
      titulo: "La Bondad De Dios.",
      letra:
        "Te amo Dios, Tu amor nunca me falla\r\nMi existir, en tus manos están\r\nDesde el momento en que despierto\r\nHasta el anochecer\r\nYo cantaré de la bondad de Dios\r\n\r\nEn mi vida has sido bueno\r\nEn mi vida has sido fiel, Señor\r\nCon cada aliento de mi ser\r\nYo cantaré de la bondad de Dios\r\n\r\nAmo tu voz\r\nMe has guiado por de fuego\r\nTu cerca estas en la oscuridad\r\nTe conozco como Padre y\r\nComo amigo fiel\r\nMi vida esta bondad de Dios\r\n\r\nEn mi vida has sido bueno\r\nEn mi vida has sido fiel, Señor\r\nCon cada aliento de mi ser\r\nYo cantaré de la bondad de Dios\r\n\r\n/Tu fidelidad sigue persiguiendome\r\nTu fidelidad sigue persiguiendome\r\nTodo lo que soy te lo entrego hoy\r\nA ti me rendiré\r\nTu fidelidad sigue persiguiéndome/\r\n\r\nEn mi vida has sido bueno\r\nEn mi vida has sido fiel, Señor\r\nCon cada aliento de mi ser\r\nYo cantaré de la bondad de Dios\r\nYo cantaré de la bondad de Dios",
    },
    {
      id: "202",
      titulo: "Te amo, te amo, es todo lo que puedo decir.",
      letra:
        "Te amo, te amo, es todo lo que puedo decir.\r\nTe adoro, te adoro, todo mi ser confía en Ti.\r\nYo te amaré, y te adoraré, \r\nno importa lo que pueda venir.\r\nEn ti Señor siempre confiaré \r\ny te amaré hasta el fin.",
    },
    {
      id: "203",
      titulo: "Te prometo Señor que mi corazón.",
      letra:
        "Te prometo Señor que mi corazón \r\nestará a tu disposición.\r\nTodo el tiempo de Ti yo buscaré, \r\nno me dejes retroceder.\r\n\r\nQuiero llegar hasta Ti, rompe mi corazón,\r\nque caiga a Tus pies, \r\nahora y para siempre amén.",
    },
    {
      id: "204",
      titulo: "Te quiero bendecir delante de los justos ",
      letra:
        "Te quiero bendecir delante de los justos Señor.\r\nTe entrego lo que soy, eres todo para mí \r\ny mi vida está ante Ti.\r\nYo te amo Señor, te amo Señor. \r\nEn tu trono entraré y te glorificaré \r\nporque Tú eres mi Dios.",
    },
    {
      id: "205",
      titulo: "Temprano yo te buscaré.",
      letra:
        "Salmos 63\r\n\r\nTemprano yo te buscaré\r\nde madrugada yo me acercaré a Ti.\r\nMi alma te anhela y tiene sed\r\npara ver tu gloria y tu poder.\r\nMi socorro eres Tú.\r\nEn las sombras de tus alas yo me gozaré.\r\nMi alma está apegada a Ti,\r\nporque tu diestra me ha sostenido.\r\nOh tu diestra me ha sostenido.",
    },
    {
      id: "206",
      titulo: "Tengo para Ti una canción.",
      letra:
        "1ra Timoteo 2:5\r\n\r\nTengo para Ti una canción\r\nllena de gratitud y amor\r\nporque me has amado como nadie me amó\r\nrecibe hoy mi alabanza, oh Dios.\r\n\r\nTengo un sólo Dios y eres Tú\r\nTengo un sólo Rey y eres Tú\r\nNo daré la gloria a nadie más\r\ntengo un sólo Dios y eres Tú.",
    },
    {
      id: "207",
      titulo: "Salmo 23",
      letra:
        "Tengo todo, eres todo lo que necesito\r\nTú me llevas al lugar donde encontré descanso\r\nRenuevas mis fuerzas, tú guías mis pasos\r\n\r\nTengo todo, eres todo lo que necesito\r\nTú me llevas al lugar donde encontré descanso\r\nRenuevas mis fuerzas, tú guías mis pasos\r\n\r\nTu amor inagotable es\r\nTu bondad me persigue, te persigo\r\nEn tu mesa me diste un lugar\r\nMe recibes en casa para siempre\r\n\r\nEn tus brazos cada miedo y temor se apagan\r\nTú me enseñas a confiar cuando mi fe desmaya\r\nRenuevas mis fuerzas, tú guías mis pasos\r\n\r\nEn tus brazos cada miedo y temor se apagan\r\nTú me enseñas a confiar cuando mi fe desmaya\r\nRenuevas mis fuerzas, tú guías mis pasos\r\n\r\nTu amor inagotable es\r\nTu bondad me persigue, te persigo\r\nEn tu mesa me diste un lugar\r\nMe recibes en casa para siempre\r\n\r\nAunque pase por el valle de la sombra y muerte\r\nYa no temo, yo confío\r\nTú estás conmigo\r\nY si caigo o me pierdo\r\nVienes a buscarme\r\nNo me olvidas y me encuentras\r\nY nunca te rindes\r\n\r\nTu amor inagotable es\r\nTu bondad me persigue, te persigo\r\nEn tu mesa me diste un lugar\r\nMe recibes en casa para siempre",
    },
    {
      id: "208",
      titulo: "Tengo un perfume que sólo es para Ti.",
      letra:
        "Tengo un perfume que sólo es para Ti, \r\nes mi alabanza es mi adoración.\r\nTengo un perfume que sólo es para Ti, \r\nes mi alabanza es mi adoración.\r\n\r\nNo puedo más resistir este amor \r\nque está dentro de mi corazón.\r\nRecibe mi adoración.",
    },
    {
      id: "209",
      titulo: "Todo es nuevo desde que encontré a Dios.",
      letra:
        "Todo es nuevo desde que encontré a Dios,\r\nÉl me guía por el mundo con su voz.\r\nSiento un gozo que no puedo explicar,\r\nÉl es mío por su gracia y su bondad.\r\n\r\nOh que hermoso es ser un cristiano,\r\noh que hermoso es ser hijo de Dios.\r\nSaber que tengo mis pecados perdonados,\r\njustificados, redimidos, \r\nreconciliados por su gran amor.\r\n\r\nPuedo ir a mi Señor en oración,\r\nÉl me dice que confiado pida yo.\r\nPues escucha atentamente mi clamor,\r\nen Jesús encuentro diaria provisión.\r\n\r\nCuando pienso en el cielo soy feliz,\r\nun lugar hay preparado para mí.\r\nNo me aferro a lo que es terrenal,\r\nen la gloria me espera mucho más.",
    },
    {
      id: "210",
      titulo: "Todo es posible, si puedes creer.",
      letra:
        "Todo es posible, si puedes creer. \r\nTodo es posible, si puedes creer.\r\n// Fe mueve las manos de Dios, \r\nfe en su palabra santa.\r\nTodo es posible, si puedes creer. //",
    },
    {
      id: "211",
      titulo: "Todo lo creaste, tierra, cielo y mar.",
      letra:
        "Todo lo creaste, tierra, cielo y mar.\r\nLos cielos son tu tabernáculo. \r\nGloria al Dios altísimo.\r\n\r\nDios del cielo, maravilloso Dios,\r\neres Santo, Santo.\r\nLa creación muestra tu majestad,\r\neres Santo, Santo.\r\nDios de la creación, Dios de la creación.\r\n\r\nCuando amanezco, he de celebrar tu luz.\r\nSi tropiezo en tinieblas, \r\nvolveré a ver tu luz.\r\n\r\nDios del cielo, maravilloso Dios ....\r\n// Aleluya, al Dios de la creación. //",
    },
    {
      id: "212",
      titulo: "Todopoderoso Dios.",
      letra:
        "Todopoderoso Dios,\r\nsiempre Tu serás Señor.\r\nNo depende de un factor,\r\nni de una condición.\r\n\r\nEn verano o en invierno,\r\naunque caiga el hombre en su error,\r\naunque tiemble el universo,\r\na pesar de todo sigues siendo Dios.\r\n\r\n¡Todopoderoso Dios!",
    },
    {
      id: "213",
      titulo: "Todos necesitan amor que nunca falla.",
      letra:
        "Hebreos 12:2 –Isaías 53:6\r\n\r\nTodos necesitan amor que nunca falla,\r\ntu gracia y compasión.\r\nTodos necesitan perdón y esperanza y un Dios que salva.\r\n\r\nCristo puede mover montes.\r\nSólo Dios puede salvar, mi Dios puede salvar.\r\nPor siempre, autor de salvación.\r\nJesús la muerte venció, Él la muerte venció.\r\n\r\nAún con mis temores,\r\nsé que me aceptas una y otra vez.\r\nMi vida te ofrezco para seguir tus pasos.\r\nA Tí me rindo\r\n (a Tí me rindo)\r\n\r\nCristo puede mover montes...\r\n\r\n/ En la tierra Tu luz brillará.\r\nCantamos por la gloria de Tu majestad, Jesús/. ",
    },
    {
      id: "214",
      titulo: "Traemos Dios ante tu altar.",
      letra:
        "Traemos Dios ante tu altar, nuestras coronas.\r\nQueremos darte lo mejor, de nuestras vidas. \r\nTe entregaré mi amor entero, \r\nlos sueños que logré alcanzar. \r\n\r\nTe daré lo mejor de mi vida. \r\nTe daré lo mejor cada día.\r\nSerá mucho más que una canción. \r\nMi obediencia es mi mejor adoración. \r\n\r\nTraemos hoy ante tu altar, nuestras coronas. \r\nQueremos darte lo mejor, de nuestras vidas.\r\nDaremos solo las primicias, \r\npues tu mereces lo mejor. \r\n\r\n/ Te daré lo mejor de mi./ \r\nTe daré lo mejor.",
    },
    {
      id: "215",
      titulo: "Es nuestro Dios.",
      letra:
        "Tu Amor inundó Mi corazón\r\nCreo en Tu Palabra oh Dios\r\nEspero en Ti Renuévame\r\nCon tu Espírito, Jesús\r\n\r\nY vengo ante Tus pies\r\nVengo ante Tus pies\r\nRendido Te adoraré\r\n\r\nTu presencia en mí Guía mi andar\r\nTu Palabra es la verdad\r\nRestauración Y redención\r\nEncontré en Ti, Señor\r\n\r\nTodo lo diste Tú por mí\r\nTu vida entregaste al morir\r\nCuan grande Amor Él derramó\r\nEs nuestro Dios.\r\n\r\nSobre la muerte Él venció\r\nDigno de honor y adoración\r\nSiervo y Rey El Salvador\r\nEs nuestro Dios.",
    },
    {
      id: "216",
      titulo: "Tu amor nos mostró el camino.",
      letra:
        "Tu amor nos mostró el camino, \r\ntu poder transformó nuestras vidas.\r\nY porque Cristo está en nosotros te adoramos,\r\nno dejaremos de rendirte gloria.",
    },
    {
      id: "217",
      titulo: "Tu amor por mí es más dulce que la miel.",
      letra:
        "Lamentaciones 3:23\r\n\r\nTu amor por mí es más dulce que la miel,\r\ny tu misericordia es nueva cada día.\r\nTu amor por mí es más dulce que la miel,\r\ny tu misericordia es nueva cada día.\r\nEs por eso que te alabo, \r\nes por eso que te sirvo,\r\nes por eso que te doy todo mi amor.\r\nEs por eso que te alabo, \r\nes por eso que te sirvo,\r\nes por eso que te doy todo mi amor.",
    },
    {
      id: "218",
      titulo: "Tu cruz, Señor, me ha hecho ver.",
      letra:
        "Tu cruz, Señor, me ha hecho ver \r\nel amor derramado por mí.\r\nY después de tanto tiempo \r\ntiene el mismo valor.",
    },
    {
      id: "219",
      titulo: "Tu dulce amor, bálsamo es a mi vida.",
      letra:
        "Tu dulce amor, bálsamo es a mi vida.\r\nSe derramó para darme salvación.\r\nTu Hijo fue el precio por mis pecados. \r\nSu sangre es el sello de mi redención.\r\n\r\nY no tengo más que mi vida para dar.\r\nMi voluntad y lo que soy,\r\nofrendas son en tu altar.\r\nY mi decisión es vivir sólo para Ti, \r\ny responder a ese amor \r\nque conquistó mi corazón.",
    },
    {
      id: "220",
      titulo: "Tu eres la luz que brilló en las tinieblas.",
      letra:
        "Juan 1:3-9 - Mateo 2:2\r\n\r\nTu eres la luz que brilló en las tinieblas.\r\nAbrió mis ojos pude ver.\r\nMi corazón adora tu persona,\r\nGracia y vida eres Tu.\r\n\r\nVengo a adorarte,\r\nvengo a postrarme \r\nvengo a decir que eres mi Dios.\r\nSólo Tú eres grande,\r\nsólo Tú eres digno y maravilloso para mí.\r\n\r\nTú, el Creador grandemente exaltado.\r\nSeñor glorioso eres Tú.\r\nHumilde al mundo por gracia viniste,\r\npobre te hiciste por mí.\r\n\r\nVengo a adorarte,\r\nvengo a postrarme,\r\nvengo a decir que eres mi Dios.\r\nSólo Tú eres grande,\r\nsólo Tú eres digno y maravilloso para mí\r\n\r\n/Nunca sabré cuánto costó mi salvación en esa cruz./\r\n\r\n/ Vengo a adorarte,\r\nvengo a postrarme,\r\nvengo a decir que eres mi Dios.\r\nSólo Tú eres grande,\r\nsólo Tú eres digno y  maravilloso para mí. /\r\n\r\nNunca sabré cuánto costó \r\nmi salvación en esa cruz.",
    },
    {
      id: "221",
      titulo: "Eres mi fortaleza.",
      letra:
        "Isaias 12:2-4\r\n\r\nTu Eres Señor Mi fortaleza\r\ncomo ninguna, vives en mí.\r\n\r\nTú eres, Señor, mi esperanza\r\ncomo ninguna, vives en mí.\r\n\r\nGracia que me levantó,\r\nnombre que me restauró.\r\n/Has sido fiel/\r\n\r\nPerfecto amor, inagotable, \r\nIncomparable, vives en mí.\r\n\r\nGracia que me levantó.. (2 veces)\r\n\r\n//Tu amor, Señor\r\nllega hasta los cielos.\r\nTu fidelidad nunca fallará//\r\n\r\nTú eres Señor, mi fortaleza\r\ncomo ninguna, vives en mí.",
    },
    {
      id: "222",
      titulo: "Tú estás sentado en tu trono.",
      letra:
        "Tú estás sentado en tu trono, \r\nsiempre reinando, soberano.\r\nÁngeles cantan, hombres alaban, \r\nDios reunido con su pueblo.\r\n¡Oh alfa, omega, Cristo, Santo!\r\n¡Oh ven, oh ven, oh ven, Señor Jesús!",
    },
    {
      id: "223",
      titulo: "Tu fidelidad.",
      letra:
        "Tu fidelidad es grande, \r\ntu fidelidad incomparable es.\r\nNadie como Tú bendito Dios. \r\nGrande es tu fidelidad.",
    },
    {
      id: "224",
      titulo: "Hermoso nombre",
      letra:
        "Tú fuiste el verbo en el principio\r\nUnigénito de Dios\r\nEl misterio de tu gloria\r\nRevelado en tu amor\r\n\r\nCuan hermoso su nombre es\r\nCuan hermoso su nombre es\r\nEl nombre de Jesús mi Rey\r\nCuan hermoso su nombre es\r\nNada se iguala a El\r\nCuan hermoso su nombre es\r\nNo hay otro nombre\r\n\r\nDejaste el cielo por salvarme\r\nMe viniste a rescatar\r\nMi transgresión tu perdonaste\r\nNada nos separará\r\n\r\nMajestuoso su nombre es\r\nMajestuoso su nombre es\r\nEl nombre de Jesús mi Rey\r\nMajestuoso su nombre es\r\nNada se iguala a Él\r\nMajestuoso su nombre es\r\nNo hay otro nombre\r\nMajestuoso su nombre es\r\nNo hay otro nombre\r\n\r\nNo hay nombre igual, Jesús\r\n\r\nLa muerte venciste\r\nEl velo partiste\r\nLa tumba vacía ahora esta\r\nLos cielos declaran\r\nTu gloria proclaman\r\nResucitaste en majestad\r\n\r\nInigualable\r\nIncomparable\r\nHoy y por siempre reinarás\r\nTuyo es el reino\r\nTuya es la gloria\r\nTuyo es el poder y autoridad\r\n\r\nPoderoso su nombre es\r\nPoderoso su nombre es,\r\nEl nombre de Jesús mi Rey\r\nPoderoso su nombre es\r\nIncomparable es Él\r\n//Poderoso su nombre es\r\nNo hay otro nombre//",
    },
    {
      id: "225",
      titulo: "Tú habitas la alabanza de tu pueblo.",
      letra:
        "Tú habitas la alabanza de tu pueblo, \r\ncoronado con poder.\r\nÁngeles alrededor cantan con nosotros \r\nalabanza y gloria a Ti Señor.\r\n// Santo es tu nombre oh Dios, santo eres Tú,\r\nla creación declara tu gloria, santo eres Tú. //",
    },
    {
      id: "226",
      titulo: "Tu nos creaste con un propósito.",
      letra:
        "Tu nos creaste con un propósito,\r\npara tu nombre glorificar.\r\nY cada día sobre la tierra,\r\nproclamaremos tu majestad.\r\n\r\nTú nos creaste para alabarte,\r\npara tu gloria manifestar.\r\nY cada día sobre la tierra,\r\nanunciaremos tu gran bondad.\r\n\r\n\r\n// Queremos darte gloria y honor,\r\nqueremos darte la adoración,\r\nqueremos exaltarte por siempre. //\r\n\r\nTú nos creaste para alabarte,\r\npara tu gloria manifestar.\r\nY cada día sobre la tierra,\r\nanunciaremos tu gran bondad.\r\n \r\n// Queremos darte gloria y honor,\r\nqueremos darte la adoración,\r\nqueremos exaltarte por siempre. //\r\n\r\nA tus pies rindo todo lo que tengo Señor.\r\nY mi devoción entera sólo a Ti te la doy.\r\n\r\n// Queremos darte gloria y honor,\r\nqueremos darte la adoración,\r\nqueremos exaltarte por siempre. //\r\n// Por siempre y siempre. //",
    },
    {
      id: "227",
      titulo: "Tu mirada.",
      letra:
        "Tus ojos revelan que yo nada puedo esconder.\r\nQue no soy nada sin ti, oh fiel Señor.\r\nTodo lo sabes de mi cuando miras el corazón.\r\nTodo lo puedes ver, muy dentro de mí.\r\n\r\nLleva mi vida a una sola verdad\r\nQue cuando me miras, nada puedo ocultar.\r\n\r\nSé que es tu fidelidad,\r\nQue lleva mi vida más allá \r\nde lo que puedo imaginar.\r\nSé que no puedo negar,\r\nQue tu mirada puesta en mi,\r\nMe llena de tu paz.",
    },
    {
      id: "228",
      titulo: "Un poco más de este vivir aquí.",
      letra:
        "2ªPedro 3:8– 9\r\n\r\nUn poco más de este vivir aquí, \r\nun poco más y me marcho al hogar.\r\nUn poco más de este vivir aquí, \r\nun poco más y me marcho al hogar.\r\nTen en cuenta esto: para Dios mil años\r\nson como un día, cualquier día, \r\ny me marcho al hogar.\r\nVamos a ser como Él es, \r\nvamos a ser como Él es,\r\nvamos a ser como Él es. \r\nY me marcho al hogar.",
    },
    {
      id: "229",
      titulo: "Vine a alabar a Dios.",
      letra:
        "Vine a alabar a Dios, vine a alabar a Dios,\r\nvine a adorar su santo nombre, \r\nvine a alabar a Dios.\r\nEl vino a mi vida en un día muy especial,\r\ncambio mi corazón, en un nuevo corazón.\r\nY esta es la razón por la que digo que,\r\nvine a alabar a Dios.",
    },
    {
      id: "230",
      titulo: "Yo cantaré, yo alabaré.",
      letra:
        "Yo cantaré, yo alabaré, \r\ny sé que nadie me podrá apartar\r\ndel amor de Jesús. \r\nY sé que nadie me podrá apartar de Él.\r\nPor siempre yo con Cristo, \r\npor siempre yo con Cristo,\r\npor siempre yo con Cristo viviré.\r\n\r\nYo oraré, yo adoraré, \r\ny sé que pronto me vendrá a buscar\r\nyo moraré con Jesús. \r\nY a su iglesia pronto Él vendrá a buscar.\r\nEl día ya está cerca, \r\nel día ya está cerca,\r\nhosanna sea a Cristo viene ya.",
    },
    {
      id: "231",
      titulo: "Yo quiero darte gloria Señor.",
      letra:
        "Romanos 8:28\r\n\r\nYo quiero darte gloria Señor \r\nporque todo lo has hecho bien.\r\nYo quiero darte gloria Señor \r\nporque todo lo has hecho bien.\r\nTodo lo has hecho bien Señor, \r\nincluso todos los males han sido para bien.",
    },
    {
      id: "232",
      titulo: "Yo quiero más de Ti",
      letra:
        "Yo quiero más de Ti, y habitar en tu presencia,\r\nmenguar para que crezcas Tu \r\ny cada día ser más como Tu.\r\nQuebranta mi corazón, quebranta mi vida,\r\nte entrego mi voluntad a Ti.\r\nTodo lo que soy Señor, \r\ntodo lo que tengo es tuyo.\r\nYo quiero menguar para que crezcas Tu.",
    },
    {
      id: "233",
      titulo: "Yo te doy gracias",
      letra:
        "Yo te doy gracias, yo te doy gracias,\r\npor tu gran amor por mí yo te doy gracias.\r\nMe sacaste de tinieblas, me trajiste a tu luz\r\ny me diste vida nueva en Ti Jesús.\r\n\r\nSoy libre para amarte y para adorarte. \r\nQuiero elevar mis manos hacia Ti.\r\nSeñor de los cielos, \r\nTú eres el Cordero que diste tu vida por mí.",
    },
    {
      id: "234",
      titulo: "Yo te sirvo porque te amo.",
      letra:
        "Yo te sirvo porque te amo, \r\nme has dado vida a mí.\r\nTú viniste desde los cielos, \r\npara dar tu vida aquí.\r\nTodos mis pecados \r\nperdonaste allí en el calvario.\r\nCuando te acercaste, me dijiste: ven a mí.\r\n\r\nPor eso te amo y te prometo \r\nque siempre te serviré,\r\ntestificado que me salvaste, \r\nvida nueva tengo en Ti.\r\nTodos mis problemas \r\naliviaste allí en el calvario.\r\nCuanto yo precisaba encontré también en Ti.",
    },
    {
      id: "235",
      titulo: "Tú Y Solo Tú",
      letra:
      "Elijo hoy\r\nAgradecerte Dios\r\nTe adoraré, con mi corazón\r\nDespierto en tu presencia\r\nDespierto en ti, mi Dios\r\nBueno eres Dios, gracias\r\nPor tu misericordia, gracias\r\nEn espíritu y verdad, gracias\r\nYo te digo gracias\r\nComo el sol\r\nEs tu fidelidad\r\nTu infinito amor\r\nInmenso como el mar\r\nDespierto en tu presencia\r\nDespierto en ti, mi Dios\r\nBueno eres Dios, gracias\r\nPor tu misericordia, gracias\r\nEn espíritu y verdad, gracias\r\nYo te digo gracias\r\nTú y sólo tú\r\nDespiertas mi interior\r\nMi gozo es darte gracias\r\nGracias\r\nTú y sólo tú\r\nDespiertas mi interior\r\nMi gozo es darte gracias\r\nGracias\r\nTú y sólo tú\r\nDespiertas mi interior\r\nMi gozo es darte gracias\r\nGracias\r\nTú y sólo tú\r\nDespiertas mi interior\r\nMi gozo es darte gracias\r\nGracias\r\nBueno eres Dios, gracias\r\nPor tu misericordia, gracias\r\nEn espíritu y verdad, gracias\r\nYo te digo gracias\r\nPor llamarme tu amigo, gracias\r\nPor ser mi defensor, gracias\r\nPor tu infinito amor, gracias\r\nYo te digo gracias\r\nOh, gracias Señor\r\nTe doy gracias\r\nQué más puedo te decir\r\nGracias\r\nPor lo que has hecho en mí\r\nTú y sólo tú\r\nDespiertas mi interior\r\nMi gozo es darte gracias\r\nGracias\r\nTú y sólo tú\r\nDespiertas mi interior\r\nMi gozo es darte gracias\r\nGracias\r\nTú y sólo tú\r\nDespiertas mi interior\r\nMi gozo es darte gracias\r\nGracias\r\nTú y sólo tú\r\nDespiertas mi interior\r\nMi gozo es darte gracias\r\nGracias\r\nMi gozo es darte gracias, toda mi vida\r\nYo te digo gracias\r\nMi gozo es darte gracias\r\nMi gozo es darte gracias\r\nGracias, Jesús",
    },
    {
      id: "236",
      titulo: "Cuerdas de Amor",
      letra:
      "Aunque pase el tiempo, sé\r\nQue tu promesa cumplirás\r\nNada en ti se perderá\r\nEsa es mi seguridad\r\nTus cuerdas de amor\r\nCayeron sobre mí\r\nTus cuerdas de amor\r\nCayeron sobre mí\r\nEs tu amor que me sostiene\r\nEl que me levanta\r\nEl que me da paz\r\nMe da seguridad\r\nEs tu amor que me sostiene\r\nEl que me levanta\r\nEl que me da paz\r\nMe da seguridad\r\nDe lo que vendrá\r\nTú tienes el control\r\nNunca pierdes el control",
    },
    {
      id: "237",
      titulo: "Tu Eres Digno de Gloria",
      letra:
      "Hoy te alabamos Señor\r\nY declaramos que Tú eres nuestro Dios\r\nTú eres el Dios de amor\r\nYa no somos esclavos del temor\r\nHoy te adoramos Señor\r\nY te cantamos con nuestro corazón\r\nTe damos todo el honor\r\nSobre el cielo y la tierra, Tú eres Señor\r\nTú eres digno de gloria\r\nSobre toda la tierra, Tú eres Dios\r\nEres digno de recibir toda adoración\r\nTodo el honor, sea a Ti\r\nTú eres digno de gloria\r\nSobre toda la tierra, Tú eres Dios\r\nEres digno de recibir toda adoración\r\nTodo el honor, sea a Ti\r\n¡Tú eres digno de gloria!\r\nHoy te alabamos Señor\r\nY declaramos que Tú eres nuestro Dios\r\nTú eres el Dios del amor\r\nYa no somos esclavos del temor\r\nHoy te adoramos Señor\r\nY te cantamos con nuestro corazón\r\nTe damos todo el honor\r\nSobre el cielo y la tierra, Tú eres Señor (Tú eres digno)\r\nTú eres digno de gloria\r\nSobre toda la tierra, Tú eres Dios\r\nTú eres digno de recibir toda adoración\r\nTodo el honor, sea a Ti\r\nTú eres digno de gloria\r\nSobre toda la tierra, Tú eres Dios\r\nTú eres digno de recibir toda adoración\r\nTodo el honor, sea a Ti\r\nEres digno, eres santo\r\nEres Rey, de toda creación\r\nEres digno, eres santo\r\nEres Rey, de toda creación\r\nEres digno, eres santo\r\nEres Rey, de toda creación\r\nEres digno, eres santo\r\nEres Rey, de toda creación\r\nTú eres digno de gloria\r\nSobre toda la tierra, Tú eres Dios\r\nTú eres digno de recibir toda adoración\r\nTodo el honor, sea a Ti\r\nTú eres digno de gloria\r\nSobre toda la tierra, Tú eres Dios\r\nTú eres digno de recibir toda adoración\r\nTodo el honor, sea a Ti\r\nTú eres digno de gloria\r\nSobre toda la tierra, Tú eres Dios\r\nTú eres digno de recibir toda adoración\r\nTodo el honor, sea a Ti\r\nTú eres digno de gloria\r\nSobre toda la tierra, Tú eres Dios\r\nTú eres digno de recibir toda adoración\r\nTodo el honor, sea a Ti\r\n¡Tú eres digno de gloria!\r\n¡Tú eres digno de gloria!\r\nNos humillamos delante de Ti, Señor\r\nY hoy nuestras voces\r\nSe unen en un clamor",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [llave, setLlave] = useState(false);
  const [letra, setLetra] = useState([]);
  const [tituloCancionSeleccionada, setTituloCancionSeleccionada] =
    useState("");
  const [busqueda, setBusqueda] = useState("");
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
  const navigate = useNavigate();

  const paginacion = 73;
  const cuenta1 = currentPage * paginacion;
  const cuenta2 = cuenta1 - paginacion;
  const resultado = coros.slice(cuenta2, cuenta1);

  const prev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const next = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLetra = (titulo) => {
    const cancionSeleccionada = coros.find(
      (cancion) => cancion.titulo === titulo || cancion.id === titulo // Buscar por título o por ID
    );
    if (cancionSeleccionada) {
      setLlave(true);
      setLetra(cancionSeleccionada.letra);
      setTituloCancionSeleccionada(cancionSeleccionada.titulo);
    }
  };

  const handleBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Función para normalizar texto
    const normalizeText = (text) => {
      return text
        .normalize("NFD") // Normalización de caracteres diacríticos
        .replace(/[\u0300-\u036f]/g, ""); // Remoción de diacríticos
    };

    // Normalizar la búsqueda
    const busquedaNormalized = normalizeText(busqueda);

    // Verificar si la búsqueda es un número
    const esNumero = !isNaN(busqueda);

    // Si es un número, buscar por ID
    if (esNumero) {
      const cancionPorId = coros.find((cancion) => cancion.id === busqueda);
      if (cancionPorId) {
        setResultadoBusqueda([cancionPorId]);
        setLlave(true);
        setLetra(cancionPorId.letra);
        setTituloCancionSeleccionada(cancionPorId.titulo);
      } else {
        setResultadoBusqueda([]);
        setLlave(false);
        setLetra([]);
        setTituloCancionSeleccionada("Canción no encontrada");
        alert(`Coro no encontrado para el término: ${busqueda}.`);
      }
    } else {
      // Buscar por título
      const resultadosPorTitulo = coros.filter((cancion) =>
        normalizeText(cancion.titulo)
          .toLowerCase()
          .includes(busquedaNormalized.toLowerCase())
      );

      // Si se encontraron resultados por título, mostrarlos
      if (resultadosPorTitulo.length > 0) {
        setResultadoBusqueda(resultadosPorTitulo);

        // Si hay solo un resultado en la búsqueda, mostrar automáticamente la letra
        if (resultadosPorTitulo.length === 1) {
          const cancionSeleccionada = resultadosPorTitulo[0];
          setLlave(true);
          setLetra(cancionSeleccionada.letra);
          setTituloCancionSeleccionada(cancionSeleccionada.titulo);
        }
      } else {
        // Buscar por contenido de la letra
        const resultadosPorLetra = coros.filter((cancion) =>
          normalizeText(cancion.letra)
            .toLowerCase()
            .includes(busquedaNormalized.toLowerCase())
        );

        // Si se encontraron resultados por letra, mostrarlos
        if (resultadosPorLetra.length > 0) {
          setResultadoBusqueda(resultadosPorLetra);

          // Si hay solo un resultado en la búsqueda, mostrar automáticamente la letra
          if (resultadosPorLetra.length === 1) {
            const cancionSeleccionada = resultadosPorLetra[0];
            setLlave(true);
            setLetra(cancionSeleccionada.letra);
            setTituloCancionSeleccionada(cancionSeleccionada.titulo);
          }
        } else {
          // Si no se encontraron resultados, mostrar mensaje
          setResultadoBusqueda([]);
          setLlave(false);
          setLetra([]);
          alert(`Coro no encontrado para el término: ${busqueda}.`);
        }
      }
    }
  };

  const volverAtras = () => {
    setLlave(false);
    setLetra([]);
    setTituloCancionSeleccionada("");
  };

  let versos = [];
  if (llave) {
    versos = letra.split("\n");
  }

  const handleHimnos = () => {
    navigate("/Himnos");
  };

  const [tamañoLetra, setTamañoLetra] = useState(16); // Tamaño de letra inicial

  const manejarCambioTamaño = (event) => {
    setTamañoLetra(event.target.value); // Actualizar el tamaño de letra al valor seleccionado por el usuario
  };

  return (
    <div className="container-cancionero">
      <h1 className="titulo-cancionero">Coros</h1>
      <h3 className="subtitle">
        Por favor, no dejar espacios al final del texto de la búsqueda
      </h3>
      <div className="container-buscador">
        <form onSubmit={handleSubmit} className="form-buscador">
          <input
            type="text"
            className="buscador"
            placeholder="Buscar coro..."
            value={busqueda}
            onChange={handleBusqueda}
          />
          <button type="submit" className="button-submit">
            <i className="fa-solid fa-magnifying-glass icono-buscador"></i>
          </button>
        </form>

        {/* <select name="" id="filtro" className="filtro">
          <option value="Coros" className="options">
            Coros
          </option>
          <option value="Himnos" className="options" >
            Himnos
          </option>
        </select> */}
      </div>
      <div className="container-button-cambiar">
        <button onClick={handleHimnos} className="button-cambiar-coros">
          Ver Himnos
        </button>
      </div>

      {!llave ? (
        <>
          <div className="container-titulo-indice">
            <h2 className="titulo-indice">
              <b className="txt-indice">Indice de Coros</b>
            </h2>
          </div>
          <div className="container-indice-coros">
            {(resultadoBusqueda.length > 0 ? resultadoBusqueda : resultado).map(
              (cancion) => (
                <div className="container-indice" key={cancion.id}>
                  <a
                    href="#"
                    onClick={() => handleLetra(cancion.titulo)}
                    className="link-coros"
                  >
                    {cancion.id}: {cancion.titulo}
                  </a>
                </div>
              )
            )}
          </div>

          <div className="container-buttons-paginacion">
            {currentPage > 1 && (
              <>
                <p className="texto-pag-sig-and-next">Página anterior</p>
                <button onClick={prev} className="buttons-paginacion">
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              </>
            )}
            {resultadoBusqueda.length > paginacion ||
              (resultadoBusqueda.length === 0 && coros.length > paginacion && (
                <>
                  {cuenta1 < coros.length && (
                    <>
                      <button onClick={next} className="buttons-paginacion">
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                      <p className="texto-pag-sig-and-next">Siguiente página</p>
                    </>
                  )}
                </>
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="container-px-letra">
            <p className="txt-tamaño-letra">Tamaño de la letra:</p>
            <input
              type="range"
              min="10"
              max="50"
              value={tamañoLetra}
              onChange={manejarCambioTamaño}
              className="slider-tamaño-letra"
            />
          </div>

          <div className="container-letra">
            <button onClick={volverAtras} className="button-volver">
              <i className="fa-solid fa-circle-arrow-left icono-volver"></i>
            </button>
            <h1 className="titulo-cancion-select">
              {tituloCancionSeleccionada}
            </h1>

            {versos.map((verso, index) => {
              if (verso.startsWith("/est")) {
                return (
                  <div key={index} className="texto-estrofa">
                    <p>{verso.replace("/est", "")}</p>
                  </div>
                );
              } else if (verso.startsWith("/es")) {
                return (
                  <div key={index} className="texto-estribillo">
                    <p>{verso.replace("/es", "")}</p>
                  </div>
                );
              } else {
                return (
                  <>
                    <div key={index} className="parte-cancion">
                      <p
                        className="texto-letra-general"
                        style={{ fontSize: `${tamañoLetra}px` }}
                      >
                        {verso}
                      </p>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Coros;
