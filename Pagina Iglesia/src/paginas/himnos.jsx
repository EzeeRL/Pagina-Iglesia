import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./himnos.css";
import Footer from "../components/footer.jsx";

function Himnos() {
  const [currentPage, setCurrentPage] = useState(1);
  const [llave, setLlave] = useState(false);
  const [Letra, setLetra] = useState([]);
  const [tituloCancionSeleccionada, setTituloCancionSeleccionada] =
    useState("");
  const [busqueda, setBusqueda] = useState("");
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
  const navigate = useNavigate();

  const himnos = [
    {
      ID: "1",
      Titulo: "A casa vete\r\n",
      Letra:
        "A casa vete y cuenta allí\nque Cristo te libró;\nque tus amigos vean en ti\nlo que Él, por gracia, obró.\n\nCoro:\nA casa vete y lo que en ti\nha hecho Dios, que vean.\nY puede ser que los de allí\nlo buscarán también.\n\nA casa vete y cuenta allí\nque Cristo comprendió\ntu gran necesidad, y así\nSu sangre derramó.\n\nVe, cuenta a los de en derredor\nque Él satisfará\nsus almas, puesto que en su amor\nla cruz sufrido ha.\n\nVe, cuenta a los de más allá\nque en Cristo hay perdón,\ny que Él a todos salvará,\nsi quieren salvación.",
    },
    {
      ID: "2",
      Titulo: "A Jesucristo ven",
      Letra:
        "A Jesucristo ven sin tardar,\r\nQue entre nosotros hoy Él está,\r\nY te convida con dulce afán,\r\nTierno, diciendo: “Ven”\r\n\r\nCoro:\r\n¡Oh cuan grata nuestra reunión!\r\nCuando al fin en celestial mansión,\r\nCon Él estemos en comunión,\r\nGozando eterno bien.\r\n\r\nPiensa que Él solo puede colmar\r\nTu triste pecho de gozo y paz,\r\nY porque anhela tu bienestar\r\nVuelve a decirte: “Ven”.\r\n\r\nSu voz escucha sin vacilar,\r\nY grato acepta lo que hoy te da;\r\nTal vez mañana no habrá lugar:\r\nNo te detengas, ven.",
    },
    {
      ID: "3",
      Titulo: "A la tierra marchamos",
      Letra:
        "A la tierra marchamos do viven los santos\r\nen gozo y gloria y honra inmortal;\r\nY tú, que sin Dios corres presto a la muerte,\r\n¡Oh! di: ¿Quieres ir al Edén celestial?\r\nCoro:\r\n¿Quieres ir? ¿Quieres ir? (Bis)\r\n¡Oh! di: ¿Quieres ir al Edén celestial?\r\n\r\nEn ese país ni dolor ni gemido\r\njamás en sus prados cabida tendrán;\r\nY tú que te sientes del mal oprimido,\r\n¡Oh! di: ¿Quieres ir al Edén celestial?\r\n\r\nAllá no hay pobreza, poseen los salvos\r\ninmensas riquezas con Cristo Jesús;\r\nAllá no hay enfermos, están todos sanos.\r\n¡Oh! di: ¿Quieres ir al Edén celestial?\r\n\r\nVen, pues, con nosotros; Jesús es la puerta,\r\ny franca la entrada al cielo te da;\r\nAl reino de Dios, a su gloria eterna,\r\n¡Oh! di: ¿Quieres ir al Edén celestial?",
    },
    {
      ID: "4",
      Titulo: "A tu puerta Cristo está",
      Letra:
        "A tu puerta Cristo está, ábrele;\r\n(abre al Salvador, abre al Salvador)\r\nSi tú le abres, entrará, ábrele;\r\n(abre al Salvador, abre al Salvador)\r\nTu pecado quitará, Luz y paz derramará,\r\nDía alegre te será, ábrele.\r\n(abre al Salvador, abre al Salvador)\r\n\r\nÁbrele, oh pecador, ábrele;\r\n(abre al Salvador, abre al Salvador)\r\nAbre ahora al Salvador, ábrele;\r\n(abre al Salvador, abre al Salvador)\r\nTe ofrece salvación, del pecado el perdón,\r\nSaciará tu corazón, ábrele.\r\n(abre al Salvador, abre al Salvador)\r\n\r\n¡Oh! no le hagas esperar, ábrele;\r\n(abre al Salvador, abre al Salvador)\r\nTal vez pronto marchará, ábrele;\r\n(abre al Salvador, abre al Salvador)\r\n¡Que dolor después tendrás, cuando en vano clamarás,\r\ny perdido te hallarás! Ábrele.\r\n(abre al Salvador, abre al Salvador)",
    },
    {
      ID: "5",
      Titulo: "Al cielo voy",
      Letra:
        "Al cielo voy, al cielo voy,\r\nyo confío en Jesús;\r\nÉl me salvó, Él me salvó,\r\npor mí Él ha muerto en la cruz.\r\nYo te veré, mi Salvador,\r\nyo te veré a ti, Señor,\r\nen dulce luz y resplandor,\r\nyo te veré, mi Salvador.\r\n\r\nAl cielo voy, al cielo voy,\r\nyo confío en Jesús;\r\nÉl me salvó, Él me salvó,\r\npor mí Él ha muerto en la cruz.\r\nTu pura sangre carmesí\r\nla culpa vil borró de mí,\r\ny gozaré ventura allí.\r\nYo te veré, mi Salvador.\r\n\r\nAl cielo voy, al cielo voy,\r\nyo confío en Jesús;\r\nÉl me salvó, Él me salvó,\r\npor mí Él ha muerto en la cruz.\r\nFeliz aquel que en ti confió\r\ny Salvador te proclamó;\r\nEn ti también espero yo,\r\nyo te veré, mi Salvador.",
    },
    {
      ID: "6",
      Titulo: "Al mundo impío",
      Letra:
        "Al mundo impío Dios amó,\r\nperdido en su maldad,\r\nY a gran precio le salvó\r\nde buena voluntad.\r\n\r\nCoro:\r\n¡Oh, qué amor! ¡qué inmenso amor!\r\nNo hay otro amor así;\r\nDios desde el cielo al Salvador\r\nMandó a morir por mí.\r\n\r\nY ahora es mío por la fe\r\nel don de Dios, Jesús:\r\nMi redención por sangre fue,\r\nla sangre de la cruz.\r\n\r\nLa gloriosa plenitud\r\nde la Divinidad\r\nen Cristo está:\r\nPor su virtud me da la santidad.\r\n\r\nAliéntate, oh alma fiel,\r\npues Cristo te dará,\r\nFelicidad aquí con El,\r\ny gloria eterna allá.",
    },
    {
      ID: "7",
      Titulo: "Al pobre hoy",
      Letra:
        "Al pobre hoy se pueden dar\r\nnoticias del amor\r\ncon que Jesús le ha de colmar\r\nde bienes y favor;\r\nPues en su santo corazón\r\nalberga tierna compasión\r\ndel pobre en su dolor. (Bis)\r\n\r\nAl ciego vista quiere dar\r\nque pueda a Cristo ver;\r\npor sus caminos siempre andar\r\ny gozo en él tener.\r\nMirar la gloria de su faz\r\ny conocer su dulce paz,\r\nsin nunca más temer. (Bis)\r\n\r\nA los que encadenados van\r\ncon grillos del error,\r\nenseña sueltos de Satán\r\nque Cristo es su Señor.\r\nEn Cristo el alma suelta es\r\ny goza libertad después,\r\nsirviendo al Salvador. (Bis)\r\n\r\nÉl quebrantado corazón\r\nen Cristo encontrará\r\nmayor que humana compasión;\r\nDios, Padre le será;\r\npues en Jesús se reveló\r\nel mismo Dios que nos amó,\r\ny que nos amará. (Bis)",
    },
    {
      ID: "8",
      Titulo: "Alabado el gran manantial",
      Letra:
        "¡Alabado el gran manantial\r\nque de sangre Dios nos mostró!\r\n¡Alabado el Rey que murió,\r\nsu pasión nos libra del mal!\r\nLejos del redil de mi dueño,\r\nvime pecador, perdido y vil;\r\nÉl Cordero sangre vertió,\r\nMe limpia sólo este raudal.\r\n\r\nCoro:\r\nSé que solo así me emblanqueceré;\r\nLávame en tu sangre, Jesús,\r\nY nívea blancura tendré.\r\n\r\nLa punzante isignia llevó,\r\nen la cruz dejó de vivir;\r\nGrandes males quiso sufrir,\r\nno en vano Cristo sufrió.\r\nAl gran manantial conducido,\r\nque de mi maldad ha sido fin,\r\n“Lávame” le pude decir,\r\ny nívea blancura me dio.\r\n\r\nPadre, de ti lejos vagué;\r\nExtravióse mi corazón,\r\nComo grana mis culpas son;\r\nNo con agua limpio seré,\r\nA tu fuente magna acudí;\r\nTu promesa creo, oh Jesús,\r\nLa eficaz virtud de tu don\r\nLa nívea blancura me dé.",
    },
    {
      ID: "9",
      Titulo: "Allá en la gloria",
      Letra:
        "Allá en la gloria, delante del gran trono,\r\nJesús, mi abogado, intercede por mí.\r\nMi causa en sus manos siempre prevalece,\r\ntambién abogado será Él para ti.\r\n\r\nCoro:\r\nVen, pues, a Jesús; ven, pues, a Jesús;\r\nla misma ventura en él hay para ti.\r\n\r\nUna paz tengo, profunda como un río,\r\nque nace de Cristo, su bendito autor;\r\nCompróla muriendo en el triste Calvario;\r\ntambién para ti es el don de su amor.\r\n\r\nBlancos vestidos yo tengo, que en la sangre\r\nlavé del herido Cordero de Dios;\r\nde todo pecado me limpia Jesucristo.\r\nTambién por su cruz tienes tú salvación.\r\n\r\nUna morada yo tengo que me aguarda,\r\npor él preparada en la casa de Dios,\r\nallí no hay más noche, ni angustia, ni llanto.\r\nTambién tú entrarás si de él vas en pos.",
    },
    {
      ID: "10",
      Titulo: "Allí la puerta",
      Letra:
        "Allí la puerta abierta está,\r\nsu luz es refulgente,\r\nLa cruz de Cristo veo allá,\r\nseñal de amor ferviente.\r\n\r\nCoro:\r\n¡Oh cuánto me amas, Cristo así,\r\nQue te entregaste Tú por mí!\r\nPor mí, por mí.\r\nY quiero entrar por Ti.\r\n\r\nY los que buscan salvación,\r\nla entrada franca tienen;\r\nNo hay pobres, ricos ni nación,\r\npara los que a ella vienen.\r\n\r\nPasado el río más allá,\r\nen la feroz pradera,\r\nLa paga de la cruz está,\r\neterna primavera.",
    },
    {
      ID: "11",
      Titulo: "Andaba yo en males mil",
      Letra:
        "Andaba yo en males mil,\r\nabsorto en la vida vil,\r\nmuy lejos del Señor.\r\nLa voz oí del Sinaí\r\nclamando a gritos hacia mí:\r\n“Que muera el pecador”.\r\n\r\n¡Ay! ¡ay! de mí, que pecador,\r\nhe obrado contra mi Señor\r\ny su ira beberé.\r\nCon truenos ya la ley decía\r\nque muerta está el alma mía;\r\nsin duda moriré.\r\n\r\nAngustia así me atormentó,\r\nmas Cristo por allí pasó\r\ny viome con amor.\r\n“Ven, alma triste, ven a mí”,\r\nme dijo Él, y me acogí\r\nal tierno Salvador.\r\n\r\nLa justa ley me condenó;\r\nmas Cristo ya me libertó,\r\nsufriendo allí en la cruz.\r\nCon gozo siempre cantaré,\r\nde eternas penas escapé\r\npor viva fe en Jesús.",
    },
    {
      ID: "12",
      Titulo: "Ante Pilato Jesús está",
      Letra:
        "Ante Pilato Jesús está,\r\ntodos los suyos se fueron ya:\r\nPregunta se oye, y ¿qué será?\r\n¿Qué harás tú con Cristo?\r\n\r\nCoro:\r\n¿Qué harás tú con Cristo?\r\nNo puedes ser neutral.\r\nPronto tendrás que decirte:\r\n“¿conmigo que hará El?”\r\n\r\nAún hoy a prueba está Jesús;\r\npuedes negarle, dejar la luz;\r\nfiel puedes ser y tomar tu cruz,\r\n¿Qué harás tú con Cristo?\r\n\r\n¿A Cristo quieres tú rechazar,\r\ncual Pilato tus manos lavar?\r\nO ¿Quieres tus culpas a Él contar?\r\n¿Qué harás tú con Cristo?\r\n\r\nCristo te acepto por Salvador,\r\nte reconozco por mi Señor,\r\ny digo, gozándome en tu amor:\r\n“Ahora soy de Cristo”.",
    },
    {
      ID: "13",
      Titulo: "Aún hay lugar",
      Letra:
        "Aún hay lugar, escucha, pecador,\r\nen el banquete eterno del Señor.\r\n¡Oh, sí! ¡Oh, sí! hay sitio para ti.\r\nEntra al festín, que muchos gozan ya,\r\ny allí Jesús un sitio te dará.\r\n¡Oh, sí! ¡Oh, sí! hay sitio para ti.\r\n\r\nAún hay lugar, la puerta franca está:\r\nMas entra pronto, que a cerrarse va.\r\n¡Oh, sí! ¡Oh, sí! hay sitio para ti.\r\n\r\nÁngeles mil te dicen con amor:\r\nEntra a gozar la gloria del Señor.\r\n¡Oh, sí! ¡Oh, sí! hay sitio para ti.\r\n\r\nPronto, tal vez hoy mismo, morirás;\r\nPasa al banquete, o tarde clamarás:\r\n“¡Ay me perdí! ¡No hay sitio para mí!”.",
    },
    {
      ID: "14",
      Titulo: "Cantaré a Cristo",
      Letra:
        "Cantaré a Cristo por su gran amor,\r\nComo vino para ser mi Salvador;\r\n¡Tan humilde fue el lugar\r\nen el pueblo de Judá,\r\nDonde Cristo vino por amor de mi!\r\n\r\nCoro:\r\nEs sin igual en su infinito amor,\r\nPues en la cruz allí, su vida dio por mí.\r\nYo cantaré su dulce nombre, sí;\r\n¡Oh Salvador eterno, loores doy a Ti!\r\n\r\nCantaré a Cristo quien en humildad\r\nObró siempre la divina voluntad:\r\nLos enfermos Él sanó,\r\na los muertos levantó,\r\na los pobres Él colmó por su bondad.\r\n\r\nCantaré a Cristo quien murió por mí,\r\ncontaré lo que Él ha hecho para mí;\r\nmis pecados Él llevó,\r\nmi perdón y paz compró,\r\nSiempre cantaré su dulce nombre, sí.",
    },
    {
      ID: "15",
      Titulo: "Cantaré a Cristo",
      Letra:
        "Cantaré a Cristo por su gran amor,\r\nComo vino para ser mi Salvador;\r\n¡Tan humilde fue el lugar\r\nen el pueblo de Judá,\r\nDonde Cristo vino por amor de mi!\r\n\r\nCoro:\r\nEs sin igual en su infinito amor,\r\nPues en la cruz allí, su vida dio por mí.\r\nYo cantaré su dulce nombre, sí;\r\n¡Oh Salvador eterno, loores doy a Ti!\r\n\r\nCantaré a Cristo quien en humildad\r\nObró siempre la divina voluntad:\r\nLos enfermos Él sanó,\r\na los muertos levantó,\r\na los pobres Él colmó por su bondad.\r\n\r\nCantaré a Cristo quien murió por mí,\r\ncontaré lo que Él ha hecho para mí;\r\nmis pecados Él llevó,\r\nmi perdón y paz compró,\r\nSiempre cantaré su dulce nombre, sí.",
    },
    {
      ID: "16",
      Titulo: "Cargado estoy de males",
      Letra:
        "Cargado estoy de males y pesar:\r\nMiro hacia el cielo y quiero allí entrar;\r\nAunque no puede en él caber el mal,\r\nalguien me llama al reino celestial.\r\n\r\nTan vil soy yo, ¿Quién puede hacerme entrar\r\nal santo ambiente del divino hogar?\r\n¿Al brillo estar del trono eterno allí?\r\nDice una voz: “Entrar podrás por mí”.\r\n\r\nPor más que anhelo libre estar del mal,\r\nmenos parezco al gran Original:\r\nMas desde el cielo suena nueva aquí:\r\n“Tu mal confiesa, libre estás por mí”.\r\n\r\nLa voz celeste es la del Salvador;\r\nes Él quien hace entrar al pecador.\r\nJesús es quien su sangre derramó;\r\ndel mal me libra, pues por mí murió.\r\n\r\nSí, Tú por mí respondes, oh Señor;\r\nTú me ganaste el cielo, Salvador.\r\nTus sufrimientos danme entrada allí;\r\nyo por tu muerte, vida tengo aquí.\r\n\r\nNinguna ofrenda traigo, mi Señor,\r\ncon que reconocer tu grande amor.\r\nIndigno soy, ¡haz que mi gratitud\r\npruebe de tu perdón la gran virtud!",
    },
    {
      ID: "17",
      Titulo: "Cariñoso Salvador",
      Letra:
        "Cariñoso Salvador, huyo de la tempestad.\r\nA tu seno protector, confiando en tu bondad.\r\nCúbreme Señor Jesús, de las olas del turbión;\r\nhasta el puerto de salud, guía tu mi embarcación.\r\n\r\nOtro asilo no hallaré, indefenso acudo a Ti,\r\nmi necesidad me trae porque mi peligro vi.\r\nSolamente en Ti, Señor, tengo yo consuelo y luz,\r\nVengo lleno de temor a tus pies, Señor Jesús.\r\n\r\nCristo, Salvador, en Ti solo puedo yo confiar,\r\n¡Oh! protégeme a mí en el turbulento mar,\r\nhasta que la tempestad de la vida terrenal\r\nCese con tranquilidad en el puerto celestial.",
    },
    {
      ID: "18",
      Titulo: "¿Cómo puede el pecador...?",
      Letra:
        "¿Cómo puede el pecador\r\nsu perdón aquí saber?\r\n¿Cómo puede el Salvador\r\nesto hacerle comprender?\r\nÉl que siente la verdad\r\nen su propio corazón,\r\ndice con seguridad:\r\n“Dios me ha dado el perdón”.\r\n\r\nQuién confía que Jesús\r\npor su redención murió,\r\nque Él su sangre en la cruz\r\npor salvarle derramó,\r\nhalla por la fe solaz,\r\ngozo y divino amor.\r\nY en su alma tiene paz,\r\nsanta paz en el Señor.",
    },
    {
      ID: "19",
      Titulo: "¿Cómo puedes pecar?",
      Letra:
        "¿Cómo puedes pecar sin temor contra Dios,\r\nechando en olvido su amor?\r\n¿Cómo puedes vivir rechazando la voz\r\nde Cristo, tu buen Salvador?\r\n\r\nCoro:\r\nÉl verano acabó, la siega pasó,\r\ny tenemos que ir y la cuenta rendir\r\ndelante del trono de Dios.\r\n\r\n¿Cómo puedes pensar que al infierno tú vas\r\nsin estremecerte de horror,\r\nSin pedir a tu Dios, mientras tengas lugar\r\nque tenga de ti compasión?\r\n\r\nCuando acabe el verano y llegue la mies,\r\nla muerte vendrá con su hoz,\r\ny tendrás que dar cuenta ante Cristo, tu juez;\r\nentonces no habrá salvación.\r\n\r\nCuando Dios haya puesto su trono de luz,\r\nllamándote a su tribunal,\r\nY buscares en vano refugio en Jesús,\r\n¡Qué espanto y terror sentirás!",
    },
    {
      ID: "20",
      Titulo: "Con voz benigna",
      Letra:
        "Con voz benigna te llama Jesús,\r\ninvitación de puro amor,\r\n¿Por qué le dejas en vano llamar?\r\n¿Sordo serás, pecador?\r\n\r\nCoro:\r\nHoy te convida, hoy te convida.\r\nVoz bendecida,\r\nbenigna convídate hoy.\r\n\r\nA los cansados convida Jesús,\r\ncon compasión mira el dolor.\r\nTráele tu carga, te bendecirá,\r\nte ayudará el Salvador.\r\n\r\nSiempre aguardando contempla a Jesús,\r\n¡Tanto esperar! ¡Con tanto amor!\r\nHasta sus plantas ven, mísero,\r\ny trae Tu tentación, tu dolor.",
    },
    {
      ID: "21",
      Titulo: "Confío yo en Cristo",
      Letra:
        "Confío yo en Cristo,\r\nquien en la cruz murió;\r\npor esa muerte listo,\r\nal cielo viajo yo.\r\nCon sangre tan valiosa\r\nlavó mis culpas Él;\r\nla derramó copiosa\r\nmi Salvador tan fiel.\r\n\r\nMe cubre su justicia\r\nde plena perfección;\r\neres, Jesús, delicia,\r\neres mi salvación.\r\nJesús, en ti descanso,\r\nreposo Tú me das;\r\ncon calma ahora avanzo\r\nal cielo donde estás.\r\n\r\nA disfrutar invitas\r\ncontigo, mi Señor,\r\ndelicias infinitas\r\ny celestial amor.\r\nEspero yo mirarte,\r\noír tu dulce voz;\r\nespero yo cantarte,\r\nmi Salvador y Dios.",
    },
    {
      ID: "22",
      Titulo: "Creed, pecadores",
      Letra:
        "Creed, pecadores, Jesús salvará.\r\nDejad vuestras dudas\r\nal trono de gracia;\r\nvenid confiados, Jesús salvará.\r\nJesús salvará, Jesús salvará.\r\nVenid confiados, Jesús salvará.\r\n\r\nVenid los sedientos, Jesús salvará:\r\nvenid a la fuente,\r\ntomad de las aguas,\r\ntomad libremente, Jesús salvará.\r\nJesús salvará, Jesús salvará;\r\ntomad libremente, Jesús salvará.\r\n\r\nConfiad en su sangre, Jesús salvará.\r\nLa cruz ha vencido;\r\nsu muerte en ella\r\nla ley ha cumplido, Jesús salvará.\r\nJesús salvará, Jesús salvará;\r\nla ley ha cumplido; Jesús salvará.",
    },
    {
      ID: "23",
      Titulo: "Cristo, en Ti confío",
      Letra:
        "Cristo, en Ti confío, salvación me das;\r\nSin Ti estoy perdido, no merezco más;\r\npero Tú viniste mi alma a rescatar,\r\npara que en la gloria yo pudiera entrar.\r\n\r\nCoro:\r\nEn tu amor confiando buscaré tu faz,\r\nporque en tu presencia tengo gran solaz;\r\ndueño de mi vida, amante Salvador,\r\nya me encuentro cautivado por tu amor.\r\n\r\nCristo, a Ti te alabo, ya no mueres más,\r\nhas resucitado y en la gloria estás.\r\nTú por mí intercedes ante el trono allí,\r\ny me guardas cada día junto a Ti.\r\n\r\nCristo, a Ti te espero, vienes pronto ya,\r\nfiel es tu promesa; sí, se cumplirá.\r\nEstaré contigo, semejante a Ti,\r\ny alabanzas gratas cantaré yo allí.",
    },
    {
      ID: "24",
      Titulo: "Cristo, refugio de mí, pecador",
      Letra:
        "Cristo, refugio de mí, pecador,\r\ngloria a ti, sólo a ti.\r\nSólo tu gracia me salva, Señor;\r\ngloria a ti, sólo a ti.\r\nTu sangre preciosa vertida por mí\r\nme da tan segura morada en ti.\r\nCristo, refugio de mí, pecador,\r\ngloria a ti, sólo a ti.\r\n\r\nCristo, refugio de mí, pecador,\r\ngloria a ti, sólo a ti.\r\nMe haces justicia con gracia y amor,\r\ngloria a ti, sólo a ti.\r\nLa duda me hacía vivir en el mal,\r\nahora es cambiada en fe espiritual.\r\nCristo, refugio de mí, pecador,\r\ngloria a ti, sólo a ti.\r\n\r\nCristo, refugio de mí, pecador,\r\nvengo a ti, sólo a ti.\r\nHas padecido, salvándome así,\r\ngloria a ti, sólo a ti.\r\nAfán infinito, y todo por mí;\r\npor eso, Dios santo, diríjome a ti.\r\nCristo, refugio de mí, pecador,\r\ngloria a ti, sólo a ti.",
    },
    {
      ID: "25",
      Titulo: "Cristo su preciosa sangre",
      Letra:
        "Cristo su preciosa sangre\r\nen el Calvario dio;\r\npor nosotros pecadores la vertió.\r\n\r\nCon su sangre tan preciosa\r\nhizo redención:\r\ny por eso Dios te brinda el perdón.\r\n\r\nEs la sangre tan preciosa\r\ndel buen Salvador\r\nlo que quita los pecados y el temor.\r\n\r\nSin la sangre es imposible\r\nque haya remisión;\r\npor las obras no se alcanza salvación.",
    },
    {
      ID: "26",
      Titulo: "Cual pendón hermoso",
      Letra:
        "Cual pendón hermoso despleguemos hoy\r\nla bandera de la cruz;\r\nla verdad del evangelio, el blasón\r\ndel soldado de Jesús.\r\nCoro:\r\nAdelante, adelante,\r\nsiguiendo a nuestro Salvador,\r\nNos da gozo y paz nuestro Rey,\r\n¡Adelante con valor!\r\n\r\nPrediquemos siempre lo que dice Dios\r\nde la sangre de Jesús,\r\ncómo limpia del pecado al mortal\r\ny le otorga la salud.\r\n\r\nEn el mundo proclamemos con fervor\r\nesta historia de la cruz;\r\nbendigamos sin cesar al Redentor,\r\nquien nos trajo paz y luz.\r\n\r\nEn el cielo nuestro cántico será\r\nalabanzas a Jesús;\r\nNuestro corazón allí rebosará\r\nde amor y gratitud.",
    },
    {
      ID: "27",
      Titulo: "Cuán bendito es el hombre",
      Letra:
        "¡Cuán bendito es el hombre\r\nperdonado por Jesús,\r\ncon el corazón lavado\r\nen la sangre de la cruz!\r\nSí, es bienaventurado\r\nal que Dios no contará\r\nni engaño, ni pecado,\r\nmas su gracia le dará.\r\n\r\nTriste, envuelto en el silencio,\r\nmis pecados escondí;\r\n¡Qué pesares de conciencia,\r\nqué miserias padecí!\r\nMas por fin desesperado,\r\ndescubrí mi aflicción;\r\nmis pecados confesando,\r\nen Jesús busqué perdón.\r\n\r\nEscuchó Él mis clamores,\r\nmis pecados perdonó,\r\ny de todas mis angustias,\r\ncompasivo, me libró.\r\n¡Gloria a ti, Señor eterno,\r\nadorable Salvador!\r\n¡Gloria a ti en las alturas,\r\nDios de vida, Dios de amor!",
    },
    {
      ID: "28",
      Titulo: "Cuán dulce en los oídos",
      Letra:
        "¡Cuán dulce en los oídos del triste pecador,\r\nla voz de Cristo suena, su amante Salvador!\r\n“Ven alma trabajada, de penas y dolor,\r\ndescarga en Mí tus culpas,\r\ntu angustia y tu temor”.\r\n\r\nCoro:\r\nVen, sí, ven a Mí; ven, sí, ven a Mí;\r\nalma atribulada, ven, sí, ven a Mí.\r\n(Bis todo el coro)\r\n\r\n¿Deseas un amigo eternamente fiel,\r\nsostén en tus flaquezas, autor de todo bien?\r\nAcude, pues, a Cristo, y en Él encontrarás\r\nperdón, descanso y gozo, amor y dulce paz.\r\n\r\nSí, Cristo es el camino, la vida y la verdad,\r\núnico sacrificio que expía la maldad;\r\núnico sacerdote, y sólo mediador:\r\nCristo, sí, sólo Cristo, es nuestro Salvador.",
    },
    {
      ID: "29",
      Titulo: "Cuando llegues a morir",
      Letra:
        "Cuando llegues a morir,\r\ncuando dejes de vivir,\r\ny entres en la eternidad,\r\n¿Cómo entonces te hallarás?\r\nPronto el Juez se sentará,\r\npronto al mundo juzgará.\r\n¿Cómo a Dios contestarás?\r\n¿Cómo entonces te hallarás?\r\n\r\nAl llegarte a despedir\r\nde los salvos, y decir:\r\n“Ya no nos veremos más”,\r\n¿Cómo entonces te hallarás?",
    },
    {
      ID: "30",
      Titulo: "Cuando oía contar",
      Letra:
        "Cuando oía contar del amor de Jesús,\r\nmi alma no lo comprendía;\r\nMe contaban su angustia\r\ny dolor en la cruz,\r\nmas mi alma no se conmovía.\r\nNo podía comprender el afán\r\ny la fe con que hablaban\r\nde Cristo y su amor;\r\nmas ahora yo puedo decirlo también:\r\nJesús es mi Salvador.\r\n\r\nCoro:\r\nJesús es mi Salvador, (Bis)\r\nMas ahora yo puedo decirlo también:\r\nJesús es mi Salvador.\r\n\r\nMe decían que Jesús era el Hijo de Dios,\r\nde todas las cosas Creador;\r\nSiendo en forma de Dios,\r\nforma de hombre tomó;\r\nasí pudo ser Salvador.\r\nEste mundo al Señor de la gloria\r\nen la cruz, le colgó,\r\ndespreciando su amor;\r\nPero Dios me hizo ver en la cruz mi salud,\r\nJesús es mi Salvador.",
    },
    {
      ID: "31",
      Titulo: "Cuando perdido anduve",
      Letra:
        "Cuando perdido anduve en noche terrenal,\r\nDe su hogar glorioso vino Cristo el Señor;\r\nHasta el mundo vino la gran obra a terminar\r\nDe la salvación del pobre pecador.\r\n\r\nCoro:\r\nCierta, cierta, cierta es la palabra\r\nQue Jesús, que Jesús, vino acá a salvar;\r\nA salvarnos a los pecadores,\r\nY su vida en precio de rescate dar.\r\n\r\nCuando perdido anduve, vino el Buen Pastor,\r\nVino en busca del cordero que se perdió;\r\nA sufrir la muerte le llevó su gran amor,\r\nY con regocijo a su cordero halló.\r\n\r\nGracias a Cristo que a la muerte se entregó\r\nPara abrir la puerta de su hogar celestial;\r\nDe la muerte victorioso Dios le levantó,\r\nY en la Gloria vive para perdonar.\r\n\r\nCoro:\r\nGracias, gracias, gracias doy a Cristo,\r\nQue murió, que murió y resucitó;\r\nPor salvarme y justificarme,\r\nAhora agradecido en Él confío yo.",
    },
    {
      ID: "32",
      Titulo: "De la ley libre",
      Letra:
        "¡De la ley libre! ¡Dicha indecible!\r\nCristo sufrió la pena terrible:\r\nRota su liga, al preso soltó;\r\nCristo por siempre nos salvó.\r\n\r\nCoro:\r\n¡Nos salvó! ¿Por qué no le admites?\r\n¡Nos salvó! ¿Qué, amigo, me dices?\r\nCree en el Señor, que nos libertó,\r\nCristo por siempre nos salvó.\r\n\r\n¡No más cautivos! Ya no hay cadena,\r\nCristo nos dio la vida eterna;\r\n“Ven a mí”, dijo, cuando llamó,\r\nCristo por siempre nos salvó.\r\n\r\n¡Hijos de Dios! ¡Paternidad santa!\r\nVida perpetua, libre de falta,\r\nnos brindará; y con gran poder\r\nCristo la muerte ha de vencer.",
    },
    {
      ID: "33",
      Titulo: "De mi tristeza",
      Letra:
        "De mi tristeza y esclavitud,\r\nvengo Jesús, vengo Jesús,\r\nA tu alegría y a tu virtud,\r\nvengo Jesús a Ti.\r\nDe mi pobreza y enfermedad,\r\na tu salud y rica bondad,\r\nA tu presencia, de mi maldad,\r\nvengo Jesús a Ti.\r\n\r\nDe mi flaqueza y falta de luz,\r\nvengo Jesús, vengo Jesús,\r\nAl eminente bien de tu cruz,\r\nvengo Jesús a Ti.\r\nDel sufrimiento que es terrenal,\r\na Ti mi médico celestial,\r\nPara ser libre de todo mal,\r\nvengo Jesús a Ti.\r\n\r\nDe mi soberbia e intranquilidad,\r\nvengo Jesús, vengo Jesús,\r\nPara morar en tu voluntad,\r\nvengo Jesús a Ti.\r\nDe mi tristeza a tu gran amor,\r\na Ti Jesús, mi consolador,\r\nPara por siempre darte loor,\r\nvengo Jesús a Ti.\r\n\r\nDe ese terror que la tumba me da,\r\nvengo Jesús, vengo Jesús,\r\nA la alegría y luz de tu hogar,\r\nvengo Jesús a Ti.\r\nDe la indecible profundidad,\r\na tu redil de tranquilidad,\r\nA ver tu faz por la eternidad,\r\nvengo Jesús a Ti.",
    },
    {
      ID: "34",
      Titulo: "De tal manera",
      Letra:
        "De tal manera Dios amó\r\na los perdidos, que mandó\r\nA Jesucristo a acudir\r\ny por su redención morir.\r\n\r\nMovido por el mismo amor,\r\nal mundo vino el Salvador,\r\ntrocando el trono de la luz\r\npor el madero de la cruz.\r\n\r\nJesús murió y todo aquel\r\nque presuroso viene a él,\r\nEn él refugio encontrará\r\ny vida eterna gozará.",
    },
    {
      ID: "35",
      Titulo: "De una hermosa ciudad",
      Letra:
        "De una hermosa ciudad he leído\r\nen el reino de Dios más allá.\r\nDe su muro de jaspe he sabido,\r\nde oro puro es aquella ciudad.\r\nPor el medio va el río de vida,\r\ncual cristal resplandecen sus aguas;\r\nmas ni aun la mitad de sus glorias\r\nal hombre se puede contar.\r\nCoro:\r\n¡Oh! no se puede contar… (Bis)\r\nNi aun la mitad de sus glorias\r\nal hombre se puede contar.\r\n\r\nDe mansiones de luz he leído,\r\npreparadas por mi Salvador,\r\ny los suyos que aquí le han servido\r\nya descansan con Cristo el Señor;\r\nNi el pecado ni el llanto allí entran,\r\ny ninguno se envejecerá;\r\nmas ni aun la mitad de sus glorias\r\nal hombre se puede contar.\r\n\r\nDe Jesús tan amante he leído,\r\nque recibe al más vil pecador,\r\nperdonándole todo el delito,\r\ncuando vuelve con fe al Salvador.\r\nTambién sé que protege y guía\r\ntodo aquel que al redil quiere entrar;\r\nmas ni aun la mitad de sus glorias\r\nal hombre se puede contar.",
    },
    {
      ID: "36",
      Titulo: "Del país distante",
      Letra:
        "Del país distante donde no hay sostén,\r\nPadre, pan ni casa, ¡ven hijo, ven!\r\n\r\nCoro:\r\nBienvenido seas hoy al real hogar,\r\nDios el beso de su amor te espera dar.\r\n\r\nVe la puerta abierta, ¿sabes para quién?\r\nPara ti hoy día, ¡ven hijo, ven!\r\n\r\nAl hogar paterno, donde hay todo bien,\r\nDel país del hambre, ¡ven hijo, ven!\r\n\r\nOjos compasivos tu venida ven,\r\nFiestas te preparan, ¡ven hijo, ven!\r\n\r\nMas si tal convite tratas con desdén,\r\n¿cuál será tu suerte? ¡ven hijo, ven!",
    },
    {
      ID: "37",
      Titulo: "Descarriéme cual oveja",
      Letra:
        "Descarriéme cual oveja,\r\npero Cristo me buscó;\r\ny me recogió en su seno;\r\nAl camino me volvió.\r\n\r\nCoro:\r\nCantaré la grata historia\r\nde Jesús mi Salvador,\r\nQuien murió en el Calvario\r\npor mí, un pobre pecador.\r\n\r\nFui esclavo del pecado,\r\nCristo vio mi condición,\r\nCon su sangre derramada\r\nÉl compró mi redención.\r\n\r\nMuchas veces tengo penas,\r\nmas Jesús ve mi aflicción;\r\nCon su voz de amor consuela\r\nmi abatido corazón.",
    },
    {
      ID: "38",
      Titulo: "¡Despierta! triste pecador",
      Letra:
        "¡Despierta! triste pecador,\r\n¡Oye, sí; oye, sí!\r\nporque te dice el Salvador:\r\n“¡Ven a mí, ven a mí!\r\nA tu penoso trabajar\r\npreparo dulce bienestar,\r\nen donde puedes descansar,\r\n¡Oye, sí, ven a mí”!\r\n\r\n“Yo soy la fuente del perdón,\r\n¡Oye, sí; oye, sí!\r\nEn mí hay vida, salvación,\r\n¡Ven a mí, ven a mí!\r\nSi del castigo huyendo vas,\r\nen mí refugio encontrarás,\r\ny vida eterna en mí tendrás.\r\n¡Oye, sí, ven a mí!”\r\n\r\n“Los que me buscan con afán,\r\n¡Oye, sí; oye, sí!\r\njamás desatendidos van.\r\n¡Ven a mí, ven a mí”!\r\nLa compasión del Redentor\r\nte dice, a ti hoy, pecador:\r\n“Admíteme por tu pastor,\r\n¡Oye, sí; ven a mí!”\r\n\r\n“Si quieres la felicidad,\r\n¡Oye, sí; oye sí!\r\nSi buscas la tranquilidad,\r\n¡Ven a mí, ven a mí!\r\nTus lágrimas enjugaré,\r\ny tus heridas sanaré.\r\nLa vida eterna te daré,\r\n¡Oye, sí, ven a mí!”",
    },
    {
      ID: "39",
      Titulo: "Despliegue el cristiano",
      Letra:
        "Despliegue el cristiano su santa bandera,\r\ny muéstrela ufano del mundo a la faz.\r\n¡Soldados valientes! ¡el triunfo os espera,\r\nseguid vuestra lucha constante y tenaz!\r\n\r\nDespliegue el cristiano su santa bandera,\r\ndomine baluartes y almenas a mil.\r\nLa Biblia bendita conquista doquiera,\r\ny ante ella se incline la turba gentil.\r\n\r\nDespliegue el cristiano su santa bandera,\r\npredique a los pueblos el libro inmortal,\r\npresente a los hombres la luz verdadera\r\nque vierte ese claro luciente fanal.\r\n\r\nDespliegue el cristiano su santa bandera,\r\ny muéstrese bravo, batiéndose fiel.\r\nPara él no habrá fosos, para él no hay barrera;\r\nque lucha a su lado el divino Emanuel.",
    },
    {
      ID: "40",
      Titulo: "Dicha grande",
      Letra:
        "Dicha grande es la del hombre\r\ncuyas sendas rectas son,\r\nLejos de los pecadores,\r\nlejos de la tentación.\r\nA los malos consejeros deja,\r\nporque teme el mal,\r\nHuye de la burladora gente\r\nimpía e inmoral.\r\n\r\nAntes en la ley divina\r\ncifra su mayor placer,\r\nMeditando día y noche\r\nen su divinal saber,\r\nEste como el árbol verde,\r\nbien regado y en sazón,\r\nFrutos abundantes rinde\r\ny hojas que perennes son.\r\n\r\nCuanto emprende es prosperado,\r\nduradero le es el bien,\r\nMuy adversos resultados\r\nsacan los que nada creen,\r\nPues los lanza como el tamo\r\nque el ciclón arrebató,\r\nde pasiones remolino\r\nque a millones destruyó.\r\n\r\nEn el juicio ningún malo\r\npor lo tanto se alzará,\r\nEntre justos congregados\r\ninsensatos nunca habrá,\r\nPorque Dios la vía mira\r\npor la cual los suyos van,\r\nOtra es la de los impíos\r\nque al infierno bajarán.",
    },
    {
      ID: "41",
      Titulo: "Dime la antigua historia",
      Letra:
        "Dime la antigua historia\r\ndel celestial favor,\r\nDe Cristo y de su gloria,\r\nde Cristo y de su amor.\r\nDímela con llaneza\r\npropia de la niñez,\r\nPorque es mi mente flaca\r\ny anhela sencillez.\r\n\r\nCoro:\r\nDime la antigua historia,\r\ncuéntame la victoria,\r\nHáblame de la gloria\r\nde Cristo y de su amor.\r\n\r\nDime esa grata historia\r\ncon lentitud, y así\r\nConoceré la obra\r\nque Cristo hizo por mí.\r\nDímela con frecuencia,\r\npues soy dado a olvidar,\r\ny el manantial roció\r\nsuele el sol disipar.\r\n\r\nDime tan dulce historia\r\ncon tono claro y fiel,\r\nMurió Jesús y salvo\r\nyo quiero ser por El.\r\nDime esa historia siempre,\r\nsi en tiempo de aflicción\r\nDeseas a mi alma\r\ntraer consolación.\r\n\r\nDime la misma historia,\r\nsi crees que tal vez\r\nMe ciega de este mundo\r\nla falsa brillantez.\r\nY cuando ya me alumbre\r\nde la gloria la luz,\r\nRepíteme la historia:\r\n“Quien te salva es Jesús”.",
    },
    {
      ID: "42",
      Titulo: "Dios de amor",
      Letra:
        "Dios de amor, Dios de amor,\r\na Ti vine pecador,\r\nNada de bueno había en mí,\r\nmas de lo bueno que no merecí,\r\nTodo en Ti encontré, todo en Ti encontré.\r\n\r\nDios de amor, Dios de amor,\r\ncuando vine con temor,\r\nMe recibiste y me diste lugar\r\ncon alegría en tu buen hogar,\r\nY como hijo yo entré, y como hijo yo entré.\r\n\r\nDios de amor, Dios de amor,\r\ngracias doy por tu favor,\r\nAunque el siervo de casa saldrá,\r\nel que es hijo permanecerá,\r\nY él hartura tendrá, y el hartura tendrá.\r\n\r\nDios de amor, Dios de amor,\r\nme consagro con fervor,\r\nMás fielmente te quiero servir,\r\ny por Ti solo ya quiero vivir,\r\nHaz Tú que sea así, haz Tú que sea así.",
    },
    {
      ID: "43",
      Titulo: "¿Dónde estarás en la eternidad?",
      Letra:
        "¿Dónde estarás en la eternidad?\r\n¿Nunca has sufrido tal ansiedad?\r\n¿En qué sentido has de contestar?\r\n¿Dónde estarás en la eternidad?\r\n\r\nCoro:\r\n¡Eternidad! ¡Eternidad!\r\n¿Dónde estarás en la eternidad?\r\n\r\nUnos se acogen al Salvador,\r\nya desechando su viejo error.\r\nEllos con Cristo lugar tendrán,\r\na eterna gloria los suyos van.\r\n\r\nOtros siguiendo su voluntad,\r\ndesconociendo su ruindad,\r\nandan por senda de rebelión\r\nque los conduce a perdición.\r\n\r\nTu indecisión puede ser fatal.\r\n¡Piensa que el alma es inmortal!\r\nDios quiere darte eterna salud\r\ny de su gracia la plenitud.",
    },
    {
      ID: "44",
      Titulo: "Dos únicos caminos hay",
      Letra:
        "Dos únicos caminos hay,\r\npor ellos todos van,\r\nSegún el hombre escoja aquí,\r\ntendrá su eternidad.\r\n\r\nCoro:\r\nLa paga del pecado muerte es, muerte es,\r\nLa paga del pecado muerte es, muerte es,\r\nMás la vida eterna es el don de Dios\r\npor el Señor Jesús,\r\nMás la vida eterna es el don de Dios,\r\npor el Señor Jesús.\r\n\r\nPor el camino ancho va\r\nla grande multitud,\r\nPensando sólo en su placer,\r\nse olvidan de Jesús.\r\n\r\nPor el camino angosto van\r\nlos salvos por Jesús,\r\nNegándose, en pos de El,\r\ncaminan con su cruz.\r\n\r\nLos engañados de Satán,\r\ntendrán un triste fin,\r\nEl fuego eterno de dolor,\r\nel lloro y el gemir.\r\n\r\nLos que andan con Jesús aquí,\r\nsi sufren aflicción,\r\nTendrán su recompensa allí,\r\neterno galardón.",
    },
    {
      ID: "45",
      Titulo: "El Buen Pastor al verme",
      Letra:
        "El Buen Pastor al verme\r\nperdido e infeliz,\r\nLlegando a donde estaba,\r\nme trajo a su redil;\r\nY al ver que Cristo me salvó,\r\nel cielo entero se alegró.\r\n\r\nCoro:\r\nSoy salvo por su gracia,\r\nsu tierno amor me sacia,\r\nSu preciosa sangre me lavó,\r\ny hasta hoy su brazo me guardó.\r\n\r\nMe señaló sus llagas,\r\nsu sangre me mostró,\r\nMe dijo: “Por salvarte\r\nla vida puse Yo”;\r\nJamás oí tan dulce voz,\r\nllenóme de la paz de Dios.\r\n\r\nAl recordar mi vida\r\nde olvido de Jesús,\r\nNo sé por qué quisiera\r\nmorir por mí en la cruz;\r\nMás creo su palabra fiel,\r\ny vida eterna tengo en El.\r\n\r\nYo encuentro en su presencia\r\ndescanso y dulce paz,\r\nY espero el grato día\r\nen que veré su faz;\r\nY mientras en el mundo esté,\r\nsus alabanzas cantaré.",
    },
    {
      ID: "46",
      Titulo: "El evangelio santo",
      Letra:
        "El evangelio santo\r\nanuncia al pecador\r\nQue Dios al mundo amó\r\ny dióle un Salvador.\r\n\r\nCoro:\r\nY quien en Cristo creerá,\r\nde vida eterna gozará. (Bis)\r\n\r\nAquél que peca muere,\r\nasí Dios sentenció;\r\nMás Cristo por amor,\r\nsu propia vida dio.\r\n\r\nEl Salvador del mundo\r\nno vino a condenar,\r\nMas vino por su cruz\r\nlos hombres a salvar.",
    },
    {
      ID: "47",
      Titulo: "El grande amor",
      Letra:
        "El gran amor del Salvador,\r\nmuriendo en vez del pecador,\r\nSu santo empeño por salvar,\r\n¿Quién lo podrá contar?\r\n\r\nCoro:\r\n¿Quién puede tal amor contar? (Bis)\r\nEl gran amor del Salvador,\r\n¿Quién lo podrá contar?\r\n\r\nLa maravilla de su amor,\r\ncruz afrentosa, cruel dolor,\r\nQue padeció en mi lugar,\r\n¿Quién lo podrá contar?\r\n\r\nIncomparable Salvador,\r\n¡Cuán tierno es tu precioso amor!\r\n¡Cuán imposible de contar!,\r\n¡Cuán grande y sin par!",
    },
    {
      ID: "48",
      Titulo: "El llorar no salva",
      Letra:
        "El llorar no salva;\r\naunque corra por mi faz\r\nllanto amargo en profusión,\r\nno me lavará jamás.\r\nEl llorar no salva.\r\n\r\nCoro:\r\nLágrimas y vida dio,\r\nprecio inmenso de mi paz,\r\nquien del cielo descendió.\r\nEs Jesús quien salva.\r\n\r\nObras no me salvan,\r\nCuanto yo pudiera hacer\r\nes del todo ineficaz,\r\npues no me hace renacer.\r\nObras no me salvan.\r\n\r\nCoro:\r\nVida nueva tengo en él\r\nquien la ley de Dios cumplió,\r\nquien en Gólgota expiró.\r\nEs Jesús quien salva.\r\n\r\nAplazar no salva,\r\nDelinquí, perdido estoy;\r\noigo del amor la voz;\r\nmuere mi alma si no voy.\r\nAplazar no salva.\r\nCoro:\r\nPor mi bien se apresuró\r\nCristo, en quien confío yo.\r\nÉl con mi maldad cargó;\r\nes Jesús quien salva.",
    },
    {
      ID: "49",
      Titulo: "El mensaje del Señor",
      Letra:
        "El mensaje del Señor\r\n¡escuchad, escuchad!\r\nY loor a vuestro Dios\r\n¡tributad, tributad!\r\n¡Oh, cuán grande es su piedad\r\npara el pobre pecador!\r\nPues nos salva por confiar\r\nen Jesús, Salvador.\r\n\r\nAcercaos a Jesús,\r\n¡confiad, confiad!\r\nÉl nos dice: “A mí venid,\r\n¡descansad, descansad!”\r\n¡Oh! ¿por qué rechazaréis\r\nel amor del Redentor?\r\nDigno es Él de recibir\r\nnuestra fe, nuestro amor.\r\n\r\nEn la viña del Señor\r\n¡trabajad, trabajad!\r\nY a Jesús el Salvador\r\n¡alabad, alabad!\r\nSi sufrís aquí por él,\r\ncon él siempre reinaréis,\r\ny en la eternidad allí\r\ngozaréis, gozaréis.",
    },
    {
      ID: "50",
      Titulo: "El mundo perdido",
      Letra:
        "El mundo perdido en pecado se vio,\r\nJesús es la luz del mundo,\r\nMas en las tinieblas la gloria brilló,\r\nJesús es la luz del mundo.\r\n\r\nCoro:\r\nVen a la luz, no quieras perder,\r\ngozo perfecto al amanecer,\r\nYo ciego fui, mas ya puedo ver;\r\nJesús es la luz del mundo.\r\n\r\nCual niebla deshace del sol el calor,\r\nJesús es la luz del mundo,\r\nAsí toda duda disipa su amor,\r\nJesús es la luz del mundo.\r\n\r\n¡Oh! ciegos y presos del lóbrego error,\r\nJesús es la luz del mundo,\r\nEl manda lavaros, y ver su fulgor,\r\nJesús es la luz del mundo.",
    },
    {
      ID: "51",
      Titulo: "El Salvador Jesús murió",
      Letra:
        "El Salvador Jesús murió\r\npor nuestra redención,\r\nY su perfecta ofrenda ya\r\nes la base del perdón.\r\n\r\nAhora ofrece salvación\r\na todo aquél que cree,\r\nPalabra del Señor que bien\r\nmerece nuestra fe.\r\n\r\nPues aceptemos sin dudar\r\nel indecible don,\r\nY por la obra de la cruz\r\nbusquemos salvación.",
    },
    {
      ID: "52",
      Titulo: "En la ciudad de Dios",
      Letra:
        "En la ciudad de Dios\r\nno cabe el pecador,\r\nPuro es su brillo,\r\npuro es su brillo,\r\nsin mancha es su fulgor.\r\n\r\nPerdona mi maldad,\r\nsoy pobre pecador.\r\nLava mis culpas,\r\nlava mis culpas,\r\nbendito Salvador.\r\n\r\nTu hijo quiero ser\r\npor siempre, mi Señor.\r\nTú eres mi amparo,\r\nTú eres mi amparo,\r\ncontra el vil tentador.\r\n\r\n¡Oh! cuando arriba esté,\r\nsalvado por tu cruz,\r\npuro y sin mancha,\r\npuro y sin mancha,",
    },
    {
      ID: "53",
      Titulo: "Es Jesucristo la vida",
      Letra:
        "Es Jesucristo la vida, la luz.\r\nÉl nos demuestra la felicidad,\r\nEl Redentor quien ha muerto en la cruz\r\npor darnos libertad.\r\n\r\nCoro:\r\nÉl es Pastor enviado\r\ny divino Emanuel,\r\nÉl me conduce por sendas de paz,\r\ncomo a su oveja fiel.\r\n\r\nQuita del alma la incredulidad,\r\nlimpia las manchas de infiel corazón.\r\nEs su carácter la suma bondad,\r\nnos tiene compasión.\r\n\r\nFuente preciosa de gracia y salud,\r\ncrisol que limpia de toda maldad.\r\nFeliz quien toma de su plenitud\r\ny de su santidad.",
    },
    {
      ID: "54",
      Titulo: "Es palabra fiel",
      Letra:
        "Es palabra fiel y digna\r\nque Jesús, el Salvador,\r\nHa venido al pobre mundo\r\na salvar al pecador.\r\n\r\nCoro:\r\n¡Mensaje tan glorioso hoy yo proclamaré!\r\nLa salvación eterna en Cristo por la fe.\r\n\r\nEl ha consumado la obra\r\npor su sacrificio fiel,\r\nAhora el Padre satisfecho\r\nnos acepta solo en El.\r\n\r\nDe la muerte ya triunfante,\r\nen la gloria El hoy está,\r\nEl Cordero fue inmolado,\r\ny por ti El abogará.\r\n\r\nMas el mismo Jesucristo\r\nque te quiere ya salvar,\r\nLlegará muy pronto en juicio\r\ny te puede condenar.\r\n\r\nPues, acepta ahora mismo\r\nel mensaje de su amor,\r\nY, salvado por su sangre,\r\nobedece al Salvador.",
    },
    {
      ID: "55",
      Titulo: "Está mi Salvador aquí",
      Letra:
        "Está mi Salvador aquí,\r\nel amoroso Cristo,\r\nAquél que se entregó por mí,\r\nbendito Jesucristo.\r\n\r\nCoro:\r\nNombre digno de mi honor,\r\nnombre digno de mi amor;\r\nNombre de mi Redentor,\r\nCristo, Jesucristo.\r\n\r\nOs dice El “venid a Mi”\r\n¡Oíd la voz de Cristo!\r\nSeguidle poco tiempo aquí,\r\ny reinareis con Cristo.\r\n\r\nDoy gracias a mi Redentor,\r\nconfío yo en Cristo;\r\nSu nombre a mí me infunde amor,\r\nsu dulce nombre, Cristo.\r\n\r\nVenid, cantad a nuestro Dios,\r\nal glorioso Cristo,\r\nCantad con corazón y voz,\r\nal santo nombre, Cristo.",
    },
    {
      ID: "56",
      Titulo: "¡Eternidad!",
      Letra:
        "¡Eternidad! ¡Qué grande eres!\r\n¡Eternidad, que nunca mueres!\r\n¡Oh dime!: ¿Dónde yo iré?\r\n¿Qué suerte allí yo encontraré?\r\nFeliz o triste, ¿cuál será?\r\n¡La eternidad se acerca ya!\r\n\r\n¡Eternidad! ¿Qué cuentas llevas?\r\n¡Eternidad! ¿Con qué me pagas\r\nlas horas del carnal placer,\r\nlas obras que dejé de hacer?\r\nPesar o gozo, ¿cuál será?\r\n¡La eternidad se acerca ya!\r\n\r\n¡Señor Jesús! ¡Mi fiador!\r\n¡Señor Jesús! ¡Mi Salvador!\r\nLa vida diste Tú por mí,\r\nmi espíritu halla paz en ti.\r\nLa eternidad no espanta ya,\r\nla eternidad no espanta ya.\r\n\r\n¡Eternidad! ¡Suprema gloria!\r\n¡Eternidad! ¡De amor la historia!\r\n¡Que corran siglos a su fin,\r\nque suene el último clarín!\r\n¡Oh ven, Señor, ven sin tardar!\r\n¡La eternidad se acerca ya!",
    },
    {
      ID: "57",
      Titulo: "Francas las puertas",
      Letra:
        "Francas las puertas encontrarán,\r\nunos, sí; otros, no.\r\nDe alguien las glorias sin fin serán,\r\n¿Y tú? ¿Y yo? (Bis)\r\nCalles de oro, mar de cristal,\r\npleno reposo, perfecto amor;\r\nunos tendrán celestial hogar.\r\n¿Y tú? ¿Y yo? (Bis)\r\n\r\nFieles discípulos de Jesús,\r\nunos sí, otros no,\r\nlogran corona en vez de cruz.\r\n¿Y tú? ¿Y yo? (Bis)\r\nMora el Rey en gloriosa luz;\r\ncon él no puede haber dolor.\r\nDe alguien es esta beatitud.\r\n¿Y tú? ¿Y yo? (Bis)\r\nLlegan a tiempo, pasando bien,\r\nunos, sí; otros, no.\r\nUnos las puertas cerradas ven.\r\n¿Y tú? ¿Y yo? (Bis)\r\nCiegos y sordos hoy nada creen,\r\ntarde lamentarán tal error.\r\nEl que desdeñan será su Juez.\r\n¿Y tú? ¿Y yo? (Bis)\r\n\r\nSon herederos del porvenir,\r\nunos, sí; otros no,\r\nlos que procuran por Dios vivir.\r\n¿Y tú? ¿Y yo? (Bis)\r\nCuando concluya la dura lid,\r\nen compañía del Salvador,\r\nalguien será sin cesar feliz.\r\n¿Y tú? ¿Y yo? (Bis)",
    },
    {
      ID: "58",
      Titulo: "Grata nueva",
      Letra:
        "Grata nueva Dios proclama\r\nhoy al mundo pecador,\r\ndulce nueva revelada\r\nen la cruz del Salvador.\r\n\r\nCoro:\r\nLuz divina resplandece,\r\nmuestra al triste pecador,\r\nQue en la cruz de Cristo juntas,\r\nsu justicia y gran amor.\r\n\r\nCiego el hombre y obcecado\r\nen las sendas del error,\r\nDesconoce y desconfía\r\nde este Dios, del Dios de amor.\r\n\r\nCon ofrendas, obras vanas,\r\nsacrificios sin valor,\r\nPiensa el hombre acongojado\r\npropiciar su Creador.\r\n\r\nHabla Tú a los corazones,\r\nmuéstrate Dios Salvador,\r\nY sin fin proclamaremos:\r\n¡Dios es luz! ¡Dios es amor!",
    },
    {
      ID: "59",
      Titulo: "Hallé un buen amigo",
      Letra:
        "Hallé un buen amigo, mi amado Salvador,\r\nContaré lo que El ha hecho para mí:\r\nHallándome perdido e indigno pecador,\r\nMe salvó y ya me guarda para sí.\r\nMe salva del pecado, me guarda de Satán,\r\nPromete estar conmigo hasta el fin;\r\nEl consuela mi tristeza, me quita todo afán,\r\n¡Grandes cosas Cristo ha hecho para mí!\r\n\r\nJesús jamás me falta, jamás me dejará,\r\nEs mi fuerte y poderoso protector;\r\nDel mundo yo me aparto y de la vanidad\r\nPara dedicar mi vida a mi Señor.\r\nSi el mundo me persigue, si sufro tentación,\r\nConfiando en Cristo puedo resistir;\r\nLa victoria me es segura y elevo mi canción,\r\n¡Grandes cosas Cristo ha hecho para mí!\r\n\r\nYo sé que Jesucristo muy pronto volverá,\r\nY entretanto me prepara un lugar\r\nEn la casa de mi Padre, mansión de luz y paz,\r\nDonde el creyente fiel con él ha de morar.\r\nLlegándome a la gloria, con El yo estaré\r\nY contemplaré su rostro siempre allí;\r\nCon los santos redimidos gozoso cantaré,\r\n¡Grandes cosas Cristo ha hecho para mí!",
    },
    {
      ID: "60",
      Titulo: "Hay una vez pasada esta vida",
      Letra:
        "Hay, una vez pasada esta vida\r\ncon sus pesares, cuitas y afán,\r\npaz y reposo y una bienvenida,\r\nque los creyentes gozarán.\r\nHay un hogar, do se verá cumplida\r\ndel alma la continua oración;\r\ndonde jamás será entristecida\r\npor disensión, por disensión.\r\n\r\nHay esperanza para el creyente\r\nque le alza de este mundo más allá,\r\ny de la tumba saca refulgente\r\nla vida que no pasará.\r\nCorona hay por Cristo preparada,\r\nel fiel cristiano ve su brillantez\r\ny dice, fija en la mirada:\r\n“Sí, mía es; sí, mía es”.\r\n\r\nVestido hay que Cristo ha provisto,\r\n¿No quieres tú el alma revestir?\r\n¡Oh! tú que vagas lejos y perdido,\r\nal Salvador hoy debes ir.\r\nCreyendo en él tendrás el mismo cielo,\r\nmas rechazándole te perderás.\r\nOh, ¿cuál, eterna dicha o eterno duelo,\r\nescogerás, escogerás?",
    },
    {
      ID: "61",
      Titulo: "Hermano, dinos hoy",
      Letra:
        "Hermano, dinos hoy algo de Jesús,\r\ndinos otra vez la historia de su amor,\r\nDecláranos tu fe, gozo y gratitud,\r\ndinos otra vez la historia de su amor.\r\n¿Sigues siempre cerca de tu Señor?\r\n¿Arde tu alma del primer fervor?\r\n¿Está tu copa llena de bendición?\r\nDinos otra vez la historia de su amor.\r\n\r\nCoro:\r\nDinos otra vez la historia\r\ndel amor del Salvador;\r\nTan bendita y grata historia,\r\nnos hará cantar su gloria,\r\nDinos otra vez la historia de su amor.\r\n\r\nAl escuchar tu voz habla del Señor,\r\ndinos otra vez la historia de su amor,\r\nTal vez un pecador se convierta a Dios, dinos otra vez la historia de su amor.\r\nMuchos tienen sed en su corazón,\r\nen el mundo buscan diversión,\r\nSeñálales la fuente de bendición,\r\ndinos otra vez la historia de su amor.\r\n\r\nLa ayuda que te ha dado en la tentación,\r\ndinos otra vez la historia de su amor,\r\nLas pruebas de tu fe y su compasión,\r\ndinos otra vez la historia de su amor.\r\nDinos que Jesús es tu amigo fiel,\r\nque es tu capitán y buen pastor,\r\nSocorro oportuno has hallado en El,\r\ndinos otra vez la historia de su amor.",
    },
    {
      ID: "62",
      Titulo: "Hoy Jesús te quiere hablar",
      Letra:
        "Hoy Jesús te quiere hablar,\r\npobre pecador.\r\nNo le quieras rechazar\r\nde tu corazón.\r\n\r\nCoro:\r\n¡A tu puerta llama,\r\ndale entrada, sí!\r\nLa visita bienhechora\r\nhoy es para ti.\r\n\r\n¿Nada vale ya su voz\r\nen tu corazón?\r\n¿Nada puede en ti el amor\r\nde tu Salvador?\r\n\r\nPecador, ¿por qué vivir\r\nsin la salvación?\r\nY ¿por qué has de resistir\r\nmás a tu Señor?",
    },
    {
      ID: "63",
      Titulo: "Jesús del cielo",
      Letra:
        "Jesús del cielo sobre nos\r\nderrama su bondad;\r\ncon ricos dones y la voz\r\nde su amor y gran piedad.\r\n\r\nCoro:\r\nYo creo, sí. Que Tú por mí\r\nmoriste en una cruz;\r\nsalvado soy, salvado soy\r\ny a la gloria voy.\r\n\r\nSeñor amado, hacia ti\r\nlos ojos mirarán\r\nde los hermanos en la fe\r\nque pronto te verán.\r\n\r\nSí, volverá y cumplirá\r\nlo que Él nos prometió;\r\ny el buen camino Él abrirá\r\npor donde Él mismo entró.",
    },
    {
      ID: "64",
      Titulo: "Junto a la cruz",
      Letra:
        "Junto a la cruz, do murió el Salvador,\r\nPor mis pecados clamaba al Señor,\r\n¡Qué maravilla! Jesús me salvó,\r\n¡A su nombre gloria!\r\n\r\nCoro:\r\n¡A su nombre gloria! (Bis)\r\n¡Qué maravilla, Jesús me salvó!\r\n¡A su nombre gloria!\r\n\r\nJunto a la cruz recibí el perdón,\r\nLimpio en su sangre es mi corazón,\r\nMe gozo ya de su gran bendición,\r\n¡A su nombre gloria!\r\nJunto a la cruz hay un manantial,\r\nDe agua de vida cual el cristal,\r\nMi sed allí Cristo pudo apagar,\r\n¡A su nombre gloria!\r\n\r\nVen sin tardar a la cruz, pecador,\r\nDonde te espera el gran Redentor,\r\nAllí de Dios hallarás el amor,\r\n¡A su nombre gloria!",
    },
    {
      ID: "65",
      Titulo: "La grata nueva suena",
      Letra:
        "La grata nueva suena\r\npor el mundo en derredor,\r\nOfreciendo vida eterna\r\nal indigno pecador.\r\nDe tal manera Dios\r\na la humanidad amó\r\nQue a Jesús su bien amado,\r\na morir le entregó.\r\n\r\nCoro:\r\n¡Escuchad, escuchad!\r\nEl mensaje de perdón,\r\n¡Aceptad, aceptad!\r\nDe Jesús la salvación.\r\n\r\nLa grata nueva ofrece\r\na los hombres el perdón,\r\nNo rechaces, no, su oferta\r\nde tan grande salvación.\r\nEl camino es Jesús,\r\na la gran ciudad de luz,\r\nnadie viene al Padre sino\r\npor el Salvador Jesús.\r\n\r\nLa grata nueva ruega\r\nal que vacilando está,\r\nPara que no pierda tiempo\r\nmientras hay lugar allá.\r\nNo tengas pues temor,\r\nde este mundo en derredor,\r\nEn Jesús hay un amigo\r\nquien es nuestro Redentor.\r\n\r\nLa grata nueva dice\r\ncomo Dios nos da perdón,\r\nPor los méritos de Cristo\r\nen su gran expiación.\r\nLa víctima fue El,\r\ny las culpas El llevó,\r\nSatisfizo la justicia\r\ny a su pueblo redimió.",
    },
    {
      ID: "66",
      Titulo: "La mirada de fe",
      Letra:
        "La mirada de fe al que ha muerto en la cruz\r\nInfalible la vida nos da.\r\nMira pues pecador, mira pronto a Jesús,\r\nY tu alma la vida hallará.\r\n\r\nCoro:\r\nVe, ve, ve a Jesús,\r\nQue si miras con fe al que ha muerto en la cruz,\r\nAl momento la vida tendrás.\r\n\r\nSu penoso sufrir en la cruz ¡qué valió\r\nSi tus culpas no estaban allí?,\r\nNo valió su morir, si tu deuda no fue\r\ncon su sangre pagada por ti.\r\n\r\nNi el gemir ni el llorar, de la culpa el baldón\r\nO la pena quitarte podrá,\r\nSólo Cristo en la cruz, padeciendo hasta el fin\r\nHa podido tu carga llevar.\r\n\r\nCon inmensa bondad tus pecados tomó,\r\nY por ellos la muerte cruel,\r\nde inefable sufrir compasivo abrazó\r\nPara darte la vida y el bien.\r\n\r\nNo vaciles, ni tengas temor, oh mortal\r\nPues Jesús en la cruz anunció,\r\nExclamando con voz de clemencia y poder\r\nConsumada es la redención.\r\nOye, pues con placer el decreto de Dios,\r\nBondadoso la vida te da,\r\nY recibe con fe el mensaje de amor,\r\nQue te anuncia el perdón y la paz.",
    },
    {
      ID: "67",
      Titulo: "La tierna voz",
      Letra:
        "La tierna voz del Salvador\r\nnos habla conmovida,\r\nOíd al médico de amor\r\nquien da a los muertos vida.\r\n\r\nCoro:\r\nNunca los hombres cantarán,\r\nnunca los ángeles de luz,\r\nMás dulce nota elevarán\r\nque el nombre de Jesús.\r\n\r\n“Borradas ya tus culpas son”,\r\nsu voz hoy te pregona,\r\nRecibe, sí, su bendición\r\ny goza la corona.\r\n\r\nLa negra copa del dolor,\r\nJesús has apurado,\r\nPor dar al pobre pecador\r\ntu amor, oh bien amado.\r\n\r\nY cuando venga el Salvador,\r\nal cielo subiremos,\r\nArrebatados en amor,\r\nsu nombre cantaremos.",
    },
    {
      ID: "68",
      Titulo: "La vida es ficticia",
      Letra:
        "La vida es ficticia, efímera flor,\r\ndel sol a la tarde, la agosta el ardor.\r\nAntes que se mustie, la debes llevar,\r\ncual ofrenda grata, de Dios al altar.\r\nSí, desde la infancia hasta la vejez,\r\nse pasan los años con gran rapidez,\r\nY llega la muerte, sin verla venir,\r\ny el alma, ¿no sabes a dónde ha de ir?\r\n\r\nIncierta es la hora de tu cierto fin,\r\n¡Ay de aquel que tema del juicio el clarín!\r\nReflexiona, oh hombre, ¡Qué de ti va a ser!\r\no eterna desdicha, o eterno placer?",
    },
    {
      ID: "69",
      Titulo: "La vida pasa",
      Letra:
        "La vida pasa con rapidez,\r\nla vida pasa, la vida pasa…\r\nQuizás la muerte muy cerca esté,\r\nLa muerte llega, la muerte llega…\r\nY pronto, pronto cada cual, (Bis)\r\nse encontrará, se encontrará en la eternidad.\r\n\r\nLa vida pasa con rapidez,\r\ny cuándo acabe, ninguno sabe;\r\ny llega el juicio de Dios después,\r\nel juicio llega, el juicio llega…\r\nY pronto, pronto cada cual, (Bis)\r\nse encontrará, se encontrará en la eternidad.",
    },
    {
      ID: "70",
      Titulo: "Llaman, llaman",
      Letra:
        "Llaman, llaman, ¿quién va allá?\r\n¡Abran, abran! ¿quién será?\r\nSoy un huésped muy hermoso,\r\nen el mundo sin igual,\r\nMi semblante es cariñoso,\r\n¿No podré Yo pisar tu umbral?\r\n\r\nLlaman, llaman, ¿quién va allá?\r\n¡Abran, abran! Aún está,\r\n¡Oh que puerta tan cerrada!\r\n¡cuán difícil es de abrir!\r\nMi visita es despreciada,\r\nno me quieres recibir.\r\n\r\nLlaman, llaman, ¿quien va allá?\r\n¡Abran, abran! No se va,\r\n“De rocío estoy bañado,\r\nno me canso de esperar,\r\n¡Ay del corazón helado,\r\nque me llegue a rechazar!”\r\n\r\nAbro, abro, oh Salvador;\r\nentra, entra en tu amor;\r\nTu paciencia me ha vencido,\r\nsoy de corazón de Ti;\r\nEntra Tú, y bienvenido,\r\nhaz morada ahora en mí.",
    },
    {
      ID: "71",
      Titulo: "Lleno de angustia",
      Letra:
        "Lleno de angustia y temores,\r\nen brava y oscura mar,\r\nEl hombre perdido navega\r\ncual barco en la tempestad.\r\nOlas de mal le rodean,\r\nnubes de gran pavor;\r\nEl naufragio eternal le amenaza\r\ny su alma llena el terror.\r\n\r\nCoro:\r\nMira, oh turbado, tu Salvador cerca está;\r\nVio tu peligro y con suma bondad\r\nAcude a librarte de ruina y dolor,\r\nDomina los vientos, las nubes y el mar,\r\nY te abre el puerto del bienestar.\r\nSu voz potente en la tempestad,\r\nTrae paz, dulce paz.\r\nRecibe a Cristo y navegarás,\r\nEn calma y paz.\r\n\r\nContra las olas y el viento,\r\nbatalla con ansiedad,\r\nValiente procura librarse\r\ndel piélago de maldad.\r\nMas ya sus fuerzas gastadas,\r\nrendido y sin valor,\r\nDesmayando desea un refugio,\r\nun guía y un Salvador.\r\n\r\nFuerte y solícito acude Jesús,\r\ny con gran bondad,\r\nAborda la frágil barquilla,\r\ny calma la tempestad.\r\nLibre de todo peligro,\r\nsalvo, seguro y en paz,\r\nHoy con Cristo navega\r\nel marino a eterna felicidad.",
    },
    {
      ID: "72",
      Titulo: "Maravilla de clemencia",
      Letra:
        "Maravilla de clemencia,\r\nprueba de infinita gracia,\r\ncompasivo amor que sacia,\r\ncontemplamos en Jesús;\r\nPor nosotros pecadores\r\nÉl de rico pobre se hizo.\r\nLa justicia satisfizo\r\npor nosotros al morir.\r\n\r\nGrande fue el amor que tuvo\r\na las almas tan perdidas,\r\ndel pecado ennegrecidas;\r\ncon su sangre las limpió.\r\nGloria a Dios en las alturas\r\nque a los hombres paz ha dado,\r\ny al que tenga más pecado\r\ny confiese, da perdón.",
    },
    {
      ID: "73",
      Titulo: "Me gozo en Jesús",
      Letra:
        "Me gozo en Jesús,\r\nquien su trono de luz\r\nDejó por comprar\r\nmi salud en la cruz.\r\n\r\nCoro:\r\n¡Alabanzas al cordero!\r\nDe mi vida el sostén,\r\nTriunfó en el madero,\r\n¡Aleluya!, amén.\r\n\r\nMis culpas sentí,\r\ny contrito acudí,\r\nA Cristo, refugio\r\neternal para mí.\r\n\r\nY así tengo yo,\r\nen Jesús que me amó,\r\nLa paz y el perdón\r\nque su sangre compró.",
    },
    {
      ID: "74",
      Titulo: "Me habla ya, Señor Jesús",
      Letra:
        "Me habla ya, Señor Jesús,\r\ntu dulce voz de amor,\r\nQue desde el árbol de la cruz\r\ninvita al pecador.\r\nYo soy pecador,\r\nnada hay bueno en mí,\r\nSer objeto de su amor\r\ndeseo y vengo a Ti.\r\n\r\nNos ofreces el perdón\r\nde toda iniquidad,\r\nSi el llanto inunda el corazón\r\nque acude a tu piedad.\r\nYo soy pecador,\r\nten de mí piedad,\r\nDame llanto de dolor,\r\ny borra mi maldad.\r\n\r\nTú prometes aumentar\r\nla fe del que creyó,\r\nY gracia sobre gracia dar",
    },
    {
      ID: "75",
      Titulo: "Meditad en que hay un hogar",
      Letra:
        "Meditad en que hay un hogar\r\nen la margen del río de luz\r\nDonde van para siempre a gozar\r\nlos creyentes en Cristo Jesús.\r\n\r\nCoro:\r\nMás allá, más allá,\r\nmeditad en que hay un hogar,\r\nMás allá, más allá, más allá,\r\nen la margen del río de luz.\r\n\r\nMeditad en que amigos tenéis\r\nde los cuales marchamos en pos,\r\nY pensad en que al fin los veréis\r\nen el alto palacio de Dios.\r\n\r\nEn que mora Jesús meditad,\r\ndonde seres que amamos están\r\nY a la patria bendita mirad\r\nsin angustias, temores ni afán.",
    },
    {
      ID: "76",
      Titulo: "Mesías que muere",
      Letra:
        "Mesías que muere perdón por ganar,\r\nMesías que puede salvar del pecar;\r\nes Él el Mesías que es menester,\r\nMesías que es bueno tener.\r\n\r\nCoro:\r\n¿Es de ti? ¿Es de ti?\r\n¿Es tuyo mi buen Salvador?\r\n\r\nPastor que al rebaño su vida dará,\r\npastor que de todo lo protegerá;\r\nEs Él el pastor que es menester,\r\npastor que es bueno tener.\r\n\r\nPiloto que sabe el peligro del mar,\r\ny puede los barcos al puerto guiar;\r\nEs Él el piloto que es menester,\r\npiloto que es bueno tener.\r\n\r\nRefugio del frío y del gran ventarrón,\r\nrefugio del juicio y la condenación.\r\nEs Él el refugio que es menester,\r\nrefugio que es bueno tener.",
    },
    {
      ID: "77",
      Titulo: "Mirad al hijo pródigo",
      Letra:
        "Mirad al hijo pródigo,\r\ndel padre se apartó.\r\nMiseria, engaño y escasez\r\nfue lo que allí encontró.\r\n\r\nCoro:\r\nYo me levantaré;\r\niré a mi padre y le diré:\r\n“Contrito heme aquí,\r\nyo he pecado contra el cielo,\r\ny también contra ti” .\r\n\r\nDesesperado dijo así:\r\n“Con hambre siempre estoy,\r\nperezco si me quedo aquí,\r\njunto a mi padre voy”.\r\n\r\n“Delante de él yo me pondré,\r\npidiendo su favor;\r\nHumilde me confesaré\r\nindigno de su amor”.\r\n\r\nAl ver a su hijo regresar,\r\nel padre se alegró;\r\nDispuesto estaba a perdonar,\r\nde besos le colmó.",
    },
    {
      ID: "78",
      Titulo: "Mirad al Salvador Jesús",
      Letra:
        "Mirad al Salvador Jesús,\r\nal Príncipe benigno,\r\nPor mí muriendo allí en la cruz,\r\nPor mí, tan vil, indigno.\r\n\r\nCoro:\r\nDe amor la prueba hela aquí,\r\nEl Salvador murió por mí,\r\nPor mí, por mí, Jesús murió por mí.\r\n\r\nDel sol la faz se oscureció\r\nal ver su agonía,\r\nLa dura peña se partió,\r\noídlo alma mía.\r\n\r\nY yo también al ver la cruz,\r\npor ella soy vencido,\r\nMi corazón te doy Jesús,\r\nHoy a tu amor rendido.",
    },
    {
      ID: "79",
      Titulo: "Nada tuyo, pecador",
      Letra:
        "Nada tuyo, pecador,\nde valor será.\nTodo hizo el Salvador,\nlargo tiempo ha.\n\nCoro:\n“¡Consumado es!”\n¡Oh! sí, hecho todo está.\n¿Qué más necesitas? di:\nNada, nada ya.\n\nCuando de su hogar bajó\na obrar y morir,\ntodo ya cabal quedó,\nóyele decir.\n\nMientras de tal obra el don\ndejes de aceptar,\nlas tuyas fatales son;\nmuerte han de llevar.\n\nBusca en Cristo la salud\ncon deseo fiel,\ny hallarás tu plenitud\nsólo, sólo en él.",
    },
    {
      ID: "80",
      Titulo: "No os detengáis",
      Letra:
        "No os detengáis, venid a Cristo,\r\nEl os llama con amor:\r\nNo os detengáis, Jesús ha visto\r\nvuestras culpas y dolor.\r\n\r\nCoro:\r\nNo os detengáis, no os detengáis,\r\nnunca, nunca, nunca,\r\nCristo por salvarnos dio,\r\nsu sangre cuando El murió.\r\nNo os detengáis, perdón alcanza\r\nquién confía en el Señor,\r\nNo os detengáis, y sin tardanza\r\nacudid al Redentor.\r\n\r\nNo os detengáis, Jesús ha muerto\r\npor el pobre pecador,\r\nNo os detengáis, camino cierto\r\nes Jesús el Salvador.\r\n\r\nNo os detengáis, Jesús da calma\r\nal cargado de dolor,\r\nNo os detengáis, la paz del alma\r\nos ofrece el Salvador.",
    },
    {
      ID: "81",
      Titulo: "Noventa y nueve",
      Letra:
        "Noventa y nueve ovejas son\r\nlas que en prado están,\r\nMás una sola sin pastor,\r\npor la montaña va\r\nLa puerta de oro traspasó,\r\ny vaga en triste soledad. (Bis)\r\n\r\nPor esta oveja el buen pastor\r\nse expone con piedad,\r\nDejando solo aquel redil\r\nque le ama con verdad,\r\nY a la fragosa selva va,\r\nsu pobre oveja a rescatar. (Bis)\r\n\r\nOscura noche ve venir,\r\ny negra tempestad,\r\nMas todo arrostra y a sufrir\r\nlo lleva su bondad,\r\nSu oveja quiere restituir\r\ny a todo trance restaurar. (Bis)",
    },
    {
      ID: "82",
      Titulo: "Nuestra vida acabará",
      Letra:
        "Nuestra vida acabará,\r\ncual las hojas caerá,\r\nCual el haz se ligará,\r\nbusca a Dios\r\nVuela cada día veloz\r\ny volando da su voz,\r\nVen a dar tu cuenta a Dios,\r\nbusca a Dios.\r\n\r\nCoro:\r\nBusca a Dios, busca a Dios,\r\nEntre tanto tengas tiempo busca a Dios,\r\nSi te atreves a esperar,\r\nDios la puerta cerrará,\r\nTe dirá, es tarde ya.\r\nBusca a Dios.\r\n\r\nPierde el hombre su vigor,\r\nse marchita cual la flor,\r\nDesvanece cual vapor,\r\nbusca a Dios.\r\nComo el río a prisa va\r\nhasta entrar al vasto mar,\r\nVas así a la eternidad,\r\nbusca a Dios.\r\n\r\nClama a Dios de corazón\r\ncon sincera contrición,\r\nPor Jesús Dios da perdón,\r\nbusca a Dios.\r\nSi no escuchas al Señor,\r\nsi desprecias su perdón,\r\nTe acarreas perdición,\r\nbusca a Dios.",
    },
    {
      ID: "83",
      Titulo: "Nuevas alegres",
      Letra:
        "Nuevas alegres para decirles,\r\ntengo yo ahora y estas son:\r\nQue mis pecados son perdonados\r\ny con Jesús tendré galardón,\r\nY que también aún queda lugar\r\nen la casa celestial,\r\nPara aquellos que quisieran\r\nla salvación aceptar.\r\n\r\nGoces mundanos ya he dejado,\r\nno quiero más tan falso placer,\r\nPaz prometieron, más engañaron,\r\nno me pudieron satisfacer.\r\nMás bien estoy con mi Salvador,\r\nal cielo voy por su favor,\r\nEl me guía, cada día,\r\nen su gran amor y verdad.\r\n\r\nYa no me importa lo que dijeren\r\nlos enemigos de mi Señor,\r\nEl me ha buscado y me ha salvado,\r\nvoy a la gloria, reino de amor.\r\nSiempre yo tengo luchas aquí,\r\ndulce descanso tengo allí,\r\n¡Oh, qué gozo para mi alma,\r\ncuando me llame el Señor!",
    },
    {
      ID: "84",
      Titulo: "Oh, alma mía",
      Letra:
        "Oh, alma mía, a tu Señor\r\neleva cánticos de loor,\r\nPor la tan grande salvación,\r\nque tienes por su redención.\r\n\r\nCoro:\r\n¡Qué redención! ¡Qué grande paz!\r\nque Tú, Señor, por ella das;\r\nYa canto con alegre son\r\nde tu grandiosa redención.\r\n\r\nDel bien muy lejos caminé\r\ny contra Dios me rebelé,\r\nMas ya de Cristo es mi canción,\r\nsoy salvo por su redención.\r\n\r\nFeliz el día cuando vi\r\nlo que hizo Cristo para mí,\r\ngozándome de mi perdón,\r\ncante yo de su redención.\r\n\r\nDe mi virtud no quiero hablar,\r\npues en Jesús mi todo está,\r\nMi paz y mi justicia son\r\nel fruto de su redención.\r\n\r\n¡Oh, pecador! Jesús a ti\r\nte dice “ven, oh ven a Mi”,\r\nacéptame en tu corazón\r\ny goza de la redención.",
    },
    {
      ID: "85",
      Titulo: "¡Oh cansado caminante!",
      Letra:
        "¡Oh cansado caminante!\r\nAhora párate a escuchar\r\nA Jesús, quien tan amante\r\nte ha venido a rescatar.\r\n\r\nCoro:\r\n¡Oh, no hagas más demora!\r\nA Jesús, amigo ve;\r\nEl te salvará ahora, si tú vas a El por fe.\r\n\r\nCon pecado tan cargado,\r\nve a Dios en confesión,\r\nY de El, ya perdonado,\r\ntú tendrás la salvación.\r\n\r\nAunque débil, siempre piensa\r\nen Jesús y su bondad,\r\nEl será tu gran defensa\r\ncontra toda la maldad.\r\n\r\nCon vestido muy hermoso\r\nEl te quiere hoy vestir,\r\nPara que con El gozoso,\r\ntú a la gloria puedas ir.",
    },
    {
      ID: "86",
      Titulo: "¡Oh, cantádmelas otra vez!",
      Letra:
        "Oh, cantádmelas otra vez!\r\nBellas palabras de vida,\r\nHallo en ellas consuelo y paz,\r\nbellas palabras de vida.\r\nSí, de luz y de vida, son sostén y guía,\r\n\r\nCoro:\r\n¡Qué bellas son, qué bellas son!\r\nBellas palabras de vida,\r\n\r\nJesucristo a todos da\r\nbellas palabras de vida,\r\nHoy recíbelas pecador,\r\nbellas palabras de vida.\r\nBondadoso te salva\r\ny al cielo te llama.\r\n\r\nGrato el cántico sonará,\r\nbellas palabras de vida,\r\nTus pecados perdonará,\r\nbellas palabras de vida.\r\nSí, de luz y vida, son sostén y guía.",
    },
    {
      ID: "87",
      Titulo: "¡Oh! Cristo en Ti!",
      Letra:
        "¡Oh! Cristo en Ti, sí, sólo en Ti\r\nmi corazón halló\r\nLa paz, perdón, que con afán\r\nsin descansar buscó.\r\n\r\nCoro:\r\nYa ningún bien sin Cristo habrá,\r\nEl solo para mí;\r\nLuz, gozo, paz y gran felicidad,\r\nSe encuentran sólo Cristo en Ti.\r\n\r\nEl mundo con afán probé\r\ny mi alma lo gustó,\r\nMas descontento me quedé\r\ny mi alma se afligió.\r\n\r\nGemí por paz, felicidad,\r\nbusquélas más que a Ti;\r\nMas cuando Cristo me salvó,\r\nme satisfizo a mí.",
    },
    {
      ID: "88",
      Titulo: "¡Oh, hombre! tu Dios",
      Letra:
        "¡Oh, hombre, tu Dios de su gloria te llama\r\nCon dulces acentos de solicitud,\r\nEscucha la voz que del cielo proclama,\r\nQue hoy solamente es el día de salud!\r\n\r\nCoro:\r\nQue hoy solamente es el día de salud,\r\nQue hoy solamente es el día de salud.\r\n\r\nSu corazón, lleno de tierno cuidado\r\nDe lejos conoce tu gran inquietud,\r\nAl Hijo en rescate por todos ha dado,\r\nMás hoy solamente es el día de salud.\r\n\r\nSi tú le rechazas El ha de dejarte,\r\nY no te valdrá de Jesús la virtud,\r\nAcéptale, amigo, si quieres salvarte,\r\nPues hoy solamente es el día de salud.\r\n\r\nMás tarde el Señor traerá para juicio,\r\nDelante del trono la gran multitud,\r\nentonces no es tiempo de huir del suplicio,\r\nPues hoy solamente es el día de salud.",
    },
    {
      ID: "89",
      Titulo: "Oh, llamad a los perdidos",
      Letra:
        "¡Oh llamad a los perdidos,\r\ntan lejanos del redil!\r\nAtraed a los huidos\r\nal cuidado pastoril.\r\n¡Sí, llamad a los peores,\r\nsumergidos en maldad!\r\nPor salvar los pecadores\r\nCristo espera ¡Sí, llamad!\r\n\r\n¡Oh llamad a los cansados\r\npor esfuerzos sin valor!\r\nSin sus obras son salvados\r\nlos que creen al Señor.\r\n¡Sí, llamadlos! Dios invita\r\na que acepten su bondad,\r\ny con sumisión contrita\r\na él vengan ¡Sí, llamad!\r\n\r\n¡Oh llamadlos, que conozcan\r\nal que da cabal salud!\r\nY que nunca más carezcan\r\nde su gran solicitud.\r\nOfrecedles vida eterna,\r\ncelestial felicidad,\r\ny con caridad fraterna\r\nsiempre al pecador llamad.",
    },
    {
      ID: "90",
      Titulo: "Oh tierno Salvador Jesús",
      Letra:
        "Oh tierno Salvador Jesús,\r\ndel mundo Tú eres clara luz!\r\nMe das perdón, me das sostén,\r\nbendíceme con todo bien.\r\n\r\nCoro:\r\nMoriste Tú, Señor Jesús,\r\npor mis pecados en la cruz,\r\nCon gratitud tu fiel amor, recuerdo yo mi Salvador.\r\nPor ese amor ¡qué grato bien! Te quiero yo a Ti también.\r\n\r\n¡Tu corazón cuan puro amor\r\nsintió por mi, oh Salvador!\r\nHas sido mi amigo fiel,\r\nconfío en Ti, oh Emanuel.\r\n\r\nNo cambiará, oh Salvador,\r\njamás por mí tu fiel amor;\r\nla sangre diste tú por mí,\r\ncon ella salvo fui por Ti.\r\n\r\nYo gozaré felicidad,\r\ncontigo por la eternidad,\r\nConmigo moras ya, Jesús,\r\ny viviré contigo en luz.",
    },
    {
      ID: "91",
      Titulo: "Oí la voz del Salvador",
      Letra:
        "Oí la voz del Salvador\r\ndecir con tierno amor:\r\n“Ven hoy a Mi y descansad,\r\ncargado pecador”.\r\nAl Redentor, tal como fui,\r\ncansado yo acudí,\r\nY luego dulce alivio y paz\r\npor fe de El recibí.\r\n\r\nOÍ la voz del Salvador\r\ndecir: “Venid, bebed,\r\nYo soy la fuente de salud\r\ny apago toda sed”.\r\nCon sed de Dios, del vivo Dios,\r\nbuscaba al Salvador;\r\nLo hallé, mi sed El apagó,\r\ny hoy vivo por su amor.\r\n\r\nOí su dulce voz decir:\r\n“Del mundo soy la luz,\r\nmiradme a mí y salvos sed:\r\nHay vida por mi cruz”.\r\nMiré al Señor y luego en El\r\nmi norte y sol hallé,\r\nY en esa luz de vida yo\r\naquí siempre andaré.",
    },
    {
      ID: "92",
      Titulo: "Oíd palabra de Jesús",
      Letra:
        "Oíd palabra de Jesús:\r\n“Yo salvo al pecador”.\r\nOíd palabra de Jesús:\r\n“Yo salvo al pecador”.\r\n\r\nCoro:\r\nVen a Cristo, ven a Cristo;\r\nÉl te salvará.\r\nAhora mismo ven a Cristo\r\ny Él te salvará.\r\n\r\nVen, pecador, ven a Jesús;\r\nÉl te libertará.\r\nVen, pecador, ven a Jesús;\r\nÉl te libertará.\r\n\r\nPerdido, ven, ven a Jesús;\r\nÉl te perdonará.\r\nPerdido ven, ven a Jesús;\r\nÉl te perdonará.",
    },
    {
      ID: "93",
      Titulo: "Palabra fiel es de Jesús",
      Letra:
        "Palabra fiel es de Jesús,\r\noh pecador, a ti:\r\n“Yo no desecharé jamás\r\na quien acude a mí”.\r\nPalabra fiel es de Jesús:\r\n“Si alguno tiene sed,\r\nel agua de la vida Yo\r\nde balde le daré”.\r\n\r\nPalabra fiel es de Jesús:\r\n“Yo te consolaré;\r\ncargado y trabajado, ven,\r\ndescanso te daré”.\r\n\r\nPalabra fiel es de Jesús:\r\n“El buen Pastor yo soy;\r\na las ovejas que escogí,\r\nla vida eterna doy”.\r\n\r\nPalabra fiel es de Jesús:\r\n“En breve yo vendré,\r\ny galardón al siervo fiel\r\nconmigo traeré”.",
    },
    {
      ID: "94",
      Titulo: "Pasan días, meses, años",
      Letra:
        "Pasan días, meses, años\r\ncon pasmosa rapidez;\r\ny nosotros pronto iremos\r\nde este mundo y ¿qué después?\r\n\r\nMuchos viven descuidados\r\nde su eterna salvación;\r\ny al morir, desesperados,\r\npasan a la perdición.\r\n\r\nOtros a Jesús se entregan,\r\nconfesando su maldad;\r\nCreen que su sangre limpia\r\ndel pecado, y tienen paz.\r\n\r\nVida y muerte están delante,\r\nsalvación y perdición.\r\nTienes tú que decidirte,\r\n¿cuál será tu decisión?\r\n\r\nSólo un paso ahora falta,\r\nno vaciles, pecador;\r\nEs el paso decisivo\r\nde entregarte al Salvador.",
    },
    {
      ID: "95",
      Titulo: "Paz con Dios",
      Letra:
        "Paz con Dios, busqué ganarla,\r\ncon febril solicitud;\r\nMas mis “obras meritorias”\r\nno me dieron la salud.\r\n\r\nCoro:\r\n¡Oh, qué paz Jesús me da!\r\nPaz que antes ignoré,\r\nTodo nuevo se tornó,\r\ndesde que su paz hallé.\r\n\r\nLleno estaba yo de dudas,\r\ntemeroso de morir\r\nHoy en paz, mañana triste,\r\ncon temor del porvenir.\r\n\r\nAl final desesperado,\r\n“Ya no puedo”, dije yo;\r\nY del cielo oí respuesta:\r\n“Todo hecho ya quedó”.\r\n\r\nDe mis obras despojado,\r\nvi la obra de Jesús;\r\nSupe que la paz fue hecha\r\npor la sangre de su cruz.",
    },
    {
      ID: "96",
      Titulo: "Pecador, Jesús te busca",
      Letra:
        "Pecador, Jesús te busca\r\ny te ofrece salvación,\r\n¡oh! No esperes la mañana,\r\nno rechaces el perdón.\r\n\r\nCoro:\r\nHoy acude tú a Jesús,\r\nahora mismo ve a la cruz,\r\nY hallarás perdón y luz.\r\n\r\nSi la muerte a ti llegare,\r\npecador, ¿a dónde vas?\r\nSin perdón de tus pecados, n\r\no entrarás al santo hogar.\r\n\r\nNo deseches a este amigo,\r\ntanto El hizo ya por ti,\r\nOye pues su buen mensaje:\r\n“Pecador, por ti sufrí”.",
    },
    {
      ID: "97",
      Titulo: "Pecador Jesús te llama",
      Letra:
        "Pecador Jesús te llama,\r\n¡cuánto le haces esperar!\r\n¿Por qué ingrato así rechazas\r\nal que quiérete salvar?\r\n\r\nCoro:\r\nDeja entrar al rey de gloria,\r\nábrele tu corazón,\r\nCuéntale tu triste historia,\r\nen sus labios hay perdón.\r\n\r\nPara el mundo tus desvelos\r\nguardas siempre, pecador;\r\nNada para el rey del cielo\r\nquién murió, tu Redentor.\r\n\r\nCristo llama, hoy te llama,\r\nmás no siempre llamará;\r\nDate prisa que mañana\r\nno tendrás tal vez lugar.",
    },
    {
      ID: "98",
      Titulo: "Pecador, ven a Cristo Jesús",
      Letra:
        "Pecador, ven a Cristo Jesús,\r\ny feliz para siempre serás,\r\nQue si tú le quisieras tener,\r\nal divino Señor hallarás.\r\n\r\nCoro:\r\nVen a El pecador, ven a El pecador,\r\nque te espera tu buen Salvador;\r\nVen a El pecador, ven a El pecador,\r\nque te espera tu buen Salvador.\r\n\r\nSi cual hijo que necio pecó,\r\nvas buscando a sus pies compasión,\r\nTierno amigo en Jesús hallarás,\r\ny tendrás por su sangre perdón.\r\n\r\nOvejuela que huyó del redil,\r\nda tus voces al buen Salvador;\r\nY en los hombros llevada serás,\r\nde tan fuerte y amante pastor.",
    },
    {
      ID: "99",
      Titulo: "Por la justicia de Jesús",
      Letra:
        "Por la justicia de mi Dios,\r\npor sangre que Jesús vertió,\r\nalcanzo paz, poder, perdón,\r\ny cuanto bien me prometió.\r\nQue sólo Cristo salva sé;\r\nsegura base es de mi fe. (Bis)\r\n\r\nAsí turbada no veré mi paz,\r\nsu incomparable don.\r\nAunque Él un tiempo oculto esté,\r\nme dejará su bendición.\r\nEn mí no puede haber jamás\r\nninguna base real de paz. (Bis)\r\n\r\nEn la tormenta es mi sostén,\r\nel pacto que juró y selló;\r\nSu amor es mi supremo bien,\r\nsu amor que mi alma redimió:\r\nLa roca eterna que me da,\r\nbase única que durará. (Bis)",
    },
    {
      ID: "100",
      Titulo: "¿Por qué demoras amigo?",
      Letra:
        "¿Por qué demoras amigo?\r\n¿por qué hoy no quieres venir?\r\nEs Cristo Jesús quien te llama,\r\nal cielo con El podrás ir.\r\n\r\nCoro:\r\n¿Por qué, por qué,\r\na Cristo no quieres venir?\r\n¿Por qué, por qué,\r\nhoy mismo no quieres venir?\r\n\r\nOh, di, ¿qué esperas amigo\r\nganar demorándote más?\r\nEs sólo Cristo quién salva,\r\nEl sólo podrá darte paz.\r\n\r\n¿No sientes que Dios amigo,\r\nhoy habla a tu corazón?\r\nOh! ¿por qué el pecado no dejas\r\ny aceptas ya la salvación?\r\n\r\n¿Por qué demoras amigo?\r\nEl día de salud pasará:\r\nY Cristo que en gracia hoy salva,\r\nmás tarde en el juicio vendrá.",
    },
    {
      ID: "101",
      Titulo: "Preste oídos el humano",
      Letra:
        "Preste oídos el humano\r\na la voz del Salvador;\r\nRegocíjese el que siente\r\nel pecado abrumador,\r\nYa resuena el evangelio\r\nde la tierra en ancha faz,\r\nY de gracia ofrece al hombre\r\nel perdón, consuelo y paz.\r\n\r\nVengan todos los que sufren,\r\nlos que sienten hambre o sed,\r\nLos que débiles se encuentran\r\nde este mundo a la merced,\r\nEn Jesús hay pronto auxilio,\r\nhay hartura y bienestar,\r\nHay salud y fortaleza,\r\ncual ninguno puede dar.\r\n\r\nVengan cuantos se acongojan\r\npor lograr con qué vestir,\r\nY a su afán tan sólo rinden\r\nservidumbre hasta el morir.\r\nUn vestido hay más precioso,\r\nblanco, puro y eternal,\r\nEs Jesús quien da a las almas\r\nese manto celestial.\r\n\r\n¿Por qué en rumbo siempre incierto\r\nvuestra vida recorréis?\r\nA Jesús venid mortales,\r\nque muy cerca le tenéis.\r\nEl es vida en tierra y cielo,\r\ny el exceso de su amor,\r\nOs mejora la presente\r\ny os reserva otra mejor.",
    },
    {
      ID: "102",
      Titulo: "Promete a los suyos",
      Letra:
        "Promete a los suyos el Salvador,\r\nun hogar, un hogar,\r\nMorada celeste de paz, amor y bienestar.\r\nDo libres de pena sin mancha ni mal,\r\nGozando con Cristo la dicha eternal,\r\nContemplan los fieles en gloria y luz\r\nEl rostro de aquel que murió en la cruz.\r\n\r\nCoro:\r\nSí, por mí, sí por mí,\r\nCristo prepara un dulce hogar;\r\nSí por mí, sí por mí, un dulce hogar.\r\n\r\nA todos ofrece el buen Salvador\r\neste hogar,\r\nY amante les dice “A Mí venid,\r\ny descansad”.\r\nEn esta bendita morada jamás\r\nNi muerte ni duelo podrán penetrar,\r\nEn ella no hay noche, pues Cristo Jesús\r\nCordero divino es del cielo es la luz.\r\n\r\nCoro:\r\nSí a ti, sí a ti,\r\nCristo te ofrece un dulce hogar;\r\nSí a ti, sí a ti, un dulce hogar.\r\n\r\nDejó por nosotros el Salvador, su hogar,\r\nY quiso su vida en la triste cruz sacrificar.\r\nA fin de librarnos de condenación,\r\nAbriendo el camino de la salvación,\r\nOíd pues con gozo el mensaje de amor\r\nQue ya nos proclama Jesús es Señor.",
    },
    {
      ID: "103",
      Titulo: "¿Qué significa el gran rumor?",
      Letra:
        "¿Qué significa el gran rumor?\r\n¿Qué significa el gran tropel?\r\n¿Quién puede un día y otro así\r\nla muchedumbre conmover?\r\nResponde el pueblo en alta voz:\r\n“Pasa Jesús de Nazaret”. (Bis)\r\n\r\n¿Quién es, decid, el tal Jesús\r\nque manifiesta tal poder?\r\n¿Por qué a su paso la ciudad\r\nse agolpa ansiosa en torno de él?\r\nLo dice el pueblo (oíd su voz):\r\n“Pasa Jesús de Nazaret”. (Bis)\r\n\r\nJesús, quien vino acá a sufrir\r\nangustia, afán, cansancio y sed;\r\ny dio consuelo, paz, salud\r\na cuantos viera padecer.\r\nPor eso alegre el ciego oyó:\r\n“Pasa Jesús de Nazaret”. (Bis)\r\n\r\nAun ahora viene el Salvador\r\ndispuesto a hacernos mucho bien,\r\ny amante llama a nuestro hogar\r\nqueriendo en él permanecer.\r\nSe acerca ya ¿no oís su voz?\r\n“Pasa Jesús de Nazaret”. (Bis)",
    },
    {
      ID: "104",
      Titulo: "¿Qué voy a hacer?",
      Letra:
        "¿Qué voy a hacer?\r\n¿Me entregaré a Jesús\r\no me endureceré?\r\n¿Qué escogeré?\r\n¿El mundo y su placer o\r\na Cristo seguiré?\r\n\r\nCoro:\r\nYo sí, yo sí, yo sí confiado,\r\noh Cristo en Ti, te seguiré,\r\nComprado soy, tu sangre el precio fue,\r\ny tuyo quiero ser.\r\n\r\nTu grande amor\r\nme ablanda el corazón,\r\ndespierta en mí la fe\r\nYo creo en Ti,\r\nno puedo ya dudar,\r\na Cristo miraré.",
    },
    {
      ID: "105",
      Titulo: "¿Quién es de la parte?",
      Letra:
        "¿Quién es de la parte del buen Salvador,\r\npronto a dedicarse ahora a su Señor,\r\nY que abandonando su falaz vivir,\r\nquiere acá servirle y aún con El sufrir?\r\n\r\nCoro:\r\n¿Quién de Cristo al lado quiere caminar?\r\n¿Quién hasta El desea los demás guiar?\r\nPor tu rica gracia, por tu grande amor,\r\nhenos de tu parte, para ti, Señor.\r\n\r\nNo ambicionamos gloria ni poder,\r\nmás queremos ya tu voluntad hacer,\r\nQuién tu perdurable gracia llegue a ver,\r\nvese constreñido de tu parte a ser.\r\n\r\nNo con oro o plata, oh Jesús, Señor,\r\nTú nos redimiste con divino amor,\r\nfue con sangre tuya ¡santa libación!\r\nCon que tu efectuaste nuestra redención.\r\n\r\nLa batalla dura siempre habrá de ser,\r\nenemigos fuertes hemos de tener,\r\nMás omnipotente es nuestro Capitán,\r\nha vencido ya las fuerzas de Satán.",
    },
    {
      ID: "106",
      Titulo: "¿Quieres ser libre?",
      Letra:
        "¿Quieres ser libre del vicio y del mal?\r\nvirtud hay en El, virtud en El,\r\n¿Quieres por El la victoria ganar?\r\nPor siempre virtud hay en El.\r\n\r\nCoro:\r\nHay poder, sí, sin igual poder,\r\nen Jesús que murió,\r\nHay poder, sí, sin igual poder\r\npor la sangre que vertió.\r\n\r\n¿Quieres ser puro, aceptable al Señor?\r\nvirtud hay en El, virtud en El,\r\nTe limpiará con la sangre que dio,\r\npor siempre virtud hay en El.\r\n\r\n¿Quieres ser libre de tu vanidad?\r\nvirtud hay en El, virtud en El,\r\nPide a Jesús que te dé su humildad,\r\npor siempre virtud hay en El.\r\n\r\n¿Quieres a Cristo servir y agradar?\r\nvirtud hay en El, virtud en El,\r\n¿Quieres corona de vida ganar?\r\nPor siempre virtud hay en El.",
    },
    {
      ID: "107",
      Titulo: "Roca abierta ya por mí",
      Letra:
        "Roca abierta ya por mí,\r\ntengo abrigo siempre en Ti,\r\nEn tu sangre Oh, Jesús,\r\npor mí derramada en cruz\r\nel remedio eficaz\r\nde mi culpa contumaz.\r\n\r\nTodo celo vano es,\r\nvanas son mis lagrimas:\r\nTú, Jesús mi Salvador,\r\nsólo puedes perdonar.\r\nEn tu cruz está el perdón,\r\nsólo en Ti hay salvación.\r\n\r\nEn mi vida terrenal,\r\ny en mi hálito final,\r\nCuando te veré Jesús,\r\nen el trono de la luz,\r\nRoca abierta ya por mí,\r\ndame siempre abrigo en Ti.",
    },
    {
      ID: "108",
      Titulo: "Rojos son tus pecados",
      Letra:
        "Rojos son tus pecados,\r\ncomo grana Dios los ve. (Bis)\r\nAunque parezcan ser pocos,\r\nÉl así los ve.\r\nMas en él ten confianza,\r\nmas en él ten confianza,\r\ndice que los borrará,\r\ndice que los borrará.\r\n\r\nEscuchad que os suplica:\r\n“Oh volved a vuestro Dios”. (Bis)\r\nÉl os dará gran consuelo\r\ny su eterno amor;\r\nPara darnos la vida,\r\npara darnos la vida,\r\nÉl a Cristo entregó,\r\nÉl a Cristo entregó.\r\n\r\nPerdonarte Él desea toda tu iniquidad. (Bis)\r\nSi tú le dejas entrar en tu corazón,\r\nÉl te hará como la nieve,\r\nÉl te hará como la nieve,\r\ny contigo cenará,\r\ny contigo cenará.\r\nOh, no dudes a Cristo, su palabra cumplirá, (Bis)\r\nporque verdad es su nombre,\r\nnuestro Redentor.\r\nDile que tú le crees,\r\ndile que tú le crees,\r\ny con él tú reinarás,\r\ny con él tú reinarás.",
    },
    {
      ID: "109",
      Titulo: "¿Sabes dónde hay una fuente?",
      Letra:
        "¿Sabes dónde hay una fuente\r\npura, de divino amor,\r\nCuyas aguas celestiales\r\nmanan con ferviente ardor?\r\nEsta fuente inagotable\r\nde eficacia y de valor,\r\nEs el Redentor bendito,\r\nel precioso Salvador.\r\n\r\nCoro:\r\nEs Jesús la viva fuente\r\ndonde he apagado yo\r\nEsa sed que consumía\r\nmi cuitado corazón.\r\n\r\nEsa fuente siempre pura\r\nnunca su cristal perdió,\r\nY sus aguas refrescantes\r\nse te ofrecen pecador,\r\nSi sediento y fatigado\r\na Jesús la fuente vas,\r\nSatisfecho y aliviado\r\nal momento quedarás.\r\n\r\n¡Oh! Recibe pues su oferta,\r\nno rechaces, no, su amor.\r\nDile: “de esas aguas dame,\r\ny sabré su gran valor”.\r\nSin dinero y sin precio\r\nse te ofrece el grato don;\r\nVida eterna, paz y gozo,\r\nde tus culpas el perdón.",
    },
    {
      ID: "110",
      Titulo: "Salvador a Ti yo acudo",
      Letra:
        "Salvador a Ti yo acudo,\r\npríncipe de amor;\r\nSólo en Ti hay paz y vida\r\npara el pecador.\r\n\r\nCoro:\r\nCristo, Cristo, tierno Salvador,\r\nMi humilde ruego escucha\r\n¡sálvame Señor!\r\n\r\nSalvación y paz buscando,\r\nvengo yo a tu cruz;\r\nEn tu muerte estoy confiando,\r\n¡sálvame Jesús!\r\n\r\nSon tus méritos la fuente\r\nde mi salvación;\r\nEn tu muerte solamente\r\nhallo paz, perdón.",
    },
    {
      ID: "111",
      Titulo: "Si angustiado y triste estás",
      Letra:
        "Si angustiado y triste estás,\r\nven al Salvador,\r\nPaz y alivio encontrarás\r\nen el Buen Pastor.\r\nEl tu voz escuchará\r\ny consuelo te dará,\r\nA tu lado ahora está\r\nCristo el Salvador.\r\n\r\nMira que por ti murió,\r\nCristo el Salvador,\r\nEn la cruz su vida dio\r\nnuestro Redentor;\r\nHoy te llama, atiende sí,\r\npues te dice “ven a Mi”;\r\nTodo bien hay para ti\r\nen el Salvador.\r\n\r\nEs Jesús amigo fiel,\r\ntierno Salvador,\r\nSólo en El tendrás el bien,\r\ndile tu dolor.\r\nEl tus culpas borrará,\r\ntus dolores calmará,\r\nNunca te abandonará,\r\nCristo el Salvador.",
    },
    {
      ID: "112",
      Titulo: "Si paz cual un río",
      Letra:
        "Si paz cual un río es aquí mi porción,\r\nSi es como las olas del mar,\r\nCualquiera mi suerte, es ya mi canción\r\n“Está bien, con mi alma está bien”.\r\n\r\nCoro:\r\nEstá bien…, está bien…,\r\nEstá bien, con mi alma está bien.\r\n\r\nPor más que Satán me tentare a mí,\r\nEn esto consuelo tendré:\r\nQue Cristo, al ver cuan perdido yo fui,\r\nEn la cruz por mi alma murió.\r\n\r\nPecado llevó y las gracias le doy,\r\nCompleto el trabajo está,\r\nllevólo en la cruz y ya libre estoy,\r\n¡Oh! mi alma bendice al Señor.\r\n\r\nQue viva por Cristo, y sólo por El,\r\nY si yo muriese, bien sé,\r\nQue no temeré, porque Cristo es fiel\r\nY mi alma en su paz guardará.\r\n\r\nMas no es la muerte que espero, Señor,\r\nLa tumba mi meta no es,\r\nTu pronta venida, en tu tierno amor\r\nEsperando mi alma hoy está.",
    },
    {
      ID: "113",
      Titulo: "Si yo mis pecados",
      Letra:
        "Si yo mis pecados pudiera lavar,\r\nni sangre ni pena pudiera negar,\r\nsi obras valieran en pago del mal,\r\nno fuera el Calvario el solo caudal,\r\nel solo caudal, el solo caudal;\r\nno fuera el Calvario el solo caudal.\r\n\r\nMas sé que no tengo de mí santidad,\r\nno puedo limpiarme de tanta maldad.\r\nNi santo ni arcángel ofrece, audaz,\r\nquitar mis pecados y darme solaz,\r\ny darme solaz, y darme solaz;\r\nquitar mis pecados y darme solaz.\r\n\r\n¡Oh, Cristo bendito! por ti sólo hay paz,\r\nTus obras, tu sangre, caudal eficaz.\r\nTú llamas al hombre muriendo de sed:\r\n“En mí es la fuente, venid y bebed”.\r\nVenid y bebed, venid y bebed.\r\n“En mí es la fuente, venid y bebed”.",
    },
    {
      ID: "114",
      Titulo: "Siempre hablamos",
      Letra:
        "Siempre hablamos del mundo dichoso,\r\nDe los goces que Dios nos dará,\r\nDel país halagüeño y hermoso,\r\nMas hallarnos allí, ¿qué será?\r\nCoro:\r\n¿Qué será, qué será?\r\nmas hallarnos allí, ¿qué será?\r\n\r\nSiempre hablamos del triunfo y la gloria\r\nQue en los cielos sin fin reinarán,\r\nDe los himnos de amor y victoria,\r\nMas hallarnos allí, ¿qué será?\r\n\r\nSiempre hablamos del día esplendente,\r\nQue en el santo país brillará,\r\nDe Jesús, Salvador del creyente,\r\nMas hallarnos allí, ¿qué será?\r\n\r\nNi pecados, ni llanto ni duelo,\r\nNi pesares ningunos habrá,\r\nEn la casa de Dios, en el cielo,\r\nPues hallarnos allí, ¿qué será?\r\n\r\n",
    },
    {
      ID: "115",
      Titulo: "Sólo tu preciosa sangre",
      Letra:
        "Sólo tu preciosa sangre, Cristo, Salvador,\r\nEl pecado quitar puede de este pecador.\r\n\r\nCoro:\r\n¡Oh! con tu preciosa sangre,\r\nlímpiame Señor,\r\nAun por mí la derramaste,\r\nen tu gran amor.\r\n\r\nY si mi pecado fuere como el carmesí,\r\nPuro más que blanca nieve, me pondrás a mí.\r\n\r\nSólo tu preciosa sangre, salvación me da,\r\nHaz que sin cesar me guarde libre de pecar.\r\n\r\nPor la sangre del Cordero soy el vencedor,\r\nDe Satán y del pecado, ¡gloria al Salvador!",
    },
    {
      ID: "116",
      Titulo: "Suenen dulces himnos",
      Letra:
        "Suenen dulces himnos gratos al Señor,\r\nY óiganse en concierto universal,\r\nDesde el alto cielo baja el Salvador,\r\nPara beneficio del mortal.\r\n\r\nCoro:\r\n¡Gloria, gloria sea a nuestro Dios!,\r\n¡Gloria!, sí, cantemos a una voz,\r\nY el cantar de gloria que se oyó en Belén\r\nSea nuestro cántico también.\r\n\r\nSalte de alegría, lleno el corazón,\r\nLa abatida y pobre humanidad,\r\nDios se compadece viendo su aflicción,\r\nY le muestra buena voluntad.\r\n\r\nLata en nuestros pechos noble gratitud,\r\nHacia el que nos brinda redención,\r\nY a Jesús, el Cristo, que nos da salud,\r\nTributemos nuestra adoración.",
    },
    {
      ID: "117",
      Titulo: "Tal como soy",
      Letra:
        "Tal como soy, sin más decir,\nque a otro yo no puedo ir,\nY Tú me invitas a venir;\nbendito Cristo, vengo a Ti.\n\nTal como soy, sin demorar,\ndel mal queriéndome librar,\nMe puedes sólo Tú salvar;\nbendito Cristo, vengo a Ti.\n\nTal como soy, en aflicción,\nexpuesto a muerte, perdición,\nBuscando vida, paz, perdón;\nbendito Cristo, vengo a Ti.\n\nTal como soy, tu grande amor,\nme vence y con grato ardor\nServirte quiero, mi Señor;\nbendito Cristo, vengo a Ti",
    },
    {
      ID: "118",
      Titulo: "¡Tan cerca del reino!",
      Letra:
        "¡Tan cerca del reino! ¿por qué no entrarás?\r\n¡Tan cerca! Pues pasa hoy mismo el umbral,\r\nLa voz de “mañana” es voz de Satán,\r\n¡Tan cerca! Y tal vez nunca llegues a entrar.\r\n\r\nCoro:\r\n¿Quisieras salvarte?\r\nEntrégate a Cristo, te quiere salvar.\r\n\r\nTan cerca que tú oyes la alegre canción\r\nDe los que se gozan en su Salvador;\r\nTan cerca y al mundo no quieres dejar,\r\nY Cristo te espera y te quiere salvar.\r\n\r\n¡Sin Cristo morir! ¿Qué esperanza tendrás?\r\nMorir sin ser salvo, ¡perdido estarás!\r\nNo corras el riesgo de eterno penar,\r\nEntrégate a Cristo, te quiere salvar.",
    },
    {
      ID: "119",
      Titulo: "¿Te sientes casi resuelto ya?",
      Letra:
        "¿Te sientes casi resuelto ya?\r\n¿Te falta poco para creer?\r\nPues, ¿ por qué dices a Jesucristo:\r\n“hoy no, mañana te seguiré”?\r\n\r\n¿Te sientes casi resuelto ya?\r\nPues vence el “casi”, con Cristo ven,\r\nPorque hoy es tiempo, pero mañana\r\ntal vez muy tarde pudiera ser.\r\n\r\nSabes que el “casi” no es de valor\r\nen la presencia del justo juez.\r\n¡Ay del que muere “casi” creyendo!\r\n¡Completamente perdido es!",
    },
    {
      ID: "120",
      Titulo: "¿Temes que en la lucha?",
      Letra:
        "¿Temes que en la lucha no podrás vencer?\r\n¿Contra las tinieblas has de contender?\r\nAbre bien la puerta de tu corazón,\r\nDeja al Salvador entrar.\r\n\r\nCoro:\r\nDeja al Salvador entrar, (Bis)\r\nAbre bien la puerta de tu corazón, y entrará el Salvador.\r\n\r\n¿Es tu fe muy débil en la oscuridad?\r\n¿Son tus fuerzas pocas contra la maldad?\r\nAbre bien la puerta de tu corazón,\r\nDeja al Salvador entrar.\r\n\r\n¿Quieres ir gozándote en tu senda aquí?\r\n¿Quieres que el Señor te utilice a ti?\r\nAbre bien la puerta de tu corazón,\r\nDeja al Salvador entrar.",
    },
    {
      ID: "121",
      Titulo: "Tocad trompeta ya",
      Letra:
        "Tocad trompeta ya,\r\ny con alegre son\r\na todo el mundo proclamad\r\neterna redención.\r\n\r\nCoro:\r\nJesús el Redentor\r\nnos fue propiciación,\r\ny por su sangre, con dolor,\r\nnos trajo salvación.\r\n\r\nA todos publicad:\r\n“Jesús resucitó”,\r\nQue ya de la mortalidad\r\nlos lazos quebrantó.\r\n\r\n“Vosotros, que el favor\r\ndel cielo no tenéis,\r\nsi vais a Cristo, por su amor\r\nsu gracia gozaréis”.",
    },
    {
      ID: "122",
      Titulo: "Todo aquel que oye",
      Letra:
        "Todo aquel que oye, vaya a proclamar:\r\n“Salvación de gracia puédese aceptar”,\r\nAl perdido mundo débese anunciar:\r\n“¡Id al Salvador Jesús!”\r\n\r\nCoro:\r\nTodo aquel que cree debe procurar\r\nestas buenas nuevas siempre predicar:\r\nQue Jesús de gracia quiere perdonar,\r\n¡Id al Salvador Jesús!\r\n\r\nTodo aquel que quiere, vaya sin tardar,\r\nfranca está la puerta y podéis entrar;\r\nCristo es el camino al celestial hogar,\r\n“¡Id al Salvador Jesús!”\r\n\r\nFirme es la promesa, oye pecador,\r\n¿Quieres tú la vida? Mira al Salvador;\r\nÉl a todos llama con divino amor,\r\n“¡Id al Salvador Jesús!”",
    },
    {
      ID: "123",
      Titulo: "Tú dejaste tu trono",
      Letra:
        "Tú dejaste tu trono y corona por mí,\r\nal venir a Belén a nacer;\r\nMás a ti no fue dado el entrar al mesón,\r\ny en pesebre te hicieron yacer.\r\n\r\nCoro:\r\nVen a mi corazón oh Cristo,\r\npues en él hay lugar para Tí,\r\n\r\nTú viniste Señor con tu gran bendición,\r\npara dar libertad y salud,\r\nMas con odio y desprecio te hicieron morir,\r\naunque vieron tu amor y virtud.\r\n\r\nAlabanzas sublimes los cielos darán,\r\ncuando vengas glorioso de allí,\r\nY tu voz nos dirá de las nubes: “Venid\r\nal hogar celestial junto a Mí”.",
    },
    {
      ID: "124",
      Titulo: "Un amigo hay más que hermano",
      Letra:
        "Un amigo hay más que hermano,\r\nCristo el Señor,\r\nquien llevó en cuerpo humano\r\nnuestro dolor.\r\nEste amigo moribundo,\r\npadeciendo por el mundo,\r\ndemostró su amor profundo:\r\n¡Dadle loor!\r\n\r\nConocerle es vida eterna,\r\nCristo el Señor;\r\ntodo aquel que quiera\r\nvenga al Redentor,\r\nPor nosotros Él derrama\r\nvida suya, pues nos ama,\r\ny a su lado a todos llama:\r\n¡Dadle loor!\r\nHoy, ayer, y por los siglos\r\nCristo el Señor;\r\nes el mismo fiel amigo,\r\nven, pecador.\r\nÉl es pan en el desierto,\r\nnuestro guía, nuestro puerto.\r\nEs su amor el mismo cielo:\r\n¡Dadle loor!",
    },
    {
      ID: "125",
      Titulo: "Un hombre llegóse de noche",
      Letra:
        "Un hombre llegóse de noche a Jesús,\r\nbuscando la senda de vida y salud;\r\nY Cristo le dijo: “Si a Dios quieres ver,\r\ntendrás que renacer”.\r\n\r\nCoro:\r\nTendrás que renacer, (Bis)\r\nDe cierto, de cierto te digo a ti,\r\ntendrás que renacer.\r\n\r\nY si tú quisieras al cielo llegar,\r\ny con los benditos allí descansar;\r\nSi vida eternal tú quisieras tener,\r\ntendrás que renacer.\r\n\r\nOh hombre, no debes jamás desechar,\r\npalabras que Cristo dignóse hablar;\r\nPorque si no quieres el alma perder, tendrás que renacer.\r\n\r\nAmigos han ido con Cristo a estar,\r\nque muchos quisieras un día encontrar;\r\nhoy este mensaje pues debes creer:\r\nTendrás que renacer",
    },
    {
      ID: "126",
      Titulo: "Vagaba yo en la oscuridad",
      Letra:
        "Vagaba yo en la oscuridad,\r\nmás me salvó Jesús,\r\nY con su amor y gran bondad\r\nllenóme de su luz.\r\n\r\nCoro:\r\nGozo tengo en mi corazón;\r\ngozo, gozo por su salvación,\r\nDesde que a Jesús vi y a su lado fui,\r\nDe su amor el gozo yo he sentido en mí.\r\n\r\nLas nubes y la tempestad\r\nno apartan a Jesús,\r\nY en medio de la oscuridad\r\nme gozo en su luz.\r\n\r\nAndando así en la luz\r\ncon Dios encuentro plena paz,\r\nVoy adelante con fervor\r\ndejando el mundo atrás.\r\n\r\nVeréle pronto como él es,\r\nraudal de toda luz,\r\nY gozaré en la eternidad\r\na causa de su cruz.",
    },
    {
      ID: "127",
      Titulo: "Vagas triste y angustiado",
      Letra:
        "¿Vagas triste y angustiado?\r\n¿Buscas tú solaz?\r\n– “Ven a mí”, te dice Cristo,\r\n“y halla paz”.\r\n\r\n¿Hay señales que me indiquen\r\nque mi guía Él es?\r\n– Las heridas de sus manos\r\ny sus pies.\r\n\r\n¿Hay corona que le adorne,\r\nsi es rey para mí?\r\n– Sí, corona, mas de espinas,\r\nhay allí.\r\n\r\nSi le busco, si le sigo,\r\n¿cuál será su don?\r\n– Del pecado, del infierno, redención.\r\n\r\nSi le pido que me salve,\r\n¿me recibirá?\r\n– Puesto que por ti Él ha muerto,\r\nSalvará.",
    },
    {
      ID: "128",
      Titulo: "Ve, cristiano y predica",
      Letra:
        "Ve, cristiano y predica\r\nde Jesús tu Salvador,\r\nSí, ve a todos y explica,\r\nel mensaje de su amor.\r\n\r\nCoro:\r\nSí, iré a predicarles\r\nel santo y bendito evangelio,\r\nSí, iré a explicarles\r\nel mensaje de su amor.\r\n\r\nDiles que ellos son culpables,\r\nque ya condenados son;\r\nY con tonos muy amables\r\ndiles de la salvación.\r\n\r\nDiles de celestes goces\r\npor la sangre de Jesús,\r\nQue con penas tan atroces\r\nderramó en cruenta cruz.\r\n\r\nDiles que ha resucitado,\r\nque glorificado está,\r\nQue un hogar ha preparado,\r\ndo más muerte nunca habrá.\r\n\r\nDiles que muy pronto viene,\r\ny que grande galardón\r\nReservado Cristo tiene\r\npara los que salvos son.",
    },
    {
      ID: "129",
      Titulo: "Ved los millones",
      Letra:
        "Ved los millones que entre las tinieblas,\r\nyacen, perdidos sin un Salvador,\r\n¿Quién, quién irá, las nuevas proclamando,\r\nque por Jesús Dios salva al pecador?\r\n\r\nCoro:\r\nTodo poder mi Dios me dio,\r\ny ahora a mis siervos mando Yo,\r\n“Id al mundo y proclamad el evangelio,\r\ny estoy con vosotros siempre”.\r\n\r\n“A Mí venid” la voz divina llama;\r\nclamad, “venid”, en nombre de Jesús,\r\nPara salvarnos de la muerte eterna,\r\nsu vida El ofreció en la dura cruz.\r\n\r\nQue venga pronto el día tan glorioso,\r\nen que los redimidos se unirán\r\nEn coro excelso, santo y jubiloso,\r\neternamente gloria a Dios darán.",
    },
    {
      ID: "130",
      Titulo: "Ven, ven a Mi",
      Letra:
        "Ven, ven a Mi en tonos de amor,\r\na ti te llama el tierno Salvador;\r\nCon los pecados agobiándote,\r\nven, ven a Mi, descanso te daré.\r\n\r\nCoro:\r\nVen, ven a Mi, Oh, ven, ven a Mi,\r\nVen, ven a Mi, descanso te daré,\r\nPaz Yo te daré, paz Yo te daré.\r\n\r\nCansado con la lucha de dolor\r\nen esta vida, pobre pecador;\r\nTus dudas y tristezas quitaré.\r\nVen, ven a Mí, y la paz Yo te daré.\r\n\r\nDesanimado, lleno de temor,\r\nsin conocer que Dios es amor;\r\nNo temas más, acércate con fe;\r\nven, y la vida eterna te daré.\r\n\r\nDescanso, paz y vida perennal\r\na ti te ofrezco, y de todo el mal\r\nDel este mundo Yo te libraré,\r\ny goces célicos Yo te daré.",
    },
    {
      ID: "131",
      Titulo: "Venid pecadores",
      Letra:
        "Venid, pecadores, que Dios por su amor\r\nal cielo nos llama, que es patria mejor,\r\ndo nunca la aurora perdió su fulgor;\r\ndo brilla la gloria del Dios creador.\r\n\r\nCoro:\r\nSí, sí, ¡venid, oh venid!\r\nAl cielo nos llama que es patria mejor.\r\n\r\nDejemos, hermanos, aparte el dolor;\r\nque arriba en los cielos, el mundo cantor\r\nde espíritus puros proclama Señor\r\na Cristo, Dios-Hombre, el gran Redentor.\r\n\r\nTrabajas y sufres aquí, pecador;\r\nel pan de que comes regó tu sudor.\r\nMas Dios te reserva por suerte mejor\r\nprimicias celestes de eterno valor.\r\n\r\n",
    },
    {
      ID: "132",
      Titulo: "¡Volveos, volveos!",
      Letra:
        "¡Volveos, volveos! ¿por qué moriréis?\r\nPues Dios ya se acerca con gracia y favor.\r\nJesús os convida, ¿por qué no vendréis?\r\ny lucha el Espíritu con incansable amor.\r\n\r\nRendíos, rendíos, de Dios a la voz,\r\nel bien ofrecido anhelantes buscad;\r\nLa sangre preciosa que Cristo vertió,\r\nperdón nos ofrece, consuelo y solaz.\r\n\r\nLa vida se pasa cual humo sutil,\r\nmuy pronto Jesús viene y no tardará;\r\nA todos los suyos conduce al redil,\r\nlos malos empero arrojados serán.\r\n\r\nVenid, pues, ahora, buscando salud,\r\nvenid a la patria del Dios de verdad;\r\nMarchemos constantes en pos de Jesús,\r\ny al fin en el cielo veremos su faz.",
    },
    {
      ID: "133",
      Titulo: "Yo confío en Jesús",
      Letra:
        "Yo confío en Jesús, y salvado soy.\r\nPor su muerte en triste cruz a la gloria voy.\r\n\r\nCoro:\r\nTodo fue pagado ya, nada debo yo.\r\nSalvación perfecta da quien por mí murió.\r\nTodo hizo mi Señor, me salvó sólo Él.\r\nCon ternura y gran amor, Él me guarda fiel.\r\n\r\nMi perfecta salvación eres Tú, Jesús;\r\nmi completa redención, mi gloriosa luz.\r\n\r\nEn el cielo te veré, tierno Salvador;\r\ntu presencia gozaré, ¡Oh, Jesús, Señor!",
    },
    {
      ID: "134",
      Titulo: "Yo quisiera cantar",
      Letra:
        "Yo quisiera cantar sin cesar,\r\ny honrar a Jesús, mi amado Salvador;\r\nQuien me hizo pensar que debía dejar\r\npara siempre la senda del error.\r\n\r\nCoro:\r\n¡Mi Salvador! ¡Mi Salvador!\r\nTe alabo, mi Rey y Señor.\r\n\r\nA Jesús acudí, el perdón recibí,\r\ny ahora feliz estoy en El;\r\nEl me dijo: “Ten fe, Yo contigo estaré,\r\ny de toda maldad te guardaré”\r\n\r\nServiré a Jesús predicando la luz,\r\ny gozoso con El yo viviré;\r\nEl me da protección y gratuita salvación,\r\nen la lucha yo firme quedaré.",
    },
    {
      ID: "135",
      Titulo: "¡A la luz!",
      Letra:
        "A la luz, a la luz,\r\nal encuentro de Jesús,\r\n¡Cuánto mi alma le desea!\r\n¡Oh qué gozo cuando vea,\r\nQuién por mí sufrió en la cruz!\r\n\r\nPronto haz, pronto haz,\r\nCristo, Príncipe de paz,\r\nQue con todos los salvados,\r\npor tu sangre rescatados,\r\nYo contemple allí tu faz.\r\n\r\nDulce son, dulce son,\r\nde los ángeles canción,\r\nSi sus alas yo tuviera,\r\nvolaría a aquella esfera,\r\nA los montes de Sión.\r\n\r\nQué será, qué será,\r\ncuando en Salem entre ya,\r\nDo las calles brillan de oro,\r\nme reciba el santo coro,\r\n¡Cuánto gozo espera allá!\r\n\r\n¡Sumo bien, sumo bien,\r\ncelestial Jerusalém!\r\nFuentes, árboles de vida,\r\narpas dan la bienvenida,\r\n¡Llévanos, Dios, a tu Edén!",
    },
    {
      ID: "136",
      Titulo: "A Ti, Dios mío, en oración",
      Letra:
        "A Ti, Dios mío, en oración,\r\ncon mi cuidado terrenal\r\nallegóme y de corazón\r\nte manifestaré mi mal.\r\n¡Oh, cuántas veces tuve en Ti,\r\nrefugio de mi tentación,\r\nY cuántas cosas recibí,\r\nde Ti Dios mío en oración!\r\n\r\nA Ti, Dios mío, en oración,\r\nconfiando en tu fidelidad,\r\nElevaré mi petición,\r\nla voz de mi necesidad.\r\nYo sé que escucharás allá,\r\nque me darás tu bendición,\r\nQue fortaleza me vendrá de Ti,\r\nDios mío, en oración.\r\n\r\nAhora, oh Dios, en oración,\r\naliento y gozo a mi alma da;\r\nEn este mundo de aflicción,\r\nde orar necesidad habrá.\r\nMas desde el día en que yo esté\r\ncontigo en suma perfección,\r\nMis oraciones cambiaré\r\nen una eterna adoración.",
    },
    {
      ID: "137",
      Titulo: "A todos los cristianos",
      Letra:
        "A todos los cristianos\r\nofrece el Salvador\r\ndescanso en sus mansiones\r\nde gloria, paz y amor.\r\nAnsiemos presurosos\r\nla oferta a disfrutar,\r\ny pronto viviremos\r\nsin cuitas ni pesar.\r\n\r\nCoro:\r\nAlabemos a Dios,\r\nque del mal nos libró\r\ny a gozar con Jesucristo\r\npara siempre nos llamó.\r\n\r\nJesús, el Rey de gloria,\r\nnos llama con afán\r\nallá do los salvados\r\ncon Dios el Padre están.\r\nMas hoy debemos\r\ntodos luchar hasta vencer,\r\nquitando al enemigo\r\nsu cetro y su poder.\r\n\r\nJesús en esta lucha\r\nnos fortalecerá,\r\nsu Espíritu potente\r\nel triunfo nos dará.\r\nClamemos con fe viva,\r\npidamos sin cesar\r\nque Cristo, victoriosos\r\nnos lleve a descansar.",
    },
    {
      ID: "138",
      Titulo: "A tu presencia",
      Letra:
        "A tu presencia oh Dios bendito,\r\nVengo y proclamo con gran fervor,\r\nCuánta alegría tengo en mi alma,\r\nQué dulce calma ya por tu amor.\r\nNo mas me escondo de tu presencia,\r\nCon confianza ya puedo estar;\r\nCesó mi miedo de tu mirada,\r\nNo tengo nada que recelar.\r\n\r\nSupe que me amas, puesto que he visto\r\nEn Jesucristo prueba sin par\r\nDe que, no obstante mi indigna historia,\r\nTengo en tu gloria propio lugar.\r\n\r\nGracia divina en Ti se encuentra,\r\nY se concentra divino amor;\r\nCristo del cielo vino a salvarme\r\nY pruebas darme de tu favor.",
    },
    {
      ID: "139",
      Titulo: "Al acabar la vida aquí",
      Letra:
        "Al acabar la vida aquí\r\nen este mundo de pesar,\r\npara gozar en gloria allí\r\ny ante ti, Señor, estar;\r\nentonces, sí, sabré mejor\r\nlo que te debo por tu amor.\r\n\r\nAl recibir, Señor Jesús,\r\nde ti mi cuerpo celestial,\r\ny ante el trono de la luz\r\nservirte, libre ya del mal;\r\nentonces, sí, sabré mejor\r\nlo que te debo por tu amor.\r\n\r\nAl escuchar el dulce son\r\ndel himno que te entonará\r\nen armoniosa perfección\r\nla Iglesia tuya en gloria allá;\r\nentonces, sí, sabré mejor\r\nlo que te debo por tu amor.\r\n\r\nTú me buscaste en tu bondad\r\ny me salvaste por la fe;\r\nQue viva, pues, en santidad\r\nmientras aquí en el mundo esté.\r\nAyúdame a mostrar mejor\r\nlo que te debo por tu amor.",
    },
    {
      ID: "140",
      Titulo: "Al Salvador rechaza",
      Letra:
        "Al Salvador rechaza\r\nel mundo pecador,\r\nla sorda muchedumbre\r\najena de su amor;\r\nMas Él vendrá glorioso,\r\nel día cerca está;\r\naquel día majestuoso llega ya.\r\n\r\nCoro:\r\nDe los días el más bello,\r\ndel tiempo el principal,\r\npoco tarda su llegada\r\ncon triunfo celestial.\r\nDe alegría pura, colmó\r\nal siervo leal y fiel,\r\nha de ser el día grande\r\nde Emanuel.\r\n\r\nAlumbrará los cielos\r\nglorioso resplandor,\r\nmas brillará la Iglesia\r\ncon gloria superior;\r\nY al Salvador divino\r\ntodo ojo mirará\r\nen el día majestuoso que vendrá.\r\n\r\nYa no tendremos pruebas,\r\nni culpas, ni pesar,\r\nmas grande regocijo\r\ny eterno bienestar.\r\nSeremos semejantes\r\na nuestro Redentor\r\nen el día majestuoso de esplendor.\r\n\r\nAcerque el bello día\r\nel fiel y fuerte amor\r\nde los que consagramos\r\nla fuerza a su labor.\r\nBusquemos al perdido\r\npor Cristo, el buen Pastor,\r\npara el día majestuoso de su amor.",
    },
    {
      ID: "141",
      Titulo: "¡Alma mía! Dios te llama",
      Letra:
        "¡Alma mía! Dios te llama\r\noh, no dejes de acudir!\r\nCon su poderosa mano\r\nel camino te ha de abrir.\r\nÉl ha roto la cadena,\r\nya de Egipto salvo estás;\r\nlibertado de la pena\r\ncon tu Dios caminarás.\r\n\r\nEl desierto está delante,\r\ntriste, seca soledad;\r\nMas de la celeste fuente\r\nbeberás en libertad.\r\nLuz divina te rodea\r\ny tus pasos guiará;\r\nTras la noche y la pelea,\r\nhay la paz que durará.\r\n\r\n¿Son de Egipto los placeres\r\npara ti sólo ilusión?\r\nEl Señor de sus tesoros\r\nsaciará tu corazón.\r\nSi el camino fuese largo,\r\nsostendráte su virtud;\r\ncomo el águila renueva\r\nfuerzas de tu juventud.\r\n\r\nCuando al fin de tus desvelos\r\nentres en tu posesión,\r\ny ese amor allí celebres\r\nen la celestial mansión,\r\nquien allá te habrá guiado,\r\nconocido te ha de ser;\r\nde su amor bien comprobado\r\nvas la gloria pronto a ver.",
    },
    {
      ID: "142",
      Titulo: "Anhelando amor perfecto",
      Letra:
        "Anhelando amor perfecto,\r\npaz, pureza y santidad,\r\na tus plantas, con fe plena,\r\n¡Heme aquí, Dios de bondad!\r\n\r\nCoro:\r\nCual ofrenda me consagro,\r\nconstreñido por tu amor;\r\ncuerpo, espíritu y alma\r\ndoy a ti, mi Salvador,\r\nTuyo sólo sea yo, Señor.\r\n\r\nYa vencido por tu gracia,\r\nhoy me rindo a ti, Jesús;\r\nRedimido por tu sangre\r\nsoy trofeo de tu cruz.\r\n\r\nToma, oh Cristo, lo que es tuyo;\r\npon tu sello sobre mí:\r\nque tu semejanza tenga,\r\ny te glorifique aquí.",
    },
    {
      ID: "143",
      Titulo: "Aunque fáltame la fe",
      Letra:
        "Aunque fáltame la fe,\r\nCristo me tendrá,\r\nAunque el diablo búsqueme,\r\nCristo me tendrá.\r\n\r\nCoro:\r\nCristo me tendrá, salvo me tendrá,\r\nEs tan grande su poder, siempre me tendrá.\r\n\r\nNo cual yo le tengo a Él,\r\nCristo me tendrá,\r\nDébil soy y no muy fiel,\r\nmas El me tendrá.\r\n\r\nSoy objeto de su amor,\r\nCristo me tendrá,\r\nY me gozo en su favor,\r\nCristo me tendrá.\r\n\r\nYa jamás me perderé,\r\nCristo me tendrá,\r\nPues su vida le costé,\r\ny El me sostendrá.",
    },
    {
      ID: "144",
      Titulo: "Avívanos Señor",
      Letra:
        "Avívanos Señor,\r\nsintamos el poder\r\nDel Santo Espíritu de Dios\r\nen todo nuestro ser.\r\n\r\nCoro:\r\nAvívanos Señor,\r\ncon nueva bendición;\r\nInflama el fuego de tu amor\r\nen cada corazón.\r\n\r\nAvívanos Señor,\r\ntenemos sed de Ti,\r\nLa lluvia de tu bendición\r\nderrama ahora aquí.\r\n\r\nAvívanos Señor,\r\ndespierta más amor,\r\nMás celo y fe en tu pueblo aquí\r\nen bien del pecador.",
    },
    {
      ID: "145",
      Titulo: "Braman vientos",
      Letra:
        "Braman vientos, rugen mares\r\ncon furiosa tempestad.\r\nCristo a ti mi alma clama,\r\na ti, no más. (Bis)\r\n\r\nLazos miles echa el diablo,\r\nsiempre astuto y audaz;\r\nDía y noche en ti confío,\r\nen ti, no más. (Bis)\r\n\r\nEste mundo es engañoso,\r\nbrillo falso y fugaz;\r\nDa Jesús eterno gozo, Jesús,\r\nno más. (Bis)\r\n\r\nSiento mucho mi pecado,\r\nme acusa Satanás;\r\nCristo es mi abogado, Cristo,\r\nno más. (Bis)\r\n\r\nEn los tristes nubarrones,\r\n¿quién verá de Dios la faz?\r\n¿Quién defenderá mi causa?\r\nCristo, no más. (Bis)\r\n\r\nCuando entre a la patria,\r\ndisfrutando eterna paz,\r\nal Señor será la gloria,\r\na él no más. (Bis)",
    },
    {
      ID: "146",
      Titulo: "Canta, oh buen cristiano",
      Letra:
        "Canta, oh buen cristiano;\r\ndulce es el cantar,\r\nHace el camino llano\r\ny quita el pesar.\r\nCanta en las noches tristes,\r\ncanta en la clara luz;\r\nAlmas así salvadas\r\ncantan de Jesús.\r\n\r\nCanta, oh buen cristiano;\r\nlleno tu corazón\r\nHimnos lo hacen sano,\r\ny del cielo son\r\nTanto hay en este mundo\r\nde angustias y dolor;\r\nCanta el amor profundo\r\nde tu Salvador.\r\n\r\nCanta, oh buen cristiano;\r\nDios guardará tus pies,\r\nY El sostendrá tu mano\r\nhasta la vejez.\r\n¿Sabes que el diablo invitas\r\ncuando medroso estás?\r\nPon ante Dios tus cuitas,\r\ny él darate paz.",
    },
    {
      ID: "147",
      Titulo: "Concédeme, Jesús, poder",
      Letra:
        "Concédeme, Jesús, poder\r\ny gracia para comprender\r\ncuán dulce es el amar;\r\nHazme Señor, con santidad,\r\ndel cielo la felicidad\r\naún aquí gozar.\r\n\r\nLa santa sed inspírame,\r\nde conocerte a ti; sabré\r\nentonces la virtud\r\nDe tu perfecta salvación,\r\ny gozará mi corazón\r\nde tu amor la plenitud.\r\n\r\nOh santifícame Señor,\r\nmi alma llena de tu amor,\r\npermíteme oír tu voz,\r\nTu rostro contemplar,\r\ntus perfecciones admirar,\r\ny así por Ti vivir.",
    },
    {
      ID: "148",
      Titulo: "Conmigo queda",
      Letra:
        "¡Conmigo queda, oscurece ya,\r\nY densa noche luego caerá;\r\nMe dejan otros, clamo pues a Ti,\r\n¿Ampárame Señor, oh, queda aquí!\r\n\r\nVeloz la vida pasa a su final,\r\nSe desvanece lo que es terrenal;\r\nDecaimiento alrededor se ve,\r\n¡Oh, Tú que nunca cambias, quédate!\r\n\r\nTe necesito cada día más,\r\nTu gracia vence al tentador audaz;\r\n¿A no ser tu, quien me soportará?\r\nJesús ayudador, conmigo está!\r\n\r\nA nadie temo si conmigo estás,\r\nTristeza y llanto pronto quitarás,\r\nLa tumba pierde todo su terror,\r\nConmigo queda pues, oh Salvador.\r\n\r\nAdelante ponte, luz y guía sé,\r\n¡Oh, resplandece y dirígeme!\r\nYa amanece, sombras dejo atrás,\r\nMorir no temo si conmigo estás.",
    },
    {
      ID: "149",
      Titulo: "Contendamos, Jóvenes",
      Letra:
        "Contendamos, jóvenes, por la fe,\r\nAunque brame el mundo con Satanás;\r\nEn la lucha nunca nos vencerán,\r\nPues Jesús nos guardará.\r\n\r\nCoro:\r\nSi sufrimos aquí, reinaremos allí\r\nEn la gloria celestial,\r\nSi llevamos la cruz por amor de Jesús,\r\nLa corona El nos dará.\r\n\r\nNo seamos tibios de corazón,\r\nNi dejemos nunca el primer amor;\r\nMantengamos firme la profesión\r\nDe la fe en el Salvador.\r\n\r\nProcuremos todos la santidad,\r\nSin la cual ninguno verá al Señor;\r\nGozo, paz y eterna felicidad\r\nCristo ofrece al vencedor.",
    },
    {
      ID: "150",
      Titulo: "Cristiano, alaba",
      Letra:
        "Cristiano alaba a tu Señor,\r\nproclama sus bondades,\r\nAnuncia a todos su favor,\r\nsu gracia y sus verdades.\r\n\r\nCoro:\r\nAlaba siempre, alaba al Salvador,\r\nCanta, ¡oh! canta, la historia de su amor.\r\n\r\nLa buena nueva de salud\r\ndeclara al angustiado;\r\nEnsalza siempre la virtud\r\nde aquel que te ha salvado.\r\n\r\nCon fe, constancia y gran valor\r\nsé siempre buen testigo;\r\nDirige al triste pecador\r\na Cristo, el fiel amigo.\r\n\r\nEn todo tiempo sin temor\r\nconfiesa a Jesucristo;\r\nNo te avergüences del Señor,\r\nque en cruz por ti ha sufrido.",
    },
    {
      ID: "151",
      Titulo: "Cristo es todo para mí",
      Letra:
        "Cristo es todo para mí,\r\nen calma y tempestad,\r\nEl es mi gozo, vida y paz,\r\ncamino y verdad.\r\nY cuando mi alma triste esté,\r\nsu gran consuelo yo tendré,\r\nEs siempre el mismo amigo\r\nel Señor Jesús.\r\n\r\nCristo es todo para mí,\r\nen prueba y tentación,\r\nEn su poder yo venceré\r\nla fuerza de Satán,\r\nEn tiempo de debilidad\r\nencuentro en El seguridad,\r\nEs siempre el mismo amigo\r\nel Señor Jesús.\r\n\r\nCristo es todo para mí,\r\ndisfruto de su amor,\r\nFeliz en El no temeré,\r\nme cuida mi Señor,\r\nY cuando en valle oscuro esté,\r\nconfiadamente yo andaré,\r\nEs siempre el mismo amigo\r\nel Señor Jesús.",
    },
    {
      ID: "152",
      Titulo: "Cristo está conmigo",
      Letra:
        "Cristo está conmigo, ¡qué consolación!\r\nSu presencia quita todo mi temor;\r\nTengo la promesa de mi Salvador,\r\n“No te dejaré nunca,\r\nsiempre contigo estoy”.\r\n\r\nCoro:\r\nNo tengo temor, no tengo temor,\r\nJesús me ha prometido,\r\n“siempre contigo estoy”. (Bis todo)\r\n\r\nFuertes enemigos siempre cerca están,\r\nCristo está más cerca, guárdame del mal;\r\n“Ten valor”, me dice, “soy tu ayudador”,\r\n“No te dejaré nunca,\r\nsiempre contigo estoy”.\r\n\r\nEl que guarda mi alma, nunca dormirá,\r\nSi mi pie resbala, El me sostendrá;\r\nEn mi vida diaria es mi guardador,\r\n¡Oh, qué fiel su palabra!\r\n“Siempre contigo estoy”.",
    },
    {
      ID: "153",
      Titulo: "Cual la mar hermosa",
      Letra:
        "Cual la mar hermosa es la paz de Dios,\r\nFuerte y gloriosa, es eterna paz.\r\nGrande y perfecta, premio de la cruz,\r\nFruto del Calvario, obra de Jesús.\r\n\r\nCoro:\r\nDescansando en Cristo,\r\nsiempre paz tendré,\r\nEn Jehová confiando, nada temeré.\r\n\r\nEn el gran refugio de la paz de Dios,\r\nnunca hay molestias es perfecta paz,\r\nNunca negra duda, penas ni pesar,\r\nVejaciones crueles, pueden acosar.\r\n\r\nToda nuestra vida cuidará Jesús,\r\nCristo nunca cambia, El es nuestra paz.\r\nFuertes y seguros en el Salvador,\r\nSiempre moraremos en su grande amor.\r\n\r\n¡Oh! Señor amado, Tú nos das quietud,\r\nDe Ti recibimos celestial salud.\r\nHaznos conocerte, te amaremos más,\r\nSé Tú nuestro dueño, Príncipe de paz.\r\nCoro final:\r\nDescansando en Cristo,\r\ntengo siempre paz,\r\nEn Jehová confiando, hallo gran solaz.",
    },
    {
      ID: "154",
      Titulo: "Cual las estrellas",
      Letra:
        "Cual las estrellas que por la mañana\r\nsiempre se pierden del sol al fulgor,\r\npasar quisiera yo así de este mundo,\r\nbien recordado por obras de amor.\r\n\r\nCoro:\r\nSí, recordado, bien recordado.\r\nBien recordado por obras de amor,\r\nPasar quisiera yo así de este mundo,\r\nbien recordado por obras de amor.\r\n\r\n¿En la cosecha que obreros recogen\r\nse olvidará la pasada labor?\r\nNo, pues cuando ellos los campos despojen,\r\nse acordarán de mis obras de amor.\r\n\r\nToda verdad en la vida sembrada,\r\ncual la semilla del buen sembrador\r\nha de quedar, y —la vida pasada—\r\nse acordarán de mis obras de amor.\r\n\r\nMuy pronto viene en las nubes del cielo\r\npara buscar a su Iglesia el Señor;\r\ny a todo siervo que fiel se ha mostrado\r\nÉl premiará por sus obras de amor.",
    },
    {
      ID: "155",
      Titulo: "Cuando la trompeta",
      Letra:
        "Cuando la trompeta del Señor\r\nse toque, la final,\r\nCon fulgor apunte el día eternal,\r\nY los redimidos suban\r\na su casa celestial,\r\nCuando allá se pase lista yo estaré.\r\n\r\nCoro:\r\nCuando allá se pase lista, (tres veces)\r\nCierto estoy que por su gracia\r\nallí estaré.\r\n\r\nCuando todas sombras huyan\r\nen la gran resurrección,\r\nDe los muertos en Jesús\r\nsin corrupción,\r\nY en las nubes al Señor reciban,\r\n¡qué consolación!,\r\nCuando allá se pase lista yo estaré.\r\n\r\nTrabajar es mi deseo sin cesar\r\npor el Señor,\r\nSiempre hablando de su gracia\r\ny de su amor,\r\nCuando acabe aquí mi obra\r\ny me llame el Salvador,\r\nCuando allá se pase lista yo estaré.",
    },
    {
      ID: "156",
      Titulo: "Cuando venga Cristo",
      Letra:
        "Cuando venga Cristo no habrá dolor,\r\nCuando venga Cristo, no habrá temor,\r\nPor los suyos viene Cristo el Señor.\r\nPues siempre los amará.\r\n\r\nCoro:\r\nPues siempre los amará,\r\npues siempre los amará,\r\nA los suyos viene a recoger,\r\npues siempre los amará.\r\n\r\nTodo llanto cesa al venir Jesús,\r\nY la vida acrece al venir Jesús,\r\nPor dolor el canto, por nubes luz,\r\nPues siempre los amará.\r\n\r\nAl venir Jesús no habrá más morir,\r\nAl venir Jesús no habrá más gemir,\r\nY de todo mal viene a redimir,\r\nPues siempre los amará.\r\n\r\nOh, qué gozo habrá al venir Jesús!\r\nPues despertaremos al albor de luz,\r\nA los nuestros y los traerá Jesús\r\nPues siempre los amará.",
    },
    {
      ID: "157",
      Titulo: "De Jesús el nombre guarda",
      Letra:
        "De Jesús el nombre guarda,\r\nheredero del afán;\r\nDulce hará tu copa amarga,\r\ntus afanes cesarán.\r\n\r\nCoro:\r\nSuave luz, manantial,\r\nde esperanza, fe y amor,\r\nSumo bien celestial, es Jesús el Salvador.\r\n\r\nDe Jesús el nombre estima,\r\nque te sirve de broquel,\r\nalma débil, combatida,\r\nhallarás asilo en Él.\r\n\r\nDe Jesús el nombre ensalza,\r\ncuyo sin igual poder,\r\nDel sepulcro nos levanta,\r\nrenovando nuestro ser.",
    },
    {
      ID: "158",
      Titulo: "¡De ovejas cuantas vagan!",
      Letra:
        "¡De ovejas cuantas vagan!\r\ndel redil muy lejos van,\r\nEn la montaña triste\r\ncon frío y hambre están;\r\nO en tenebroso bosque,\r\nen medio del zarzal,\r\nO en peña peligrosa,\r\nexpuestas a gran mal.\r\n\r\nCoro:\r\nVayamos a buscarlas,\r\nen el Nombre del Señor,\r\nY gran gozo habrá,\r\npara quién podrá\r\natraerlas al Pastor.\r\n\r\n¡Oh! ¿quién irá a buscarlas?\r\n¿quién, por la compasión\r\nde Dios ira a buscarlas,\r\ndo están en perdición.\r\n¿Quién se dará molestias,\r\nquien sufrirá dolor,\r\npor gozo de encontrarlas,\r\ny traerlas al Pastor?\r\n\r\nFelices nos haría\r\nel así poder hablar,\r\n“Pastor, hemos salido\r\ntus ovejas a buscar,\r\nY lejos las hallamos,\r\ndespués de pruebas mil,\r\nY aquí te las traemos,\r\nque estén en tu redil.”",
    },
    {
      ID: "159",
      Titulo: "Dejé todas mis cuitas",
      Letra:
        "Dejé todas mis cuitas a Jesús,\r\nquien llevó mis pecados en la cruz,\r\nel magnífico día en que por fe\r\nen la cruz por salvarme le miré,\r\ny la carga terrible de mi alma Él quitó\r\ny su voz tan suave mi dolor disipó.\r\n\r\nDejé todas mis cuitas al Señor,\r\nporque quita a las penas su amargor,\r\ny las lágrimas dora del mortal,\r\ncon su tierna sonrisa celestial.\r\nEl desierto miramos que se torna en vergel,\r\ncuando en su camino vamos confiados en él.\r\n\r\nDejé todas mis cuitas al Señor,\r\nde mi siempre benigno protector\r\nen el puerto seguro al fin anclé,\r\ny reposo en sus aguas encontré.\r\nTengo en él mis consuelos, es mi guía, mi luz,\r\ny mi espíritu encontró la paz en Jesús.\r\n\r\n¡Oh! ven con tus cuitas al Señor,\r\nalma martirizada de dolor,\r\na su lado la dicha lograrás,\r\ny librada de angustias vivirás.\r\nEn su amor tan caro hay lugar para ti;\r\ny perfecto amparo, oh alma, tienes allí.",
    },
    {
      ID: "160",
      Titulo: "Del trono celestial",
      Letra:
        "Del trono celestial\r\nal mundo descendí,\r\nSed, hambre padecí,\r\ncual mísero mortal;\r\nY todo fue por ti,\r\n¿Qué has hecho tú por Mí?\r\n\r\nMi sangre derramé,\r\ny en mi agonía cruel,\r\nBebí vinagre y hiel,\r\nmi lecho una cruz fue;\r\nY todo fue por ti,\r\n¿Qué has hecho tú por Mí?\r\n\r\nPor darte la salud,\r\nsufrí, pené, morí,\r\nTu sustituto fui,\r\nen dura esclavitud;\r\nY todo fue por ti,\r\n¿Qué has hecho tú por Mí?\r\n\r\nEl Padre celestial\r\ncumplida bendición,\r\nla eterna salvación,\r\nla dicha perennal,\r\nTe doy de gracia a ti;\r\nno dudes, Ven a Mí.",
    },
    {
      ID: "161",
      Titulo: "¡Despiértate, mi corazón!",
      Letra:
        "¡Despiértate mi corazón!\r\nBendice a tu Señor,\r\nCantando en himnos de loor,\r\nque Dios es Dios de amor.\r\nInmenso amor, amor sin fin,\r\nque quiso Dios mostrar,\r\nBuscando al pobre pecador,\r\ndispuesto a perdonar.\r\n\r\nCoro:\r\n¡Despiértate mi corazón!\r\nY alaba, alaba al Salvador,\r\nCantando en himnos de loor,\r\nque Dios: es Dios de amor.\r\n\r\nAmor que quiso quebrantar\r\na Cristo en mi lugar,\r\nAmor que quiso en dura cruz\r\nsu sangre derramar.\r\nAmor que busca hasta encontrar\r\nal pobre pecador,\r\nAmor divino, amor sin par,\r\namor del Salvador.\r\n\r\nComprado a precio tan real,\r\nla sangre del Señor,\r\ndonde hallaré con qué pagar\r\ntal gracia, tal amor.\r\nSi su bondad excede aún,\r\ndignándose también,\r\nTenerme a mí cercano a sí,\r\nsiempre jamás, amén.",
    },
    {
      ID: "162",
      Titulo: "Después de contemplar",
      Letra:
        "Después de contemplar la cruz,\r\nmis ídolos dejé;\r\ncamino nuevo yo emprendí,\r\ny dicha allí encontré.\r\n\r\nCoro:\r\nVa bien, va bien,\r\nva bien con los salvos, bien.\r\nLo sé por cierto, es así:\r\nva bien, con los salvos, bien.\r\n\r\nDe Egipto escapar logré,\r\na Canaán me voy.\r\nEl Salvador mi guía es;\r\nconfiado en él estoy.\r\n\r\nCuando a tentarme Satanás\r\nsu sutileza emplea,\r\nconfío sólo en el Señor,\r\ny gano la pelea.\r\n\r\nEn hora de oscuridad\r\nen Dios yo confiaré,\r\npues su promesa firme está:\r\n“Yo no te dejaré”.\r\n\r\nDespués de terminar la lid\r\nal cielo subiré;\r\nAllí esperando Cristo está,\r\ny en gloria viviré.",
    },
    {
      ID: "163",
      Titulo: "El amor de Dios",
      Letra:
        "El amor de Dios es grande,\r\nno podrá jamás cesar,\r\nMás aumenta, más se expande\r\ncuanto más le dan lugar.\r\nA pesar de ser tan santo,\r\nda perdón al pecador,\r\nY el vigor de nuestra vida,\r\nnos es dado en ese amor.\r\n\r\nDemostró la cruz de Cristo,\r\nque era Dios un Dios de amor,\r\nY su luz, que allí se ha visto,\r\nesplendente cual albor.\r\nLa eternal justicia hallaba\r\nen la cruz satisfacción,\r\nA la par que Dios mostraba\r\nsu clemente corazón.\r\n\r\n¡Oh qué triunfo más brillante!\r\n¡en el cielo un hombre entró!\r\nY es allá representante\r\nde su pueblo a quién salvó.\r\nSanto amor fue revelado\r\npor el hecho de la cruz,\r\nY Jesús ha demostrado\r\nsu justicia en plena luz.\r\n\r\nSi descansan los creyentes,\r\nviendo en gloria a su Señor\r\nPaz y gozo permanentes\r\ntienen por su fiel amor.\r\nY los fuertes eslabones,\r\nsimpatía y comunión,\r\nUnen ya sus corazones\r\ncon los que de Cristo son.",
    },
    {
      ID: "164",
      Titulo: "El día que diste, Señor",
      Letra:
        "El día que diste Señor se acaba,\r\nY cae de noche la oscuridad,\r\nCon himnos de loores a Ti principiaba\r\nY ahora celebran de Ti la bondad.\r\n\r\nLas gracias te damos que toda tu iglesia,\r\nCual gira el mundo en su luz solar,\r\nPor toda la tierra continua vigilia,\r\nDe día y de noche ya puede guardar.\r\n\r\nEn cada comarca, país, continente,\r\nEn tanto el sol otro día trae,\r\nLas súplicas se oyen del alma creyente,\r\nTambién alabanza que no se decae.\r\n\r\nEl sol, que al dejarnos al sueño nos llama,\r\nDespierta a hermanos de más allá,\r\nAsí de hora en hora sin fin se proclama\r\nTu gloria divina que no pasará.\r\n\r\nImperios potentes el mundo ha perdido,\r\nSe van sus glorias y majestad,\r\nMás tu excelso reino con los que han creído,\r\nSus glorias retiene por la eternidad.",
    },
    {
      ID: "165",
      Titulo: "¡El Señor no me engaña!",
      Letra:
        "¡El Señor no me engaña!\r\nEs muchísimo mejor\r\nque el concepto más sublime\r\nque tenía del Señor;\r\nCuanto más yo le conozco,\r\ntanto más le encuentro fiel,\r\nY deseo que los otros vengan\r\na creer en El. (Bis)\r\n\r\n¡El Señor no me engaña!\r\nDel pecado me salvó,\r\nY de toda la tristeza\r\nque a mi espíritu oprimió,\r\nSu presencia me ha librado\r\ny su beso que me da,\r\nMe asegura que por siempre\r\nsu amor no cesará. (Bis)\r\n\r\n¡El Señor no me engaña!\r\nOtra vez El volverá,\r\nY mi corazón me indica\r\nque el día cerca está.\r\nEste mundo, dice el hombre,\r\nningún cambio sufrirá,\r\nCristo dice: “Vengo en breve”\r\ny seguridad me da. (Bis)\r\n\r\n¡El Señor no me engaña!\r\nTodo en todo El ya es,\r\nSalvador quien santifica,\r\nmás precioso cada vez;,\r\nTiene El ya mis afectos,\r\nsuple mi necesidad,\r\n¡El Señor no me engaña!\r\nEs el colmo de bondad. (Bis)",
    },
    {
      ID: "166",
      Titulo: "En la vergonzosa cruz",
      Letra:
        "En la vergonzosa cruz,\r\npadeció por mí Jesús,\r\nPor la sangre que vertió,\r\nmis pecados El expió.\r\nLavará de todo mal\r\nese rojo manantial,\r\nEl que abrió por mí Jesús\r\nen la vergonzosa cruz.\r\n\r\nCoro:\r\nSí, fue por mí. Sí, fue por mí,\r\nFue por mí, murió Jesús,\r\nen la vergonzosa cruz.\r\n\r\n¡Oh qué amor! ¡qué inmenso amor!\r\nReveló mi Salvador,\r\nLa maldad que hice yo,\r\nal suplicio le llevó.\r\nAhora a Ti mi todo doy,\r\ncuerpo y alma tuyo soy,\r\nMientras permanezca aquí,\r\nhazme siempre fiel a Ti.\r\n\r\nYo de Cristo sólo soy,\r\na seguirle pronto estoy,\r\nAl bendito Redentor\r\nserviré con firme amor.\r\nSea mi alma ya su hogar,\r\ny mi corazón su altar,\r\nVida emana, paz y luz,\r\ndel Calvario, de la cruz.",
    },
    {
      ID: "167",
      Titulo: "En mis angustias",
      Letra:
        "En mis angustias me ayuda Jesús,\r\nSobre mi alma derrama su luz;\r\nTodos los días consuelo me da,\r\nCada momento conmigo El está.\r\n\r\nCoro:\r\nCada momento me guardas, Señor,\r\nCada momento en tu gracia y tu amor;\r\nVida abundante yo tengo en Ti,\r\nCada momento Tú vives en mí.\r\n\r\nVoy ante el trono de gracia con fe,\r\nOye mi voz y mis lágrimas ve;\r\nCristo Jesús en los cielos allí,\r\nCada momento se acuerda de mí.\r\n\r\nCristo es mi roca, mi libertador,\r\nEl es mi escudo, mi gran defensor;\r\nEn mi conflicto al Señor miraré,\r\nCada momento y salvado seré.",
    },
    {
      ID: "168",
      Titulo: "En presencia estar de Cristo",
      Letra:
        "En presencia estar de Cristo,\r\nver su rostro ¿qué será?\r\nCuando al fin en pleno gozo,\r\nmi alma le contemplará.\r\n\r\nCoro:\r\nCara a cara espero verle,\r\nmás allá del cielo azul;\r\nCara a cara en plena gloria,\r\nyo veré al Señor Jesús.\r\n\r\nSólo tras oscuro velo\r\nhoy le puedo aquí mirar,\r\nMas ya pronto viene el día\r\nque su gloria ha de mostrar.\r\n\r\n¡Cuánto gozo habrá con Cristo\r\ncuando no haya más dolor,\r\nCuando cesen los peligros\r\ny ya estemos en su amor!\r\n\r\nCara a cara, ¡cuán glorioso\r\nha de ser así vivir!\r\n¡Ver el rostro de quién quiso,\r\nnuestras almas redimir!",
    },
    {
      ID: "169",
      Titulo: "En tristeza y tempestades",
      Letra:
        "En tristeza y tempestades una luz se ve,\r\nEs de Cristo la promesa,\r\n“pronto volveré”.\r\nEn la luz, la paz, la gloria\r\ndel celeste hogar,\r\nEl me espera y apareja para mí lugar.\r\n\r\nLargo tiempo me ha guiado\r\nen el mundo aquí,\r\nMas ya veo la morada lista para mí;\r\nY El en medio de la gloria\r\nno se olvidará\r\nDe mi nombre, pues grabado\r\nen su mano está.\r\n\r\nNi la música del cielo es tan dulce son\r\nComo las pisadas mías a su corazón;\r\nNi la gloria de los cielos se completará\r\nMientras que su amada esposa\r\naun ausente está.\r\n\r\n¿Quién es este que a encontrarme\r\nviene en grande amor,\r\nCual estrella de mañana,\r\nde la luz albor?\r\nEs aquel que en cruz cruenta\r\npadeció una vez,\r\nAun en gloria le conozco,\r\npues El mismo es.\r\n\r\n¡Cuán bendito es el encuentro\r\nel desierto atrás,\r\nY el estar en la presencia\r\nsin salir jamás.\r\nEl, en toda su hermosura,\r\nyo, por su favor,\r\nCompartiendo de su Padre\r\nplenitud de amor.\r\n\r\nDo el pecado no penetra,\r\ncon El estaré\r\nY en la santidad perfecta,\r\ncon El andaré,\r\nHecha compañera idónea\r\npara el Salvador,\r\nY por siempre mostraráse\r\nsu inmenso amor.\r\n\r\nEl, que tuvo la tristeza\r\nde la cruz atroz\r\nYo, que en el desierto oscuro\r\nfui de Cristo en pos,\r\nEl placer común tendremos\r\nen la gloria allí,\r\nYo al estar en su presencia,\r\ny El al verme a mí.",
    },
    {
      ID: "170",
      Titulo: "Es nuestra vida cual vapora",
      Letra:
        "Es nuestra vida cual vapora\r\nque, navegando sin timón,\r\ncontra las olas de terror\r\ncamina a eterna perdición.\r\nSobre la mar que tan feroz\r\nagítase con gran pavor,\r\nen tonos claros una voz\r\nestá clamando con amor.\r\n\r\nCoro:\r\nSocorro hay y salvación\r\nde la tormenta y tempestad,\r\npues es Jesús por su pasión\r\ncamino, vida, luz, verdad.\r\n\r\nEl náufrago en su gran temor,\r\nla noche acercándose,\r\ndesesperado con terror\r\nel bote salvavidas ve.\r\nCon rapidez camina ya,\r\na bordo está el Salvador\r\ncon brazos fuertes a salvar,\r\n-del mar y viento es Señor-.\r\n\r\nSe oye un grito: – “¡Sálvame!\r\nPerezco en aguas del terror;\r\nseguro me refugiaré\r\nen la ternura de tu amor.\r\nEl ancla mía fija está,\r\nmi Salvador es mi sostén;\r\nEl cable firme quedará\r\nen toda furia del vaivén”.",
    },
    {
      ID: "171",
      Titulo: "Escudriña mi corazón",
      Letra:
        "Escudriña mi corazón,\r\na Ti me consagro, Jesús,\r\nConcédeme un santo fervor,\r\nPues mi alma desea,\r\npues mi alma desea, desea tu luz.\r\n\r\nMe postro a tus pies, ¡oh Señor!\r\nEl mundo nada es para mí,\r\n¿Qué vale su gloria o placer?\r\nHallé mi tesoro, hallé mi tesoro,\r\ntesoro en Ti.\r\n\r\nConfiado me entrego a Ti,\r\n¡oh, limpia Tú mi corazón!\r\nTransfórmalo, mi Salvador,\r\nTú sólo lo puedes,\r\nTú sólo lo puedes, Potente Señor.\r\n\r\nSeñor, recibí tu perdón,\r\ntu gozo y tu paz por la fe,\r\nContigo soy ya vencedor,\r\n¡Aleluya al Señor! ¡Aleluya al Señor!\r\nA Cristo el Señor.",
    },
    {
      ID: "172",
      Titulo: "Estad por Cristo firmes",
      Letra:
        "¡Estad por Cristo firmes!\r\nSoldados de la cruz,\r\nAlzad hoy la bandera\r\nen nombre de Jesús.\r\nEs vuestra la victoria\r\ncon El por capitán.\r\nPor El serán vencidas\r\nlas huestes de Satán.\r\n\r\nCoro:\r\n¡Estaos firmes, soldados de la cruz!\r\nAlzad hoy la bandera en nombre,\r\nen nombre de Jesús.\r\n\r\n¡Estad por Cristo firmes!\r\nHoy llama a la lid,\r\nCon El pues a la lucha,\r\nsoldados todos id;\r\nProbad que ya sois hombres\r\nluchando contra el mal,\r\n¿Es fuerte el enemigo?\r\nPues Cristo es sin igual.\r\n\r\n¡Estad por Cristo firmes!\r\nLas fuerzas son de El,\r\nEl brazo de los hombres\r\njamás seraos fiel,\r\nVestíos la armadura,\r\nvelad en oración,\r\nDeberes y peligros,\r\ndemandan más tesón.\r\n\r\n¡Estad por Cristo firmes!\r\nBien poco durará\r\nLa lucha de batalla,\r\nvictoria viene ya.\r\nY a aquél que al fin venciere\r\ncorona se dará,\r\nel con el Rey de gloria\r\npor siempre reinará.",
    },
    {
      ID: "173",
      Titulo: "Firmes y adelante",
      Letra:
        "Firmes y adelante, huestes de la fe,\r\nSin temor alguno, que Jesús nos ve;\r\nJefe soberano, Cristo al frente va,\r\nY la regia enseña tremolando está.\r\n\r\nCoro:\r\nFirmes y adelante, huestes de la fe,\r\nSin temor alguno que Jesús nos ve.\r\n\r\nMuévese potente la iglesia de Dios,\r\nDe los ya gloriosos marchamos en pos;\r\nSomos sólo un cuerpo, y uno es el Señor,\r\nUna la esperanza y uno nuestro amor.\r\n\r\nTronos y coronas pueden perecer,\r\nDe Jesús la iglesia constante ha de ser;\r\nNada en contra suya prevalecerá,\r\nPorque la promesa nunca faltará.",
    },
    {
      ID: "174",
      Titulo: "Gozáos en el Señor",
      Letra:
        "Gozáos en el Señor, que todo bien os da, pues El por vosotros está,\r\nRedimido por su sangre ¿de qué tenéis temor? siendo Jesús el Redentor.\r\n\r\nCoro:\r\nSi Dios es por nosotros,\r\nsi Dios es por nosotros,\r\nSi Dios es por nosotros,\r\n¿quién será en contra?\r\n¿Quién? ¿quién? ¿quién?,\r\n¿quién será en contra de nosotros?\r\n\r\nSé fuerte en el Señor, ceñido de poder, sin El nada puedes hacer,\r\nAunque vengan tentaciones, sé firme para el bien, y Cristo te será el sostén.\r\n\r\nConfía en el Señor, que su promesa es fiel, constante y segura cual El,\r\nPues así lo ha dicho Dios “aún la tierra pasará, más mi palabra quedará”.\r\n\r\nEstad en el Señor, gozaos en su bondad,\r\nEn Él solo hay seguridad;\r\nde su mano arrebatar, al que en él confía, nunca jamás permitirá.",
    },
    {
      ID: "175",
      Titulo: "Gloria sin par",
      Letra:
        "Gozo tenemos por Cristo Jesús,\r\nfelicidad mediante su cruz,\r\nPuras delicias andando en la luz,\r\ny gozaremos de gloria sin par.\r\n\r\nCoro:\r\nGloria sin par con el Señor,\r\ngloria sin par por su favor,\r\nVamos muy pronto al célico hogar,\r\ndo gozaremos de gloria sin par.\r\n\r\nGracia gozamos y santo favor,\r\nmisericordia de nuestro Señor,\r\nPaz disfrutamos por su grande amor,\r\ny gozaremos de gloria sin par.\r\n\r\nGloria será nuestro Salvador ver,\r\ngloria con El siempre permanecer,\r\nGloria eternal y constante placer,\r\nsí, gozaremos de gloria sin par.",
    },
    {
      ID: "176",
      Titulo: "Grato es decir la historia",
      Letra:
        "Grato es decir la historia\r\ndel celestial favor,\r\nDe Cristo y de su gloria,\r\nde Cristo y de su amor;\r\nMe agrada referirla,\r\npues sé que es la verdad,\r\nY nada satisface\r\ncual ella mi ansiedad.\r\n\r\nCoro:\r\n¡Qué bella es esa historia!\r\nMi tema allá en la gloria,\r\nSerá la antigua historia\r\nde Cristo y de su amor.\r\n\r\nGrato es decir la historia,\r\nmás útil al mortal,\r\nQue en gloria y portentos\r\nno reconoce igual,\r\nMe agrada referirla,\r\npues me hizo mucho bien,\r\nPor eso a ti deseo\r\ndecírtela también.\r\nGrato es decir la historia,\r\nque antigua sin vejez,\r\nParece al repetirla\r\nmás dulce cada vez;\r\nMe agrada referirla,\r\npues hay quién nunca oyó\r\nQue para hacerlo salvo,\r\nel buen Pastor murió.\r\n\r\nGrato es decir la historia,\r\nel que la sabe ya,\r\nParece que de oírla\r\nsediento aún está,\r\nY cuando el nuevo canto\r\nen gloria cantaré,\r\nSerá la antigua historia\r\nque en vida tanto amé.",
    },
    {
      ID: "177",
      Titulo: "Hay un amigo celestial",
      Letra:
        "Hay un amigo celestial,\r\nmejor que todo terrenal,\r\nDe Dios es Hijo y a la vez,\r\nes mi Señor, sí, mío es.\r\n\r\nCoro:\r\nSí, mío es, amor me da,\r\nconmigo vive, cerca está,\r\nEn El encuentro cantos mil,\r\ny bien lo sé que mío es El.\r\n\r\nSí, mío es, por mí murió,\r\nEl del pecado me libró,\r\nY hoy sentándome a sus pies,\r\ncon gozo digo: “mío es”.\r\n\r\nY cuando en el cielo esté,\r\nsu gloria toda yo veré,\r\nY como nunca ya después,\r\npodré cantar que mío es.",
    },
    {
      ID: "178",
      Titulo: "Jehová es mi pastor",
      Letra:
        "Jehová es mi pastor,\r\nme apacienta con amor,\r\nEn sus pastos delicados paceré;\r\nDescansando sin temor\r\nal abrigo del Señor,\r\nDe las aguas de reposo beberé.\r\n\r\nCoro:\r\nEl Señor me pastorea,\r\nnada aquí me faltará;\r\nJunto a El caminaré,\r\nen su brazo confiaré,\r\nNada del amor de Dios me apartará.\r\n\r\nMi pastor me guardará,\r\nsiempre me confortará,\r\nPor las sendas de justicia me guiará;\r\nEn el tiempo de dolor\r\nme será consolador,\r\nEn mi corazón su paz infundirá.\r\n\r\n¡Oh, cuán fiel es mi Pastor!\r\nTan constante es en su amor,\r\nQue mi copa rebosando siempre está;\r\nCuando en valle oscuro esté,\r\nmal ninguno temeré,\r\nA la casa de mi Dios iré a morar.",
    },
    {
      ID: "179",
      Titulo: "Jerusalén celeste",
      Letra:
        "¡Jerusalén celeste!\r\nVisión de paz dichosa,\r\nde Cristo santa esposa,\r\nradiante de esplendor.\r\nSu fábrica es divina,\r\nson vivos sus sillares,\r\ny de ángeles millares\r\nla ciñen en rededor.\r\n\r\nCiudad del Rey eterno,\r\nde perlas son sus puertas\r\ncontinuamente abiertas\r\nal mísero mortal;\r\nY en su recinto moran\r\nlos que por fe se elevan\r\ny el sello augusto llevan\r\ndel Verbo celestial.\r\n\r\nFelices moradores\r\nallí perenne canto\r\nprofieren al Dios Santo\r\nque de ellos se apiadó;\r\nY honor y gloria entonan\r\nal inclito Cordero,\r\nque amante en el madero\r\npor ellos se ofreció.\r\n\r\nAl mismo Cristo amamos,\r\ny al mismo Dios servimos\r\nlos que por fe vivimos\r\nansiando allí volar.\r\nY pronto gozaremos,\r\npasando sus umbrales,\r\nlas dichas eternales\r\ndel suspirado hogar.",
    },
    {
      ID: "180",
      Titulo: "Jesús veraz amigo",
      Letra:
        "Jesús, veraz amigo,\r\ncontigo salvo estoy,\r\nSeguro del peligro\r\npor siempre igual que hoy;\r\nNo quiero los placeres\r\nque el necio mundo da,\r\nTe quiero y también quieres\r\ncontigo verme allá.\r\n\r\n¿Dónde es que yo reposo\r\nsino en tu grande amor?,\r\nNadie es tan bondadoso\r\ncual es mi Salvador;\r\nMis sendas esclareces,\r\nguiando aquí mis pies,\r\nDe mí te compadeces,\r\npues Tú mis cuitas ves.\r\n\r\n¿Por qué sentir tristeza?\r\nTu nombre celestial\r\nSerá mi fortaleza\r\ny mi poder cabal.\r\nTomé la cruz y sigo a Ti,\r\nmi Redentor,\r\nY siempre irán conmigo\r\ntu gracia y tu favor.\r\n\r\nEn toda mi tristeza,\r\nen toda mi aflicción,\r\nJesús es mi firmeza,\r\nEl es mi salvación;\r\nNo temo del peligro,\r\nme guarda mi Señor,\r\n¡Querido y buen amigo,\r\nJesús mi Salvador!",
    },
    {
      ID: "181",
      Titulo: "La historia de la redención",
      Letra:
        "La historia de la redención,\r\nla voz del evangelio,\r\nLlevad a toda la nación,\r\na cada aldea y pueblo.\r\nEl nacimiento de Jesús,\r\nsu vida en este mundo,\r\nSu muerte amarga en una cruz,\r\nla gloria de su triunfo.\r\n\r\nEl evangelio de Jesús,\r\nproclama paz al hombre,\r\nlas buenas nuevas de salud\r\nse anuncian por Su nombre,\r\nLa noche eterna de dolor\r\nal mundo está llegando,\r\nLa iglesia espera a su Señor,\r\nla noche va pasando.\r\n\r\nSostiene dura lucha aquí,\r\nla iglesia militante,\r\nY sirve a Cristo siempre allí,\r\nla iglesia hoy triunfante.\r\nEn derredor del trono están,\r\nsus palmas tremolando,\r\nSus arpas de oro sin cesar,\r\nloores tributando.\r\n\r\nJesús nos dice: ¡He aquí,\r\nYo vengo muy en breve!\r\n“Amén” decimos, “sea así,\r\ntu iglesia anhela verte”.\r\nMas, cuando venga,\r\ntemblarán impíos y pecadores\r\ny todos le confesarán\r\nSeñor de los señores.",
    },
    {
      ID: "182",
      Titulo: "La noche se pasa",
      Letra:
        "\r\nLa noche se pasa, las sombras se van;\r\nla “Estrella del Alba” no puede tardar.\r\nEl día aguardamos con férvido afán,\r\npor ver su llegada bueno es madrugar.\r\n\r\nAún duerme este mundo, no siente ni ve,\r\ndispuesto en la sombra de noche a quedar;\r\nMas si él “la venida gloriosa” no cree,\r\nal hijo del día bueno es madrugar.\r\n\r\n¡Qué suerte dichosa por tal porvenir,\r\nen luz refulgente su faz contemplar!\r\n¡Oh, qué dignidad su semblanza adquirir,\r\nconviene por tal bendición madrugar!\r\n\r\nMomentos dichosos, Jesús, para ti,\r\ntu esposa querida a la gloria llevar.\r\nSu consumación efectuando así:\r\n¡por tal alegría bueno es madrugar!",
    },
    {
      ID: "183",
      Titulo: "La noche termina",
      Letra:
        "La noche termina y el día amanece,\r\nDel alba brillante la luz aparece,\r\nDe Cristo la vuelta gloriosa esperamos,\r\nDescendiendo en las nubes de luz.\r\n\r\nCoro:\r\nPronto viene Jesús,\r\nrodeado de gloria y de luz,\r\n¡Aleluya, Cristo vuelve! ¡Aleluya, amén! ¡Aleluya, amén!\r\n\r\nCon gozo su rostro divino veremos,\r\nY luego a su imagen cambiados seremos,\r\nCon cuerpo glorioso veloz subiremos,\r\nA verle en las nubes de luz.\r\n\r\nSu magnificencia y gloria veremos,\r\nEl mundo, el pecado hermanos dejemos,\r\nAsí con gran gozo le recibiremos,\r\nCuando Cristo nos viene a llevar.",
    },
    {
      ID: "184",
      Titulo: "La obra de Jesús",
      Letra:
        "La obra de Jesús\r\nrevela santo amor,\r\ny da justicia, paz y luz\r\nal triste pecador.\r\n\r\nJesús ya terminó\r\nla grande redención,\r\nCon tierno amor Él derramó\r\nsu gracia y perdón.\r\n\r\nTeniendo en él salud,\r\nbenditos somos ya,\r\nansiando con solicitud\r\nel cielo do Él está.",
    },
    {
      ID: "185",
      Titulo: "La palabra del Señor",
      Letra:
        "La palabra del Señor, predicad, predicad,\r\nCon anhelo y oración, predicad.\r\nAnte el mundo burlador,\r\nsed testigos de su amor,\r\nEl poder del Salvador, predicad.\r\n\r\nEl ejemplo del Señor, imitad, imitad,\r\nSu humildad y tierno amor, imitad.\r\nSu constancia en la oración,\r\nsu paciencia en la aflicción,\r\nSu bondad y compasión, imitad.\r\n\r\nLa venida del Señor, esperad, esperad,\r\nEl vendrá, no tardará, esperad.\r\nComo siervos del Señor, trabajad\r\ncon celo y fe,\r\nSi sembráis recogeréis, esperad.",
    },
    {
      ID: "186",
      Titulo: "La palabra hoy sembrada",
      Letra:
        "La palabra hoy sembrada,\r\nhazla Salvador nacer,\r\nPara darle crecimiento\r\nsólo tienes Tú poder,\r\nRicos frutos Tú nos puedes conceder,\r\nRicos frutos Tú nos puedes conceder.\r\n\r\n¡Oh, prepara muchas almas\r\nal servicio del Señor!\r\nY salvadlas por tu gracia,\r\nbondadoso Salvador\r\nTu iglesia mostrará tu grande amor,\r\nTu iglesia mostrará tu grande amor.",
    },
    {
      ID: "187",
      Titulo: "Las ovejas celebramos",
      Letra:
        "Las ovejas celebramos\r\ndel Pastor el grande amor;\r\nsólo en ti nos reposamos,\r\noh Jesús, Tú, buen Pastor.\r\n\r\nComo ovejas fluctuantes,\r\nanduvimos sin tu amor;\r\nde los pastos abundantes\r\nalejadas, buen Pastor.\r\n\r\nPor los montes, afanado,\r\nnos buscaste con amor;\r\npara ser de tu ganado\r\nnos tomaste, buen Pastor.\r\n\r\nTú nos das el pasto sano\r\ny nos guardas con amor,\r\nlas ovejas de tu mano\r\nnada temen, buen Pastor.\r\n\r\nSólo en pos de tus pisadas,\r\nconducidas por tu amor,\r\nvamos hacia las moradas\r\ndonde estás, oh buen Pastor.",
    },
    {
      ID: "188",
      Titulo: "Lejos de mi Padre Dios",
      Letra:
        "Lejos de mi Padre Dios,\r\nfui por Cristo hallado;\r\nPor su gracia y por su amor,\r\nfui por El salvado.\r\n\r\nCoro:\r\nEs Jesús mi Señor, mi alegría eterna;\r\nEl me amó y me salvó\r\nen su gracia tierna.\r\n\r\nEs Jesús mi Salvador,\r\nfiel en su constancia;\r\nToda mi necesidad\r\nsuple su abundancia.\r\n\r\nCerca de mi buen Pastor,\r\nvivo cada día;\r\nToda gracia en su Señor,\r\nhalla el alma mía.\r\n\r\nGuárdame Señor Jesús,\r\npara que no caiga;\r\nCual sarmiento de la vid,\r\nvida de Ti traiga.",
    },
    {
      ID: "189",
      Titulo: "Luz en la noche",
      Letra:
        "Luz en la noche, canción en la tristeza,\r\nla fe nos da bendita esperanza;\r\nVivimos cada día esperando la mañana,\r\nporque viene a llevarnos el Señor.\r\n\r\nCoro:\r\n¡Qué bendita esperanza!\r\n¡Jesús nos viene a llevar!\r\nGloria, gloria sea a él,\r\nporque siempre nos es fiel.\r\nVen pronto, oh nuestro Salvador.\r\n\r\nAstro brillante y faro que nos guía,\r\nsegura ancla que sufre la tormenta;\r\nrefugio del alma, constante esperanza,\r\nque vendrá pronto nuestro Salvador.\r\n\r\nOrden de Cristo, que suena\r\ncual trompeta,\r\nel corazón anima, al mal vencemos:\r\n“Velad y siempre orad, porque\r\npronto volveré”.\r\nEsperamos a nuestro Redentor.\r\n\r\nLa muerte vencida, el cuerpo\r\ntransformado,\r\nhecho a su imagen, como él seremos.\r\nNos elevará a la morada celestial,\r\ncuando venga el bendito Salvador.",
    },
    {
      ID: "190",
      Titulo: "Lluvias de bendición",
      Letra:
        "Lluvias de bendición grandes,\r\nes la promesa de amor,\r\nHoy te pedimos las mandes\r\nde tu presencia Señor.\r\n\r\nCoro:\r\nLas lluvias grandes,\r\nmándanos, oh Salvador,\r\nHaz que sintamos de nuevo,\r\nmás de tu gracia y tu amor.\r\n\r\nLluvias de bendición grandes,\r\n¡cuánta falta hacen aquí!\r\nLas gotas ya recibimos,\r\nlluvias pedimos a Ti.\r\n\r\nAquí rogándote estamos,\r\noye Tú nuestra oración,\r\nToda la gloria te damos,\r\na Ti por tu bendición.\r\n\r\nYa vendrán las lluvias grandes,\r\nTú las darás sin tardar,\r\nMientras aquí esperamos,\r\nhaz que las veamos llegar.",
    },
    {
      ID: "191",
      Titulo: "Más santidad dame",
      Letra:
        "Más santidad dame, más odio al mal,\r\nMás calma en las penas, más alto ideal;\r\nMás fe en mi Maestro, más consagración,\r\nMás celo en servirle, más grata oración.\r\n\r\nMás prudente hazme, más sabio en El,\r\nMás firme en su causa, más fuerte y más fiel;\r\nMás recto en la vida, más triste al pecar,\r\nMás humilde hijo, más pronto en amar.\r\n\r\nMás pureza dame, más fuerza en Jesús,\r\nMás de su dominio, más paz por la cruz;\r\nMás rica esperanza, más obras aquí,\r\nMás ansia del cielo, más gozo de allí.",
    },
    {
      ID: "192",
      Titulo: "Mi mano ten Señor",
      Letra:
        "Mi mano ten Señor, yo flaco y débil,\r\nSin Ti no puedo riesgos afrontar,\r\nTenla, Señor, mi vida el gozo llene,\r\nal verme libre así de todo azar\r\n\r\nMi mano ten, la vida es tenebrosa,\r\nSi no la alumbra tu radiante faz;\r\nPor fe yo alcanzo a percibir su gloria,\r\n¡Cuán grande gozo! ¡Cuán profunda paz!\r\n\r\nMi mano ten, Señor, y a mis oídos,\r\nLleguen palabras de divino amor;\r\nAlienta así mi alma atribulada,\r\nPara seguirte con un nuevo ardor.\r\n\r\nMi mano ten, el enemigo fuerte,\r\nNo cesa cada paso en disputar;\r\nMas nada puede si Tú estás conmigo,\r\nPorque en tu fuerza yo he de triunfar.\r\n\r\nMi mano ten, se extienden ya las sombras,\r\nLlega la noche, el día ya se va,\r\nContigo quiero andar, que Tú ilumines\r\nLos pasos que en el mundo tu hijo da.",
    },
    {
      ID: "193",
      Titulo: "Mi Redentor, el Rey de gloria",
      Letra:
        "Mi Redentor, el Rey de gloria,\r\nQue vive yo seguro estoy;\r\nEl da coronas de victoria,\r\nA recibir la mía voy.\r\n\r\nCoro:\r\nQue permanezca no pidáis\r\nEntre el bullicio y el vaivén;\r\nEl mundo alegre hoy dejara,\r\nAún cuando fuese algún Edén;\r\nLa cita nada mas aguardo,\r\nQue el Rey me diga: “Hijo, ven”.\r\n\r\nEn mi Señor Jesús confío,\r\nSu sangre clama a mi favor;\r\nEs dueño El de mi albedrío,\r\nEstar con El es lo mejor.\r\n\r\nConsuélome en su larga ausencia,\r\nPensando “pronto volverá”;\r\nEntonces su gloriosa herencia,\r\nA cada fiel Jesús dará.",
    },
    {
      ID: "194",
      Titulo: "Mirad el gran amor",
      Letra:
        "Mirad el gran amor, ¡aleluya! ¡aleluya!\r\nDe nuestro Salvador, ¡aleluya! ¡aleluya!\r\nSu trono El dejó, al mundo descendió,\r\nSu sangre derramó por salvar al pecador.\r\n\r\nCoro:\r\n¡Aleluya! ¡aleluya! demos gloria a Jesús,\r\n¡Aleluya! ¡aleluya! somos salvos\r\npor su cruz.\r\n\r\nLuchemos con valor, ¡aleluya! ¡aleluya!\r\nEn nombre del Señor, ¡aleluya! ¡aleluya!\r\nEl diablo rugirá, el mundo burlará,\r\nPero el Salvador será con nosotros hasta el fin.\r\n\r\nCoro:\r\n¡Aleluya! ¡aleluya! confiemos en Jesús,\r\n¡Aleluya! ¡aleluya! venceremos\r\npor su cruz.\r\n\r\n¡Muy pronto volverá! ¡aleluya! ¡aleluya!\r\n¡Qué gozo nos dará! ¡aleluya! ¡aleluya!\r\n¡Gloriosa reunión, eterna bendición,\r\ny grata comunión, para siempre con Jesús!\r\n\r\nCoro:\r\n¡Aleluya! ¡aleluya! para siempre con Jesús,\r\n¡Aleluya! ¡aleluya! redimidos\r\npor su cruz.",
    },
    {
      ID: "195",
      Titulo: "Muy cercano está el día",
      Letra:
        "Muy cercano está el día,\r\ncuando volverá Jesús,\r\nCon la majestad y gloria\r\nque le dio su Padre Dios;\r\nDe sus santos rodeado,\r\nen la nube bajará,\r\nDe Cristo será el reinado,\r\ny el pecado quitará.\r\n\r\nCoro:\r\n“Ven, Señor Jesús, ven pronto”\r\nclaman todos con ardor,\r\n“He aquí Yo vengo presto”,\r\npresto dice el Salvador.\r\n\r\nTu venida Jesucristo,\r\nlibrará la humanidad,\r\nDe Satán, autor inicuo,\r\nde su gran calamidad;\r\nCesarán todos los males\r\npor el reino de Jesús,\r\n¡Alegraos, oh mortales!\r\nVed el triunfo de su cruz.\r\n\r\n¡Cuánto anhelan y desean\r\nla venida de Jesús,\r\nLos creyentes ya salvados\r\npor la obra de su cruz!\r\n“Ven y siéntate conmigo\r\nen mi trono el Rey dirá,\r\n“Has sufrido y has vencido”\r\nde mi gloria goza ya.",
    },
    {
      ID: "196",
      Titulo: "No importa donde quiera que esté",
      Letra:
        "No importa donde yo esté,\r\nJesús conmigo siempre está,\r\nLo ha prometido y tengo fe,\r\nque su promesa cumplirá.\r\n\r\nCoro:\r\nDo Cristo está el cielo es,\r\ny Cristo está en mi corazón,\r\nMorando en mí derrama paz\r\ny toda rica bendición.\r\n\r\nEs mi deber andar con El,\r\norando para no caer,\r\nVelando contra el mundo infiel,\r\nconfiando siempre en su poder.\r\n\r\nYo sé que flaco y débil soy,\r\ny sé que es fuerte Satanás,\r\nMás poderoso es mi Señor,\r\nme guardará de tropezar.",
    },
    {
      ID: "197",
      Titulo: "No soy mío Jesucristo",
      Letra:
        "No soy mío Jesucristo,\r\nTú me redimiste a mí,\r\nMe compraste con tu sangre,\r\npertenezco ahora a Ti.\r\n\r\nCoro:\r\nNo soy mío, ¡oh no!\r\nNo soy mío, ¡oh no! Pertenezco a Jesús,\r\nTodo a mi Señor entrego,\r\npues por mí murió en la cruz.\r\n\r\nNo soy mío, yo confío\r\nmi alma a Cristo el Salvador,\r\nY mi vida a Ti he dado\r\nconstreñido por tu amor.\r\n\r\nNo soy mío, mis talentos\r\ntraigo a Ti, Señor Jesús,\r\nPara siempre ser usados\r\na la gloria de mi Dios.\r\n\r\nNo soy mío, Tú me aceptas\r\npor tu gracia, Salvador,\r\nY contigo allá en la gloria,\r\ngozaré tu eterno amor.",
    },
    {
      ID: "198",
      Titulo: "No te dé temor",
      Letra:
        "No te dé temor hablar por Cristo,\r\nhaz que brille en ti su luz,\r\nsiempre a quien te redimió confiesa,\r\ntodo debes a Jesús.\r\n\r\nCoro:\r\nNo te dé temor, no te dé temor,\r\nnunca, nunca, nunca;\r\nEs tu Salvador amante,\r\nnunca pues te dé temor.\r\n\r\nNo te dé temor hacer por Cristo\r\ncuanto de tu parte está,\r\nObra con amor, fe y constancia,\r\ntus trabajos premiará.\r\n\r\nNo te dé temor sufrir por Cristo\r\nlos reproches o el dolor,\r\nSufre con amor sus pruebas todas,\r\ncual sufrió tu Salvador.\r\n\r\nNo te dé temor vivir por Cristo\r\nesa vida que te da,\r\nSi en tu mucho afán en El confiares,\r\nde todo bien te saciará.\r\n\r\nNo te dé temor morir por Cristo,\r\nvida, luz, verdad es él,\r\nEl te llevará con su ternura,\r\na su célico vergel.",
    },
    {
      ID: "199",
      Titulo: "Obreros somos del Señor",
      Letra:
        "Obreros somos del Señor,\r\nllamados por su grande amor,\r\nSemilla vamos a sembrar,\r\nque el Salvador ha de regar.\r\nEl mundo entero el campo es,\r\ny el tiempo va con rapidez,\r\nY Satanás mal sembrador,\r\ncizaña siembra sin temor.\r\n\r\nCoro:\r\nAl trabajo vamos hoy,\r\npues Jesús nos llama,\r\nLluvias de gran bendición\r\nel Señor derrama;\r\nLa semilla crecerá, El aumento nos dará,\r\nVamos, vamos, vamos a obrar\r\n\r\nLos sembradores del Señor,\r\nsembremos con ferviente ardor,\r\nSemilla de la incorrupción\r\nque brote para salvación.\r\nGavillas tan preciosas son\r\nlos hijos de la redención,\r\nQue el Salvador Jesús compró,\r\ncuando en la cruz por nos murió.\r\n\r\nJesús muy pronto bajará\r\ny a la gloria llevará,\r\nLa iglesia que es su galardón,\r\ntrofeo de la redención.\r\nEl fruto de su obra aquí,\r\nEl gozará en la gloria allí,\r\nEl triunfo de su majestad,\r\nsu gozo por la eternidad.",
    },
    {
      ID: "200",
      Titulo: "¡Oh!, háblame Señor",
      Letra:
        "¡Oh!, háblame Señor y hablaré\r\nEn ecos vivos de tu dulce voz,\r\nY como hallado tuyo buscaré\r\nA los perdidos para Dios.\r\n\r\n¡Oh!, guíame Señor y guiaré\r\nAl pobre errado que tan lejos va,\r\nDame alimento y yo también daré\r\nAl pobre hambriento tu maná.\r\n\r\nEnséñame Señor y enseñaré,\r\nSiempre las cosas tuyas en sazón,\r\nDame palabras y yo alcanzaré\r\nAl que es de triste corazón.\r\n\r\n¡Oh! Lléneme Señor tu plenitud,\r\nHaz que rebose tu favor en mí;\r\nQue con fervor declare la virtud,\r\nBondad y amor que encuentro en Ti.\r\n\r\nHaz que te sirva, oh Cristo mi Señor\r\nEn lo que sea tu santa voluntad;\r\nQue tu servicio tenga por honor,\r\nAhora y en la eternidad.",
    },
    {
      ID: "201",
      Titulo: "¡Oh! ¡qué amigo nos es Cristo!",
      Letra:
        "¡Oh! ¡qué amigo nos es Cristo!,\r\nNuestras culpas El llevó,\r\nY nos manda que llevemos\r\nTodo a Dios en oración.\r\nsomos tristes agobiados\r\nY cargados de aflicción,\r\nEsto es porque no le llevamos\r\nTodo a Dios en oración.\r\n\r\nSi estás débil y oprimido\r\nDe cuidados y temor,\r\nA Jesús, refugio eterno\r\nDile todo en oración.\r\n¿Te desprecian tus amigos?\r\nCuéntale en oración,\r\nEn sus brazos de amor tierno,\r\nPaz tendrá tu corazón.\r\n\r\nJesucristo es nuestro amigo,\r\nDe esto pruebas nos mostró,\r\nPues para llevar consigo\r\nAl culpable se humanó.\r\nEl castigo de su pueblo\r\nEn su muerte El sufrió,\r\nCristo es el amigo eterno,\r\nSólo en El confío yo.",
    },
    {
      ID: "202",
      Titulo: "Oí la voz de amor",
      Letra:
        "Oí la voz de amor,\r\nla sangre contemplé;\r\nmiré en la gloria a mi Señor\r\ny paz con Dios hallé.\r\n\r\nMi paz es eternal;\r\nno más seguro está\r\nel trono estable, celestial,\r\ndel santo Jehová.\r\n\r\nFluctúa, sí, mi amor,\r\nmi gozo viene y va.\r\nLa paz con Dios, mi Salvador,\r\njamás se mudará.\r\n\r\nVarío yo, mas Él,\r\nque en mi lugar murió,\r\nes inmutable, y siempre fiel\r\na lo que prometió.\r\n\r\nLa tumba abierta ya\r\ndeshace mi pavor;\r\ny mi confianza entera está\r\nen Cristo, mi Señor.",
    },
    {
      ID: "203",
      Titulo: "Oíd, oíd, lo que nos manda",
      Letra:
        "Oíd, oíd, lo que nos manda el Salvador,\r\n“Marchad, marchad, y proclamad mi amor,\r\nPorque he aquí Yo con vosotros estaré,\r\nLos días todos hasta el fin os guardaré”.\r\n\r\nCoro:\r\nId, id por el mundo,\r\nId, id y predicad el evangelio;\r\nId, id, va adelante\r\nEl Todopoderoso Salvador.\r\n¡Gloria, gloria, aleluya a Jesús! (bis)\r\nNuestras almas El salvó,\r\nNuestras manchas El lavó,\r\nProclamemos pues a todos su amor.\r\n\r\nPensad, pensad, la condición del pecador,\r\n¡Qué triste es!, ¡qué lleno de dolor!\r\nSin luz, sin paz, camina a la eternidad,\r\nY no conoce el peligro en que él está.\r\n\r\nSalid, salid, embajadores del Señor,\r\nBuscad, buscad al pobre pecador,\r\nAprovechad el tiempo que el Señor nos da,\r\nPues pronto el día de salud se acabará.\r\n\r\nMira, mirad, la hora presto llegará,\r\nJesús vendrá su reino a disfrutar:\r\nDe mar a mar habrá prosperidad y paz;\r\nSus alabanzas cantará la humanidad.",
    },
    {
      ID: "204",
      Titulo: "¡Pasad, pasad, oh Maestro",
      Letra:
        "¡Pasad, pasad, oh Maestro, el umbral!\r\nLa voz oí que aliviará mi mal;\r\npúsose el sol, ruge la tempestad.\r\n¡Os necesito, Salvador, entrad!\r\n\r\nMal preparado estoy, Jesús, Señor,\r\npor la visita del divino amor;\r\ny nada tengo con que agasajar\r\na quien se digna en mi casita estar.\r\n\r\nHuésped eterno, aún ahora entrad,\r\nos lo suplica mi necesidad;\r\nVuestra presencia todo cambiará,\r\nentrando vos la confusión huirá.\r\n\r\nNo intento ahora preparar lugar\r\ndo el Rey de gloria pueda en mí posar;\r\nTodo es tan pobre, bajo, ruin aquí,\r\n¡peor aun hacer que espere allí!\r\n\r\n¡Venid! — no para hallar en mí, Señor,\r\ndigno lugar que more vuestro amor,\r\nmas a quitar mi noche, miedo y mal\r\ncon vuestra luz y gloria celestial.",
    },
    {
      ID: "205",
      Titulo: "Pastoréanos Señor potente",
      Letra:
        "Pastoréanos Señor potente,\r\nCuida, buen Pastor, tu grey,\r\nTu sustento placentero dale,\r\nTu redil, tu suave ley.\r\nAlta ciencia, providencia,\r\nTuyas para nuestro bien;\r\nBendecido, Rey ungido,\r\nA santificarnos ven.\r\n\r\nTu misión divina es a los pobres\r\nDar salud y santidad,\r\nA pesar de ser tan pecadores,\r\nNo nos has de desechar.\r\nComunicas dotes ricas\r\nAl que implora tu perdón,\r\nSalvadora luz que mora,\r\nEn el nuevo corazón.",
    },
    {
      ID: "206",
      Titulo: "¡Paz, dulce paz!",
      Letra:
        "¡Paz, dulce paz! que brota de la cruz.\r\nNos habla paz la sangre de Jesús.\r\n\r\n¡Paz, dulce paz! hacer la voluntad\r\nde Cristo en nuestra vida da la paz.\r\n\r\n¡Paz, dulce paz! cargados de dolor;\r\ndescanso y paz tenéis en el Señor.\r\n\r\n¡Paz, dulce paz! en la separación,\r\nla paz de Cristo da consolación.\r\n\r\n¡Paz, dulce paz! en cuanto al porvenir,\r\nJesús nos guía y guarda hasta el morir.\r\n\r\n¡Paz, dulce paz! la muerte alrededor;\r\nJesús venció la muerte y su terror.\r\n\r\n¡Paz, dulce paz! no tardará Jesús,\r\ny nos dará celeste paz y luz.",
    },
    {
      ID: "207",
      Titulo: "Por la gracia del Señor",
      Letra:
        "Por la gracia del Señor\r\ngózome en su gran amor;\r\nel Espíritu en mí\r\ntestifica que es así.\r\n¡Oh, qué paz, perfecta paz!\r\nno me perderé jamás;\r\nPues por su infinito amor\r\nsuyo soy y mío es Él. (Bis)\r\n\r\nA la luz de tal amor,\r\nlo que veo en derredor\r\ntiene hermosuras mil\r\nque sin Cristo nunca ví.\r\nCanta el pájaro mejor,\r\nmás brillante es toda flor,\r\nya que puedo yo decir:\r\n“Suyo soy y mío es Él”. (Bis)\r\n\r\nEn la lucha terrenal\r\nme protegerá del mal,\r\npues su brazo fuerte y fiel\r\nme conserva para él.\r\nEl estar con él aquí\r\nes el cielo para mí.\r\nY muy grato es sentir:\r\n“Suyo soy y mío es Él”. (Bis)\r\n\r\nSoy de él, sí, soy de él\r\npor su amor tan tierno y fiel.\r\nCuando pruebas muchas son,\r\nme conforta el corazón,\r\nLo de aquí se cambiará,\r\nnuestra vida pasará;\r\nmas por la eternidad\r\nsuyo soy y mío es Él . (Bis)",
    },
    {
      ID: "208",
      Titulo: "Precepto es del Señor",
      Letra:
        "Precepto es del Señor,\r\nQue gloria yo le de,\r\nCuidando el alma que me dio,\r\nViviendo por la fe.\r\n\r\nEjemplo debo dar,\r\nMi vocación cumplir,\r\nY mis talentos dedicar,\r\nA Cristo en servir.\r\n\r\nCeloso debo ser,\r\nPues a su vista estoy;\r\nSu rostro llegue así a ver\r\nContento donde voy.\r\n\r\nEn oración velar,\r\nConfiando sólo en El;\r\nSi fuere de olvidar capaz,\r\nPerdido me veré.",
    },
    {
      ID: "209",
      Titulo: "Pronto Jesús de los cielos vendrá",
      Letra:
        "Pronto Jesús de los cielos vendrá,\r\nDulce es pensarlo y gran gozo nos da;\r\nTransformarános su rostro al ver,\r\nesta es la meta al fin del correr.\r\n\r\nCoro:\r\nNos cambiará, nos cambiará,\r\nAl ver de El la gloriosa faz;\r\nNos cambiará, nos cambiará,\r\nAl ver de El la faz.\r\n\r\nLos separados unidos serán,\r\nNo más ausentes de Cristo estarán;\r\nA los que duermen resucitará,\r\nY a su imagen El los cambiará.\r\n\r\nOscuras nubes El disipará,\r\nNoche en día El transformará;\r\nLas tempestades El ha de cambiar,\r\nEn dulce calma, el llanto en cantar.\r\n\r\nEl hará fuerte lo débil al fin,\r\nTodo perfecto que ahora es ruin,\r\nY por tristezas su gozo dará,\r\nConsigo en gloria su iglesia tendrá.",
    },
    {
      ID: "210",
      Titulo: "Que lo sabe todo el Padre",
      Letra:
        "Que lo sabe todo el Padre,\r\nEs mi certitud,\r\nY que en gracia él por mí vela,\r\nCon solicitud.\r\nTodo cuanto Dios permita\r\nObra para bien,\r\nY deseo solamente\r\nResponderle “Amén.”\r\n\r\nBien sé yo que lo futuro\r\nEn su mano está;\r\nCon desvelo permanente\r\nEl me guiará;\r\nAunque en mi camino encuentre,\r\nPenas y dolor,\r\nSiempre tras las fuertes pruebas,\r\nVeo su favor.\r\n\r\nGusto de contarle cuanto\r\nMe sucede aquí,\r\nCierto que su buen cuidado\r\nLega aun a mí,\r\nY después con buen agrado\r\nDe su amor gozar,\r\nGracias le daré por cuanto\r\nEl me quiera dar.\r\n\r\nConfiadamente entonces\r\nPuedo aquí vivir,\r\nSin recelos ni cuidados\r\nPor mi porvenir;\r\nPues mi Padre Dios me asiste\r\nCon divino amor,\r\nSiendo aquel que me sostiene\r\nCristo el Salvador.",
    },
    {
      ID: "211",
      Titulo: "¡Redentor! ¡Oh que belleza!",
      Letra:
        "¡Redentor! ¡Oh, que belleza\r\nEn tal título se ve!\r\nCristo sólo, con certeza,\r\nDigno de llevarlo fue.\r\n¡Redentor! ¡Qué alegría tuyo ser!\r\n\r\nEn miseria sumergido,\r\nDe Satán esclavo fui;\r\nTú escuchaste mi gemido\r\nCuando sin valor me vi.\r\n¡Redentor! Tú me diste libertad.\r\n\r\nCuando a tu celeste gloria\r\nAl final he de llegar,\r\nY con himnos de victoria\r\nTus loores entonar.\r\n¡Redentor!¡Qué alegría celestial!",
    },
    {
      ID: "212",
      Titulo: "Salvo en los fuertes brazos",
      Letra:
        "Salvo en los fuertes brazos\r\nDel tierno Salvador,\r\nDulce reposo tengo\r\nEn su inmutable amor.\r\nVivo bien garantido\r\nContra el poder del mal,\r\nCristo me ha recogido\r\nDel hondo cenagal.\r\n\r\nCoro:\r\nSalvo en los fuertes brazos\r\nDel tierno Salvador,\r\nDulce reposo tengo\r\nEn su inmutable amor.\r\n\r\nEn el desierto triste\r\nPor donde paso aquí,\r\nCon su bondad me guía\r\nBien apoyado así,\r\nEl siente simpatía\r\nEn todo mi dolor,\r\nLo cambia en alegría\r\nCon su sincero amor.\r\n\r\nA mis necesidades\r\nEl cuida de atender,\r\nMis dudas, mis errores,\r\nConsigue esclarecer.\r\nSobre mi oscura vía\r\nLanza celeste luz;\r\nMi protector y guía\r\nSiempre será Jesús.\r\n\r\nDeseo acá servirle\r\nMientras ausente está;\r\nY cuando venga en nubes\r\nEl me recogerá.\r\nDía en el cual su rostro\r\nEn plena luz veré,\r\nY su divina gloria\r\nSin nieblas miraré.",
    },
    {
      ID: "213",
      Titulo: "Seguid a Jesús",
      Letra:
        "Seguid a Jesús, andad en su luz,\r\nSed fieles a Cristo el Señor;\r\nServidle de amor, luchad con valor,\r\nSed fieles a Cristo el Señor.\r\n\r\nCoro:\r\nSed fieles a Cristo el Señor,\r\nSu gracia abundante jamás faltará;\r\nSu brazo potente os defenderá,\r\nSed fieles a Cristo el Señor.\r\n\r\nTentados seréis, conflictos tendréis,\r\nSed fieles a Cristo el Señor;\r\nA vuestro favor está el Salvador,\r\nSed fieles a Cristo el Señor.\r\n\r\nJamás Jehová os ha de faltar,\r\nSed fieles a Cristo el Señor;\r\nOs sustentará, y el triunfo os dará,\r\nSed fieles a Cristo el Señor.",
    },
    {
      ID: "214",
      Titulo: "Señor Jesús, con tu esplendor",
      Letra:
        "Señor Jesús, con tu esplendor benigno\r\nguarda mi pie.\r\nDensa es la noche, áspero el camino,\r\nmi guía sé.\r\nHarto distante de mi hogar estoy;\r\nque al dulce hogar de las alturas voy.\r\n\r\nAmargos tiempos hubo en que\r\ntu gracia no supliqué.\r\nDe mi valor fiando, en la eficacia\r\nno tuve fe.\r\nMas hoy deploro aquella ceguedad;\r\ndame, oh Señor, tu grata claridad.\r\n\r\nGuiándome Tú la noche\r\nes esplendente,\r\ny cruzaré el valle, el monte, el risco\r\ny el torrente\r\ncon firme pie;\r\nhasta que empiece el día a despuntar,\r\ny entre al abrigo de mi dulce hogar.",
    },
    {
      ID: "215",
      Titulo: "Señor Jesús, te ruego",
      Letra:
        "Señor Jesús, te ruego el cuidado\r\nQue nadie sino Tú, darme podrá,\r\nEn vida y muerte está Tú a mi lado;\r\nPor gracia, oh mi Señor, conmigo está.\r\n\r\nCoro:\r\nConmigo está, preciso tu poder\r\nPues Satanás quisiérame vencer,\r\nConmigo está en sombra y clara luz,\r\nEn vida y muerte, ¡oh! conmigo está.\r\n\r\nSi cualquier enemigo me asalta,\r\nSi en mar embravecido el barco va,\r\nSi mi esperanza o mi coraje falta,\r\nPor gracia, oh Salvador, conmigo está.\r\n\r\nCuando el camino mío es deleitoso,\r\nDe Ti, Señor, necesidad habrá;\r\nY cuando es muy oscuro y doloroso,\r\nPor gracia, oh Salvador, conmigo está.\r\n\r\nCuando en el río oscuro de la muerte,\r\nNinguno, sino Tú, me salvará;\r\nSocórreme, Señor, con brazo fuerte,\r\nPor gracia, oh Salvador, conmigo está.",
    },
    {
      ID: "216",
      Titulo: "Señor Jesús, tomaste mi lugar",
      Letra:
        "Señor Jesús, tomaste mi lugar,\r\nCual víctima ligada en el altar;\r\nSu fuego conseguiste Tú apagar,\r\nSeñor, por mí, por mí.\r\n\r\nTu sangre sólo, Cristo es mi virtud,\r\nTu muerte de justicia es mi salud,\r\nPecado hecho a mi similitud,\r\nSeñor, por mí, por mí.\r\n\r\nTal como fuiste, tú eres hoy Señor,\r\nPues inmutable es tu divino amor;\r\nEn gloria vives como Salvador,\r\nSeñor, por mí, por mí.\r\n\r\nConfío en tu probada caridad,\r\nSé mi refugio Tú en la tempestad,\r\nEnséñame a gozar de tu amistad,\r\nSeñor, a mí, a mí.",
    },
    {
      ID: "217",
      Titulo: "Sentimos en el corazón",
      Letra:
        "Sentimos en el corazón\r\nEl gozo de la salvación,\r\nEl gozo del Señor.\r\nConmueve todo nuestro ser,\r\nNos hace el alma enardecer\r\nDe amor a nuestro Dios.\r\n\r\nVenid, hermanos en Jesús,\r\nMiremos juntos a la cruz\r\nDe nuestro Salvador.\r\nAllí su sangre derramó,\r\nAllí la obra consumó\r\nDe nuestra salvación.\r\n\r\nSi aquí sufrimos aflicción,\r\nTendremos pronto la mansión\r\nQue Cristo prometió.\r\nJesús prepara un buen lugar\r\nDo eternamente morará\r\nCon Él su servidor.\r\n\r\nY cuando estemos en la luz\r\nDe la presencia de Jesús,\r\n¡Qué gozo nos será!\r\nLa fuente del divino amor\r\nDe nuestro amado Salvador\r\nJamás se agotará.",
    },
    {
      ID: "218",
      Titulo: "Ser de Dios los hijos",
      Letra:
        "Ser de Dios los hijos caros\r\nEn Jesús sublime don,\r\nEn Jesús nos mira el Padre,\r\nY nos da su bendición.\r\n\r\nCoro:\r\n“Mirad…cuán grande el amor,\r\nCuán grande el amor que el Padre\r\nhanos manifestado, que hijos,\r\nHijos de Dios… seamos por\r\nSiempre llamados.”\r\n\r\nLlevaremos de Él la imagen\r\nDe su gracia y su poder,\r\nDarnos de su gloria parte\r\nEl dignose prometer.\r\n\r\nY sin El la vida es vana,\r\nEs de abrojos un erial,\r\nSin agua estéril nube\r\nY de males manantial.\r\n\r\nMás si de El somos los hijos,\r\nPor su gracia y su adopción.\r\nLa herencia de sus bienes\r\nGozaremos en Sion.",
    },
    {
      ID: "219",
      Titulo: "Si tú acudes a Jesús",
      Letra:
        "Si tú acudes a Jesús, salvación tendrás\r\ndel castigo espantoso,\r\ndel infierno horroroso.\r\nSi tú acudes a Jesús, salvación tendrás. (Bis)\r\n\r\nCoro:\r\nSalvación, libertad y perdón,\r\nsi tú acudes a Jesús. (Bis todo)\r\n\r\nSi tú acudes a Jesús, libertad tendrás\r\nde la vida pecadora,\r\nde la carga abrumadora.\r\nSi tú acudes a Jesús, libertad tendrás. (Bis)\r\n\r\nSi tú acudes a Jesús, el perdón tendrás.\r\nSí, por todos tus pecados,\r\nconocidos e ignorados,\r\nSi tú acudes a Jesús, el perdón tendrás. (Bis)\r\n\r\nSi tú acudes a Jesús, plena paz tendrás\r\nen tus luchas y temores,\r\nen tus penas y dolores.\r\nSi tú acudes a Jesús, plena paz tendrás. (Bis)",
    },
    {
      ID: "220",
      Titulo: "Siervos de Dios",
      Letra:
        "Siervos de Dios ¡mirad!\r\nLa mies ya blanca está,\r\nla siega espera actividad,\r\no el tiempo pasará.\r\n\r\nSiervos de Dios ¡obrad!\r\nEl Dueño de la mies\r\ndispénsanos tal potestad\r\nque sin medida es.\r\n\r\nSiervos de Dios ¡orad!\r\nHay mucho aún que hacer;\r\nLas buenas nuevas anunciad\r\na todos por doquier.",
    },
    {
      ID: "221",
      Titulo: "¿Soy yo soldado de Jesús?",
      Letra:
        "Soy yo soldado de Jesús,\r\nY siervo del Señor,\r\nNo temeré llevar la cruz\r\nSufriendo por su amor.\r\n\r\nCoro:\r\nYo hablaré por mi Señor,\r\nConfesaré mi fe,\r\nSu Espíritu me ayudará,\r\nYo testificaré.\r\n\r\nLucharon otros por la fe,\r\nCobarde no he de ser;\r\nPor mi Señor pelearé,\r\nConfiando en su poder.\r\n\r\nEs menester que sea fiel,\r\nQue nunca vuelva atrás,\r\nQue siga siempre en pos de Él,\r\nSu gracia me dará.",
    },
    {
      ID: "222",
      Titulo: "Tesoro incomparable",
      Letra:
        "Tesoro incomparable,\r\nJesús, amigo fiel,\r\nRefugio del que huye\r\nDel adversario cruel;\r\nSujeta compasivo\r\nA Ti mi corazón,\r\nYa que para salvarme\r\nSufriste la pasión.\r\n\r\nDelicias tú de mi alma,\r\nPan de la eternidad,\r\nDel cual yo me alimento\r\nEn mi necesidad.\r\nEn mi flaqueza extrema\r\nSe cumple tu virtud,\r\nY en medio de mis males,\r\nTú quieres mi salud.\r\n\r\nDirige a mí tu rostro,\r\nJesús, lleno de amor,\r\nSol puro de justicia,\r\nDulce Consolador.\r\nSin tu influencia santa,\r\nLa vida es un morir;\r\nGozar de tu presencia,\r\nEsto sólo es vivir.\r\nJesús, riqueza mía,\r\nMi amante Salvador,\r\nEn mi flaqueza Tú eres\r\nMi fuerte protector.\r\nJamás el enemigo\r\nPodrá turbar mi paz;\r\nPor más que lo intentare\r\nNo lo permitirás.\r\n\r\nAl mundo de falacias\r\nNo pertenezco ya,\r\nEl cielo es mi morada,\r\nAllí mi Amado está.\r\nA donde Cristo habita,\r\nCon ansia quiero ir,\r\nEn sempiterno gozo,\r\nCon Él quiero vivir.",
    },
    {
      ID: "223",
      Titulo: "¡Trabajad! ¡trabajad!",
      Letra:
        "¡Trabajad! ¡trabajad! somos siervos de Dios,\r\nSeguiremos la senda que el Maestro trazó;\r\nRenovando las fuerzas con bienes que da,\r\nEl deber que nos toca cumplido será.\r\n\r\nCoro:\r\n¡Trabajad, trabajad! ¡Esperad y velad!\r\n¡Confiad, siempre orad!\r\nQue el Maestro pronto volverá.\r\n\r\n¡Trabajad! ¡Trabajad! hay que dar de comer,\r\nAl que el pan de la vida desea tener;\r\nHay enfermos que irán a los pies del Señor,\r\nAl saber que de balde los salva su amor.\r\n\r\n¡Trabajad! ¡trabajad! fortaleza pedid,\r\nAl reinado del mal con valor combatid,\r\nConducid los cautivos al Libertador,\r\nY decid que de balde redime su amor.",
    },
    {
      ID: "224",
      Titulo: "Tú ya vienes",
      Letra:
        "Tú ya vienes, oh Dios mío,\r\nTú ya vienes, oh mi Rey,\r\nToda lengua te confiesa,\r\nMira el gozo de tu grey.\r\nTú ya vienes y la gloria\r\nDe tu reino viene ya,\r\nA través del velo santo,\r\n¡Qué consuelo y paz nos da!\r\n\r\nCoro:\r\nTú ya vienes, Tú ya vienes,\r\nEn las nubes vienes, sí,\r\nTú ya vienes y nosotros\r\nSubiremos hacia Ti,\r\nTú ya vienes, Tú ya vienes,\r\nOh Jesús, mi Salvador,\r\n¡Cuánto gozo estar contigo,\r\nVer la gloria de tu amor!\r\n\r\nTú ya vienes, ni una sombra\r\nTu hermosura ocultará;\r\nLas tristezas y el pecado\r\nTu poder disipará.\r\nTú ya vienes, oh bien mío,\r\nGozará mi corazón;\r\nPor tu muerte yo soy hecho\r\nDe tu reino poseedor.\r\n\r\nTú ya vienes, la esperanza\r\nNunca nos engañará;\r\nNo sabemos día ni hora,\r\nMás la gloria cierta está;\r\nSí, Tú vienes, y tu mesa\r\nGarantía ya nos da,\r\nPor la comunión contigo,\r\nDe la posesión allá.",
    },
    {
      ID: "225",
      Titulo: "¡Tuyo, Señor!",
      Letra:
        "¡Tuyo, Señor!\r\nJamás tendré amor\r\nA lo que no te agrade a Ti,\r\nHa muerto el mundo para mí,\r\nPues tuyo soy.\r\n\r\n¡Tuyo, Señor!\r\nCorona, gozo, honor,\r\nSólo eres Tú, y nada acá\r\nMi corazón encantará,\r\nPues tuyo soy.\r\n\r\n¡Tuyo, Señor!\r\nReposo en tu favor,\r\nY sé que por la eternidad\r\nMe guardarás en tu bondad,\r\nPues tuyo soy.\r\n\r\n¡Tuyo, Señor!\r\nCon más ferviente ardor,\r\nTe adoraré y te serviré,\r\nEn tanto que en el mundo esté,\r\nPues tuyo soy.\r\n\r\n¡Tuyo, Señor!\r\nConozco el gran valor\r\nDe tu promesa que vendrás,\r\nY digo: “Ven, no tardes más,\r\nPues tuyo soy”.",
    },
    {
      ID: "226",
      Titulo: "Tuyo soy, Señor",
      Letra:
        "Tuyo soy, Señor, sólo tuyo soy,\r\nRedimido por tu amor;\r\nMas cual siervo fiel quiero yo seguir,\r\nY más cerca estar de Ti.\r\n\r\nCoro:\r\nMás cerca, cerca de Ti\r\nLlévame, mi Salvador;\r\nSí, más cerca, cerca yo quisiera estar\r\nDe Ti, mi Salvador.\r\n\r\nSólo a Ti, Jesús, me consagro hoy,\r\nConstreñido por tu amor,\r\nY mi ser entero gozoso doy\r\nA servirte a Ti, Señor.\r\n\r\n¡Qué profunda paz y felicidad,\r\nGuardan hoy mi corazón!\r\nCuando por la fe puedo ver tu faz,\r\nEn más grata comunión.\r\n\r\nDel amor divino jamás sabré\r\nLa profunda inmensidad,\r\nHasta que, Señor, yo contigo esté\r\nEn la gloria celestial.",
    },
    {
      ID: "227",
      Titulo: "Un ancla tenemos",
      Letra:
        "Un ancla tenemos que el túmido mar,\r\npor mucho que ruja, no puede quebrar\r\nla dulce esperanza que infunde Jesús,\r\nlegada en su muerte de angustia\r\nen la cruz.\r\n\r\nAllende los cielos el trono de Dios,\r\nque rige supremo en el reino de amor,\r\neste ancla fijemos que firme estará,\r\npues Dios, nuestro Padre,\r\nno nos faltará.\r\n\r\nY cuanto más ruja la cruel tempestad,\r\nmás firme tomemos el cable de fe,\r\nque furia de vientos, ni embates del mar,\r\nno pueden del puerto\r\nla entrada vedar.",
    },
    {
      ID: "228",
      Titulo: "¡Un poco! ¡El Salvador vendrá!",
      Letra:
        "¡Un poco! ¡El Salvador vendrá!\r\ny a su pueblo llevará\r\nal santo celestial hogar\r\nque nos ha ido a preparar,\r\na estar con él, su rostro ver, (bis)\r\ny nuestras gracias ofrecer. (bis)\r\n\r\n¡Un poco! ¡El Salvador vendrá!\r\nSí, poco tiempo resta ya,\r\nQue duélame no serle fiel,\r\nplacer me dé servirle a él.\r\nPues listo debería ser (bis)\r\nquien al Señor espera ver. (bis)\r\n\r\n¡Un poco! ¡El Salvador vendrá!\r\n¡Oh! ¿Quién su cruz rechazará?\r\n¿Quién en los pasos del Señor\r\nsufrir no quiere por su amor?\r\nSu gloria recompensará (bis)\r\nlos sufrimientos de acá. (bis)\r\n\r\n¡Un poco! ¡Ven, oh ven, Señor!\r\nLa Iglesia tuya con ardor\r\ndesea alcanzar su hogar,\r\nel nuevo cántico cantar,\r\ntu gloria ver, estar allí (Bis)\r\nen todo semejante a ti. (Bis)",
    },
    {
      ID: "229",
      Titulo: "Un poco más, Jesús vendrá",
      Letra:
        "Un poco más, Jesús vendrá,\r\nY todo ojo le verá;\r\nEl llamará a su iglesia fiel\r\nY subiremos junto a El.\r\n\r\nCoro:\r\n¡Qué día será de gloria, luz y paz!\r\nLa casa del Padre será nuestro hogar.\r\n\r\nUn poco más, Jesús vendrá,\r\nEl llanto y lloro acabará;\r\nDel peregrino el corazón\r\nSediento exclama: “Ven, Señor”\r\n\r\nJesús vendrá, vendrán también\r\nLos santos que han dormido en El;\r\n¡Dichoso día de reunión,\r\nDespués no habrá separación!",
    },
    {
      ID: "230",
      Titulo: "Un poco, un poquito",
      Letra:
        "Un poco, un poquito de tiempo esperamos,\r\nJesús de los cielos muy pronto vendrá.\r\nOrando, leyendo y cantando velemos,\r\npues pronto oiremos el grito: “Aquí está”.\r\n\r\nCon mando y con voz de arcángel del cielo,\r\ny al son de trompeta el Señor bajará.\r\nAsí le esperamos con ansia y deseo,\r\ny muertos o vivos nos recogerá.\r\n\r\nA los que en Jesús han dormido sabemos\r\nque Dios juntamente con él traerá,\r\ny no antes de ellos nosotros iremos;\r\nmas todos unidos Él nos llamará.\r\n\r\nAquellos que han muerto serán los primeros,\r\nque Cristo a su mando resucitará,\r\nnosotros los vivos seremos postreros,\r\nmas juntos Jesús nos arrebatará.\r\n\r\nArriba en los cielos, visible y glorioso,\r\nJesús a nosotros se revelará;\r\nconsigo en la gloria de eterno reposo,\r\npor él rescatados, Jesús nos pondrá.",
    },
    {
      ID: "231",
      Titulo: "Ved que acercándose el día va",
      Letra:
        "Ved que acercándose el día va,\r\nEn que el Señor en su gloria vendrá\r\nA recoger en su alfolí\r\nLo que sembramos en tanto aquí.\r\nEl su fruto recogerá,\r\nSí, su fruto recogerá.\r\n\r\nCoro:\r\nVamos sembrando con vivo amor,\r\nDulces palabras de nuestro Señor;\r\nSiempre obrando con celo y con fe,\r\nPara que rica cosecha nos dé.\r\n\r\nEntre zarzales podrá caer\r\nCierta semilla y no florecer;\r\nMas el Señor a segar vendrá,\r\nY su buen fruto recogerá.\r\nEl su fruto recogerá,\r\nSí, su fruto recogerá.\r\n\r\nMuy largo tiempo podrá pasar\r\nAntes de ver su semilla brotar;\r\nMas ciertamente el Señor vendrá,\r\nY su fruto recogerá.\r\nEl su fruto recogerá,\r\nSí, su fruto recogerá.\r\n\r\nEn todo tiempo sin desmayar\r\nVamos sembrando y orando a la par;\r\nPues prestamente el Señor vendrá\r\nY su buen fruto recogerá.\r\nEl su fruto recogerá,\r\nSí, su fruto recogerá.",
    },
    {
      ID: "232",
      Titulo: "Ven, alma que lloras",
      Letra:
        "Ven, alma que lloras, ven al Salvador,\r\nEn tus tristes horas dile tu dolor;\r\nDile, sí, tu duelo, ven tal como estás,\r\nHabla sin recelo, y no llores más.\r\n\r\nTu pena y tristura, dile a tu Señor,\r\nTu cruel desventura, engaños y error;\r\nEn su tierno seno descanso hallarás,\r\nVen, porque El es bueno, y no llores más.\r\n\r\nTú mismo al cansado enseña la luz,\r\nGuía al angustiado a Cristo Jesús;\r\nLa bendita nueva de celeste paz,\r\nA los tristes lleva, y no llores más.",
    },
    {
      ID: "233",
      Titulo: "Ven, de todo bien la fuente",
      Letra:
        "Ven, de todo bien la fuente,\r\nVen, eterno Salvador.\r\nVen, ayúdame a cantarte\r\nDignos cantos de loor.\r\n\r\nTú, Señor, por mí moriste,\r\nQuiero yo por Ti vivir;\r\nSólo Tú eres mi esperanza,\r\nSólo Tú mi porvenir.\r\n\r\nTriste yo era y extraviado,\r\nCuando Cristo me buscó;\r\nDe la muerte por salvarme\r\nEl su sangre derramó.\r\n\r\nEn su muerte de cariño\r\nVida, paz, perdón hallé;\r\nY por El la vida eterna\r\nEn el cielo gozaré.\r\n\r\nDe tu gracia, oh bien amado,\r\nSoy continuo deudor;\r\nMás y más a Ti me atraes\r\nPor los lazos de tu amor.\r\n\r\nVen, de todo bien la fuente,\r\nFuente de mi salvación;\r\nDoy a Ti mis alabanzas,\r\nDoy a Ti mi corazón.",
    },
    {
      ID: "234",
      Titulo: "Yo espero la mañana",
      Letra:
        "Yo espero la mañana\r\nDe aquel día sin igual,\r\nEn que la alegría emane\r\nY su gozo eternal.\r\n\r\nCoro:\r\nEsperando, esperando\r\nOtra vida sin dolor,\r\nDo me den bienvenido\r\nDe Jesús mi Salvador.\r\n\r\nYo espero la victoria,\r\nDe la muerte al fin triunfar;\r\nRecibir la eterna gloria\r\nY mis sienes coronar.\r\n\r\nYo espero entrar al cielo,\r\nDonde reina eterno amor;\r\nPeregrino soy, y anhelo\r\nLas moradas del Señor.\r\n\r\nPronto espero unir mi canto\r\nAl triunfante y celestial;\r\nY poder cambiar mi llanto\r\nPor un himno angelical.",
    },
    {
      ID: "235",
      Titulo: "Yo por Cristo defendido",
      Letra:
        "Yo por Cristo defendido,\r\na tu nombre doy loor;\r\nyo con bienes soy provisto\r\nque no tuvo mi Señor.\r\nAlabanzas, alabanzas\r\ndoy a ti, mi Salvador.\r\n\r\nLa pobreza y los dolores\r\nCristo se dignó pasar;\r\ny mi Dios con pecadores\r\nno encontraba do posar.\r\nAlabanzas, alabanzas\r\ndoy a ti, mi Salvador.\r\n\r\nA tu sombra, Dios clemente,\r\nyo tranquilo dormiré;\r\ny tu amor, Omnipotente,\r\nyo mi vida fiaré.\r\nAlabanzas, alabanzas\r\ndoy a ti, mi Salvador.\r\n\r\nSoy yo indigno, Tú piadoso;\r\nsé que no has de desechar\r\nal que viene presuroso\r\ntu piedad a impetrar.\r\nAlabanzas, alabanzas\r\ndoy a ti, mi Salvador.",
    },
    {
      ID: "236",
      Titulo: "A Cristo coronad",
      Letra:
        "A Cristo coronad, divino Salvador,\r\nSentado en alta majestad es digno de loor;\r\nAl Rey de gloria y paz loores tributad,\r\nY bendecid al Inmortal por toda eternidad.\r\n\r\nA Cristo coronad, Señor de nuestro amor,\r\nAl triunfante celebrad, glorioso vencedor;\r\nPotente Rey de paz, el triunfo consumó,\r\nY por su muerte de dolor su grande\r\namor mostró.\r\n\r\nA Cristo coronad, Señor de vida y luz,\r\nCon alabanzas proclamad los triunfos\r\nde la cruz;\r\nA El, pues, adorad, Señor de salvación,\r\nLoor eterno tributad de todo corazón.",
    },
    {
      ID: "237",
      Titulo: "A Dios la gloria dada",
      Letra:
        "A Dios la gloria dada\r\nserá por su bondad\r\ny gracia revelada;\r\nen su loor cantad.\r\n\r\nNosotros te adoramos,\r\nDios nuestro, con fervor.\r\nTu gracia celebramos\r\ny tu divino amor.\r\n\r\nCon gozo agradecemos\r\ntan grande salvación;\r\ny acá celebramos\r\ntu tierna compasión.\r\n\r\nTambién magnificamos\r\ntus glorias, oh Jesús.\r\nLas glorias que miramos\r\nradiosas en tu cruz.\r\n\r\nAl Padre, como al Hijo,\r\npor tanta bendición,\r\nrendid con regocijo\r\nprofunda adoración.",
    },
    {
      ID: "238",
      Titulo: "A nuestro Padre Dios",
      Letra:
        "A nuestro Padre Dios,\r\ndemos en alta voz ¡gloria a El!\r\nAl Dios que nos amó\r\nde modo que nos dio,\r\nAl Hijo que murió, ¡gloria a El!\r\n\r\nA nuestro Salvador,\r\nrindamos con fervor ¡gloria a El!\r\nSu sangre derramó,\r\ncon ella nos lavó,\r\nEl cielo nos abrió, ¡gloria a El!\r\n\r\nPor el Consolador\r\nque diónos el Señor, ¡load a Dios!\r\nMora en la eternidad,\r\nla Santa Trinidad,\r\n¡Hermanos, alabad al trino Dios!",
    },
    {
      ID: "239",
      Titulo: "A tu Palabra, mi Señor",
      Letra:
        "A tu presencia, mi Señor,\r\nHumilde vengo aquí,\r\nY en esta fiesta con amor,\r\nMemoria haré de Ti.\r\n\r\nIndigno soy de tal lugar,\r\nPues siempre malo fui,\r\nMas Tú viniste a rescatar\r\nY a libertarme a mí.\r\n\r\nAntes perdido me encontré,\r\nMas ya salvado soy,\r\nY de tu amor me acordaré\r\nAl darte gracias hoy.\r\n\r\nGetsemaní con su sudor\r\nY copa como hiel,\r\nLa cruz con todo tu dolor\r\nY tu agonía cruel.\r\n\r\nTu muerte allí, Señor Jesús,\r\nY la escondida faz\r\nDel Santo Dios, cuando en la cruz\r\nMe procuraste paz.\r\n\r\nSí, aquí Señor, me acordaré\r\nDe todo tu favor,\r\nY con los tuyos cantaré\r\nMis cánticos de loor.",
    },
    {
      ID: "240",
      Titulo: "¡Abba, Padre! te adoramos",
      Letra:
        "¡Abba, Padre! te adoramos\r\nEn el nombre de Jesús;\r\nDios y Padre te llamamos,\r\nHechos hijos de la luz;\r\nYa del juicio libertados\r\nPor la sangre del Señor,\r\nY por El reconciliados\r\nDisfrutamos de tu amor.\r\n\r\nPródigos un tiempo fuimos,\r\nY alejados del hogar;\r\nMas tu voz de amor oímos,\r\nPues quisístenos llamar;\r\nPor Jesús nos perdonaste\r\nY nos llegaste a Ti,\r\nNos besaste y nos sentaste\r\nEn tu comunión aquí.\r\n\r\nPor tu mano revestidos\r\nDel ropaje de salud,\r\nEn tu casa recogidos\r\nPor tu gran solicitud;\r\nRedimidos y lavados\r\nPor la sangre de Jesús,\r\nRestaurados, bien amados,\r\nHechos hijos de la luz.\r\n\r\n¡Abba!, todos te alabamos,\r\nMuy contentos de saber\r\nQue los bienes que gozamos\r\nClaro dan a comprender\r\nQue Tú encuentras complacencia\r\nEn mostrarnos tu favor;\r\nY por tal benevolencia\r\nTe alabamos con fervor.",
    },
    {
      ID: "241",
      Titulo: "Acepta, buen Pastor y Rey",
      Letra:
        "Acepta, buen Pastor y Rey,\r\nlas alabanzas de tu grey;\r\nacepta su ferviente amor\r\npor la corona de tu honor.\r\n\r\nQue sea nuestra devoción\r\ncontinua, dulce comunión\r\ncon el que en triste cruz murió,\r\ny por su muerte nos salvó.\r\n\r\nEl buen Pastor es siempre fiel.\r\n¡Dichosos los que creen en él!\r\nEn él tendrán felicidad,\r\nahora y por la eternidad.",
    },
    {
      ID: "242",
      Titulo: "Aquí tu rostro puedo ver, Señor",
      Letra:
        "Aquí tu rostro puedo ver, Señor,\r\nA lo invisible alcanza aquí la fe;\r\nDe nuevo abrazo aquí tu inmenso amor,\r\nY mi solicitud en Ti echaré.\r\n\r\nAquí del pan partido tomaré\r\nY de la copa de tu comunión;\r\nEl Nombre de mi Dios invocaré,\r\nGozándome en la paz de salvación.\r\n\r\nLa culpa del pecado mía fue,\r\nMas tuya fue la sangre de la cruz;\r\nPor ella y tu justicia tengo, sé,\r\nPerdón, vestido y paz, Señor Jesús.\r\n\r\nSólo en tu brazo eterno confiaré,\r\nNo tengo apoyo más que en Ti, Señor;\r\nEstá mi fortaleza en tu poder,\r\nBasta, de veras, basta ¡oh Redentor!\r\n\r\nNos levantarnos de la cena aquí,\r\nLa fiesta pasa mas no así el amor;\r\nTodo se va, mas Tú te quedas, sí,\r\nCerca, muy cerca, amado Salvador.",
    },
    {
      ID: "243",
      Titulo: "¡Bendito nuestro Dios!",
      Letra:
        "¡Bendito nuestro Dios!\r\nQue nos ha dado el Hijo de su amor,\r\nEl don que incluye todo otro don;\r\n¡Bendito nuestro Dios!\r\n\r\n¿Qué bien no nos dará?\r\nSi dio sin precio su inefable don,\r\nDon despreciado por el pecador,\r\n¿Qué bien no nos dará?\r\n\r\n¡Ni al Hijo perdonó!\r\nVerdad que aquieta todo mi temor,\r\nY vence la naciente rebelión\r\n¡Ni al Hijo perdonó!\r\n\r\n¿Quién nos condenará?\r\nJesús murió, resucitó y subió,\r\nY aboga por nosotros hoy con Dios,\r\n¿Quién nos condenará?\r\n\r\nNos justifica Dios;\r\nTal gracia ¿Quién la puede revocar?\r\n¿O quién los grillos vuelve a colocar?\r\nNos justifica Dios.\r\n\r\nNuestro es el triunfo ya,\r\nEl Fuerte de Israel se presentó,\r\nLuchó y venció, la muerte cautivó,\r\nNuestro es el triunfo ya.",
    },
    {
      ID: "244",
      Titulo: "Contémplote, Señor Jesús",
      Letra:
        "Contémplote, Señor Jesús,\r\nY al ver tu gran bondad,\r\nEntiendo con más clara luz\r\nCuan grande es mi maldad.\r\n\r\n¡Cuán poderoso el gran amor,\r\nQue de la gloria allí\r\nTe trajo para el pecador,\r\nTe trajo para mí!\r\n\r\nMe maravillo al contemplar\r\nTu vida terrenal,\r\nY al ver tu afán en libertar\r\nAl hombre de su mal.\r\n\r\nMas ¡oh! qué triste galardón\r\nTe dan, Señor Jesús!\r\nRechazante y por baldón,\r\nTe clavan en la cruz.\r\n\r\nTe espero, y ¡qué gozo das!\r\nTú triunfas, mi Señor;\r\nY de la tumba al cielo vas,\r\nCon majestad y honor.\r\n\r\nTe espero aún, y clamo: “Ven”,\r\nContigo quiero estar;\r\nCon huestes célicas también\r\nDeséote adorar.",
    },
    {
      ID: "245",
      Titulo: "Cordero, Tú, de Dios",
      Letra:
        "Cordero, Tú, de Dios,\r\nbebiendo Tú por nos\r\nla copa amarga en triste cruz,\r\nsalvástenos.\r\n\r\nConfiamos en tu amor,\r\nJesús, el Salvador;\r\npues eres sacerdote fiel\r\ny buen Pastor.\r\n\r\nSólo eres Tú sostén,\r\ny Tú nos guiarás\r\nhasta la gloria, oh Salvador,\r\na ver tu faz.",
    },
    {
      ID: "246",
      Titulo: "Cristo siempre digno fuiste",
      Letra:
        "Cristo siempre digno fuiste\r\nDe obtener cordial loor,\r\nQue el amor que nos tuviste,\r\nJoya es de tan gran valor.\r\n\r\nTodos juntos te rendimos\r\nGracias por tu caridad;\r\nEn tu santa vida vimos\r\nRevelada la verdad.\r\n\r\nEn tu muerte soportaste\r\nToda nuestra maldición;\r\nCuando Tú nos demostraste\r\nTu divino corazón.\r\n\r\nAlabanzas excelentes\r\nSon las que has de recibir,\r\nPor tus glorias esplendentes,\r\nAhora y en lo porvenir.\r\n\r\n¡Alabadle! ¡Alabadle!\r\n¡Santos, vuestra voz alzad!\r\n¡Fervorosos, adoradle!\r\nPor su sin igual bondad.",
    },
    {
      ID: "247",
      Titulo: "Cristo ya ha resucitado",
      Letra:
        "Cristo ya ha resucitado, ¡Aleluya!\r\nDe la muerte ha triunfado, ¡Aleluya!\r\nEl poder de su virtud, ¡Aleluya!\r\nCautivó la esclavitud, ¡Aleluya!\r\n\r\nEl que al polvo se humilló, ¡Aleluya!\r\nVencedor se levantó, ¡Aleluya!\r\nY cantamos en verdad, !Aleluya!\r\nSu gloriosa majestad.!Aleluya!\r\n\r\nEl que a muerte se entregó, ¡Aleluya!\r\nEl que así nos redimió, ¡Aleluya!\r\nHoy en gloria celestial, !Aleluya!\r\nReina en vida triunfal, ¡Aleluya!\r\n\r\nCristo nuestro Salvador, ¡Aleluya!\r\nDe la muerte vencedor, ¡Aleluya!\r\nPronto vamos sin cesar, ¡Aleluya!\r\nTus loores a cantar, ¡Aleluya!",
    },
    {
      ID: "248",
      Titulo: "Cual mirra fragante",
      Letra:
        "Cual mirra fragante que exhala en redor\r\nSu rico perfume, suavísimo olor;\r\nTu nombre, oh mi Amado, en mi corazón\r\nInfunde alegría y satisfacción.\r\n\r\nCual voz conocida que escucha el viador\r\nPerdido en el bosque, le inspira valor;\r\nTu nombre me anima haciendo saber\r\nEn donde el descanso se puede obtener.\r\n\r\nCual faro avistado distante en el mar\r\nPor náufrago a punto de desesperar,\r\nTu nombre, trayendo mensaje de paz,\r\nEl corazón llena de dulce solaz.\r\n\r\nCual luz que brillando en alto fanal,\r\nAl nauta en la noche señala el canal,\r\nTu nombre, esparciendo benéfica luz,\r\nAl puerto celeste me guía, Jesús.\r\n\r\nJesús, tierno nombre de precio y valor,\r\nTu nombre bendito, Jesús Salvador;\r\nPor cima de todos, sin par, sin igual,\r\nExhala fragancias de amor celestial.",
    },
    {
      ID: "249",
      Titulo: "Del homenaje y del honor",
      Letra:
        "Del homenaje y del honor,\r\nDe toda nuestra adoración,\r\nSólo eres digno, Salvador,\r\nTema de celestial canción.\r\n\r\nA Ti queremos alabar,\r\nIndignos somos del honor;\r\nPues nadie puede tributar\r\nLo que mereces, oh Señor.\r\n\r\nDe vida Tú eres manantial,\r\nContigo está la clara luz,\r\nAmor divino y eternal\r\nSe encuentra en Ti, Señor Jesús.\r\n\r\nAnticipamos Salvador\r\nEl día de tu reino aquí,\r\nEn que te rendiremos loor,\r\nViendo en la gloria sólo a Ti.",
    },
    {
      ID: "250",
      Titulo: "Digno, digno, digno",
      Letra:
        "¡Digno, digno, digno! Señor Jesús Tú eres;\r\nCuando nadie al Padre podía contentar,\r\nTú viniste al mundo, y en la cruz muriendo,\r\nLa obra redentora pudiste consumar.\r\n\r\n¡Digno, digno, digno! te vemos coronado,\r\nPero no de espinas del mundo pecador;\r\nNos regocijamos que Tú que nos salvaste,\r\nTienes ya corona de gloria y de honor.\r\n\r\n¡Digno, digno, digno! en breve los ancianos\r\nSus coronas te echarán del trono en derredor,\r\nTe darán la gloria, la honra y la potencia,\r\nPorque Tú eres sólo de todo el Creador.\r\n\r\n¡Digno, digno, digno! un cántico celeste,\r\nTodos los salvados darán a una voz:\r\n“Inmolado fuiste, y los has redimido\r\nDe los pueblos todos y lenguas para Dios”.\r\n\r\nDigno en tu persona y digno en tus obras,\r\nLa creación del mundo y tu grande redención;\r\nDigno, siempre digno, aquí te tributamos\r\nNuestras gratitudes de todo corazón.",
    },
    {
      ID: "251",
      Titulo: "Dulces momentos consoladores",
      Letra:
        "¡Dulces momentos consoladores,\r\nLos que yo paso junto a la cruz!\r\nAllí sufriendo crueles dolores\r\nVeo al cordero, Cristo Jesús.\r\n\r\nVeo los brazos de su amor abiertos,\r\nQue me convidan llegar a El;\r\nY haciendo suyos mis desaciertos,\r\nPor mí sus labios gustan la hiel.\r\n\r\nVeo su angustia ya terminada,\r\nHecha la ofrenda de expiación;\r\nSu noble frente, mustia, inclinada,\r\nY consumada mi redención.\r\n\r\n¡Dulces momentos, ricos en dones\r\nDe paz y gracia, de vida y luz!\r\nSólo hay consuelos y bendiciones\r\nCerca de Cristo, junto a la cruz.",
    },
    {
      ID: "252",
      Titulo: "En Cristo habiendo hallado",
      Letra:
        "En Cristo habiendo hallado pontífice real,\r\nPor El a Dios llegamos con libertad filial,\r\nY siendo Su santuario el único lugar\r\nEn donde a nuestro Padre podemos alabar.\r\n\r\nCon júbilo venimos, con himnos de loor;\r\nAlegres celebramos las glorias del Señor;\r\nPerfumes difundiendo de suave adoración,\r\nAl que fue siempre digno de toda bendición.\r\n\r\nPontífice divino tenemos en Jesús;\r\nGozosos nos hallamos en su celeste luz;\r\nY nuestros sacrificios de gracias y loor;\r\nEn coro alegre suben por Cristo a Ti, Señor.\r\n\r\nHonor y excelsa gloria te damos, nuestro Dios;\r\nDe corazones gratos es eco nuestra voz.\r\n¡Oh, Santo Dios y Padre, perfecto es tu saber!\r\n¡Augusto y ensalzado, oh Tú, Supremo Ser!",
    },
    {
      ID: "253",
      Titulo: "En todo tiempo alabaré",
      Letra:
        "En todo tiempo alabaré\r\nEl nombre de Jesús;\r\nLas glorias de mi Redentor;\r\nLos triunfos de su cruz.\r\n\r\nMi espíritu se alegra en El,\r\nMi Dios y Salvador;\r\nEl elegido entre diez mil,\r\nEl Cristo del Señor.\r\n\r\nPontífice, profeta y rey;\r\nPastor y amigo fiel;\r\nCimiento estable de mi fe;\r\nMi todo hallo en El.\r\n\r\nEscondedero del turbión\r\nY sombra del calor;\r\nHabiendo padecido El\r\nEs mi Consolador.\r\n\r\nEs luz y guía, escudo y sol;\r\nQue gracia y gloria da;\r\n“Tal es mi Amado” y a éste yo\r\nHe de ensalzar y amar.",
    },
    {
      ID: "254",
      Titulo: "En tu cena nos juntamos",
      Letra:
        "En tu cena nos juntamos\r\nPara celebrar, Señor,\r\nTu pasión, angustia y muerte,\r\nY ensalzar tu grande amor.\r\nGrande amor, grande amor,\r\nY ensalzar tu grande amor.\r\n\r\nRedimidos ya tenemos\r\nPor tu muerte comunión;\r\nEn el pan te recordamos,\r\nCristo nuestra salvación.\r\nSalvación, salvación,\r\nCristo nuestra salvación.\r\n\r\nEn la copa confesamos\r\nQue tu sangre es eficaz;\r\nPor tu salvación perfecta,\r\nEsperamos ver tu faz.\r\nVer tu faz, ver tu faz,\r\nEsperamos ver tu faz.\r\n\r\nPor tu gracia congregados\r\nEn tu paz, y con amor\r\nEn espíritu cantamos\r\nSiempre a Ti, oh Redentor.\r\nRedentor, Redentor,\r\nSiempre a Ti, oh Redentor.",
    },
    {
      ID: "255",
      Titulo: "Es digno nuestro Salvador",
      Letra:
        "Es digno nuestro Salvador\r\nDe nuestra adoración;\r\nVenid, cantemos su loor\r\nDe todo corazón.\r\n\r\nCoro:\r\nEnsalcemos a Jesús,\r\nAclamemos con júbilo:\r\n¡Aleluya, aleluya, aleluya! Amén.\r\n\r\nJesús es digno del amor\r\nDe los que redimió;\r\nEs digno de una vida fiel\r\nDe celo y devoción.\r\n\r\nSi somos salvos por Jesús\r\nDebemos elevar\r\nUn cántico de gratitud\r\nY culto sin cesar.",
    },
    {
      ID: "256",
      Titulo: "Fue por Jesús que Dios mostró",
      Letra:
        "Fue por Jesús que Dios mostró\r\nSu grande caridad,\r\nY a los perdidos reveló\r\nSu gracia y su verdad.\r\n\r\nLa cruz es prueba de su amor,\r\nSu muerte vida da;\r\nEl por nosotros padeció,\r\nAhora es nuestra paz.\r\n\r\nPasada está la tempestad,\r\nPasó su gran dolor;\r\nEl permanece en majestad,\r\nPor siempre Vencedor.\r\n\r\nPor lo que El hizo, nuestra paz\r\nSegura y cierta está;\r\nMás tarde, al contemplar su faz,\r\nSu amor nos bastará.",
    },
    {
      ID: "257",
      Titulo: "¡Gloria a Dios!",
      Letra:
        "¡Gloria a Dios! porque su gracia\r\nEn nosotros abundó,\r\nY su fiel misericordia\r\nEn nosotros se mostró.\r\n¡Gloria a Dios! porque no mira\r\nNuestra vieja iniquidad;\r\nBondadoso nos reviste\r\nDe justicia y santidad.\r\n\r\n¡Gloria a Dios! que de fe pura\r\nHinche nuestro corazón,\r\nY del Hijo que ama tanto\r\nNos concede el sumo don.\r\n¡Gloria a Dios! que aquí nos une\r\nEn perfecta y dulce paz,\r\nPor su diestra protegidos,\r\nAlumbrados por su faz.\r\n\r\n¡Gloria a Dios! a quien complace\r\nRecibir nuestra oración,\r\nNuestros cantos de alabanza,\r\nNuestra pura adoración.\r\n¡Gloria a Dios! que en abundancia\r\nToda bendición nos da;\r\nY si El obra así en la tierra,\r\nEn los cielos, ¿qué será?",
    },
    {
      ID: "258",
      Titulo: "Gloria rindamos a Jesús",
      Letra:
        "Gloria rindamos a Jesús,\r\npues nuestras culpas Él llevó;\r\nsu vida dando en una cruz,\r\na nuestras almas rescató.\r\n\r\nYa consumada la obra es\r\nque para Dios Él emprendió;\r\ny, satisfecho de una vez,\r\nDios a su diestra le ensalzó.\r\n\r\nTe vemos exaltado allí,\r\nY, viéndote de corazón\r\nqueremos dirigirte a ti,\r\nSeñor Jesús, la adoración.\r\n\r\nViviendo en tu divina paz,\r\nlibrados de la esclavitud,\r\nsabemos que Tú volverás,\r\ntrayéndonos cabal salud.",
    },
    {
      ID: "259",
      Titulo: "Gloria sea, gloria eterna",
      Letra:
        "¡Gloria sea, gloria eterna\r\na Jesús, al que murió,\r\nAl que por amor perfecto\r\nSu preciosa vida dio!\r\n\r\n¡Gloria sea, gloria sea\r\nA aquel que nos rescató! (bis)\r\n\r\nSí, su amor es verdadero,\r\nY nada lo podrá falsear;\r\nFirme anduvo hasta el madero,\r\nNunca quiso vacilar.\r\n\r\n¡Gloria sea, gloria sea\r\nAl que así nos supo amar. (bis)\r\n\r\nCelebremos esa historia\r\nConsumada con la cruz;\r\nCantaremos siempre: ¡Gloria\r\nSea a Ti, Señor Jesús!\r\n\r\n¡Aleluya, aleluya,\r\nAl que mora en alta luz! (bis)",
    },
    {
      ID: "260",
      Titulo: "Jesús murió, su sangre",
      Letra:
        "Jesús murió, su sangre abrió la entrada\r\nDentro del velo, celestial lugar,\r\nEn donde el alma ya purificada,\r\nCerca del Padre pudiese llegar.\r\nPor Cristo entrando nada allí tememos;\r\nSu gloria no nos puede anonadar,\r\nEn luz estamos y permanecemos\r\nFirmes, tranquilos y sin desmayar.\r\n\r\nContigo ahí, Señor, nos encontramos\r\nCon quien nos trajo para nuestro Dios,\r\nEn cuya gracia paternal estamos\r\nGozosos de elevarle nuestra voz.\r\nPor Ti, Jesús, el Hijo bien amado;\r\nSólo por Ti tenemos admisión;\r\nPor Ti llegamos como tus hermanos,\r\nCon voz de canto y de adoración.\r\n\r\nOh Dios, de corazón te agradecemos,\r\nQue te dignaste al hombre aproximar\r\nA tu regazo, pues así quedamos\r\nCual hijos admitidos a tu hogar.\r\nCual sacerdotes somos consagrados\r\nAl Padre, para dar adoración;\r\nY ofrenda espiritual de rescatados,\r\nRendímoste Señor, de corazón.",
    },
    {
      ID: "261",
      Titulo: "¡Jesús! ¡Qué dulce Nombre!",
      Letra:
        "¡Jesús! ¡Qué dulce Nombre\r\nA los que te queremos!\r\nSiempre a tu amor, real loor\r\nDe gracias rendiremos.\r\nTus glorias celebramos\r\nDel fondo de nuestra alma,\r\nCon gratitud por tu salud,\r\nY de tu paz la calma.\r\n\r\n¡Jesús! ¡Qué dulce Nombre!\r\nPor él se ve que Tú amas\r\nTu pueblo aquí unido a Ti,\r\nY en su redor derramas\r\nEl gozo de tu gracia,\r\nPara tus redimidos;\r\nQue ya te dan con santo afán,\r\nLoores merecidos.\r\n\r\n¡Jesús! ¡Qué dulce Nombre!\r\nNos habla de tu vida\r\nY tu poder en bien hacer,\r\nTu gloria conocida.\r\nCual hombre de dolores,\r\nAl mundo Tú viniste,\r\nMas por tu cruz, con bella luz,\r\nAl hombre bendijiste.\r\n\r\n¡Jesús! ¡Qué dulce Nombre!\r\nEs tuya la corona,\r\nDivinidad y humanidad\r\nEstán en tu persona.\r\nNos revelaste el Padre,\r\nSu gran amor mostraste,\r\nSu gracia acá, su gloria allá,\r\nTú sólo desplegaste.",
    },
    {
      ID: "262",
      Titulo: "La cruz sangrienta",
      Letra:
        "La cruz sangrienta al contemplar\r\nDo el Rey de gloria padeció,\r\nRiquezas quiero despreciar,\r\nY a la soberbia tengo horror.\r\n\r\nMi gloria y mi blasón serán\r\nLa cruz de Cristo, mi Señor;\r\nY lo que di a la vanidad,\r\nYa le dedico con amor.\r\n\r\nSus manos, su costado y pies\r\nDe sangre manaderos son;\r\nY las espinas de su sien,\r\nMi aleve culpa las clavó.\r\n\r\nCual vestidura regia allí,\r\nLa sangre cubre al Salvador;\r\nY pues murió Jesús por mí,\r\nPor El al mundo muero yo.\r\n\r\n¿Y qué podré yo darte a Ti,\r\nA cambio de tan grande don?\r\nEs todo pobre, todo ruin;\r\nToma, Señor, mi corazón.",
    },
    {
      ID: "263",
      Titulo: "Levantado fue Jesús",
      Letra:
        "Levantado fue Jesús\r\nEn la vergonzosa cruz,\r\nPara darme la salud;\r\n¡Aleluya! ¡Gloria a Cristo!\r\n\r\nSoy yo indigno pecador,\r\nEl es justo Salvador;\r\nDio su vida en mi favor;\r\n¡Aleluya! ¡Gloria a Cristo!\r\n\r\nPor mis culpas yo me vi\r\nEn peligro de morir;\r\nMas Jesús murió por mí;\r\n¡Aleluya! ¡Gloria a Cristo!\r\n\r\nEl rescate a Dios pagó,\r\n“Consumado es”, declaró;\r\nDios por eso me aceptó;\r\n¡Aleluya! ¡Gloria a Cristo!",
    },
    {
      ID: "264",
      Titulo: "Load al gran Rey",
      Letra:
        "Load al gran Rey, su gloria rezad,\r\nSu amor a su grey con gracia cantad;\r\nEs nuestro escudo, baluarte y sostén,\r\nEl Dios poderoso de siglos sin fin.\r\n\r\n¡Cuán fuerte es Dios! ¡Mortales temblad!\r\nOímos su voz en la tempestad;\r\nBrocado de estrellas es su pabellón;\r\nY vientos y rayos sus ángeles son.\r\n\r\nTu inmensa bondad, ¿qué lengua dirá?\r\nO ¿quién tu verdad jamás sondeará?\r\nCon suma largueza tus manos proveen,\r\nY es fiel tu promesa a los que en Ti creen.\r\n\r\nEl frágil varón, -aliento que va-\r\nSu consolación en Ti hallará;\r\nTu misericordia no puede faltar,\r\nY a tu eterna gloria le conducirás.\r\n\r\n¡Tremendo poder! ¡ilímite amor!\r\nMisterioso Ser, te damos loor;\r\n¡Cuán maravillosa tu gran creación!\r\nMas, ¡oh, qué asombrosa es tu gran redención!",
    },
    {
      ID: "265",
      Titulo: "Loámoste Señor Jesús,",
      Letra:
        "Loámoste Señor Jesús,\r\nQuien eres ensalzado\r\nAl Salvador, que por amor\r\nDel mundo fue humillado.\r\nEn Ti podemos contemplar\r\nLa imagen de Dios vivo,\r\nQuien tanto amó, que te entregó,\r\nY en Ti ya nos recibe.\r\n\r\nDe aquella eterna comunión,\r\nDonde con el Padre estabas,\r\nVenir quisiste a reunir\r\nA los que se extraviaban.\r\nEn Ti el pecado se cargó,\r\nLa maldición llevaste;\r\nFue sólo así, muriendo allí,\r\nQue nuestra paz compraste.\r\n\r\nTú levantado al cielo estás,\r\nY no hay quien nos condene;\r\nSalvada está tu iglesia ya\r\nY paz perfecta tiene.\r\nEn majestad sentado estás,\r\nCabeza de tu iglesia;\r\nDigno eres, si, que dente allí,\r\nLoor y gloria eterna.\r\n\r\nPues alabámoste Señor,\r\nPor lo que Tú nos eres,\r\nY hasta que veámoste\r\nRogamos que nos guardes.\r\nVen pronto para conducir\r\nTu iglesia de este suelo,\r\nPara ocupar su eterno hogar,\r\nContigo allí en el cielo.",
    },
    {
      ID: "266",
      Titulo: "Ni sangre hay, ni altar",
      Letra:
        "Ni sangre hay, ni altar,\r\nCesó la ofrenda ya;\r\nNo sube llama ni humo hoy,\r\nNi más cordero habrá;\r\nEmpero ¡he aquí la sangre de Jesús!\r\nQue quita la maldad y al hombre da salud.\r\n\r\nCon gratitud, Señor,\r\nLa sangre veo brotar,\r\nQue dio la paz al pecador,\r\nTriunfando en su lugar.\r\nGran triunfo sobre el reino de Satán,\r\nNi queda un enemigo, ni otra lucha habrá.\r\n\r\nCon gratitud, Señor,\r\nTu gracia acepto yo,\r\nQue sobrepuja nuestro mal,\r\nDel Padre es este amor;\r\nAmor del Hijo eterno que murió,\r\nY amor del Santo Espíritu, del Trino Dios.\r\n\r\nCon gratitud, Señor,\r\nAcójome a trabar\r\nEn la esperanza que nos das,\r\nCual ancla firme está;\r\nDel velo adentro, donde el Precursor\r\nEntró, y hoy vive por nosotros ante Dios.\r\n\r\nCon gratitud, Señor,\r\nCorona espero yo,\r\nDe vida y gloria ceñirás\r\nA cada vencedor.\r\nNingún laurel marchito el Juez dará,\r\nMas como el trono eterno de Jehová será.",
    },
    {
      ID: "267",
      Titulo: "No fue por nuestro amor a Ti",
      Letra:
        "No fue por nuestro amor a Ti,\r\nDel Hijo tuyo el don;\r\nDe amor la fuente veo aquí,\r\nTu corazón.\r\n\r\nSeñor Jesús, ¡qué grande amor\r\nTe trajo y nos ganó!\r\nQue soportando así el dolor,\r\nLa cruz sufrió\r\n\r\nCuando en Calvario Dios a Ti,\r\nSu Hijo abandonó;\r\nFue por la muerte tuya así,\r\nQue nos salvó.\r\n\r\nEs consumado todo ya,\r\nEl velo se rompió;\r\nVenciste y tu pueblo acá,\r\nContigo entró.\r\n\r\nLas dudas cesan, ¡oh, Señor!\r\nAl verte vivo allí,\r\nResucitado y vencedor,\r\nHay paz por Ti.\r\n\r\nHoy ante el trono, ¡oh, Salvador!\r\nQueremos adorar,\r\nRendirnos a tu grande amor,\r\nY gracias dar.",
    },
    {
      ID: "268",
      Titulo: "Obediente a tu mandato",
      Letra:
        "Obediente a tu mandato\r\nParticipa hoy tu grey,\r\nDe tu cena y con gozo,\r\nAcercámonos con fe.\r\nLo que hiciste en el Calvario\r\nPor el pobre pecador;\r\nAnunciamos en tu Nombre,\r\nRecordando tu amor.\r\n\r\nRecordamos tus angustias,\r\n¡Oh, Divino Redentor!\r\nY la copa de amargura\r\nQue por todo pecador\r\nEn el Gólgota apuraste\r\nSoportando tu dolor;\r\nTe loamos y adoramos,\r\n¡Oh! bendito Salvador.\r\n\r\nGracias ¡oh Jesús! Te damos\r\nEn tu santa comunión,\r\nEn tu gracia disfrutamos\r\nTu clemencia, tu favor;\r\nTuya fue la cruz, más nuestra\r\nEs la dicha, es el bien;\r\n¡Qué la gloria toda sea\r\nTuya para siempre! Amén.",
    },
    {
      ID: "269",
      Titulo: "¡Oh Dios de grande amor!",
      Letra:
        "¡Oh, Dios de grande amor!\r\ngozamos de tu luz,\r\ny disfrutamos tu favor\r\npor medio de Jesús.\r\nOh, Dios de gracia y de bondad,\r\ngozamos ya de tu amistad.\r\n\r\nEn Cristo tu placer\r\ncompleto se encontró,\r\npudiendo por su cruz saber\r\nque la obra consumó,\r\ny nos podemos hoy gloriar\r\nen quien nos vino a rescatar.\r\n\r\nEterna es nuestra paz,\r\nSeñor Jesús, por ti;\r\ntu bendición y tu solaz\r\ngozamos desde aquí.\r\nSólo eres nuestra salvación;\r\nTú llenas nuestro corazón.",
    },
    {
      ID: "270",
      Titulo: "¡Oh! ¿Quién jamás pudo expresar?",
      Letra:
        "¡Oh! ¿Quién jamás pudo expresar tu amor,\r\nO sondear la hondura, Salvador,\r\nDel manantial en el Divino Ser,\r\nO la extensión, o grande altura ver\r\nde tal amor?\r\n\r\n¿Quién pudo amor tan vasto conocer?\r\nEl cielo no lo pudo contener,\r\nMas hasta nuestro mundo rebosó,\r\nPues al morir en cruz Jesús mostró\r\nde Dios amor.\r\n\r\n¿Quién pudo cabalmente dar loor\r\nAl Dios Omnipotente y Salvador,\r\nQue siempre es digno de tan grande amor?\r\nEl culto que rendimos al Señor\r\n¡Cuán débil es!\r\n\r\nMas tu condescendiente caridad\r\nNos muestra que la gran benignidad\r\nQue abrigas en tu tierno corazón,\r\nSabrá la voz de nuestra adoración\r\navalorar.\r\n\r\nMás cuando en pura luz tu iglesia ve\r\nSu amado faz a faz, (ya no por fe),\r\nEntonces, en sus himnos de loor,\r\nEl culto digno de tan grande amor,\r\nresonará.",
    },
    {
      ID: "271",
      Titulo: "Oíd un son en alta esfera",
      Letra:
        "Oíd un son en alta esfera,\r\n“En los cielos gloria a Dios,\r\nAl mortal paz en la tierra”,\r\nCanta la celeste voz.\r\nCon los cielos alabemos\r\nAl Eterno Rey; cantemos\r\nA Jesús, a nuestro bien,\r\nCon el coro de Belén.\r\nCanta la celeste voz:\r\n“¡En los cielos gloria a Dios!”\r\n\r\nEl Señor de los señores,\r\nEl Ungido celestial,\r\nA salvar los pecadores\r\nVino al mundo terrenal.\r\nLoor al Verbo encarnado,\r\nEn humanidad velado,\r\nGloria al Santo de Israel,\r\nCuyo nombre es Emanuel.\r\nCanta la celeste voz:\r\n“¡En los cielos gloria a Dios!”\r\n\r\nPríncipe de paz eterna,\r\n¡Gloria sea a Ti, Jesús!\r\nDe tu heredad paterna\r\nNos trajiste vida y luz.\r\nHas tu majestad dejado,\r\nY buscarnos te has dignado;\r\nPara darnos el vivir,\r\nA la muerte osaste ir.\r\nCanta la celeste voz:\r\n“¡En los cielos gloria a Dios!”",
    },
    {
      ID: "272",
      Titulo: "¡Qué carga inmensa!",
      Letra:
        "¡Qué carga inmensa, oh Señor,\r\nFue impuesta sobre Ti!\r\nTú padeciste por amor\r\nEl mal que merecí,\r\nCuando en la cruz, Señor Jesús,\r\nMoriste en vez de mí.\r\n\r\nCáliz de muerte y maldición\r\nHenchido para mí,\r\nTomaste con resignación,\r\nBebiéndolo por mí;\r\nY su amargor volvió tu amor\r\nEn bendición por mí.\r\n\r\nSu santa vara Dios blandió,\r\nHiriéndote a Ti;\r\nDios mismo te desamparó,\r\nPara ampararme a mí;\r\nTu sangre en don de expiación,\r\nVertiste Tú por mí,\r\n\r\nDe Dios la cólera estalló,\r\nCayendo sobre Ti,\r\nEl rostro Dios de Ti apartó,\r\nPara aceptarme a mí;\r\nPor tu dolor, Jesús, Señor,\r\nNo hay ira para mí.\r\n\r\nPor mí, Señor, moriste Tu,\r\nPor tanto en Ti morí,\r\nTú vivo estás, y vivo yo,\r\nNo hay muerte para mí;\r\nY por tu honor, ¡Oh, Salvador!\r\nHay gloria para mí.",
    },
    {
      ID: "273",
      Titulo: "¡Qué segura está la iglesia!",
      Letra:
        "¡Qué segura está la iglesia!\r\nProtegida de Jehová;\r\nDios su muro de defensa,\r\nDios morando siempre en ella,\r\n¿Quién la puede condenar?\r\n\r\nCoro:\r\n¿Quién nos puede condenar,\r\nSi Jehová por nosotros está? Bis\r\n\r\n¡Qué feliz está la iglesia!\r\nY ¡qué rica en el Señor!\r\nEl la ampara en su flaqueza,\r\nLa enriquece en su pobreza\r\nEl tesoro de su amor.\r\n\r\nDios socorro da a su iglesia\r\nEn los días de aflicción;\r\nLa consuela en su tristeza\r\nCon la luz de su presencia;\r\nTodo cambia en bendición.",
    },
    {
      ID: "274",
      Titulo: "Rasgóse el velo",
      Letra:
        "“Rasgóse el velo”, ya no más\r\nDistancia mediará,\r\nAl trono mismo de su Dios\r\nEl alma llegará.\r\n\r\n“Rasgóse el velo”, ¡sombras id!\r\nLa luz resplandeció;\r\nLa cara misma de su Dios,\r\nJesús ya reveló.\r\n\r\n“Rasgóse el velo”, hecha está\r\nEterna redención;\r\nEl alma pura y limpia ya\r\nNo teme perdición.\r\n\r\n“Rasgóse el velo”, Dios abrió\r\nLos brazos de su amor;\r\nEntrar podemos donde entró\r\nJesús, el Salvador.\r\n\r\nEl Salvador sentado está\r\nEn alta Majestad;\r\nPurgados los pecados ya,\r\nSegún la santidad.\r\n\r\nEntremos pues, ¡oh! adorad\r\nAl Dios de amor y luz;\r\nLa preces y las gracias dad,\r\nEn nombre de Jesús.",
    },
    {
      ID: "275",
      Titulo: "Rechazado por todos",
      Letra:
        "Rechazado por todos Jesús salió\r\nLlevando su cruz;\r\nY a la cumbre del Gólgota El subió\r\nLlevando su cruz;\r\nCual oveja delante del trasquilador,\r\nEn silencio estuvo por mí el Señor,\r\nLlevando su cruz.\r\n\r\nCoro:\r\n¡Oh, qué maravilla\r\n!Puede ser que El por mi la llevó!\r\n¡Oh, qué maravilla!\r\n¡Sí, por mí la cruz llevó!\r\n\r\nAunque supo él bien que tendría dolor\r\nLlevando su cruz;\r\nEl castigo llevó con un santo ardor\r\nLlevando su cruz.\r\nPues la cruz tan pesada no se igualó\r\nAl pecado y al juicio que allí cargó,\r\nLlevando su cruz.\r\n\r\nNo habrían podido tomarle allí\r\nLlevando su cruz;\r\nMas su voluntad era morir así,\r\nLlevando su cruz.\r\nEl puso la vida y volvióla a tomar;\r\nY el gozo propuesto pudo estimar,\r\nLlevando su cruz.\r\n\r\nToda carga se fue que tomo aquel día\r\nLlevando su cruz;\r\nMas jamás volverá por la misma vía\r\nLlevando su cruz.\r\nAl verle en la gloria del porvenir,\r\nLas gracias daré que salió a morir,\r\nLlevando su cruz.",
    },
    {
      ID: "276",
      Titulo: "Recordámoste, Señor",
      Letra:
        "Recordámoste, Señor,\r\nEn tu muerte de dolor,\r\nPor salvar al pecador,\r\nY te adoramos.\r\n\r\nEn tu cruz, oh, Salvador,\r\nVasto amor se nos mostró,\r\nCuando Dios te abandonó,\r\nY te adoramos.\r\n\r\nLevantado ahora estás,\r\nPara no morir jamás,\r\nEn tu amor nos guardarás,\r\nY te adoramos.\r\n\r\nPronto, completada ya,\r\nTu iglesia subirá,\r\nY contigo gozará\r\nDe eterna gloria.\r\n\r\nHasta entonces, oh Señor\r\nDe tu mesa alrededor,\r\nDe los símbolos de amor\r\nParticiparemos.",
    },
    {
      ID: "277",
      Titulo: "Reunidos cual hermanos",
      Letra:
        "Reunidos cual hermanos\r\nEn la cena del Señor;\r\nComunión ya disfrutamos\r\nRodeando al Salvador.\r\n\r\nRecordámosle en su muerte,\r\nY la sangre que vertió;\r\nCelebramos hoy la fiesta\r\nQue Jesús instituyó.\r\n\r\nDisfrutamos su presencia,\r\nAlabamos al Señor;\r\nYa no muertos, mas en vida,\r\nNos gozamos en su amor.",
    },
    {
      ID: "278",
      Titulo: "Salvador, en ti confío",
      Letra:
        "Salvador, en ti confío\r\ny te adoro en santidad;\r\nte presento el culto mío\r\nante el trono de verdad.\r\nMe uno con tu Iglesia aquí\r\npara dar loor a ti.\r\n\r\nTe alabamos porque Tú eres\r\nHijo del eterno Dios;\r\nigualdad con él posees,\r\nsanto, justo Salvador.\r\nInsondable es tu saber;\r\nsin igual es tu poder.\r\n\r\nOh Señor, te contemplamos\r\nal salir del cielo allá;\r\nen el mundo te miramos\r\nsiempre activo en tu bondad.\r\nToda perfección se ve\r\nen tu humilde andar de fe.\r\n\r\nCuando al fin en cruz te vemos\r\nen tu pena y amargor,\r\nentenderlo no podemos;\r\n¡qué infinito es este amor!\r\nOh Señor, henos aquí,\r\nnos postramos ante ti.",
    },
    {
      ID: "279",
      Titulo: "¡Santo! ¡Santo! ¡Santo!",
      Letra:
        "¡Santo! ¡Santo! ¡Santo! Señor Omnipotente,\r\nSiempre el labio mío loores te dará;\r\n¡Santo! ¡Santo! ¡Santo! Te adoro reverente,\r\nDios en tres personas, bendita Trinidad.\r\n\r\n¡Santo! ¡Santo! ¡Santo! En numeroso coro,\r\nSantos escogidos te adoran sin cesar,\r\nDe alegría llenos, y sus coronas de oro\r\nRinden ante el Trono y el cristalino mar.\r\n\r\n¡Santo! ¡Santo! ¡Santo! La inmensa muchedumbre\r\nDe ángeles que cumplen tu Santa voluntad,\r\nAnte Ti se postra, bañada de tu lumbre,\r\nAnte Ti, que has sido, que eres y serás.\r\n\r\n¡Santo! ¡Santo! ¡Santo! Por más que esté velado\r\nE imposible sea tu gloria contemplar,\r\nSanto Tu eres sólo, y nadie hay a tu lado\r\nEn poder perfecto, pureza y caridad.\r\n\r\n¡Santo! ¡Santo! ¡Santo! La gloria de tu nombre,\r\nVemos en tus obras en cielo, tierra y mar,\r\n¡Santo! ¡Santo! ¡Santo! Te adorará todo hombre,\r\nDios en tres personas, bendita Trinidad.",
    },
    {
      ID: "280",
      Titulo: "Señor, nos recordamos",
      Letra:
        "Señor, nos recordamos\r\nDe tu pasión aquí,\r\nCual sustituto santo\r\nSufriendo tu alma así;\r\nEl cáliz de amargura,\r\nCon plena sumisión\r\nTu mismo lo agotaste,\r\nSeñor, ¡Qué redención!\r\n\r\nLas olas vengadoras\r\nDe cólera penal\r\nPor sobre Ti pasaron\r\nCon peso judicial,\r\nY tu alma sumergida\r\nProbó la maldición\r\nDebida a los perdidos,\r\nPor nuestra salvación.\r\n\r\nSabemos que tu muerte\r\nQuitó la acusación\r\nEn contra del pecado,\r\n¡Qué grande expiación!\r\nMas, ¡Cuál no fue el tormento,\r\nTu alma allí sufrió,\r\nCuando el divino rostro\r\nDe Ti Dios apartó!\r\n\r\nY ¿quién dirá qué gozo\r\nEl Padre en Ti sintió\r\nEn ese mismo instante\r\nEn que Dios te dejó?\r\nMas a su diestra ahora\r\nSentado en gloria estás,\r\nDo esperas el momento\r\nEn que Tu volverás.",
    },
    {
      ID: "281",
      Titulo: "Señor, queremos acudir",
      Letra:
        "Señor, queremos acudir\r\nPor fe al Calvario, y contemplar\r\nLa muerte de Jesús, y así\r\nSu amor sentir, y descansar;\r\nEn su obra consumada allí\r\nTenemos hoy reposo y paz.\r\n\r\nSu espíritu angustiado fue\r\nDesamparado de su Dios,\r\nLlevando nuestras culpas, El\r\nGustó la muerte y maldición;\r\nTú le ensalzaste y puede ver\r\nEl fruto de su redención.\r\n\r\nNos alegramos en pensar\r\nQue su agonía se acabó,\r\nLa muerte ya no puede más,\r\nLa tumba ya su presa dio;\r\nEstá sentado en majestad\r\nY coronado Vencedor.",
    },
    {
      ID: "282",
      Titulo: "Señor, Tú eres Hijo",
      Letra:
        "Señor, Tú eres Hijo del Padre potente,\r\naun antes del mundo creado existente.\r\nEn ti se reúnen las glorias celestes,\r\nloores te rinden del cielo las huestes.\r\n\r\nJesús, Emanuel es tu nombre selecto;\r\nviniste a la tierra cual hombre perfecto.\r\nMoriste en la cruz, ¡oh misterio sublime!\r\nTu muerte al humano perdido redime.\r\n\r\nCristo, en la magnífica altura asentado,\r\nesperas el día glorioso, anhelado,\r\nen el que serate este mundo sujeto,\r\ny el plan de tu Padre hallarase completo.",
    },
    {
      ID: "283",
      Titulo: "Señor, tu nombre amamos",
      Letra:
        "Señor, tu nombre amamos,\r\nY en humildad venimos,\r\nLa fortaleza y bendición\r\nPor siempre te atribuimos;\r\nCantamos a tus loores\r\nCon alma y voz unidas,\r\nPues Tú eres digno, y sólo Tú,\r\nDe honor, poder y gloria.\r\n\r\nSeñor, tu nombre amamos,\r\nDe Dios su amor declara,\r\nAún cuando el mundo no existía,\r\nTú al hombre vil amabas;\r\nAmor eterno el tuyo,\r\nQue halló en nosotros gozo;\r\nVendiste todo por comprar\r\nEl “especial tesoro”.\r\n\r\nSeñor, tu nombre amamos,\r\nDel nacimiento habla,\r\nDon principióse en humildad\r\nTu senda solitaria.\r\nVarón, Tú, de dolores,\r\nLas penas te afligieron;\r\nBebiste el cáliz de amargor,\r\nDe espinas te ciñeron.\r\n\r\nSeñor, tu nombre amamos,\r\nCordero designado,\r\nSin mancha alguna de maldad,\r\nLa nuestra Tú has llevado.\r\nCumplida la gran obra,\r\nY tuya la victoria,\r\nVestido y coronado estás\r\nCon majestad y gloria.",
    },
    {
      ID: "284",
      Titulo: "Señor, Tú nos invitas",
      Letra:
        "Señor, Tú nos invitas\r\nTu cena a celebrar,\r\nDejando nuestras cuitas,\r\nTu amor a disfrutar.\r\nTomando nuestra suerte,\r\nTornaste ¡oh Salvador!\r\nEmblemas de tu muerte\r\nEn festival de amor.\r\n\r\nTu cuerpo lacerado\r\nNos trajo salvación,\r\nEl pan Tú nos has dado\r\nPor santa comunión.\r\n\r\nLa copa de amargura\r\nBebiste Tú, ¡oh, Jesús!\r\nMás cáliz de dulzura\r\nNos diste por tu cruz.\r\n\r\nTa tu obra consumada\r\nEn su totalidad,\r\nAbriónos una entrada\r\nA tu felicidad.\r\n\r\nNo solamente vemos\r\nTus hechos, oh, Señor,\r\nAhora conocemos\r\nTu corazón de amor.\r\n\r\nY el Padre conocido\r\nEn Ti, su rico don,\r\nSe siente complacido\r\nDe nuestra adoración.",
    },
    {
      ID: "285",
      Titulo: "Somos por Jesús salvados",
      Letra:
        "Somos por Jesús salvados\r\nY gozamos de la luz,\r\nDe la maldición librados,\r\nRescatados por la cruz,\r\nPor el indecible amor\r\nDe Jesús, el Salvador.\r\n\r\nSorprendente es contemplarle\r\nEn la cruz, do se entregó\r\nA cargarse del pecado\r\nPor lo cual Dios le dejó,\r\nY hecho por nos maldición\r\nTuvo roto el corazón.\r\n\r\nSatisfizo El la demanda\r\nQue Dios en la ley dictó,\r\nCuando diose por ofrenda\r\nY con sangre nos compró.\r\nTodo ha consumado ya,\r\nY Dios satisfecho está.\r\n\r\nAlabanzas tributemos\r\nAl que tal amor mostró;\r\nAlabanzas siempre demos\r\nAl que tanto se humilló.\r\nAl eterno Salvador,\r\nDemos sempiterno loor.",
    },
    {
      ID: "286",
      Titulo: "Todos juntos levantemos",
      Letra:
        "Todos juntos levantemos\r\nGracias al buen Salvador;\r\nSiempre es grande su paciencia,\r\nY eternal su dulce amor;\r\n¡Aleluya! ¡Aleluya!\r\n¡Proclamemos su loor!\r\n\r\nEl divino Rey Eterno\r\nNos rodea con favor,\r\nSantifica a los creyentes\r\nY perdona al pecador;\r\n¡Aleluya! ¡Aleluya!\r\n¡Proclamemos su loor!\r\n\r\n¡Qué tengamos, pues, confianza!\r\nFiel es nuestro Salvador,\r\nY en el cielo reunidos\r\nCantaremos su loor;\r\n¡Aleluya! ¡Aleluya!\r\n¡Cantaremos su loor!",
    },
    {
      ID: "287",
      Titulo: "¡Triunfo! ¡Triunfo!",
      Letra:
        "¡Triunfo! ¡Triunfo! Cantemos la gloria\r\nDel Rey poderoso, por cuya victoria\r\nQuedó abolido el poder de la muerte,\r\nEl fuerte vencido por uno más fuerte,\r\nJesús vencedor, y vencido Satán.\r\n\r\nEl Crucificado, por Dios coronado,\r\nSeñor victorioso será proclamado;\r\nDaránle honores, dominio y grandeza,\r\nLos siglos futuros, eterna realeza,\r\nDe que El ya es digno y muy pronto tendrá.\r\n\r\nSu frente celeste ciñendo corona,\r\nLos hombres honrando su santa persona,\r\nEl cetro terrestre en breve empuñando,\r\nEn paz le veremos cual rey dominando\r\nEn cielos y tierra el reino de Dios.",
    },
    {
      ID: "288",
      Titulo: "¡Ved a Cristo, ser de gloria!",
      Letra:
        "¡Ved a Cristo, ser de gloria!\r\nEs del mundo el vencedor;\r\nDe la guerra vuelve invicto,\r\nTodos deben darle loor.\r\n\r\nCoro:\r\nCoronadle, coronadle,\r\nCoronadle Rey de reyes;\r\nHomenaje tributadle,\r\nTributad al Salvador.\r\n\r\nPecadores se burlaron,\r\nDespreciando al Salvador;\r\nMas los santos redimidos\r\nHoy proclámanle Señor.\r\n\r\nExaltadle, exaltadle,\r\nRicos triunfos trae Jesús,\r\nEn los cielos entronado,\r\nEn la refulgente luz.\r\n\r\nEscuchad las alabanzas\r\nQue se elevan hacia Aquél\r\nQue por nos fue inmolado,\r\nDad honores a Emanuel.",
    },
    {
      ID: "289",
      Titulo: "Ved al divino Salvador",
      Letra:
        "Ved al divino Salvador\r\nEn la cruz, en la cruz,\r\nMorir en vez del pecador,\r\nEn la cruz, en la cruz.\r\nGimiendo triste clama así:\r\n¡Eloi, ¿lama sabachthani?”\r\n¡Oh!, ved cuál agoniza allí,\r\nEn la cruz, en la cruz.\r\n\r\nLa gran batalla peleó,\r\nEn la cruz, en la cruz;\r\nVictoria plena consiguió\r\nEn la cruz, en la cruz.\r\nDel hondo abismo cerca ya,\r\nEl dice: “Consumado está”,\r\nY al Padre Dios su vida da,\r\nEn la cruz, en la cruz.\r\n\r\nLa triste historia cantaré,\r\nDe la cruz, de la cruz;\r\nTan sólo yo me gloriaré\r\nEn la cruz, en la cruz;\r\nPerdón y paz poseo yo,\r\nAllí donde Cristo padeció,\r\nDo él por mí la vida dio,\r\nEn la cruz, en la cruz.",
    },
    {
      ID: "290",
      Titulo: "Venid, cantad, de gozo",
      Letra:
        "Venid, cantad, de gozo en plenitud,\r\nY dad loor a quien su sangre dio,\r\nY luego en ella nos lavó,\r\nDe nuestra lepra nos limpió,\r\nY nos libró de nuestra esclavitud.\r\n\r\nCoro:\r\nEl nos libró de culpabilidad,\r\nY nos limpió para la eternidad,\r\nDe toda bendición celeste nos colmó:\r\n¡Precioso Salvador, por nosotros murió!\r\n\r\n¡Oh, Dios de amor! que vienes a sufrir,\r\nLlevando así toda la maldición,\r\nY en vez de eterna perdición,\r\nNos proporcionas salvación,\r\nQue sin Ti nadie puede conseguir.\r\n\r\nHonor y gloria en todo su esplendor,\r\nSerán el fin del que sigue a Jesús,\r\nTomando por su amor la cruz,\r\nY guiado siempre por su luz,\r\nConstante sigue en pos de su Señor.",
    },
    {
      ID: "291",
      Titulo: "Venid con cánticos, venid",
      Letra:
        "Venid, con cánticos venid,\r\nDel trono alrededor,\r\nCon ángeles loor rendid\r\nA Cristo, Salvador.\r\nCon ángeles loor rendid\r\nA Cristo, Salvador.\r\n\r\nDe nuestras gracias digno es El,\r\nQuien en la cruz bebió\r\nLa copa de amarga hiel,\r\nQue vida al hombre dio.\r\nLa copa de amarga hiel,\r\nQue vida al hombre dio.\r\n\r\nCantad mortales por doquier,\r\nCantadle con ardor;\r\nEl siempre es digno de poder,\r\nRiquezas y loor.\r\nEl siempre es digno de poder,\r\nRiquezas y loor.\r\n\r\nCon gozo, pues, alzad la voz,\r\nAlegre voz alzad,\r\nY con los ángeles de Dios\r\nA Cristo celebrad.\r\nY con los ángeles de Dios\r\nA Cristo celebrad.",
    },
    {
      ID: "292",
      Titulo: "Venid, hermanos, celebrad",
      Letra:
        "Venid, hermanos, celebrad\r\nLas glorias y la dignidad\r\nDe Cristo, el Salvador;\r\nPues El en todo es sin igual,\r\nY con el coro celestial,\r\nDebemos darle loor.\r\n\r\n¡Qué sangre más preciosa dio,\r\nCuando él del juicio rescató\r\nAl pobre pecador!\r\nY ¡oh! ¡qué grande perfección\r\nLos cubre a los que salvos son\r\nPor El, en su favor!\r\n\r\nY cuando débiles están,\r\nSocorro en El encontrarán,\r\nPontífice es El;\r\nY si el creyente peca, ya\r\nJesús por él abogará,\r\nCual abogado fiel.\r\n\r\nVeremos pronto al Salvador,\r\nPues volverá con mucho ardor,\r\nSu iglesia a transportar;\r\nEntonces por la eternidad,\r\nCelebraremos su bondad,\r\nCon gozo sin cesar.",
    },
    {
      ID: "293",
      Titulo: "Venid, nuestras voces",
      Letra:
        "Venid, nuestras voces alegres unamos\r\nAl coro celeste del trono al redor,\r\nSus voces se cuentan por miles y miles,\r\nMas todos se inflaman en un mismo amor.\r\n\r\n“Es digno el Cordero que ha muerto” proclaman,\r\n“De estar exaltado en los cielos así”,\r\n“Es digno el Cordero”, decimos nosotros,\r\nPues El por nosotros su vida dio aquí.\r\n\r\nA Ti que eres digno, se dan en los cielos\r\nPoderes divinos, y gloria y honor;\r\nY mas bendiciones que darte podamos,\r\nPor siempre a tu trono se eleven, Señor.\r\n\r\n¡El Nombre sagrado del Dios de los cielos\r\nA una bendiga la gran creación!\r\n¡Y lleve al Cordero sentado en el trono,\r\nEl dulce tributo de su adoración!",
    },
    {
      ID: "294",
      Titulo: "Voz de amor",
      Letra:
        "Voz de amor y de clemencia\r\nEn el Gólgota sonó;\r\nY al oírla, con violencia\r\nEl Calvario retembló.\r\n“Consumado es” (tres veces)\r\nFue la voz que Cristo dio.\r\n\r\nVoz de escarnio y de ironía,\r\nVil pronuncia el hombre audaz,\r\nMientras Cristo en su agonía\r\nHace al sol nublar su faz.\r\n“Consumado es” (tres veces)\r\nFue la voz del Dios veraz.\r\n\r\nEntre angustias y dolores,\r\nSin amparo se encontró\r\nEl Señor de los señores,\r\nEl que al débil amparó.\r\n“Consumado es” (tres veces)\r\nY su espíritu entregó.\r\n\r\nYa el infierno está vencido,\r\nY la muerte es sin horror\r\nPara el hombre redimido\r\nQue confía en su Señor.\r\n“Consumado es” (tres veces)\r\nEl rescate de amor.",
    },
    {
      ID: "295",
      Titulo: "Ya pasó la noche triste",
      Letra:
        "Ya pasó la noche triste,\r\nNoche de dolor,\r\nCuando en cruz cruel sufriste,\r\n¡Oh, Señor!\r\n\r\nPor los hombres inmolado\r\nNunca más serás,\r\nNi por Dios desamparado\r\nTe verás.\r\n\r\nNi la tumba dominante\r\nTe tendrá jamás,\r\nDe la muerte ya triunfante\r\nYa Tú estás.\r\n\r\nEn la gloria levantado,\r\nPuedes hoy salvar,\r\nPor tu obra consumada,\r\nY guardar.\r\n\r\nYa tu iglesia redimida\r\nGoza de tu amor,\r\nMas desea tu venida\r\nCon fervor.\r\n\r\nPorque entonces la riqueza\r\nToda se verá,\r\nQue la cruz con su tristeza\r\nTe dará.",
    },
    {
      ID: "296",
      Titulo: "Yo quisiera ¡Oh, Salvador!",
      Letra:
        "Yo quisiera, Salvador,\r\nComprender tu gran amor;\r\nCerca de tu cruz estar,\r\nTu agonía contemplar.\r\n\r\nVeo yo que “Dios es luz”\r\nEn la muerte de Jesús;\r\nY veo en su gran dolor\r\nQue también “Dios es amor”.\r\n\r\nParticipo ya del pan,\r\nY mis ojos mirarán\r\nA Jesús que en cruz murió\r\nPor mí, indigno pecador.\r\n\r\nEn la copa yo veré\r\nLa figura, por la fe,\r\nDe la sangre de Jesús,\r\nDerramada allí en la cruz.\r\n\r\nHumillado quedaré\r\nAl mirar la cruz por fe;\r\n¡Oh, cuán vil he sido yo!\r\nPues por mí Jesús sufrió.",
    },
    {
      ID: "297",
      Titulo: "Con gran gozo y gran placer",
      Letra:
        "Con gran gozo y gran placer\r\nNos volvemos hoy a ver;\r\nNuestras manos otra vez estrechamos,\r\nSe contenta el corazón\r\nEnsanchándose de amor,\r\nTodos a una voz a Dios gracias damos.\r\n\r\nCoro:\r\n¡Bienvenido! ¡Bienvenido!\r\nLos hermanos de aquí,\r\nNos gozamos en decir\r\n¡Bienvenido! ¡Bienvenido!\r\nAl volvernos a reunir, ¡Bienvenido!\r\n\r\nHasta aquí Dios te ayudó,\r\nNi un momento te dejó,\r\nY a nosotros te volvió, ¡Bienvenido!\r\nEl Señor te acompañó,\r\nSu presencia te amparó,\r\nDel peligro te guardó, ¡Bienvenido!\r\n\r\nDios nos guarde en este amor,\r\nPara que de corazón,\r\nConsagrados al Señor, le alabemos.\r\nEn la eterna reunión\r\nDo no habrá separación,\r\nNuestra eterna adoración, le daremos.",
    },
    {
      ID: "298",
      Titulo: "Dios os guarde",
      Letra:
        "Dios os guarde con su gran poder,\r\nProtegidos y abrigados,\r\nRecibiendo sus cuidados;\r\nDios os guarde con su gran poder.\r\n\r\nCoro:\r\nEn fraterno amor nos veremos\r\nA los pies de nuestro Salvador,\r\nPara nunca más separarnos,\r\nUn redil con nuestro buen Pastor.\r\n\r\nDios os guarde por su tierno amor,\r\nY bebiendo de sus fuentes,\r\nAunque del hogar ausentes;\r\nDios os guarde por su tierno amor.\r\n\r\nDios os guarde del poder del mal,\r\nDe pecados y de errores,\r\nDe peligros y temores;\r\nDios os guarde del poder del mal.\r\n\r\nDios os guarde para su loor,\r\nPara su presente gozo,\r\nEn servicio y en reposo;\r\nDios os guarde para su loor.",
    },
    {
      ID: "299",
      Titulo: "Medita que has perdido",
      Letra:
        "Medita que has perdido\r\npor siempre un año más,\r\nun año de tu vida\r\nque nunca volverá.\r\nSus horas han marchado,\r\nllevándose al volar\r\nlas huellas del pecado\r\nque te han de condenar.\r\n\r\nCoro:\r\n¡Veloz el año pasa,\r\nquizás tu última ocasión!\r\nSé salvo mientras dura\r\nel día de salvación.\r\n\r\nMedita que pasaron\r\nal mundo eternal\r\nmil seres que empezaron\r\ncontigo el año actual.\r\nSon almas que abandonan\r\nla humana vanidad;\r\nson voces que pregonan\r\ncercana eternidad.\r\n\r\nMedita que el Maestro,\r\nbrindando salvación,\r\nmil veces a la puerta\r\nllamó del corazón.\r\nQuizás la voz que hubiste\r\nasí de rechazar,\r\npor vez postrera insiste,\r\ncansada de llamar.",
    },
    {
      ID: "300",
      Titulo: "Un año acaba hoy",
      Letra:
        "Un año acaba hoy,\r\nun año más voló,\r\ndurante el cual el Salvador\r\nme hablaba al corazón.\r\n\r\nCoro:\r\nDios sé propicio a mí,\r\nyo soy un pecador.\r\nConfieso mi pecado a ti,\r\nconfiado en Cristo estoy.\r\n\r\nNo sé si yo tendré\r\nun año más aquí,\r\nmas sé bien que la eternidad\r\nno tardará en venir.\r\n\r\nEl día de ayer se fue;\r\nmañana no llegó.\r\nMañana acaso muerto esté,\r\n¿qué haré del día de hoy?\r\n\r\nMi vida escrita está\r\ndelante del gran Juez;\r\nsi mira Dios la iniquidad,\r\nperdido yo seré.\r\n\r\nIré con fe al Jesús;\r\nsé que por mí murió;\r\nsé que en su sangre hay virtud,\r\ny que oye mi oración.",
    },
    {
      ID: "301",
      Titulo: "¡Oh nuestro Padre! ahora",
      Letra:
        "¡Oh, nuestro Padre! ahora\r\nvenimos a pedir\r\nBendigas a los novios\r\nque acábanse de unir;\r\nCorónalos, ¡Oh, Padre!\r\ncon celestial favor,\r\nHaz Tú que estén constantes,\r\ny fieles en amor.\r\n\r\nY Tú, Señor amante,\r\nque sufriste en la cruz,\r\nQue así tu amada iglesia\r\ngozara eterna luz,\r\nAyúdalos, rogamos,\r\na preparar su hogar,\r\nCuál el de Betania,\r\ndo tú podrás morar.\r\n\r\nEspíritu Divino,\r\ntú fiel Consolador,\r\nEn pruebas de la vida,\r\nen goces o aflicción,\r\nQue tengan tu potencia\r\nen toda plenitud,\r\nY en santidad de vida\r\ndemuestren tu virtud.\r\n\r\n¡Oh, Trino Dios eterno!\r\nEscucha esta oración,\r\nY en vuestro amor tan tierno,\r\ndanos contestación,\r\nHaz Tú que sea vista\r\nen su felicidad,\r\nDe Cristo y de su Iglesia\r\nla eterna unidad.",
    },
    {
      ID: "302",
      Titulo: "¡Oh Padre Dios te adoramos!",
      Letra:
        "¡Oh Padre Dios! te adoramos,\r\nDe corazón te alabamos,\r\nPorque en tu grande compasión,\r\nHas dado grata bendición\r\nA dos hermanos hoy.\r\n\r\nA ti tus hijos gracias dan,\r\nQue como hiciste con Adán,\r\nEsposa has aparejado;\r\nY hoy con gozo le has dado\r\nTu hijo a acompañar.\r\n\r\nY mientras en el mundo estén\r\nHaz Tú que mutuamente den\r\nLas tiernas pruebas de su amor,\r\nComo a su iglesia el Salvador\r\nContinuamente da.\r\n\r\n¡Oh! hazlos siempre procurar\r\nTu dulce comunión gozar,\r\nSiguiendo su obra terrenal,\r\nHasta que en el eterno hogar\r\nCon Cristo vivirán.",
    },
    {
      ID: "303",
      Titulo: "Señor con reverencia",
      Letra:
        "Señor, con reverencia aquí\r\nvenimos a rogar,\r\nQue tu más rica bendición\r\ndescienda a reposar\r\nSobre los dos, que hoy ante Ti,\r\nse unen en santo amor,\r\npara que Juntos sírvante\r\ncon gracia y con fervor.\r\n\r\nCoherederos son de Ti,\r\nunidos en amor;\r\nDales tu comunión, Señor,\r\nen ese nuevo hogar,\r\nSé Tú su amparo y su sostén,\r\nsé su consolador,\r\nSu consejero y proveedor,\r\nsé su continuo bien.\r\n\r\nConcédeles el gozo que\r\ndisipará el pesar,\r\nQue en el momento de aflicción,\r\nellos han de encontrar,\r\nLa dulce paz, el gran solaz,\r\nque has prometido dar\r\nAl corazón que en oración\r\nla sabe aprovechar.\r\n\r\nLos presentamos ante Ti,\r\ndales tu bendición,\r\nTu amor, tu gracia, gozo y paz\r\nderrama en profusión,\r\nDales paciencia, fe, piedad,\r\ncólmalos de tu bien,\r\nHasta que por la eternidad\r\nen tu mansión estén.",
    },
    {
      ID: "304",
      Titulo: "Durmiendo en calma",
      Letra:
        "Durmiendo en calma en el Señor,\r\nreposa el santo sin dolor.\r\nEn este sueño al despertar\r\ny hallarse en su deseado hogar.\r\n\r\nDurmiendo en él, la tempestad\r\nse cambia en gran serenidad;\r\nEn tal bonanza, el viento y mar\r\ncesan con furia de bramar.\r\n\r\nDurmiendo en él, no queda allí\r\nseñal de haber luchado aquí.\r\n¡No más maldad, no más dolor!\r\nCesó la pena y su amargor.\r\n\r\nDurmiendo en él, en santa paz,\r\nya nuestro hermano ve su faz;\r\nviviendo en refulgente luz,\r\nen compañía de Jesús.\r\n\r\nDurmiendo en él, hasta sonar\r\nla hora en que vendrá a buscar\r\nsus santos, para al cielo ir\r\ny en uno a todos reunir.\r\n\r\nYa vive en ti, oh Salvador.\r\nGracias te damos y loor,\r\nporque tu muerte anonadó\r\nla muerte, y su aguijón quitó.",
    },
    {
      ID: "305",
      Titulo: "Oye lo que la voz celeste dice",
      Letra:
        "Oye lo que la voz celeste dice\r\nde los que en paz con el Señor murieron;\r\nsu nombre exhala aromas y perfumes,\r\nblando es su lecho, y muy feliz su sueño.\r\n\r\nMurieron en Jesús y son benditos,\r\nsu espíritu disfruta ya del cielo,\r\ny de las asechanzas de este mundo\r\nincólumes y cándidos salieron.\r\n\r\nPurificados de terrena mancha,\r\nDios los acoge en su benigno seno,\r\ny en aquel buen lugar de santa gloria\r\ngozan felices galardón eterno.",
    },
    {
      ID: "306",
      Titulo: "¿Por qué lamentamos?",
      Letra:
        "¿Por qué lamentamos si marcha el hermano?\r\n¿Por qué ante su tumba temblamos\r\nde horror,\r\nsi todos creemos que vive su alma,\r\ny Cristo la estrecha en sus brazos de amor?\r\n\r\n¿No estamos nosotros viajando hacia arriba\r\ntambién, y siguiendo del tiempo el volar?\r\nJamás anhelemos retraso en las horas\r\nque al Dios bondadoso nos han de acercar.\r\n\r\nMedrosos temblamos, llevando a la tumba\r\nel cuerpo que yerto dejamos allí;\r\nMas hoy recordamos que Cristo, muriendo,\r\nel triunfo ganó por nosotros aquí.\r\n\r\nDe todos los suyos bendijo el sepulcro,\r\ny el lecho de todos su gracia ablandó.\r\nLos cuerpos que mueren, ¿do harán\r\nsu descanso,\r\nsi no donde el mismo Jesús descansó?\r\n\r\nDe allí levantose, subiendo a los cielos,\r\ny al hombre el camino dignose enseñar.\r\nTambién al Señor subirán nuestros cuerpos\r\nel día tremendo del gran despertar.\r\n\r\nResuene del ángel la aguda trompeta:\r\n“Hermanos, el sueño letal sacudid,\r\nAlzaos creyentes, que estáis bajo tierra,\r\n¡Oh justos benditos, al cielo subid!”",
    },
    {
      ID: "307",
      Titulo: "En las aguas de la muerte",
      Letra:
        "En las aguas de la muerte\r\nSumergido fue Jesús;\r\nMas su amor no fue apagado\r\nPor sus penas en la cruz;\r\nLevantóse de la tumba\r\nLas cadenas sacudió,\r\nY triunfante y victorioso\r\nA los cielos El subió.\r\nY triunfante y victorioso\r\nA los cielos El subió.\r\n\r\nCoro:\r\nSalvo soy, salvo soy;\r\nEn las aguas del bautismo\r\nHoy confieso yo mi fe;\r\nSalvo soy, salvo soy,\r\nY deseo consagrarme\r\nAl Señor que me salvó.\r\n\r\nEn las aguas del bautismo\r\nHoy confieso yo mi fe;\r\nJesucristo me ha salvado\r\nY por Cristo viviré;\r\nDesde hoy yo para el mundo\r\nY el pecado muerto estoy;\r\nY deseo entregarme\r\nAl Señor, que me salvó.\r\nY deseo entregarme\r\nAl Señor, que me salvó.\r\n\r\nYo, que estoy crucificado,\r\n¿Cómo más podré pecar?\r\nYo, que estoy resucitado,\r\nOtra vida he de llevar.\r\nPues, no reina ya en nosotros\r\nEl pecado engañador;\r\nPresentemos nuestros cuerpos\r\nA servir a nuestro Dios.\r\nPresentemos nuestros cuerpos\r\nA servir a nuestro Dios.",
    },
    {
      ID: "308",
      Titulo: "Yo quiero obedecerte",
      Letra:
        "Yo quiero obedecerte,\r\nJesús, mi Salvador,\r\nY en agua bautizarme,\r\nSegún tu ley, Señor.\r\n\r\nCoro:\r\nSeñor, que Tú me ayudes\r\nTu nombre a ensalzar,\r\nY en novedad de vida\r\nContinuamente andar.\r\n\r\nAsí la fe demuestro\r\n(Que sólo está en Jesús)\r\nque yo con El he muerto\r\nal mundo por su cruz.\r\n\r\nAl mundo yo renuncio,\r\nSus pompas vanas son;\r\nAhora al cielo aspiro\r\nDe todo corazón.\r\n\r\nEn novedad de vida\r\nContigo yo andaré,\r\nMi Salvador y Guía,\r\nMi Redentor y Rey.\r\n\r\nEntonces en tu reino,\r\nVencido todo el mal,\r\nDarame allí tu mano\r\nCorona celestial.",
    },
    {
      ID: "309",
      Titulo: "Yo vivía en el pecado",
      Letra:
        "Yo vivía en el pecado,\r\nY doctrinas del error,\r\nMe guiaban, engañado,\r\nA una muerte de terror.\r\n\r\nCoro:\r\nSoy salvado del abismo,\r\nCon Jesús al cielo voy,\r\nY confieso por bautismo\r\nQue del mundo ya no soy.\r\n\r\nTuve el corazón muy triste\r\nPor en vano paz buscar,\r\nPero a mi Señor dijiste:\r\n“Yo haréte descansar”.\r\n\r\nEs la sangre que me salva\r\nY en tu paz me guardará,\r\nEl Espíritu me sella,\r\nY me santificará.\r\n\r\nAntes, muerto en el pecado,\r\nYa he muerto en Jesús,\r\nY del mundo separado\r\nYo me juzgo por la cruz.\r\n\r\nEn el agua sumergido\r\nTestimonio a todos doy,\r\nQue yo en Cristo he creído,\r\nY por El salvado soy.",
    },
    {
      ID: "310",
      Titulo: "A Jesucristo quiero llegarme",
      Letra:
        "A Jesucristo quiero llegarme,\r\nsé que la dicha en él hallaré.\r\nÉl es mi amigo, tierno y amante;\r\ndulce es su nombre, santa su ley.\r\n\r\nCoro:\r\nVen, oh niño, ven. Con él feliz serás,\r\nnuevo corazón de él recibirás.\r\nCristo te aguarda, quiere tu bien;\r\na Jesucristo, niño, ven.\r\n\r\nDe Jesucristo, fuente de gracia,\r\nesta noticia grata te doy:\r\nQue ama a los niños, y los recibe;\r\nÉl me ha llamado, y a Cristo voy.\r\n\r\nEn Jesucristo todas mis culpas\r\nfueron cargadas, Él las llevó,\r\ny por su gracia me santifica,\r\npues en mi alma la derramó.\r\n\r\nCon Jesucristo voy cada día;\r\nÉl es mi apoyo, marcho por fe\r\nhacia su trono, y allá en la gloria\r\ncon Jesucristo yo reinaré.",
    },
    {
      ID: "311",
      Titulo: "Con estos ojitos",
      Letra:
        "Con estos ojitos que Dios me ha dado\r\na él tengo que mirar,\r\ny en el camino por él enseñado\r\nahora yo he de andar.\r\nMis piecesitos a él obedientes\r\nsus sendas han de guardar,\r\ny estos oídos a lo que es puro\r\nsólo deben escuchar.\r\n\r\nCon estas manitas, siempre sumisas,\r\nservir debo al Salvador;\r\nCon corazoncito buscar sus sonrisas,\r\ncon boca cantar su amor.\r\nY cuando al cielo por Dios sea llamado\r\npara ir al Señor Jesús,\r\na mi cabecita por él será dada\r\ncorona de gloria y luz.",
    },
    {
      ID: "312",
      Titulo: "Cristo amante, buen Pastor",
      Letra:
        "Cristo amante, buen Pastor,\r\noye Tú mi petición;\r\nmírame en tu gran amor,\r\ndame hoy tu bendición.\r\n\r\nCristo santo, veo en ti\r\nel ejemplo para mí.\r\nEres bueno, oh Salvador,\r\npuro es tu perfecto amor.\r\n\r\nYo también quisiera ser\r\nlo que en ti alcanzo a ver.\r\nDame nuevo corazón,\r\nreina en él, sé mi Señor.\r\n\r\nCristo mío, en humildad\r\na tus pies ahora estoy;\r\nen el reino celestial\r\nquiero yo contigo estar.",
    },
    {
      ID: "313",
      Titulo: "Cristo amó a los niños",
      Letra:
        "Cristo amó a los niños, tanto Él los amó\r\nque murió por ellos y así los salvó.\r\n\r\nCoro:\r\nYo soy débil niño – esto sé, esto sé,\r\npero a Cristo amo, y me ama Él.\r\n\r\nCristo me invita que le sirva acá,\r\na seguir sus paso Él me ayudará.\r\n\r\nJesucristo amante, yo te ruego aquí\r\nque me ayudes siempre a vivir por ti.",
    },
    {
      ID: "314",
      Titulo: "Cristo me ama",
      Letra:
        "Cristo me ama, me ama a mí,\r\nSu palabra dice así:\r\nNiños pueden ir a El,\r\nQuien es nuestro amigo fiel.\r\n\r\nCoro:\r\nSí, Cristo me ama, Sí, Cristo me ama,\r\nSí, Cristo me ama, la Biblia dice así.\r\n\r\nCristo me ama, El murió\r\nY la gloria nos abrió;\r\nMis pecados borrará,\r\nMe dará la entrada allá.\r\n\r\nCristo me ama, débil soy,\r\nPero a El las gracias doy,\r\nQue en el cielo vive ya\r\nY del mal me librará.\r\n\r\nCristo me ama, no se va,\r\nA mi lado siempre está,\r\nCuando El véngame a buscar,\r\nSiempre con El he de estar.",
    },
    {
      ID: "315",
      Titulo: "Cristo quiere ver nuestra luz",
      Letra:
        "Cristo quiere ver nuestra luz brillar\r\nEn la claridad de su divino hogar;\r\nEntre las tinieblas El desea ver\r\nNuestra luz brillante resplandecer.\r\n\r\nQue la luz, primero sea para El;\r\nDios conoce al niño que a su voz es fiel;\r\nDesde el alto cielo siente gran placer,\r\nViendo nuestras luces resplandecer.\r\n\r\nLos que para Dios brillan hoy acá,\r\nBrillarán más claro en el cielo allá;\r\nCristo grande gozo siempre ha de tener,\r\nViendo nuestras luces resplandecer.",
    },
    {
      ID: "316",
      Titulo: "Cuando leo en la Biblia",
      Letra:
        "Cuando leo en la Biblia cómo llama Jesús\r\ny bendice a los niños con amor,\r\nyo también quisiera estar\r\ny con ellos descansar\r\nen los brazos de mi buen Salvador.\r\nVer quisiera sus manos sobre mí reposar,\r\ncariñosos abrazos de él sentir;\r\nsus miradas disfrutar,\r\nlas palabras escuchar:\r\n“A los niños dejad a mí venir”.\r\n\r\nSin embargo, a su estrado en oración puedo ir\r\ny también de su amor participar.\r\nPues si aquí buscarle sé,\r\nle veré y le escucharé\r\nen el reino que Él fue a preparar.\r\n\r\n¡Cuántos hay que no saben de esa bella\r\nmansión,\r\ny que no quieren a Jesús oir!\r\nYo quisiérales mostrar\r\nque para ellos hay lugar\r\nen el cielo do los convida a ir.\r\n\r\n¡Cuánto anhelo aquel tiempo venturoso sin fin,\r\nel más grande, el más lúcido, el mejor,\r\ncuando de cualquier nación\r\nniños mil sin distinción\r\na los brazos acudan del Señor!",
    },
    {
      ID: "317",
      Titulo: "Del trono santo en derredor",
      Letra:
        "Del trono santo en derredor\r\nniñitos mil están,\r\nlos rescatados del Señor,\r\ny allí las gracias dan. Cantan:\r\n\r\nCoro:\r\n“¡Gloria, gloria, Aleluya al santo Dios!”\r\n\r\nMas, ¿cómo al mundo superior,\r\naquel celeste hogar\r\nen donde todo es paz y amor,\r\npudieron ya llegar? Cantan:\r\n\r\nPorque el Señor su sangre dio\r\nen precio de expiación;\r\ncon ella los purificó\r\npor grande compasión. Cantan:\r\n\r\nBuscaron ellos a Jesús,\r\nsu nombre amando aquí,\r\ny ahora, ya en perfecta luz,\r\nsu rostro ven allí. Cantan:\r\n\r\nRopaje blanco de esplendor\r\ncada uno viste allí.\r\nEstán allá con el Señor,\r\neternamente así. Cantan:",
    },
    {
      ID: "318",
      Titulo: "Desde los cielos el buen Salvador",
      Letra:
        "Desde los cielos el buen Salvador\r\nViene por mí, viene por mí;\r\nEn un pesebre de pobre mesón,\r\nHelo aquí, aquí.\r\n\r\nCoro:\r\n¡Qué grande amor! ¡Qué grande amor!\r\nCristo mostró por mí;\r\n¡Qué grande amor! ¡Qué grande amor!\r\nCristo mostró por mí.\r\n\r\nPregona el ángel mensaje de amor:\r\n“Vino la luz, vino salud,\r\nos ha nacido hoy un Salvador,\r\nCristo Jesús, Jesús”.\r\n\r\nCantan los ángeles: “Al mundo paz,\r\n¡Gloria a Dios! ¡Gloria a Dios!\r\nPaz en la tierra y al hombre solaz,\r\n¡Gloria a Dios, a Dios!”\r\n\r\nVienen los magos en busca del Rey,\r\nAl preguntar: ¿Dónde está?\r\nLas Escrituras contestan su fe:\r\n“En Bethlehem está”.\r\n\r\nVienen pastores dejando su grey,\r\nHasta Belén, y al niño ven;\r\nVuelven contentos y llenos de fe,\r\nHablan de El, de El.",
    },
    {
      ID: "319",
      Titulo: "El Señor recibe con agrado",
      Letra:
        "El Señor recibe con agrado a los pequeños;\r\ndel pecado y todo mal los vino a redimir.\r\nDice: “De los tales es el reino de los cielos;\r\nno los impidáis, mas permitidlos acudir”.\r\n\r\nCoro:\r\nJesucristo a los niños\r\nquiere recibir y ser su Salvador,\r\ny los niños convertidos\r\npueden alegrarse siempre con su amor.\r\n\r\nLos pequeños pueden convertirse del pecado\r\ny entregarse a Cristo, quien los llama con amor.\r\nPueden apartarse de las sendas de este mundo,\r\npara andar en las pisadas de su Salvador.\r\n\r\nA los hijos manda Dios que honren a sus padres\r\npara que les vaya bien y agraden al Señor;\r\nque no mientan, ni blasfemen de su santo nombre,\r\nque se acuerden en su juventud de su Creador.",
    },
    {
      ID: "320",
      Titulo: "Gozo la santa Palabra leer",
      Letra:
        "Gozo la santa Palabra leer,\r\nCosas preciosas allí puedo ver;\r\nY sobre todo, que el gran Redentor\r\nEs de los niños el tierno Pastor.\r\n\r\nCoro:\r\nCon alegría yo cantaré,\r\nAl Redentor, tierno Pastor,\r\nQue en el Calvario por mí murió,\r\nSí, sí, por mí murió.\r\n\r\nMe ama Jesús, pues su vida entregó,\r\nPor mi salud, y de niños habló:\r\n“Dejad a los niños que vengan a Mí,\r\npara salvarlos mi sangre vertí”\r\n\r\nSi alguien pregúntame como lo que sé,\r\n“Busca a Jesús, pecador” le diré,\r\n“Por su palabra que tienes aquí,\r\npuedes saber que Jesús te ama a ti”.",
    },
    {
      ID: "321",
      Titulo: "Hay Amigo para niños",
      Letra:
        "Hay Amigo para niños,\r\nallá en el cielo está;\r\namigo que no cambia,\r\nsu amor no menguará.\r\nAmigos terrenales\r\nel tiempo cambiará,\r\nmas Él por siempre el mismo\r\namigo fiel será.\r\n\r\nHay la casa para niños,\r\nallá en el cielo está,\r\ndo Cristo reina en gloria,\r\ny paz y gozo da:\r\nY casa semejante\r\njamás ha habido aquí,\r\npues todos los niñitos\r\nfelices son allí.\r\n\r\nHay corona para niños,\r\nallá en el cielo está,\r\ny aquel que busca a Cristo\r\nmuy pronto la tendrá.\r\nDe gloria es la corona,\r\nde Cristo inmenso don\r\na los que en él confían\r\nde todo corazón.\r\n\r\nHay un canto para niños,\r\nallá en el cielo está;\r\npor más que sea cantado,\r\na nadie cansará.\r\nEl tema es de Cristo\r\nque tanto los amó,\r\nque por querer salvarlos\r\nsu sangre derramó.\r\n\r\nHay descanso para niños,\r\nallá en el cielo está,\r\ny aquel que ama a Cristo\r\nallí descansará\r\nde todos sus dolores,\r\ntristezas y maldad,\r\ncon otros niños salvos\r\npor la eternidad.",
    },
    {
      ID: "322",
      Titulo: "He aquí a todo pueblo",
      Letra:
        "He aquí a todo pueblo\r\nnuevas de gran gozo doy,\r\nque en Belén, según promesa,\r\nes Jesús nacido hoy.\r\nEste es Cristo el Salvador,\r\nes Mesías, el Señor.\r\n\r\nYa resuena el dulce canto\r\nde este mundo en ancha faz:\r\n“Gloria a Dios en las alturas,\r\nen la tierra dulce paz.\r\nA los hombres proclamad,\r\nSea buena voluntad”.",
    },
    {
      ID: "323",
      Titulo: "Jesucristo ha venido",
      Letra:
        "Jesucristo ha venido en busca de joyas,\r\nTodo niño redimido su joya será.\r\n\r\nCoro:\r\nComo estrellas que brillan,\r\nSon los niños que le aman,\r\nLos tesoros que adornan\r\nSu Rey y Señor.\r\n\r\nTiene Cristo en su corona\r\nbrillantes preseas,\r\nCada joya que le adorna\r\ncon sangre compró.\r\n\r\nEl recoge los tesoros\r\nde niños amantes;\r\nY en su seno los corderos\r\nJesús llevará.\r\n\r\nTanto niños como niñas\r\nque acudan a Cristo,\r\nSon las joyas escogidas\r\npreciosas a El.\r\n\r\nCon su sangre derramada\r\nEl compra las joyas;\r\nNingún alma no salvada\r\nsu reino verá.",
    },
    {
      ID: "324",
      Titulo: "La nave “Evangelista”",
      Letra:
        "La nave “Evangelista”\r\nmarcha, marcha;\r\nla nave “Evangelista”\r\nmarcha para Canaán.\r\nLos que embarcarse quieran,\r\nquieran, quieran,\r\nlos que embarcarse quieran,\r\nbienvenidos, sí, serán.\r\n\r\nCoro:\r\n“¡Gloria en las alturas!”\r\nLos de abordo cantan dulcemente:\r\n“¡Gloria en las alturas a nuestro Capitán!”\r\n\r\nDesembarcaron miles,\r\nmiles, miles;\r\ndesembarcaron miles\r\nen buen puerto siglos ha.\r\nY miles más navegan,\r\nhoy navegan,\r\ny miles más navegan\r\npor las mismas aguas ya.\r\nCon viento en popa vuelan,\r\nvuelan, vuelan.\r\nCon viento en popa vuelan\r\nhacia aquel florido hogar.\r\nFelices voces se oyen,\r\nse oyen, se oyen.\r\nFelices voces se oyen\r\nresonando por la mar.\r\n\r\nEmbárcate conmigo,\r\nsí, conmigo,\r\nembárcate conmigo,\r\ntú, cansado de pecar.\r\nDescanso te prometo,\r\nte prometo.\r\nDescanso te prometo\r\nen aquel feliz lugar.",
    },
    {
      ID: "325",
      Titulo: "Lindas las manitas son",
      Letra:
        "Lindas las manitas son\r\nque obedecen a Jesús,\r\nlindos ojos son también\r\nlos que están llenos de luz.\r\n\r\nCoro:\r\nLindas son las manos\r\nque obedecen al Señor,\r\nlindos también los ojos\r\nllenos de amor de Dios.\r\n\r\nLo que puedes tú hacer\r\nCristo te lo exigirá.\r\nHazlo, pues, con gran placer.\r\nHazlo y contento estarás.\r\n\r\nLas manitas hechas son\r\npara el Salvador servir;\r\ntambién nuestro corazón\r\ndebe por Cristo latir.\r\n\r\nY los labios para orar\r\ny alabar al Salvador,\r\nLos piecitos han de andar\r\nlistos en obras de amor.",
    },
    {
      ID: "326",
      Titulo: "¿Me puedes decir, piedrecita?",
      Letra:
        "¿Me puedes decir, piedrecita, piedrecita,\r\nme puedes decir, piedrecita junto al mar,\r\nel secreto de tu vida aquí?\r\n¡Oh, cuéntamelo a mí!\r\n\r\nEs el amor de Dios en los cielos,\r\nel Dios que nos hizo – a mí y a ti;\r\nY cada día yo alabo a él,\r\ntranquila junto al mar.\r\n\r\n¿Me puedes decir, florecilla, florecilla,\r\nme puedes decir, florecilla en mi jardín,\r\nel secreto de tu dulce olor?\r\n¡Oh, dímelo a mí!\r\n\r\nEs el amor de Dios en los cielos,\r\nel Dios que nos hizo – a mí y a ti.\r\nY cada día respiro a él,\r\nfragante en tu jardín.\r\n\r\n¿Me puedes decir, pajarito, pajarito,\r\nme puedes decir, pajarito tan cantor,\r\nel secreto de tu canción feliz?\r\n¡Quisiéralo saber!\r\n\r\nEs el amor de Dios en los cielos, los cielos,\r\nel Dios que nos hizo – a mí y a ti.\r\nY cada día yo alabo a él,\r\ncantando su loor.\r\n\r\n¿Me puedes decir tú también, oh niñito,\r\nme puedes decir, oh niñito, tú también,\r\nel secreto de tu felicidad?\r\n¡Lo quiero yo saber!\r\nEs el amor de Dios en los cielos,\r\nel Dios que nos hizo – a mí y a ti.\r\nY cada día yo busco a él,\r\npués Él lo quiere así.\r\n\r\nCoro final:\r\nPues al amor de Dios en los cielos,\r\nal Dios que nos hizo – a mí y a ti,\r\nel loor de toda la creación\r\npor siempre se dará.",
    },
    {
      ID: "327",
      Titulo: "¿No quieres ser cristiano?",
      Letra:
        "¿No quieres ser cristiano en la niñez?\r\n(Bis)\r\nTristísimo engaño\r\nque te traerá gran daño,\r\nes creer que en otro año\r\nlo serás.\r\n\r\n¿No amarás a Cristo en la niñez? (Bis)\r\nLos niños Él ha amado,\r\ny del cielo ha descendido,\r\ny la cruz por ti ha llevado\r\nen su amor.\r\n\r\nElige tú el cielo en la niñez, (Bis)\r\ny Cristo, fiel amigo,\r\nte será un buen abrigo\r\ncontra todo enemigo\r\nen la niñez.\r\n\r\n¡Oh, entonces sé cristiano en la niñez!\r\n(Bis)\r\nLa cosa más segura\r\nes que sólo habrá tristura\r\nen la eternidad futura\r\nsin Jesús.",
    },
    {
      ID: "328",
      Titulo: "Oh jóvenes, venid",
      Letra:
        "¡Oh, jóvenes! Venid, sus brillante pabellón\r\nCristo ha desplegado hoy en la nación;\r\na todos en sus filas os quiere recibir\r\ny con El a la pelea os hará salir.\r\n\r\nCoro:\r\nVamos a Jesús, compañeros, sin temor,\r\nVamos a la lid, inflamados de valor;\r\nJóvenes luchemos todos contra el mal,\r\nEn Jesús tenemos nuestro general.\r\n\r\nLas armas invencibles del jefe guiador\r\nSon el evangelio de su gran amor;\r\nCon ellas revestidos y llenos de poder,\r\nCompañeros, acudamos, vamos a vencer.\r\n\r\nQuien salga a la pelea su voz escuchará,\r\nCristo la victoria le concederá;\r\nSalgamos compañeros, luchemos, sí, por El,\r\nCon Jesús conquistaremos inmortal laurel.",
    },
    {
      ID: "329",
      Titulo: "¿Quién del cielo descendió?",
      Letra:
        "¿Quién del cielo descendió?\r\nCristo el Salvador.\r\n¿En pobreza quién nació?\r\nCristo el Salvador.\r\n\r\nCoro:\r\nCantaremos la canción;\r\n¡Oh cuán claro y dulce el son!\r\nNos ofrece salvación\r\nCristo el Salvador.\r\n\r\n¿En madero quién murió?\r\nCristo el Salvador.\r\n¿Quién a mí me rescató?\r\nCristo el Salvador.\r\n¿Quién promete perdonar?\r\nCristo el Salvador.\r\n¿Por creer quién vida da?\r\nCristo el Salvador.\r\n\r\n¿Quién del cielo bajará?\r\nCristo el Salvador.\r\n¿Quién allá nos llevará?\r\nCristo el Salvador.",
    },
    {
      ID: "330",
      Titulo: "Quiere Jesús que yo brille",
      Letra:
        "Quiere Jesús que yo brille\r\nMientras que viva acá,\r\nY que le complazca siempre\r\nEn clase, juego, hogar.\r\n\r\nCoro:\r\n¡Brillando! ¡Brillando!\r\nQuiere Jesús que yo brille,\r\n¡Brillando! ¡Brillando!\r\nYo brillaré para El.\r\n\r\nQuiere Jesús que sea amable\r\nCon cuantos llegue a ver,\r\nPara que vean qué alegres\r\nSus niños pueden ser.\r\n\r\nPediré a Cristo su ayuda,\r\nY limpio corazón;\r\nImitaré su dulzura\r\nBrillando para El.\r\n\r\nYo brillaré para Cristo,\r\nCon su poder podré,\r\nDía tras día le sirvo,\r\nY al fin al cielo iré.",
    },
    {
      ID: "331",
      Titulo: "¿Sabes cuánta clara estrella?",
      Letra:
        "¿Sabes cuánta clara estrella\r\npresta al cielo su fulgor?\r\n¿Sabes cuánta nube bella\r\nva del mundo alrededor?\r\nSólo Dios las ha contado\r\ny ninguna le ha faltado.\r\nEntre todas, ¿cuántas son? (Bis)\r\n\r\n¿Sabes cuántos pajarillos\r\njugueteando al sol están?\r\n¿Sabes cuántos pececillos\r\nen el agua saltos dan?\r\nDios a todos ha creado,\r\nde la vida el gozo ha dado\r\npara disfrutar su don. (Bis)\r\n\r\n¿Sabes cuánto tierno niño\r\ncon el sol despierta ya,\r\namparado del cariño\r\nde su madre alegre está?\r\nDios, que a todos ha otorgado\r\nsu placer y buen agrado,\r\nte conoce y te ama a ti. (Bis)",
    },
    {
      ID: "332",
      Titulo: "Si a Jesús acudo",
      Letra:
        "Si a Jesús acudo, me bendecirá,\r\ny de mi tristeza me consolará.\r\n\r\nCoro:\r\nSi a Jesús acudo, me bendecirá,\r\ncomo a todo niño que a su lado va.\r\n\r\nSi a Jesús acudo, me dirá que sí,\r\npues tomó mis culpas y murió por mí.\r\n\r\nSi a Jesús acudo, apoyado en él,\r\npronto he de ir al santo, célico vergel.\r\n\r\nY con vestiduras blancas como luz,\r\nmiraré la gloria del Señor Jesús.",
    },
    {
      ID: "333",
      Titulo: "Tentado no cedas",
      Letra:
        "Tentado, no cedas; ceder es pecar,\r\nMás fácil seráte luchando triunfar;\r\n!Valor! pues, gustoso domina tu mal\r\nJesús librar puede de asalto mortal.\r\n\r\nCoro:\r\nA Jesús, pues acude;\r\nEn sus brazos tu alma\r\nHallará dulce calma,\r\nEl te hará vencedor.\r\n\r\nEvita el pecado, procura agradar\r\nA Dios, a quien debes por siempre ensalzar,\r\nNo manche tus labios impúdica voz;\r\nTu corazón guarda de codicia atroz.\r\n\r\nAmante, benigno y enérgico sé,\r\nEn Cristo ten siempre indómita fe;\r\nVeraz sea tu dicho, de Dios es tu ser;\r\nCorona te espera y vas a vencer.",
    },
    {
      ID: "334",
      Titulo: "Ama la Biblia",
      Letra:
        "Ama la Biblia que Dios nos ha dado,\r\nPues nos enseña divina verdad;\r\nCristo es su tema, el Hijo entregado\r\nPara salvarnos de nuestra maldad.\r\n\r\nCoro:\r\nAma la Biblia, lee la Biblia,\r\nSigue a la Biblia, de Dios es el don.\r\n\r\nLee la Biblia, sus bellas historias\r\nTraen al alma salud celestial;\r\nLlenen tu espíritu todas sus glorias,\r\nY gozarás de su luz eternal.\r\n\r\nSigue a la Biblia que puede librarnos\r\nPor los peligros que abundan aquí;\r\nY al fin con Cristo podremos gozarnos,\r\nViendo su faz y sus glorias allí.\r\n\r\nGracias a Dios por su Don inefable,\r\nEl se revela al humano por fe;\r\nEn su Palabra con gozo insondable\r\nYa nos llegamos delante del Rey.\r\n\r\nAún este mundo y los cuerpos celestes\r\nHan de llegar a su punto final;\r\nMas, cuando pasen las cosas terrestres,\r\nFirme estará la Palabra eternal.",
    },
    {
      ID: "335",
      Titulo: "Cristo, cuando aquí bajó",
      Letra:
        "Cristo, cuando aquí bajó,\r\nantes que en la cruz murió,\r\na los niños recibió;\r\nniños como yo.\r\n\r\nMadres los llevaron, sí,\r\nmucha gente hubo allí.\r\nDijo Él: “Venid a mí”,\r\n¡niños como yo!\r\n\r\nA ninguno rechazó;\r\nmas a todos convidó.\r\nA los niños Él amó,\r\nniños como yo.\r\n\r\nPues Jesús por mí murió;\r\nÉl al niño redimió.\r\n¡Oh, a cuántos Él salvó!\r\nniños como yo.",
    },
    {
      ID: "336",
      Titulo: "Escuchad la voz de Cristo",
      Letra:
        "Escuchad la voz de Cristo,\r\n¡cuán dulce es!\r\n¡Ved! los niños se congregan a sus pies.\r\nLos pequeños abrazados pronto son,\r\ny el Señor a todos da su bendición.\r\n\r\nLos discípulos se oponen con tesón\r\na que traigan a los niños al Señor.\r\nSe entristecen… mas al fin su corazón\r\nse hace alegre; Cristo da su bendición.\r\n\r\nLuego a los que siguen dice: “Estos van\r\na mi reino; allí por siempre brillarán.\r\nNo los impidáis, pues; antes id, llamad\r\na los niños. Aun a todos convidad”.\r\n\r\nTodavía convidando Cristo está;\r\na los niños que le sirvan, busca ya.\r\nQue digamos, pues, alegres: “Tuyo soy;\r\neres mi Señor, oh Cristo, desde hoy”.",
    },
    {
      ID: "337",
      Titulo: "Hoy estamos navegando",
      Letra:
        "Hoy estamos navegando\r\nhacia el puerto celestial,\r\nvamos a la luz llegando\r\nde la casa paternal.\r\n\r\nCoro:\r\nPronto pasarán los males\r\ny los grandes temporales;\r\nya las glorias celestiales\r\nnos alegran con su albor.\r\n\r\nMiles han desembarcado\r\nmás allá del vasto mar;\r\nmiles más están viajando,\r\npara ti aún hay lugar.\r\n\r\nNuestras velas despleguemos\r\na las brisas de Sion;\r\ndulces cantos entonemos,\r\ncantos de la salvación.\r\n\r\nEn el puerto al fin anclados,\r\ntoda prueba queda atrás,\r\ny con Cristo, a quien amamos,\r\ngozaremos de la paz.",
    },
    {
      ID: "338",
      Titulo: "Jesucristo nuestro",
      Letra:
        "Jesucristo nuestro es el buen Pastor;\r\nen él refugiados piérdese el temor.\r\nSiempre le sigamos, y Él nos guiará;\r\ndoquier Él nos lleve bendición habrá.\r\n\r\nJesucristo nuestro nos conoce ya;\r\nhabla a sus corderos y los llevará.\r\nCuando nos reprende muéstranos su amor;\r\ntuyos sólo seamos, tierno Salvador.\r\n\r\n¡Jesucristo nuestro! Él por nos murió;\r\nhasta a los corderos Él los rescató.\r\nY su marca pone, siempre por igual:\r\n“Como Él anduvo ande cada cual”.\r\n\r\n¡Jesucristo nuestro! ¡Fuerte protector!\r\nA sus corderitos guarda el buen Pastor.\r\nCon Jesús la muerte nunca espantará;\r\nCristo la victoria a los suyos da.",
    },
    {
      ID: "339",
      Titulo: "La mujer samaritana",
      Letra:
        "La mujer samaritana\r\na sacar el agua va,\r\nsin pensar que Jesucristo\r\nesperando está.\r\nViene Cristo en busca suya\r\npara ser su Salvador;\r\nsu miseria y su pecado\r\nsabe el Redentor.\r\n\r\nCoro:\r\nOye pues las gratas nuevas:\r\nel Señor te salvará.\r\nEs el mismo Jesucristo, esperando está.\r\n\r\nEscuchando la palabra\r\nque revela su maldad,\r\nrecordando su pecado,\r\ncompungida está.\r\nÉl le ofrece el agua viva,\r\ny le da la salvación;\r\nÉl le da la paz completa\r\ny le da perdón.\r\n\r\nElla corre luego a casa,\r\nhabla a todos de Jesús:\r\n“¿No será el Mesías éste\r\nquien nos trae luz?”\r\nY la gente convencida\r\nva también al Salvador,\r\ny le pide que les hable\r\nde su gran amor.\r\n\r\nHoy, ayer, y por los siglos\r\nes el mismo Salvador,\r\nes el mismo Jesucristo\r\ny el mismo amor.\r\nHoy te busca, hoy te llama.\r\nNo le hagas esperar,\r\nporque el tiempo de su gracia\r\npronto acabará.",
    },
    {
      ID: "340",
      Titulo: "Los ángeles de Dios",
      Letra:
        "Los ángeles de Dios tributan su loor\r\ncon corazón y voz a Cristo el Redentor.\r\n¿Y nuestro empeño no será\r\nque suene el eco más allá?\r\nCoro:\r\nSuene el eco (suene el eco). (Bis)\r\nSuene el eco, suene el eco más allá.\r\n\r\nEl esplendente sol, la luna con su albor\r\ny las estrellas son testigos de su amor.\r\nPues, ¡cuánto más su pueblo hará\r\nque suene el eco más allá!\r\n\r\nEl fuego, viento y mar,\r\nlos cambios de sazón,\r\nsu testimonio dan al fuerte Creador.\r\nY a él la iglesia cantará\r\nque suene el eco más allá.",
    },
    {
      ID: "341",
      Titulo: "Siervos de Jesús",
      Letra:
        "Siervos de Jesús, hombres de verdad,\r\nGuardas del deber somos, sí;\r\nLibres de maldad, ricos en bondad,\r\nY seremos fieles en la lid.\r\n\r\nCoro:\r\n¡Firmes! ¡Fuertes! Alcen la bandera,\r\nGrande, noble enseña del deber,\r\n¡Pronto! ¡Bravos! Pasen la consigna,\r\nMarchen todos, vamos a vencer.\r\n\r\n¡Cuán hermosos son los que sin temor,\r\nListos al llamar del clarín,\r\nLuchan sin cesar, sufren sin dudar,\r\nGuardas del deber siempre hasta el fin!\r\n\r\nNuestro Capitán es ya vencedor,\r\nEl nos redimió por su cruz;\r\nGuardas del deber, El nos da poder\r\nY nos guiará en su santa luz.\r\n\r\nInvencibles son los que con afán,\r\nCada día dan al deber;\r\nGloria y luz tendrán y recibirán\r\nGrande galardón del Redentor.",
    },
    {
      ID: "342",
      Titulo: "A Dios sea la gloria",
      Letra:
        "A Dios sea la gloria, al mundo El dio\r\nAl Hijo bendito que por nos murió;\r\nExpió los pecados de quien en El cree,\r\nAbriónos la senda hacia Dios por la fe.\r\n\r\nCoro:\r\n¡Gloria a Dios! ¡Gloria a Dios!\r\nQue de tal modo amó\r\nAl que lejos de El en pecado se halló;\r\nVenid por el Hijo al gran Dios Salvador,\r\nY dadle la gloria por tan grande amor.\r\n\r\nLa sangre de Cristo la obra efectuó,\r\nPara todo creyente perdón alcanzó;\r\nSi en Cristo confía el más vil pecador,\r\nPerdón en el acto le otorga el Señor.\r\n\r\nInmensa la obra de Cristo en la cruz,\r\nEnorme la culpa se ve por su luz;\r\nAl mundo El vino, nos iluminó,\r\nY por nuestras culpas el Justo murió.",
    },
    {
      ID: "343",
      Titulo: "A este mundo Dios amó",
      Letra:
        "A este mundo Dios amó\r\nY a su Hijo nos mandó,\r\nNuestras penas a sufrir,\r\nY a las almas redimir.\r\n!Oh, qué gracia en El se ve!\r\nDistinguida por la fe,\r\nQue le dice al pecador,\r\n“Dios es luz, Dios es amor”.\r\n\r\nAl morir Jesús venció,\r\nPadeciendo gozo dio,\r\nEl sufrió la maldición\r\nPara darnos bendición.\r\nDe la tumba El triunfó,\r\nA Satán El aplastó;\r\nCristo al cielo ascendió,\r\n¡Hombre que a la gloria entró!\r\n\r\nCristo vive siempre allá,\r\nPor su iglesia aboga ya;\r\nY quien hoy confía en El,\r\nHallará un amigo fiel.\r\nCristo pronto volverá,\r\nVictorioso reinará;\r\nAlabanzas y loor\r\nTe daremos, oh, Señor.",
    },
    {
      ID: "344",
      Titulo: "Alma doliente y llorosa",
      Letra:
        "Alma doliente y llorosa,\r\nQue paz anhelas tener,\r\nQue quieres triste y ansiosa,\r\nTu suerte eterna saber,\r\nDeja tus males pasados\r\nY oye una voz resonar;\r\nDice: “Venid los cansados,\r\nQue Yo os haré descansar”.\r\n“Que Yo os haré descansar”.\r\n\r\nAlma de culpas cargada,\r\nQue cerca estás de morir,\r\nLuchas y en vano angustiada\r\nDel mal intentas salir.\r\n¡Oye! Conserva esperanza,\r\nCristo te quiere salvar,\r\nY si le tienes confianza,\r\nEn El podrás descansar.\r\nEn El podrás descansar.\r\n\r\nAlma, la noche se acerca\r\nY tú no encuentras mansión,\r\nLa oscuridad te rodea,\r\nTe asalta la perdición.\r\nBusca en Jesús un asilo;\r\nSu amor te puede salvar,\r\nY hallarás hogar tranquilo\r\nDonde El te hará descansar.\r\nDonde El te hará descansar.",
    },
    {
      ID: "345",
      Titulo: "Clavado en cruz",
      Letra:
        "Clavado en cruz, Jesús murió,\r\nPor mi maldad allí sufrió,\r\nEn mi lugar El se encontró,\r\nMi salvación así compró.\r\n\r\nCoro:\r\nOye la voz del Salvador,\r\n“Mira y ve si habrá dolor\r\nCual mi dolor, y es para ti,\r\nVen, alma, ven, oh ven a Mí”.\r\n\r\nLa faz del sol se oscureció,\r\nEl velo en dos se dividió;\r\nAl Hijo Dios desamparó,\r\nLa maldición en El cargó.\r\n\r\n¿Y puede ser? ¿Sufriste así,\r\nSeñor Jesús de amor por mí?\r\nNo puedo más, me entrego hoy,\r\nSin más tardar a Ti me doy.",
    },
    {
      ID: "346",
      Titulo: "Yo le amo",
      Letra:
        "Cristo Jesús del cielo descendió,\r\nPara salvarme de la perdición,\r\n¡Qué grande amor así me desplegó!\r\nY ahora yo me gozo de su salvación.\r\n\r\nCoro:\r\nYo le amo, sí, le amo,\r\nPorque me amó a mí;\r\nY quiero complacer a Cristo\r\nSiempre aquí.\r\n\r\nPor mí murió, oh, ¡cuánto le costó\r\nEl redimirme de mi iniquidad!\r\nMas de la muerte el Salvador triunfó,\r\nY ocupa ya el trono de la majestad.\r\n\r\nPronto Jesús vendrá y me llamará,\r\nY en su presencia yo me gozaré;\r\nMi corazón hoy anhelando está\r\nEl día en que sus glorias yo contemplaré.",
    },
    {
      ID: "347",
      Titulo: "Crucificado fue",
      Letra:
        "Crucificado fue mi Salvador,\r\nPor mis pecados, sé, Cristo el Señor.\r\n\r\nCoro:\r\nDesde la tumba subió,\r\nSí, triunfante El resucitó;\r\nPara siempre ya dominio sobre el mal\r\nCon los santos tiene en gloria celestial;\r\nTriunfó, triunfó, ¡Aleluya! El triunfó.\r\n\r\nInútil la prisión del Salvador,\r\nVana la detención de mi Señor.\r\n\r\nLa muerte ya venció Cristo el Señor,\r\nLa salvación nos dio el Redentor.",
    },
    {
      ID: "348",
      Titulo: "De mil maneras",
      Letra:
        "De mil maneras procuré\r\ncalmar temor, mas vano fue;\r\nLa Biblia ahora aceptaré,\r\ny creeré en Cristo.\r\n\r\nTinieblas, muerte y maldición\r\nMe tienen de alma y corazón;\r\nmas luz y vida y bendición\r\nencontraré en Cristo.\r\n\r\nMurió y ya vive a mi favor;\r\nen hecho y dicho es siempre amor;\r\ny para el pobre pecador\r\nninguno hay cual Cristo.\r\n\r\nAunque otros búrlense de mí,\r\niré, Señor Jesús, a ti\r\ncon lo que he hecho y lo que fui,\r\npues eres Tú el Cristo.",
    },
    {
      ID: "349",
      Titulo: "Dios convídate",
      Letra:
        "Dios convídate, oh, pródigo,\r\n“!Ven, oh, ven a Mí!”\r\nHoy su voz escucha,\r\nLlega ahora a ti,\r\nNo rechaces su oferta\r\nDe amor y salvación,\r\nY recibirás su perdón.\r\n\r\nCoro:\r\n¡Ven… oh, ven a Mí!\r\n¡Cansado pródigo , ven!\r\nHoy te brindo a ti,\r\nLa vida y todo bien.\r\n\r\nVen, tu mísero estado\r\nTe impele a regresar,\r\n¡Cuánto has padecido\r\nLejos de tu hogar!\r\nHambre, sed y cansancio\r\nHan sido tu porción,\r\n¡Oh, cuán triste es tu corazón!\r\n\r\n¡Cuánto gozo te espera,\r\nSi ahora al Padre vas!\r\nUna fiesta eterna\r\nEn su amor tendrás;\r\nCon anillo, zapatos,\r\nVestido principal,\r\nGozarás de paz celestial.",
    },
    {
      ID: "350",
      Titulo: "El Salvador Jesús (por mí murió)",
      Letra:
        "El Salvador Jesús por mí murió,\r\nde la condenación Él me libró.\r\nLa vida eterna dádiva es de Dios\r\npor Cristo el Salvador.\r\n\r\nCoro:\r\n“En verdad, en verdad”, Cristo dice a ti,\r\n“En verdad, en verdad, el que cree en mí\r\nla vida eterna tiene”, y es así\r\npor Cristo el Salvador.\r\n\r\nToda mi iniquidad Jesús llevó,\r\ntoda mi deuda el Salvador pagó,\r\ny así la vida eterna Dios me dio\r\npor Cristo el Salvador.\r\n\r\nIndigno soy, mas nunca dudaré,\r\nÉl no echa fuera a aquel que va con fe.\r\nDios me ofreció la vida y la acepté\r\npor Cristo el Salvador.",
    },
    {
      ID: "351",
      Titulo: "Es la voz de Cristo",
      Letra:
        "Es la voz de Cristo urgente;\r\nllama a nuestro corazón\r\ndía y noche tan paciente.\r\nSuave dice: “Ven a mí”.\r\n\r\nLos apóstoles oyeron\r\nsu llamada: “A mí venid”,\r\ny obedientes le siguieron\r\nencantados por su amor.\r\n\r\nA la tumba do dormido\r\nLázaro el amado está,\r\n“Ven tú fuera”, llama Cristo,\r\ny llamando vida da.\r\n“Ven cargado y trabajado”,\r\nsuena de Jesús la voz.\r\n“Yo a todos doy descanso,\r\nlos que en mí confían hoy”.\r\n\r\nVen, no amando más al mundo\r\ncon su brillo tan falaz;\r\nPaz, perdón y gozo sumo,\r\ntodo en Cristo encontrarás.",
    },
    {
      ID: "352",
      Titulo: "He aquí que a la puerta estoy",
      Letra:
        "¡He aquí que a la puerta estoy!\r\nQuiero en tu corazón morar;\r\nmi voz escucha, pecador.\r\n¿Podré Yo entrar? ¿Podré Yo entrar?\r\n\r\nCoro:\r\n¡He aquí, que a la puerta estoy!\r\nhe esperado mucho ya,\r\nOh, alma llena de pesar,\r\n¿Podré yo entrar? ¿Podré yo entrar?\r\n\r\nPor ti la espina cruel sufrí,\r\nllevé la cruz sin vacilar.\r\nPara salvarte yo morí;\r\n¿Podré Yo entrar? ¿Podré Yo entrar?\r\n\r\nTe traigo gozo, luz, perdón,\r\nte traigo paz y bienestar;\r\n¡Oh! Di, cuitado corazón.\r\n¿Podré Yo entrar? ¿Podré Yo entrar?",
    },
    {
      ID: "353",
      Titulo: "La gracia de mi Dios",
      Letra:
        "La gracia de mi Dios,\r\nEl tema encantador,\r\nEl cielo dio la dulce voz\r\nAl mundo pecador.\r\n\r\nCoro:\r\nPor gracia salvo soy,\r\nMi base ved aquí:\r\nPor todos Cristo muerto ha,\r\nY muerto ha por mí.\r\n\r\nLa gracia me llamó,\r\nMe trajo salvación,\r\nY gracia fue que alcanzó\r\nDe todo mal, perdón.\r\n\r\nMi nombre escrito está\r\nPor gracia divinal,\r\nEn libro del Cordero allá\r\nDe vida eternal.\r\n\r\nLa gracia enseñó\r\nMis pies a caminar\r\nEn justas sendas de mi Dios,\r\nAl celestial hogar.",
    },
    {
      ID: "354",
      Titulo: "Luz en la oscuridad",
      Letra:
        "Luz en la oscuridad que quita el temor,\r\nverdad es que al brillar disipa el error.\r\n¡Oh! Dime dónde las podré yo encontrar,\r\npara que no siga más en triste dudar.\r\n\r\nCoro:\r\nEn Cristo sólo tú puedes hallar\r\nla luz, verdad y paz y bienes sin par.\r\nEn la Palabra Santa Él lo dice así:\r\nCristo es la luz del mundo, luz para mí.\r\n\r\nPaz y seguridad en la tempestad,\r\nvoz que nos trae siempre tranquilidad;\r\nes lo que tanto anhelo yo cada día,\r\ny no hallo en el mundo ni paz, ni guía.\r\n\r\nVenid, pues, todos a la sola verdad;\r\nal manantial de paz, de vida, y tomad.\r\n¿Por qué andáis en el engaño del error,\r\nsin la luz que nos entrega Dios en su amor?",
    },
    {
      ID: "355",
      Titulo: "Me vino un mensaje veraz",
      Letra:
        "Me vino un mensaje veraz,\r\nMensaje de gracia y poder,\r\nQue trajo a mi alma la paz,\r\nLa paz que quise obtener.\r\n\r\nCoro:\r\n¡Paz, paz! Sí, paz,\r\nDon que recibo de Dios,\r\n¡Qué maravilla es la paz!\r\nLa paz, el don de mi Dios.\r\n\r\nSe hizo la paz en la cruz,\r\nPor sangre que allí derramó,\r\nPagó todo el precio Jesús,\r\nY paz en mi alma me dio.\r\n\r\nY cuando a Jesús acepté,\r\nMi alma de paz se llenó;\r\nEn Cristo la dicha encontré,\r\nLa paz divina me dio.\r\n\r\nEn Cristo encuentro la paz,\r\nYo cerca de El quiero estar,\r\nY siempre su faz contemplar,\r\nLa paz divina gozar.",
    },
    {
      ID: "356",
      Titulo: "Perdido anduve",
      Letra:
        "Perdido anduve sin pensar\r\nen mi terrible condición;\r\nmas Cristo me logró salvar,\r\nno temo ya la perdición.\r\n\r\nCoro:\r\nEs por Jesús… que salvo soy…\r\nsí, por su cruz… al cielo voy…\r\nEn su presencia tengo comunión;\r\nÉl satisface el corazón.\r\n\r\nMas no tan sólo me salvó\r\nJesús en su infinito amor;\r\nsu Santo Espíritu me dio\r\npara instruirme en su favor.\r\n\r\nY pronto el día llegará\r\ncuando Él del cielo bajará.\r\nEntonces en la eternidad\r\nle adoraré por su bondad.",
    },
    {
      ID: "357",
      Titulo: "Ropaje espléndido",
      Letra:
        "Ropaje espléndido divinal\r\nEs el de mi Señor;\r\nSu mirra célica sin igual\r\nMi corazón llenó.\r\n\r\nCoro:\r\nGlorias magníficas El dejó,\r\nPara buscarme a mí;\r\nSólo su incomparable amor\r\nLe hizo venir aquí.\r\n\r\nSu vida tuvo su amargor,\r\nLos áloes se ven;\r\nLlevó la cruz con su cruel dolor,\r\nEspinas en su sien.\r\n\r\nTambién la casia balsámica\r\nEn su vestido está,\r\nMe quita todas mis lágrimas,\r\nProfunda paz me da.\r\n\r\nCon ropa hermosa vendrá otra vez,\r\nY todos le verán,\r\nPostrándose ante sus santos pies,\r\nLos suyos le adorarán.",
    },
    {
      ID: "358",
      Titulo: "Una voz del cielo",
      Letra:
        "Una voz del cielo se oye resonar:\r\n“Dad la luz, dad la luz;\r\nMuchas almas viven en la oscuridad,\r\nDadles luz, dadles luz”.\r\n\r\nCoro:\r\nDadles luz, la santa y pura luz,\r\nDe Jesús el Salvador;\r\nDadles luz, la santa y pura luz\r\nEnviad con fiel amor.\r\n\r\nEscuchad la voz que dice sin cesar:\r\nDad la luz, dad la luz;\r\nLa misión cumplamos que el Señor nos da:\r\nDemos luz, demos luz.\r\n\r\nHaz, Señor que siempre, siempre por doquier\r\nDemos luz, demos luz;\r\nQue este mundo nuestra vida pueda ver\r\nDando luz, dando luz.\r\n\r\nCual antorchas vivas vamos con fervor\r\nDando luz, dando luz;\r\nQue saquemos almas fuera de su error\r\nA la luz, a la luz.",
    },
    {
      ID: "359",
      Titulo: "Ven a Jesús",
      Letra:
        "Ven a Jesús, Jesús te llama,\r\nVen a Jesús, te quiere salvar.\r\nJesús te llama con tanta instancia;\r\nven a Jesús, te quiere salvar.\r\n\r\nCoro:\r\nVen a Jesús, te imploro ahora,\r\nla salvación te ofrece aquí.\r\nVen a Jesús, tus culpas Él borra,\r\nVen a Jesús, ven a Jesús.\r\nLa justa ley condena tu vida,\r\nte encuentras mal delante de Dios.\r\nCondenación, tan bien merecida,\r\nllegará pronto a ti, pecador.\r\n\r\nMuy pronto Dios la cuenta te pide,\r\npasan las horas con rapidez.\r\nVen a Jesús, ¿por qué no decides?\r\nPerdonará tus culpas, ¡oh ven!\r\n\r\nVen a Jesús, porque Él te espera,\r\nqueriendo darte vida eternal;\r\n¡Oh! no rechaces su buena oferta,\r\nte limpiará de todo tu mal.",
    },
    {
      ID: "360",
      Titulo: "Venid a Mí el Salvador dice",
      Letra:
        "“Venid a Mí”, el Salvador dice\r\nA los que tienen sed,\r\n”Venid y de la célica fuente\r\nDe salvación bebed”\r\n\r\nCoro:\r\nSu voz os llama del cielo,\r\n¿Queréis a Cristo ir?\r\nSu salvación, cual libre don,\r\nPodréis hoy recibir.\r\n\r\n“Venid a Mí, si andáis en trabajos,\r\nTendréis descanso así;\r\nLlevad mi yugo sobre vosotros,\r\nY aprended de Mí”.\r\n\r\nJesús al corazón quebrantado\r\nJamás rechazará,\r\nMas, ¡ay de quién no quiera oírle,\r\nY en el pecado está!\r\n\r\nColmaros quiere de bendiciones\r\nEl tierno Salvador;\r\nJamás oigáis con indiferencia\r\nSu dulce voz de amor.",
    },
    {
      ID: "361",
      Titulo: "Adelante vamos",
      Letra:
        "¡Adelante vamos, hijos de la luz!\r\nSi al Señor amamos,\r\nquien murió en la cruz;\r\nSiempre para arriba nuestra senda va;\r\nRecompensa rica nos espera allá.\r\n\r\nCoro:\r\nCelestial reposo, de Jesús el don,\r\nEs el fin glorioso de la salvación.\r\n\r\n¡Adelante vamos! Pronto han de llegar\r\nTodos los salvados a su eterno hogar.\r\nEn el mundo hermanos,\r\nno hay tranquilidad;\r\nA Jesús sigamos, y tendremos paz.\r\n\r\n¡Adelante vamos! Todos en unión;\r\nA la cruz tengamos como pabellón.\r\nEs Jesús el centro de su pueblo aquí,\r\nY en el cielo adentro para siempre así.",
    },
    {
      ID: "362",
      Titulo: "Al cruzar el valle",
      Letra:
        "Al cruzar el valle no habrá ya más sombras,\r\nCuando nuestra vida aquí terminará;\r\nAl oír celestes voces que nos llaman,\r\nRemontando nuestro vuelo al hogar.\r\n\r\nCoro:\r\n¡Sombras! No habrá más sombras,\r\nCuando al fin la carga quede atrás;\r\n¡Sombras! No habrá más sombras,\r\nCuando al fin corona nos dará.\r\n\r\nAl dejarnos los amados no habrá sombras,\r\nSi confiaron en la sangre de Jesús;\r\nPues sabemos que muy pronto los veremos\r\nEn el gozo de la gloria en plena luz.\r\n\r\nAl reunirnos en el aire no habrá sombras,\r\nCuando se oiga la trompeta del Señor;\r\nCon Jesús en grande majestad y gloria\r\nEntraremos en el gozo de su amor.",
    },
    {
      ID: "363",
      Titulo: "Amigo tengo, cuyo amor",
      Letra:
        "Amigo tengo, cuyo amor\r\nExcede todo mi pensar,\r\nMás alto que el brillante sol,\r\nMás hondo que el inmenso mar.\r\nTan bueno es El, tan fuerte y fiel,\r\nPues con eterna caridad amóme,\r\n¡Al Señor load!\r\n\r\nEl era coigual con Dios,\r\nEl centro de la adoración;\r\nPero, en su incomparable amor,\r\nAl miserable pecador\r\nPara buscar y rescatar\r\nDejando su celeste hogar, buscóme,\r\n¡Al Señor load!\r\n\r\nFue sólo el su senda aquí,\r\nSin simpatía alrededor;\r\nY sólo el Padre en gloria allí\r\nDel Hijo supo el amargor;\r\nMas no cedió ni vaciló;\r\nY estando yo sumido en mal, hallóme,\r\n¡Al Señor load!\r\n\r\nLlegó el terrible día al fin,\r\nEn que, con triste corazón,\r\nEn medio de amenazas mil,\r\nDesamparado ya de Dios;\r\nEl Salvador por mí murió;\r\nY así, sufriendo en mi lugar, salvóme,\r\n¡Al Señor load!\r\n\r\nAhora, mientras vivo acá,\r\nAl Salvador las gracias doy;\r\nY espero pronto ver su faz\r\nEn ese hogar adonde voy;\r\n¡Con El estar en luz sin par!\r\n¡Oh, cuánto gozo me será!, le alabo,\r\n¡Al Señor load!",
    },
    {
      ID: "364",
      Titulo: "Con Jesús a cualquier parte",
      Letra:
        "Con Jesús a cualquier parte iría yo,\r\nPorque de la perdición El me salvó;\r\nCada día junto a El caminaré;\r\nY a la muerte misma ya no temeré.\r\n\r\nCoro:\r\nCon Jesús, por doquier sin temor iré;\r\nSi el Señor me guía nada temeré.\r\n\r\nYo en cualquier parte con mi buen Pastor,\r\nHallo pastos delicados en su amor,\r\nY las aguas puras que tan dulces son;\r\n¡Oh, qué gozo siento en mi corazón!\r\n\r\nEn mi vida toda me socorrerá,\r\nY si me extraviare, me restaurará;\r\nTodo gozo y paz me vienen por Jesús;\r\nRebosando está mi copa de salud.\r\n\r\nHasta el fin del mundo con Jesús iré,\r\nUn amigo inseparable en El tendré;\r\nY a la casa celestial me guiará,\r\nTodas mis necesidades suplirá.",
    },
    {
      ID: "365",
      Titulo: "Consagrarme todo entero",
      Letra:
        "Consagrarme todo entero\r\nAlma, vida y corazón,\r\nEs el íntimo deseo\r\nQue hoy me anima, buen Señor.\r\n\r\nCoro:\r\nHéme aquí Señor\r\nA tus plantas hoy\r\nPues a tí consagrar quiero\r\nTodo lo que soy\r\n\r\nAl contrito has prometido\r\nQue de Ti no arrojarás,\r\nHoy propicio eres conmigo\r\nY tu Espíritu me das.\r\n\r\nConfesando mis pecados,\r\nQue sin número han de ser,\r\nY arrojando todo a un lado,\r\nA servirte aprenderé.\r\n\r\nMi canción constante sea,\r\nY mi sola inspiración,\r\nProclamar la dicha eterna\r\nDel que vive para Dios.\r\n\r\n¡Oh, qué gozo llena mi alma\r\nAl pensar que suyo soy,\r\nY que pronto en sus moradas\r\nEstaré con mi Señor!",
    },
    {
      ID: "366",
      Titulo: "De noche, al descender el sol",
      Letra:
        "De noche, al descender el sol,\r\nlos afligidos, oh Señor,\r\nte rodearon en dolor\r\ny Tú les diste curación.\r\n\r\nTambién nosotros por la fe\r\nnos acercamos, Cristo, a ti;\r\naunque tu rostro no se ve,\r\nsabemos que Tú estás aquí.\r\n\r\nAlgunos tristes hay aquí,\r\nen cuya vida hay amargor.\r\nNo amáronte, o si es que sí,\r\nperdieron su primer amor.\r\n\r\nDel mundo ven la vanidad\r\nalgunos que sus siervos son;\r\ntristeza su amistad les da\r\ny en ti no tienen salvación.\r\n\r\nDel todo nadie sano está,\r\nhay mal en todo corazón;\r\ny los que te aman bien aun más\r\nde su maldad conscientes son.\r\n\r\nTu mano tiene aún poder,\r\ny te rogamos con fervor\r\n(pues nuestro estado puedes ver)\r\nque Tú nos sanes en tu amor.",
    },
    {
      ID: "367",
      Titulo: "Dios nuestro apoyo",
      Letra:
        "Dios, nuestro apoyo en los pasados siglos,\r\nNuestra esperanza en años venideros,\r\nNuestro refugio en hórrida tormenta,\r\nY nuestro eterno hogar.\r\n\r\nBajo la sombra de tu excelso trono\r\nEn dulce paz tus santos residieron;\r\nTu brazo sólo a defendernos basta,\r\nY nuestro amparo es cierto.\r\n\r\nEn nuestra vida toda y en la muerte,\r\nEn tu promesa nuestra fe ponemos;\r\nY nuestros hijos cantarán gozosos,\r\nCuando contigo estemos.\r\n\r\nDios, nuestro apoyo en los pasados siglos,\r\nNuestra esperanza en años venideros,\r\nNuestra defensa sé Tú en esta vida,\r\nY nuestro eterno hogar.",
    },
    {
      ID: "368",
      Titulo: "Dios obra por senderos",
      Letra:
        "Dios obra por senderos misteriosos\r\nlas maravillas que el mortal contempla.\r\nSus plantas se deslizan por los mares,\r\ny atraviesa el espacio en la tormenta.\r\n\r\nEn el abismo de insondables minas,\r\ncon infalible y eternal destreza,\r\nAtesora sus fúlgidos designios\r\ny su soberana voluntad despliega.\r\n\r\nNuevo valor cobrad, medrosos santos;\r\nesas oscuras nubes que os aterran\r\nderramarán, de compasión profusas,\r\nbendiciones sin fin al alma vuestra.\r\n\r\nNo juzguéis al Señor por los sentidos,\r\nconfiad en su gracia que es inmensa.\r\nPues tras de su indignado ceño esconde\r\nplácida faz que el corazón serena.\r\n\r\nCiega incredulidad yerra el camino,\r\ny su obra en vano adivinar intenta;\r\nDios es su propio intérprete, y al cabo\r\ntodo lo ha de explicar al que en él crea.",
    },
    {
      ID: "369",
      Titulo: "Dispón por mí",
      Letra:
        "Dispón por mí, Señor,\r\nLa vía y seguiré;\r\nGuiado por tu amor\r\nNunca resbalaré.\r\n\r\nPor buen camino o mal,\r\nSi me conduce a Ti,\r\nLa roca o cenagal,\r\nIgual es todo a mí.\r\n\r\nMi copa Tú podrás\r\nDe gozo o pena henchir;\r\nPlacer me infundirá\r\nTu voluntad cumplir.\r\n\r\nNo quiero yo elegir,\r\nElige Tú por mí,\r\nLa senda en que debo ir\r\nEn mi carrera aquí.\r\n\r\nTu reino he de buscar\r\nCon todo mi poder;\r\nContigo debo andar\r\nPara ir tu rostro a ver.",
    },
    {
      ID: "370",
      Titulo: "Grata noticia, viene Jesús",
      Letra:
        "Grata noticia, viene Jesús\r\npor los salvados mediante su cruz,\r\npara llevarlos al trono de luz.\r\nSí, pronto vuelve el Señor.\r\n\r\nCoro:\r\nCristo Jesús de los cielos vendrá,\r\npronto en su gloria vendrá;\r\nPara el creyente ¡qué gozo será\r\nver al amado Señor!\r\n\r\nCon alegría y aclamación,\r\nvoz del arcángel, trompeta de Dios,\r\nviene Jesús con cabal salvación.\r\nSí, pronto vuelve el Señor.\r\n\r\nLos que han dormido despertarán,\r\ny con los vivos se reunirán,\r\ntodos unidos con Cristo estarán\r\ncuando viniere el Señor.\r\n\r\n¡Firmes! hermanos fieles velad,\r\nsiempre por Cristo constantes obrad,\r\ny su venida hasta el fin esperad,\r\n¡Sí! Pronto vuelve el Señor.",
    },
    {
      ID: "371",
      Titulo: "Hallé un amigo sin igual",
      Letra:
        "Hallé un amigo sin igual,\r\nAmóme eternamente;\r\nDe amor la cuerda celestial\r\nMe atrajo dulcemente.\r\nVencida mi alma, se la doy\r\nEn liga permanente;\r\nPues mío es El, y suyo soy,\r\nAhora y para siempre.\r\n\r\nCoro:\r\nSí, mío es El y suyo soy,\r\nAhora y para siempre,\r\nContento estoy, al cielo voy,\r\nSoy suyo para siempre.\r\n\r\nHallé un amigo sin igual,\r\nMurió por mí y salvóme,\r\nY todo don espiritual\r\nEl en si mismo dióme.\r\nY ya no tengo posesión,\r\nMe entrego enteramente,\r\nMi vida, fuerza y corazón,\r\nA Cristo para siempre.\r\n\r\nHallé un amigo sin igual,\r\nPues suya es la potencia,\r\nDe guiarme en senda terrenal\r\nDe aquí hasta su presencia.\r\nLa gloria brilla más allá,\r\nDe aquel hogar paterno,\r\nMe anima a vigilar y obrar\r\nHasta el reposo eterno.\r\n\r\nHallé un amigo sin igual,\r\n¡Tan fiel y bondadoso!\r\nMi defensor de todo mal,\r\nMi guía poderoso.\r\nY del autor de salvación\r\n¿Quién separarme puede ?\r\nNinguna fuerza ni aflicción,\r\nSoy suyo para siempre.",
    },
    {
      ID: "372",
      Titulo: "He oído contar",
      Letra:
        "He oído contar de un país celestial,\r\n(En la Biblia la historia está),\r\nDonde no hay tempestad,\r\nNi ninguna oscuridad,\r\nY nada se envejecerá.\r\n\r\nCoro:\r\n¡Qué morada de luz,\r\nDo nos lleva Jesús!\r\nNi pecado, ni muerte allí habrá.\r\n¡Qué glorias están en aquella ciudad!\r\nY el sol no se pone jamás.\r\n\r\nSiempre verdes están los follajes allá,\r\nY cual oro es su fruto vernal;\r\nDe las arpas el son me será consolación,\r\nY nada se envejecerá.\r\n\r\nEn la casa de Dios siempre suena la voz,\r\nDe alegría y reposo eternal;\r\nGozaré de su paz y abundante solaz,\r\nY nada se envejecerá.",
    },
    {
      ID: "373",
      Titulo: "La débil cuerda",
      Letra:
        "La débil cuerda cederá,\r\nY no podré cual hoy cantar,\r\nMas en palacio de mi Rey,\r\n¡Qué gozo mío al despertar!\r\n\r\nCoro:\r\nY cara a cara le veré,\r\nY el nuevo canto entonaré,\r\nDe gracias al Señor Jesús\r\nPor su obra consumada en cruz.\r\n\r\nMi casa terrenal caerá,\r\nEl cuándo no podré decir,\r\nMas sé que Cristo tiene ya\r\nMorada eterna para mí.\r\n\r\nEl áureo sol al descender,\r\nUn día para mi solaz,\r\nA mi dirá mi Salvador:\r\n“Bien hecho, entra tú en mi paz”.\r\n\r\nAhora espero su llamar,\r\nY hasta entonces velaré;\r\nLa puerta luego el abrirá,\r\nY a El mi vuelo emprenderé.",
    },
    {
      ID: "374",
      Titulo: "Nuestro adorable Redentor",
      Letra:
        "Nuestro adorable Redentor,\r\nLos suyos al dejar,\r\nNos prometió un Consolador,\r\nAquí a morar.\r\n\r\nLlegó su gracia a difundir\r\nEn cada corazón\r\nDe los que quieren recibir\r\nTan grande don.\r\n\r\nY si tenemos la virtud,\r\nLa vida y santidad,\r\nDebémoslo al Espíritu,\r\n¡A Dios load!\r\n\r\nOigamos hoy su dulce voz,\r\nCual silbo celestial;\r\nPues es su oficio al Salvador\r\nGlorificar.\r\n\r\nCuando al Espíritu de amor\r\nLe damos su lugar,\r\nEl ya de gloria en gloria nos\r\nTransformará.\r\n\r\n¡Oh! alabad al Padre Dios,\r\nAl Hijo que murió,\r\nY Espíritu Consolador,\r\nAl Trino Dios.",
    },
    {
      ID: "375",
      Titulo: "Obreros en la mies de Cristo",
      Letra:
        "Obreros en la mies de Cristo,\r\nEl campo blanco está,\r\nY para la cosecha listos\r\nTomad aliento ya.\r\n\r\nCoro:\r\nAquellos que esperan al Señor\r\nNuevas fuerzas tendrán;\r\nSe levantarán con alas,\r\nCon alas cual las águilas.\r\nCorrerán y no se cansarán,\r\nSin fatiga han de andar. (tres veces)\r\n\r\nOrando siempre y trabajando,\r\nY con creciente ardor,\r\nSeguid sembrando y esperando,\r\nNo es vano en el Señor.\r\n\r\nLos que con lágrimas sembraron,\r\nCon gozo segarán;\r\nSemilla de valor llevaron,\r\nSus frutos traerán.",
    },
    {
      ID: "376",
      Titulo: "Oh, alma triste hay un hogar",
      Letra:
        "Oh, alma triste hay un hogar\r\nSin cosa que te cansará;\r\nHogar que nunca cambia más,\r\n¿Quién no quisiera entrar allá?\r\n\r\nCoro:\r\nConfía en Jesús de corazón,\r\nAcepta a sus manos perdón,\r\nConfía en El,\r\nY al fin tendrás tu galardón.\r\n\r\nCargado y fatigado, tú,\r\nAlcanzarás el dulce hogar;\r\nLas pruebas que permite Dios,\r\nLo hará más grato allá llegar.\r\n\r\n¿Caminas donde espinas hay?\r\nCorona de éstas El llevó;\r\nSi tienes triste el corazón,\r\nTambién dolor a El tocó.\r\n\r\nEntonces sigue hasta el fin,\r\nQue pronto vas a descansar;\r\nPues a los suyos guarda Dios,\r\nEspera en El sin murmurar.",
    },
    {
      ID: "377",
      Titulo: "Oh, cuán gratas son las horas",
      Letra:
        "¡Oh, cuán gratas son las horas,\r\nCuando yo me acerco a Ti!\r\nDesde el cielo do tu moras,\r\nPadre, escúchame a mí.\r\n\r\nAún a mí, el más indigno\r\nDe tu celestial redil,\r\nIlumíname, benigno,\r\nY hazme siervo tuyo fiel.\r\n\r\nYo me gozo en tus bondades,\r\nY quisiera comprender\r\nTus secretos y verdades\r\nY en tu inmenso amor crecer.\r\n\r\nAl entrar en la presencia\r\nDel divino Redentor,\r\nGozaré de la herencia\r\nQue me es dada por su amor.\r\n\r\nY al final en tus mansiones\r\nSin cesar te miraré;\r\nY del cielo de esplendores\r\nNunca más me apartaré.",
    },
    {
      ID: "378",
      Titulo: "Oh peregrinos, que al cielo",
      Letra:
        "¡Oh! peregrinos que al cielo vais,\r\nSiempre mirad a Cristo;\r\nId adelante, mas no temáis,\r\nSiempre mirad a Cristo.\r\n\r\nCoro:\r\nSiempre mirad a Cristo,\r\nSiempre mirad a Cristo;\r\nCon Jesús andad en la luz;\r\nSiempre mirad a Cristo.\r\n\r\nEn toda vuestra necesidad\r\nSiempre mirad a Cristo;\r\nDe sus riquezas El os dará,\r\nSiempre mirad a Cristo.\r\n\r\nY cuando llegue la tentación,\r\nSiempre mirad a Cristo;\r\nTendréis abrigo en su corazón,\r\nSiempre mirad a Cristo.\r\n\r\nSu gracia abunda y os sostendrá,\r\nSiempre mirad a Cristo;\r\nY al fin en gloria os recibirá,\r\nSiempre mirad a Cristo.\r\n\r\nAllí su rostro contemplaréis,\r\nSiempre veréis a Cristo;\r\nCon alegría le serviréis,\r\nSiempre estaréis con Cristo.",
    },
    {
      ID: "379",
      Titulo: "¡Qué felicidad, con Jesús estar!",
      Letra:
        "¡Qué felicidad, con Jesús estar!\r\nEn los brazos del Señor Jesús;\r\nNo se temerá del furioso mar,\r\nEn los brazos del Señor Jesús.\r\n\r\nCoro:\r\nDescansando,\r\nen los brazos del Señor Jesús,\r\nDescansando,\r\nen los brazos del Señor Jesús.\r\n\r\nA Dios gracias doy que seguro estoy,\r\nEn los brazos del Señor Jesús;\r\nRedimido soy, y a la gloria voy\r\nEn los brazos del Señor Jesús.\r\n\r\n¡Oh, qué libertad, qué tranquilidad!\r\nEn los brazos del Señor Jesús;\r\nMi alma alegre está por su gran bondad,\r\nEn los brazos del Señor Jesús.",
    },
    {
      ID: "380",
      Titulo: "Una hora sola",
      Letra:
        "Una hora sola de velar con Cristo,\r\nEternos años de reposo y paz;\r\nUna hora sola de afrontar peligros,\r\nEternos años de mirar su faz.\r\n\r\nCoro:\r\nTengamos, pues, valor hasta el mañana,\r\nBrillante sea nuestra luz aquí;\r\nEl Salvador con suave voz nos llama:\r\n“Velad, velad una hora más por Mí”.\r\n\r\nUna hora sola de sufrir por Cristo,\r\nEternos años en su calma y luz;\r\nUna hora sola de sufrir perjuicios,\r\nEternos años, gloria en vez de cruz.\r\n\r\nUna hora sola en prueba y tentaciones,\r\nEternos años de felicidad;\r\nUna hora sola aquí de vejaciones,\r\nEternos años de su amor sin par.",
    },
    {
      ID: "381",
      Titulo: "Ya por nos el día",
      Letra:
        "¡Ya por nos el día su luz apagó!\r\nOtra vez la noche su crespón tendió.\r\n\r\nVemos las estrellas prontas a brillar;\r\naves, bestias, flores vanse a acostar.\r\n\r\nSeñor Jesucristo, haznos descansar\r\npor ti cobijados hasta el despertar.\r\n\r\nSueñen los niñitos con su Salvador;\r\nde los marineros seas el protector.\r\n\r\nSana a los enfermos, fuerte Salvador.\r\nLos que mal designan,\r\nhazles ver su error.\r\n\r\nMientras que durmamos,\r\nhaz que en derredor\r\nángeles nos guarden, siervos del Señor.\r\n\r\nCuando el nuevo día llama a trabajar,\r\nQue en tu compañía logre yo andar.",
    },
    {
      ID: "382",
      Titulo: "Al monte de tu santidad",
      Letra:
        "Al monte de tu santidad,\r\nOh, Dios, con alegría iré;\r\nDame tu luz y tu verdad,\r\nY hasta tu altar me allegaré.\r\n\r\nPues mi alegría, mi gozo es Dios,\r\nDios mío, yo te alabaré,\r\nCon arpa se ha de oír mi voz;\r\nDe corazón te adoraré.\r\n\r\n¿Por qué te abates, alma en mí?\r\nNo te conturbes, mi alma ya;\r\nEspera a Dios quien llama así,\r\nAl hombre que abatido está.\r\n\r\nCon certidumbre de la fe,\r\nPara cantarte mi canción,\r\nY verdadero corazón\r\nAl trono Santo llegaré.\r\n\r\nAl Dios de amor y santidad\r\nCon gozo siempre alabaré,\r\nPor siglos de la eternidad\r\nY faz a faz te adoraré.",
    },
    {
      ID: "383",
      Titulo: "Al Señor Jesús loemos",
      Letra:
        "Al Señor Jesús loemos\r\nPorque tanto le debemos,\r\nLo que somos y tenemos,\r\nSólo es nuestro en El.\r\n\r\nEs Jesús su nombre amado,\r\nA su pueblo El ha salvado,\r\nEs el triunfo asegurado\r\nPor su gran poder.\r\n\r\n¡Oh, confiad en este amigo!\r\nNos liberta del peligro,\r\nNos es hoy un fuerte abrigo\r\nY hasta el fin será.\r\n\r\nCumpliráse nuestro anhelo,\r\nEn el día en que sin velo\r\nLe veremos en el cielo\r\nAl Señor Jesús.",
    },
    {
      ID: "384",
      Titulo: "Cuán dulce el nombre de Jesús",
      Letra:
        "¡Cuán dulce el nombre de Jesús,\r\nEs para el hombre fiel!\r\nConsuelo, paz, vigor, salud,\r\nHalla el creyente en El.\r\n\r\nAl alma herida fuerza da,\r\nY calma el corazón;\r\nAl alma hambrienta es cual maná,\r\nY alivia su aflicción.\r\n\r\nTan dulce nombre es para mí,\r\nDe dones plenitud;\r\nRaudal que nunca exhausto vi\r\nDe gracia y de salud.\r\n\r\nJesús, mi amigo y mi sostén,\r\nMi Rey y Salvador,\r\nMi vida y luz, mi eterno bien,\r\nAcepta mi loor.",
    },
    {
      ID: "385",
      Titulo: "¡Oh profundo amor de Cristo!",
      Letra:
        "¡Oh, profundo amor de Cristo,\r\nVasto, inmerecido don!\r\nCual océano infinito,\r\nYa me inunda el corazón.\r\nMe rodea, me sostiene\r\nLa corriente de su amor,\r\nLlévame continuamente,\r\nHacia el gozo del Señor.\r\n\r\n¡Oh, profundo amor de Cristo!\r\nSus loores proclamad,\r\nPues su amor nos satisfizo\r\nY no cambiará jamás.\r\n¡Cómo cuida a sus amados,\r\nRedimidos por su cruz!\r\nComunión con El gozamos\r\nCuando andamos en la luz.\r\n\r\n¡Oh, profundo amor de Cristo,\r\nÚnico, supremo amor!\r\nCual un vasto mar bendito,\r\nCual hogar al viador.\r\n¡Oh, profundo amor de Cristo!\r\nPura gloria es para mí,\r\nQue me eleva salvo y listo,\r\nHacia el cielo, hacia Ti.",
    },
    {
      ID: "386",
      Titulo: "Al Padre, Hijo, Redentor",
      Letra:
        "Al Padre, Hijo Redentor,\r\nY Espíritu Consolador;\r\nAl trino Dios en unidad,\r\nLoor eterno tributad.",
    },
    {
      ID: "387",
      Titulo: "A la batalla",
      Letra:
        "¡A la batalla y a la victoria\r\nVamos con Dios nuestro Rey!\r\nQuien con su brazo fuerte, robusto,\r\nSiempre defiende su grey.\r\nPues, sin temor avancemos\r\nEntusiasmados por fe,\r\nMientras alegres cantemos:\r\nGloria a Dios nuestro Rey.\r\n\r\nCoro:\r\nNi es la guerra de los ligeros,\r\nNi de los fuertes la paz;\r\nMas de los fieles en Cristo\r\nEs el eterno solaz.\r\n\r\n¡A la batalla y a la victoria!\r\n¿Quién será este buen Rey?\r\n¿Quiénes las tropas, los que le siguen\r\nEn esta lucha de fe?\r\nEs Jehová el valiente,\r\nDe los señores Señor,\r\nAcompañado por todos\r\nLos que aprecian su amor.\r\n\r\n¡A la batalla y a la victoria!\r\nBajo tan buen general,\r\nDerrotaremos ya enseguida\r\nTodas las fuerzas del mal.\r\nReinos y tronos del mundo,\r\nTodos al fin pasarán,\r\nMas los amados de Cristo\r\nVida eternal gozarán.",
    },
    {
      ID: "388",
      Titulo: "Jóvenes cristianos",
      Letra:
        "Adelante vamos, cristiana juventud,\r\nLlevemos, sí, a todos el mensaje de salud;\r\nObreros en la viña de nuestro buen Señor,\r\nBuscando a las almas con un\r\nferviente amor.\r\n\r\nCoro:\r\nJóvenes cristianos, luchemos sí, por El,\r\nEl es nuestro guía y siempre será fiel.\r\nA todos prediquemos la historia de su amor,\r\nSirviendo así a Cristo el bendito Salvador.\r\n\r\nEl que busca almas es sabio, dice Dios,\r\nPrestemos, pues, oído a la divina voz;\r\nSembremos su Palabra bendita\r\npor doquier,\r\nTrayendo así a Cristo algún perdido ser.\r\n\r\nSeamos siempre fieles a nuestro Salvador,\r\nLlevemos otras almas a conocer su amor,\r\nY cuando allá en la gloria con El\r\nhemos de estar,\r\nNuestras buenas obras El ha de coronar.",
    },
    {
      ID: "389",
      Titulo: "Al cerrar la puerta",
      Letra:
        "Al cerrar la puerta, tarde ya será,\r\nEntra sin tardar, mientras hay lugar.\r\n¿Por qué en tal peligro has de continuar?\r\nEntra, oh pecador, sin tardar.\r\n\r\nCoro:\r\n¡Oh, entra por la puerta hoy!\r\n¡Hoy mismo entra, oh pecador!\r\nEntra por la puerta, o el Señor dirá:\r\n“Es tarde ya, es tarde ya”.\r\n\r\nAl cerrar la puerta, ¿qué esperanza habrá?\r\nEntra sin tardar, mientras hay lugar;\r\nvano a Dios entonces orar será.\r\nEntra, oh pecador, sin tardar.\r\n\r\nAl cerrar la puerta, Dios no llama más.\r\nEntra sin tardar, mientras hay lugar;\r\nhoy acude a Cristo, sin demorar.\r\nEntra, oh pecador, sin tardar.\r\n\r\nAl cerrar la puerta, ¿cómo te hallarás?\r\nEntra sin tardar, mientras hay lugar;\r\nsin la salvación tú te perderás.\r\nEntra, oh pecador, sin tardar.",
    },
    {
      ID: "390",
      Titulo: "Al Dios de Abraham",
      Letra:
        "Al Dios de Abraham load,\r\nDe todo Creador;\r\nSeñor es de la eternidad\r\nY Dios de amor.\r\nJehová el gran “Yo Soy”,\r\nEn cielo y tierra es Rey,\r\nReconocedle y con fervor\r\nQue le adoraréis.\r\n\r\nAl Dios del cielo dad\r\nGracias por su favor,\r\nVuestra alabanza tributad\r\nAl Salvador.\r\nNos llama a abandonar\r\nLa gloria terrenal,\r\nY nuestro todo en El hallar,\r\nSiempre jamás.\r\n\r\nAl Dios de Abraham load,\r\nPues su palabra es fiel,\r\nSu pacto asegurado está\r\nPor Emanuel.\r\nEn su Hijo acepta está\r\nLa iglesia de su amor,\r\nPor ella siempre subirá\r\nA Dios loor.\r\nAl Dios de gloria y luz\r\nVenid hoy y adorad\r\nPor la obra del Señor Jesús\r\nY su bondad.\r\nCantemos aún aquí,\r\nDel cielo la canción,\r\nRindiendo culto al Padre allí,\r\nDe corazón.",
    },
    {
      ID: "391",
      Titulo: "Alabanzas demos",
      Letra:
        "Alabanzas demos al Redentor nuestro,\r\nSantos todos proclamad su loor;\r\nOh, cantadle, ángeles todos en gloria\r\nA su Nombre dad celestial honor.\r\nCual Pastor, Jesús cuidará a su pueblo,\r\nTodo el día los llevará en su amor;\r\nSantos que moráis en su augusta presencia,\r\nAlabadle con voz y corazón.\r\n\r\nAlabanzas demos al Redentor nuestro,\r\nNuestras culpas El por su sangre expió;\r\nSu pasión es nuestra eternal esperanza,\r\nAdoradle a Cristo que en cruz murió.\r\nEl Señor, sufriendo dolor y angustia,\r\nCon espinas se dejó coronar;\r\nPor nosotros fue despreciado, humillado;\r\nRey de gloria, vedle triunfante ya.\r\n\r\nAlabanzas demos al Redentor nuestro,\r\nTierra y cielo honores a El traed;\r\nCristo salva y reina por siglos de siglos,\r\nEl Profeta, Gran Sacerdote y Rey.\r\nYa la tumba por siempre está vencida,\r\n¿Dónde, oh, muerte, se halla tu aguijón?\r\n¡Cristo vive! Nos ha traído alegría,\r\n¡Cristo vive! ¡Glorioso Salvador!",
    },
    {
      ID: "392",
      Titulo: "Ama a tus prójimos",
      Letra:
        "Ama a tus prójimos, piensa en sus almas,\r\ndiles la historia del tierno Señor.\r\nCuida del huérfano, hazte su amigo;\r\nmuestra la gracia de tu Salvador.\r\n\r\nCoro:\r\nBusca al incrédulo, ve su peligro;\r\nDios le dará su divino perdón.\r\n\r\nAunque recházanle, tiene paciencia,\r\nHasta que quieran tener la salud;\r\nVenlos los ángeles desde la gloria,\r\nde allí los miran con solicitud.\r\n\r\nBusca a tus prójimos; Dios es tu ayuda\r\ny por su Espíritu fuerza te da.\r\nSimiente buena, pues, siembra en el tiempo,\r\ny la cosecha eternal te será.",
    },
    {
      ID: "393",
      Titulo: "Brilla la gloria",
      Letra:
        "Brilla ante mí la gloria,\r\nno puedo aquí quedar;\r\npor la neblina ahora\r\nveo mi dulce hogar.\r\nSi en este triste yermo\r\ntengo aún que andar,\r\nbrilla ante mí la gloria,\r\npronto estaré yo allá.\r\n\r\nNo habrá allí más tormentas,\r\nlágrimas no se ven;\r\nlas aguas turbulentas\r\nno nos harán temer.\r\nVoy a la tierra santa,\r\nya mía por la fe;\r\nbrilla ante mí la gloria,\r\naquí no quedaré.\r\n\r\nDios es allí la gloria,\r\nel Cordero es la luz;\r\nlas pruebas que hoy me azotan\r\nme acercan a su cruz.\r\nLa voz de Cristo llama,\r\nmi curso acaba ya;\r\nbrilla ante mí la gloria,\r\nel premio él me dará.\r\n\r\nBrilla ante mí la gloria,\r\ntodo está bien, yo sé;\r\nmi Padre me conforta,\r\nsu nombre alabaré.\r\nCristo en su amor me lleva,\r\nsu sangre me lavó;\r\ndo Cristo está es el cielo\r\nde gloria, paz y amor.",
    },
    {
      ID: "394",
      Titulo: "Mi culpa el llevó",
      Letra:
        "Cansado y triste vine al Salvador,\r\nMis culpas El llevó, mis culpas El llevó;\r\nMi eterna dicha hallé en su amor,\r\nMis culpas El llevó.\r\n\r\nCoro:\r\nMis culpas El llevó, mis culpas El llevó,\r\nAlegre siempre cantaré,\r\nAl Señor gozoso alabaré,\r\nPorque El me salvó.\r\n\r\nBorrados todos mis pecados son,\r\nMis culpas El llevó, mis culpas El llevó,\r\nA El feliz elevo mi canción,\r\nMis culpas El llevó.\r\n\r\nYa vivo libre de condenación,\r\nMis culpas El llevó, mis culpas El llevó,\r\nSu dulce paz me llena el corazón,\r\nMis culpas El llevó.\r\n\r\nSi vienes hoy a Cristo, pecador,\r\nTus culpas borrará, tus culpas borrará,\r\nPerdón tendrás si acudes al Señor,\r\nTus culpas borrará.\r\n\r\nCoro final:\r\nTus culpas borrará, tus culpas borrará,\r\nY limpiará tu corazón;\r\nY dirás feliz en tu canción:\r\n“Mis culpas El llevó”.",
    },
    {
      ID: "395",
      Titulo: "Castillo fuerte",
      Letra:
        "Castillo fuerte es nuestro Dios,\r\nDefensa y buen escudo;\r\nCon su poder nos librará\r\nEn este trance agudo.\r\nCon furia y con afán,\r\nAcósanos Satán,\r\nPor armas deja ver\r\nAstucia y gran poder,\r\nCual él no hay en la tierra.\r\n\r\nNuestro valor es nada aquí;\r\nCon él todo es perdido;\r\nMas por nosotros pugnará\r\nDe Dios el Escogido.\r\n¿Sabéis quién es? Jesús,\r\nEl que venció en la cruz,\r\nSeñor de Sabaoth,\r\nY pues El sólo es Dios,\r\nEl triunfa en la batalla.\r\n\r\nAún si están demonios mil\r\nProntos a devorarnos,\r\nNo temeremos, porque Dios\r\nSabrá aún prosperarnos.\r\nQue muestre su vigor\r\nSatán y su furor,\r\nDañarnos no podrá,\r\nPues condenado es ya\r\nPor la Palabra Santa.\r\n\r\nSin destruirla dejarán,\r\nAún mal de su grado,\r\nEsta Palabra del Señor,\r\nEl lucha a nuestro lado.\r\nQue lleven con furor\r\nLos bienes, vida, honor,\r\nLos hijos, la mujer.\r\nTodo ha de perecer,\r\nDe Dios el reino queda.",
    },
    {
      ID: "396",
      Titulo: "Él cuidará de mí",
      Letra:
        "¿Cómo podré estar triste,\r\nCómo entre sombras ir,\r\nCómo sentirme solo,\r\nY en el dolor vivir,\r\nSi Cristo es mi consuelo,\r\nMi amigo siempre fiel,\r\nSi aún las aves tienen\r\nSeguro asilo en El?\r\nSi aún las aves tienen\r\nSeguro asilo en El.\r\n\r\nCoro:\r\nFeliz, cantando alegre,\r\nYo vivo siempre aquí;\r\nSi El cuida de las aves,\r\nCuidará también de mí.\r\n\r\n“Nunca te desalientes”\r\nOigo al Señor decir;\r\nY en su palabra fiado,\r\nHago al dolor huir.\r\nA Cristo paso a paso\r\nYo sigo sin cesar,\r\nY todas sus bondades\r\nPor siempre me ha de dar.\r\nY todas sus bondades\r\nPor siempre me ha de dar.\r\n\r\nSiempre que soy tentado\r\nO que en la prueba estoy,\r\nMás cerca de El camino\r\nY protegido voy.\r\nSi en mí la fe desmaya,\r\nY caigo en la ansiedad,\r\n¡Tan sólo El me levanta,\r\nMe da seguridad!\r\n¡Tan sólo El me levanta,\r\nMe da seguridad!",
    },
    {
      ID: "397",
      Titulo: "Corazón oprimido",
      Letra:
        "Corazón oprimido, buscando solaz,\r\n¡oh! mira al Señor y no llores más.\r\nLa luz de su rostro te iluminará,\r\ny, como en el cielo, no habrá noche acá.\r\n\r\nMirando a Jesús, yo no más podré ver\r\nlos peligros y penas que me hacen temer;\r\nLas lágrimas tristes no me obcecarán;\r\nlas dudas infieles se disiparán.\r\n\r\nMirando a Jesús, de su amor gozaré;\r\nen el mundo habrá penas, en él paz tendré.\r\nLa mar de mi vida podrá alto rugir;\r\nsi miro al Señor, ya no la puedo oir.\r\n\r\nMirando a Jesús, sus palabras oiré:\r\n“¿Por qué temes tú? ¡Oh qué poca es tu fe!”\r\nY al fin en la gloria mi gozo será\r\nsu rostro divino por siempre admirar.",
    },
    {
      ID: "398",
      Titulo: "Cristo siempre está conmigo",
      Letra:
        "Cristo siempre está conmigo,\r\nsu promesa firme está,\r\npues ha dicho: “Con vosotros\r\nsiempre estoy”.\r\nEl poder del enemigo\r\nsu palabra vencerá,\r\npues ha dicho: “Con vosotros\r\nsiempre estoy”.\r\n\r\nCoro:\r\n“Siempre estoy, siempre estoy”,\r\npues ha dicho: “Con vosotros,\r\nsiempre estoy”. (Bis todo)\r\n\r\nEn los días anublados\r\nsiempre permanece fiel,\r\npues ha dicho: “Con vosotros\r\nsiempre estoy”.\r\nY en el tiempo hermoso y claro\r\nandaré también con él,\r\npues ha dicho: “Con vosotros\r\nsiempre estoy”.\r\n\r\nY al final iré a la gloria donde\r\nmora el Salvador,\r\npues ha dicho: “Con vosotros\r\nsiempre estoy”.\r\nCantaré la dulce historia\r\ndel amor de mi Señor,\r\npues ha dicho: “Con vosotros\r\nsiempre estoy”.",
    },
    {
      ID: "399",
      Titulo: "Cristo vive y nos guiará",
      Letra:
        "Cristo vive y nos guiará,\r\nAunque triste la vía;\r\nPronto el alba romperá,\r\n¡Qué feliz el día!\r\nTodo bien nos ha de dar;\r\nCristo vive y nos guiará.\r\n\r\nTodo lo que aquí habló,\r\nHoy también nos habla;\r\nTodo el pan que repartió,\r\nHoy también regala.\r\nTodo bien nos ha de dar;\r\nCristo vive y nos guiará.\r\n\r\nCristo vive, mas su amor\r\nLe condujo a la muerte;\r\nPero de Satán triunfó,\r\nEs su nombre “El Fuerte”.\r\nEl nos colma de bondad;\r\nCristo vive y nos guiará.\r\n\r\nCristo vive y nos guiará,\r\nNo nos desampara;\r\nCon su iglesia quedará\r\nHasta al fin llevarla\r\nPara ver su hermosa faz\r\nY gozar de eterna paz.",
    },
    {
      ID: "400",
      Titulo: "Cuando Él vino a mi corazón",
      Letra:
        "Cuán glorioso es el cambio\r\noperado en mi ser,\r\nViniendo a mi vida el Señor,\r\nHay en mi alma una paz\r\nque yo ansiaba tener,\r\nLa paz que me trajo su amor.\r\n\r\nCoro:\r\nEl vino a mi corazón,\r\nEl vino a mi corazón;\r\nSoy feliz con la vida\r\nQue Cristo me dio,\r\nCuando El vino a mi corazón.\r\n\r\nYa no voy por la senda\r\nque el mal me trazó,\r\nDo sólo encontré confusión;\r\nMis errores pasados\r\nJesús los borró,\r\nCuando El vino a mi corazón.\r\n\r\nNi una sombra de duda\r\noscurece su amor,\r\nAmor que me trajo el perdón;\r\nLa esperanza que aliento\r\nla debo al Señor,\r\nPorque El vino a mi corazón.",
    },
    {
      ID: "401",
      Titulo: "Dejo el mundo",
      Letra:
        "Dejo el mundo y sigo a Cristo,\r\nPorque el mundo pasará;\r\nMas su amor, amor bendito,\r\nPor los siglos durará.\r\n\r\nCoro:\r\n¡Oh, qué gran misericordia!\r\n¡Oh, de amor sublime don!\r\n¡Plenitud de vida eterna,\r\nPrenda viva del perdón!\r\n\r\nDejo el mundo y sigo a Cristo,\r\nPaz y gozo en El tendré;\r\nY al mirar que va conmigo,\r\nSiempre alegre cantaré.\r\n\r\nDejo el mundo y sigo a Cristo,\r\nSu sonrisa quiero ver,\r\nComo luz que en mi camino\r\nHaga aquí resplandecer.\r\n\r\nDejo el mundo y sigo a Cristo,\r\nAcogiéndome a su cruz;\r\nY después iré a mirarle\r\nCara a cara en plena luz.",
    },
    {
      ID: "402",
      Titulo: "Despide ya tu grey",
      Letra:
        "Despide ya tu grey\r\nEn paz y bendición;\r\nY las palabras de tu ley\r\nConserve el corazón.\r\n\r\nSemilla y sembrador\r\nQue seas Tú a la vez;\r\nY con tu Espíritu de amor\r\nApaga nuestra sed.\r\n\r\nEnséñanos, Señor,\r\nTu ley a meditar;\r\nVivir unidos en amor,\r\nY en él por siempre andar.",
    },
    {
      ID: "403",
      Titulo: "El amigo más fiel",
      Letra:
        "El amigo más fiel es Cristo,\r\nCuando triste y agobiado estás,\r\nSiempre lleno de bondad,\r\nQuita toda oscuridad,\r\nEl amigo más fiel es Cristo.\r\n\r\nCoro:\r\nEs Cristo el mejor amigo, (bis)\r\nPues El no nos dejará,\r\nSiempre nos protegerá,\r\nEs Jesús el mejor amigo.\r\n\r\n¡Oh, qué amigo yo tengo en Cristo!\r\nA mi corazón su gozo da,\r\nCon su brazo de poder\r\nMiedo no podré tener;\r\nEl amigo más fiel es Cristo.\r\n\r\nCuando al fin en la gloria estemos\r\nCon los santos que han partido ya;\r\nCantaremos su loor\r\nCon más gozo y más fervor,\r\nEl amigo más fiel es Cristo.",
    },
    {
      ID: "404",
      Titulo: "El sol no se pondrá",
      Letra:
        "El sol no se pondrá\r\nen la gloria allá.\r\nNo habrá más lágrimas\r\nen la gloria allá.\r\nY no habrá noche más,\r\nla luz no menguará;\r\ngozo perfecto habrá\r\nen la gloria allá.\r\n\r\nNadie se desviará\r\nen la gloria allá.\r\nNi nunca caerá\r\nen la gloria allá.\r\nLa mar no existirá,\r\nni negra tempestad.\r\nLa paz perdurará\r\nen la gloria allá.\r\n\r\nEn vida reinarán\r\nen la gloria allá\r\nlos que con Cristo van\r\nen la gloria allá.\r\nNo habrá más maldición,\r\nni pena ni aflicción.\r\nEterna es la canción\r\nen la gloria allá.",
    },
    {
      ID: "405",
      Titulo: "En gracia el santo Dios",
      Letra:
        "En gracia el santo Dios\r\nformó el hermoso plan\r\nde, por su soberano amor,\r\nal hombre ruin salvar.\r\n\r\nCoro:\r\nPor gracia salvados sois\r\npor la fe… por la fe…\r\nNo de vosotros es así, (Bis)\r\nde obras no… de obras no…\r\nDe obras no, que nadie se gloríe,\r\npues es el don de Dios. (Bis dos últimas)\r\n\r\nDe Dios la gracia ved,\r\nmostrada en el Señor,\r\npues Él crucificado fue\r\nen prueba de su amor.\r\nA todo aquel que cree\r\nen el Señor Jesús\r\nes dada salvación por fe;\r\nes hijo de la luz.",
    },
    {
      ID: "406",
      Titulo: "En tu palabra",
      Letra:
        "En tu palabra, oh, Padre Dios,\r\n¡Qué bella luz se ve!\r\nBendita, celestial porción,\r\nGozada por la fe.\r\n\r\nAquí del Redentor la voz\r\nAlegra el corazón,\r\nLa dulce voz del Buen Pastor\r\nQue trae salvación.\r\n\r\nEn su divina inspiración\r\nAliento se nos da;\r\nTambién allí satisfacción\r\nEl alma encontrará.\r\n\r\nY antorcha para iluminar\r\nLos pasos de tu grey;\r\nY lámpara que nos dará\r\nVisiones del Gran Rey.\r\n\r\n¡Cuán dulce es tu palabra fiel\r\nPara mi paladar!\r\nMás que la refinada miel\r\nQue cae del panal.\r\n\r\nY mina de riqueza es,\r\nQue no se agotará,\r\nHasta ese día en que yo esté\r\nEn gloria celestial.",
    },
    {
      ID: "407",
      Titulo: "Es la Biblia para mí",
      Letra:
        "Es la Biblia para mí\r\nSanto y gran tesoro aquí;\r\nPues contiene con verdad\r\nLa divina voluntad;\r\nMe declara lo que soy;\r\nDe quien vine y a quien voy.\r\n\r\nReprende ella mi dudar\r\nY me exhorta sin cesar;\r\nEs cual faro de mi pie,\r\nVa guiando por la fe\r\nA las fuentes del amor\r\nDel bendito Salvador.\r\n\r\nEs la infalible voz\r\nDel Espíritu de Dios,\r\nQue vigor al alma da\r\nCuando en aflicción está;\r\nY me enseña a triunfar\r\nDe la muerte y del pecar.\r\n\r\nPor su santa letra sé\r\nQue con Cristo reinaré,\r\nYo que tan indigno soy\r\nPor su luz al cielo voy;\r\nEs la Biblia para mí\r\nSanto y gran tesoro aquí.",
    },
    {
      ID: "408",
      Titulo: "Gracia, perdón y paz",
      Letra:
        "Gracia, perdón y paz consigue\r\nEl pecador,\r\nQue a Jesús, contrito pide\r\nSu compasión y amor.\r\n\r\nCoro:\r\nNo podrá el mundo entero\r\nDar al alma paz;\r\nSólo podrá Jesús hacerlo,\r\nEl te ofrece solaz.\r\n\r\nGracia sin límite y gratuita\r\nCristo nos da;\r\nEn la tentación y prueba\r\nSu brazo nos tendrá.\r\nDulce perdón al alma inquieta\r\nCristo dará;\r\nSi al Salvador con fe sincera,\r\nContrita acudirá.\r\n\r\nPaz halla el corazón turbado\r\nEn su Señor;\r\nY las furiosas tempestades\r\nNo infunden ya temor.",
    },
    {
      ID: "409",
      Titulo: "¿Has hallado en Cristo tu buen Salvador?",
      Letra:
        "¿Has hallado en Cristo tu buen Salvador?\r\n¿Eres salvo por la sangre de Jesús?\r\n¿Por la fe descansas en el Redentor?\r\n¿Eres salvo por la sangre de Jesús?\r\n\r\nCoro:\r\nLávame, lávame,\r\nEn tu sangre, Cordero de Dios;\r\nY con alma limpia me presentaré\r\nEn tu hogar tan glorioso de amor.\r\n\r\n¿Vives siempre al lado de tu Salvador?\r\n¿Eres salvo por la sangre de Jesús?\r\n¿Del pecado eres siempre vencedor?\r\n¿Eres salvo por la sangre de Jesús?\r\n\r\nSi perdón y paz deseas, pecador,\r\nTu refugio es la sangre de Jesús;\r\nSi librarte quieres de eternal dolor,\r\n¡Oh, acude a la sangre de Jesús!",
    },
    {
      ID: "410",
      Titulo: "¿He de ir sin ningún fruto?",
      Letra:
        "¿He de ir sin ningún fruto\r\nQue presente a mi Señor?\r\n¡No le llevo ni un trofeo,\r\nNi servicio de valor!\r\nCoro:\r\n¿He de ir sin ningún fruto?\r\n¿He de ver a Cristo así?\r\nCon el tiempo mal gastado,\r\n¿He de presentarme allí?\r\n\r\nDe la muerte no me asusto,\r\nCristo es ya mi Salvador.\r\nPara él nada yo he hecho\r\nEsto, sí, me da dolor\r\n\r\nDarle todo yo quisiera\r\nDe los años que perdí\r\nCaminando en la ceguera,\r\nPero a Satanás los di.\r\n\r\nPasa el día y llega noche,\r\n¡Trabajad cuando haya luz!\r\nLe verán, y sin reproche,\r\nQuienes sirvan a Jesús.",
    },
    {
      ID: "411",
      Titulo: "Iglesia de Cristo",
      Letra:
        "Iglesia de Cristo, reanima el amor,\r\nY alegre en la noche espera al Señor.\r\nJesús el Esposo, vestido de honor,\r\nViniendo se anuncia con fuerte clamor.\r\n\r\nCoro:\r\nLevántate iglesia,\r\nSacude el sopor,\r\nQue viene en las nubes,\r\nTu Esposo y Señor.\r\n\r\nSi algunos dormitan sin sentir dolor,\r\nLa fe sea en todos el despertador,\r\nVelad compañeros, velad sin temor,\r\nQue está con nosotros el Consolador.\r\n\r\nEl hombre en sus penas, infiel pecador,\r\nSe entrega en las manos del sueño traidor;\r\nMas el que es amado del fiel Salvador,\r\nVelar esperando prefiere mejor.\r\n\r\nLa noche difunde su negro pavor,\r\nMas pronto del alba saldrá el resplandor.\r\nEn tanto esperamos el primer albor,\r\nCantemos en coro con gracia y ardor.",
    },
    {
      ID: "412",
      Titulo: "Jesús es mi Pastor",
      Letra:
        "Jesús es mi Pastor, conmigo está;\r\nnada con mi Señor me faltará.\r\nEn él confiaré de todo corazón,\r\ny por él venceré la tentación.\r\n\r\nÉl es mi dulce luz, mi salvación;\r\nen la sangrienta cruz logré perdón.\r\nAllí por mí murió, por mí, vil pecador;\r\nmis culpas Él pagó, ¡gloria al Señor!\r\n\r\nLa fe que me dio Él me salvará;\r\nen justo, santo y fiel me cambiará.\r\nSu sangre me lavó, y su resurrección\r\nla paz con Dios me dio, vida y perdón.\r\n\r\n¿Con qué, con qué, Señor, te pagaré,\r\nsi tuyo es mi valor, tuya mi fe?\r\n¿Si yo no soy capaz de obrar el bien por mí,\r\nsi soy sombra fugaz, nada sin ti?\r\n\r\nDame, bendito Dios, por caridad\r\nque siempre vaya en pos de la verdad;\r\nTu bien quiero gozar, vivir contigo en paz,\r\ntu santa majestad siempre adorar.",
    },
    {
      ID: "413",
      Titulo: "Jesús mi Salvador ¿será posible?",
      Letra:
        "Jesús, mi Salvador, ¿será posible\r\nque se avergüence algún mortal de ti?\r\n¿Y que, olvidando tus sublimes hechos,\r\nniegue lo que Tú has sido para sí?\r\n\r\n¡Avergonzarme de Jesús! Más pronto\r\nrepudiaría el firmamento el sol\r\nantes se avergonzara la mañana\r\ndel fresco, puro y nítido arrebol.\r\n\r\n¡Avergonzarme del querido Amigo,\r\nmi apoyo, mi esperanza, mi sostén!\r\nNo, mi vergüenza es que, aunque le amo tanto,\r\nno le amo siempre como al sumo bien.\r\n\r\n¡Avergonzarme de Jesús! Sí, cuando\r\nno tenga culpa alguna que lavar,\r\nni bienes que pedir, ni miedo oculto,\r\nni lágrimas, ni aun alma que salvar.\r\n\r\nHasta entonces, mi orgullo es confesarte;\r\npara salvarme espero sólo en ti,\r\ny mi gloria será que Jesucristo\r\nno se avergüence, no, jamás de mí.",
    },
    {
      ID: "414",
      Titulo: "La noche oscura fue",
      Letra:
        "La noche oscura fue, sin Ti, Señor,\r\nY lejos me encontré, sin Ti, Señor.\r\nAl mundo yo seguí,\r\nDe su placer bebí,\r\nMas paz no conocí, sin Ti, Señor.\r\n\r\nResplandeció la luz, por Ti, Señor;\r\nY divisé la cruz, por Ti, Señor.\r\nAl ver tu muerte allí,\r\nSaber que fue por mí,\r\nAl Padre me volví, por Ti, Señor.\r\n\r\nDel juicio libre estoy, en Ti, Señor,\r\nGozoso al cielo voy, en Ti, Señor\r\nDel cielo la virtud,\r\nMe gozo en plenitud,\r\nCompleta es mi salud, en Ti, Señor.\r\n\r\nYa sólo esperaré de Ti, Señor,\r\nMi todo buscaré en Ti, Señor.\r\nEl mundo pasará,\r\nEl hombre morirá,\r\nMas siempre el bien habrá, en Ti, Señor.\r\n\r\nY Tú me llamarás a Ti, Señor,\r\nTu iglesia tomarás, a Ti, Señor.\r\n¡Oh, celestial reunión!\r\n¡Eterna salvación!\r\n¡De gloria la canción, a Ti, Señor!",
    },
    {
      ID: "415",
      Titulo: "Más de Jesús",
      Letra:
        "Más de Jesús quiero aprender,\r\nMás de su gracia conocer,\r\nMás del amor con que me amó,\r\nMás de la cruz en que murió.\r\n\r\nMás, quiero amarle, más quiero honrarle,\r\nMás de su salvación gozar,\r\nMás de su dulce amor gustar.\r\n\r\nMás de Jesús quisiera hablar,\r\nMás de su comunión gozar,\r\nMás de sus dones recibir,\r\nMás con los otros compartir.\r\n\r\nMás, más de Jesús; más, más de Jesús,\r\nMás de sus dones recibir,\r\nMás con los otros compartir.\r\n\r\nMás de Jesús anhelo ver,\r\nMás de su hermoso parecer,\r\nMás de la gloria de su faz,\r\nMás de su luz, más de su paz.\r\n\r\nMás, más de Jesús, más, más de Jesús,\r\nMás de la gloria de su faz,\r\nMás de su luz, más de su paz.",
    },
    {
      ID: "416",
      Titulo: "En la curz",
      Letra:
        "Me hirió el pecado, fui a Jesús,\r\nMostréle mi dolor;\r\nPerdido, errante, vi su luz,\r\nBendíjome en su amor.\r\n\r\nCoro:\r\nEn la cruz, en la cruz,\r\nDo primero vi la luz,\r\nY las manchas de mi alma yo lavé,\r\nFue allí por la fe, do vi a Jesús\r\nY siempre feliz con él seré.\r\n\r\nEn una cruz, mi Salvador\r\nSu sangre derramó\r\nPor este pobre pecador,\r\nA quien así salvó.\r\n\r\nVenció la muerte, ¡qué placer!\r\nY el Padre lo exaltó;\r\nEspero sólo en su poder,\r\nMorir no temo yo.\r\n\r\nAunque El se fue, conmigo está\r\nEl gran Consolador;\r\nPor El entrada tengo ya\r\nAl reino del Señor.\r\n\r\nVivir en Cristo trae la paz,\r\nCon El habitaré;\r\nYa suyo soy, y de hoy en más\r\nA nadie temeré.",
    },
    {
      ID: "417",
      Titulo: "Me levantó",
      Letra:
        "Mi Salvador en su bondad\r\nAl mundo malo descendió;\r\nY de hondo abismo de maldad\r\nEl mi alma levantó.\r\nCoro:\r\nSeguridad me dio Jesús\r\nCuando El su mano me tendió;\r\nEstando en sombra a plena luz,\r\nEn su bondad, me levantó.\r\n\r\nSu voz constante resistí,\r\nAunque El amante me llamó;\r\nMas su palabra recibí,\r\nY fiel me levantó.\r\n\r\nTortura cruel sufrió Jesús,\r\nCuando en la cruz por mí murió;\r\nTan sólo así me dio salud,\r\nY así me levantó.\r\n\r\nQue soy feliz, yo bien lo sé,\r\nCon esta vida que El me dio;\r\nMás no comprendo aún por qué,\r\nJesús me levantó.",
    },
    {
      ID: "418",
      Titulo: "No lejos del reino",
      Letra:
        "No lejos del reino del cielo\r\nhay muchos que vienen y van;\r\nse encuentran en sombra de muerte,\r\ny pocos entrando están.\r\n\r\nCoro:\r\n¡Oh cuántos, sí, vienen y van!\r\nMas pocos entrando están. (Bis todo)\r\n\r\nNo lejos del reino del cielo,\r\nson tímidos para entrar;\r\npues hablan de goces supremos,\r\nmas miedo les hace parar.\r\n\r\n¿Por qué te detienes afuera?\r\nJesús te desea guiar\r\na su redil en esta tierra,\r\ny luego a su cielo llevar.\r\n\r\nMuy lejos no estás ya del reino;\r\n¿por qué no decides entrar?\r\nTe resta tan sólo un paso;\r\nven, dalo, pues, sin vacilar.\r\n\r\n¡Oh! entra por fe en el reino,\r\nte arriesgas por ese tardar;\r\nAún para ti abierta la puerta,\r\npor siempre se puede cerrar.",
    },
    {
      ID: "419",
      Titulo: "No soy rescatado con oro o con plata",
      Letra:
        "No soy rescatado con oro o con plata,\r\nNo sirve el dinero a los ojos de Dios,\r\nLa sangre preciosa de Cristo fue el precio\r\nDe mi redención de la condenación.\r\n\r\nCoro:\r\nYo nada soy, y nada tengo,\r\nCon amor pensaste en mí,\r\nMoriste Tú por mis pecados,\r\n¡Oh, Señor! confío en Ti.\r\n\r\nNo soy rescatado con oro o con plata,\r\nEl oro no compra la gracia de Dios.\r\nSi fuera por oro sería un negocio,\r\nMas Cristo por todos su sangre vertió.\r\n\r\nNo soy rescatado con oro o con plata,\r\nPensando en mis culpas tenía temor,\r\nY al ver que la sangre borró mis pecados,\r\nHuyeron las dudas de mi corazón.",
    },
    {
      ID: "420",
      Titulo: "¡Oh! Dime más!",
      Letra:
        "¡Oh!, dime más de Jesucristo,\r\nEl tema vuelve a repetir,\r\nY de su amor inmerecido,\r\nGracia y favor hazme sentir.\r\n\r\nCoro:\r\n¡Oh! dime más, he menester,\r\nDe su sostén, de su poder.\r\n¡Oh! de mi Amado dime más,\r\nHasta que en gloria vea su faz.\r\n\r\n¡Oh! dime de su voz calmante\r\nQue dice “Paz” en mi dolor,\r\nY que alba habrá tras noche triste\r\nAl que confía en su Señor.\r\n\r\n¡Oh! dime de la dulce historia\r\nDel Rey de gloria, quien lloró\r\nSus lágrimas de simpatía,\r\nY así a los tristes consoló.\r\n\r\n¡Oh! dime más, y de mi parte\r\nMi vida entera entregaré;\r\nLa historia bella y tan gloriosa\r\nDel evangelio contaré.",
    },
    {
      ID: "421",
      Titulo: "Oh Dios, Padre mío",
      Letra:
        "Oh Dios, Padre mío, no busco la gloria\r\nde aquellos deberes que un día cumplí,\r\nA Cristo acudo, tan sólo confío\r\nen él y su sangre vertida por mí.\r\n(Bis últimas dos)\r\n\r\nA todas mis obras las llamo tinieblas,\r\nal lado de Cristo, torrente de luz;\r\nMi gloria pasada es hoy mi vergüenza\r\ny entierro mi gloria al pie de la cruz.\r\n(Bis últimas dos)\r\n\r\nEstimo mis obras de pérdida vana,\r\ny acepto la obra del buen Salvador.\r\nMi alma desea gozar en su seno,\r\nvivir a su santo bendito calor.\r\n(Bis últimas dos)\r\n\r\nYo sé que mis obras no pueden, Dios mío,\r\nlavar mis pecados, borrar lo que fui,\r\nMas sé que tu Hijo, si en él me confío,\r\nme lava y ensalza, Señor, hasta ti.\r\n(Bis últimas dos)",
    },
    {
      ID: "422",
      Titulo: "Oh, no deseches otra vez",
      Letra:
        "¡Oh no deseches otra vez\r\nla voz de Cristo el Salvador!\r\nYa que la vuelve a ofrecer,\r\nacepta hoy la salvación.\r\n\r\nCoro:\r\nTe ofrece hoy la salvación. (Bis)\r\nAcepta hoy del Salvador\r\nel gozo de la salvación.\r\n\r\nEl Salvador nunca echará\r\nde su presencia al pecador.\r\nAcude, pues, sin más tardar,\r\nacepta hoy la salvación.\r\n\r\nEl mundo no te puede dar\r\nlo que contenta al corazón.\r\nMas Cristo te dará su paz;\r\nte ofrece hoy la salvación.",
    },
    {
      ID: "423",
      Titulo: "No hay amor como el de Cristo",
      Letra:
        "No hay amor como el de Cristo,\r\nNunca terminará,\r\nHasta que al redil de la gloria allí\r\nEl nos congregará.\r\n\r\nCoro:\r\n¡Oh, qué amor! ¡Grande amor!\r\nInmenso, sin igual.\r\n¡Oh, ven, pecador, a tu Redentor!\r\nQue te quiere salvar.\r\n\r\nNo hay corazón como el de Cristo,\r\nLleno de tierno amor,\r\nNo hay aflicción ni tentación\r\nQue no sienta el Señor.\r\n\r\nNo hay ojos claros cual los de Cristo,\r\nTan penetrantes son,\r\nLa historia lee, los secretos ve,\r\nAún de tu corazón.\r\n\r\nNinguna voz cual la voz de Cristo\r\n¡Qué nos alcance ya!\r\nCuál melodía de noche y día\r\nNos satisfará.\r\n\r\nQue escuchemos la voz de Cristo,\r\nSiempre nos guiará,\r\nHasta encontrarnos en el hogar\r\nDe su gloriosa paz.",
    },
    {
      ID: "424",
      Titulo: "Oh, Señor mío",
      Letra:
        "Oh, Señor mío, eres Tú mi amigo fiel,\r\nSeguro amparo sólo en Ti tendré.\r\nEn mis aflicciones, oh, Señor iré a Ti,\r\nY consuelo y dicha gozaré yo así.\r\n\r\nCoro:\r\nCristo, ven más cerca,\r\nPaz perfecta en mi alma pon;\r\nCerca, sí, más cerca, de mi corazón.\r\n\r\nCuando en la noche vea yo estrellas mil,\r\nTu voz hermosa pueda mi alma oír;\r\nHaz que yo medite en tu tierno y dulce amor,\r\nY que yo te alabe, lleno de fervor.\r\n\r\nCuando esta vida tenga yo que abandonar,\r\nCorona hermosa, Tú me ceñirás:\r\nY con dulce canto, tu bondad alabaré,\r\nY en mansión de gloria siempre moraré.",
    },
    {
      ID: "425",
      Titulo: "Oveja errante",
      Letra:
        "Oveja errante fui,\r\ndel aprisco me aparté;\r\nla tierna voz de mi Pastor\r\nconstante desprecié.\r\nUn “pródigo” yo fui\r\ny andando al azar,\r\ndel Padre yo me olvidé,\r\ndejando el buen hogar.\r\n\r\nSiguiome el buen Pastor,\r\nmi Padre me buscó\r\ncon tierno y persistente amor,\r\ny lejos me encontró.\r\nPerdido estaba ya,\r\ncaído y ruin,\r\nmas en su seno recibió\r\nal pródigo por fin.\r\n\r\nNo quiero más errar\r\nen triste soledad,\r\ndeseo siempre disfrutar\r\nsu dulce caridad.\r\nJesús es mi Señor,\r\nÉl guía me será;\r\nla gracia de su tierno amor\r\njamás me faltará.",
    },
    {
      ID: "426",
      Titulo: "Para andar con Jesús",
      Letra:
        "Para andar con Jesús\r\nno hay sendero mejor\r\nQue guardar sus mandatos de amor;\r\nObedientes a El,\r\nsiempre habremos de ser\r\nY tendremos de Cristo el poder.\r\n\r\nCoro:\r\nObedecer, y confiar en Jesús,\r\nEs la senda marcada\r\nPara andar en la luz.\r\n\r\nCuando vamos así,\r\n¡cómo brilla la luz\r\nEn la senda al andar con Jesús!\r\nSu promesa de estar\r\ncon los suyos es fiel,\r\nSi obedecen y esperan a El.\r\n\r\nQuien siguiere a Jesús\r\nni una sombra verá,\r\nSi confiado su vida le da;\r\nNi terrores, ni afán,\r\nni ansiedad, ni dolor;\r\nPues los cuida su amante Señor.\r\n\r\nMas no habréis de alcanzar\r\nsus tesoros de amor\r\nSi rendidos no vais al Señor,\r\nPues su paz y su amor\r\nsólo son para aquel\r\nQue a sus leyes divinas es fiel.",
    },
    {
      ID: "427",
      Titulo: "¿Qué cimiento habrá?",
      Letra:
        "¿Qué cimiento habrá sobre el cual fundar\r\nUna casa que pueda soportar\r\nRuda tempestad que ha de venir\r\nY el débil edificio destruir?\r\n\r\nCoro:\r\nSobre la peña mi casa está;\r\nFirme sobre ella se quedará;\r\nTempestades la podrán batir,\r\nPero no podrán esa casa hundir.\r\n\r\n¿Quién sobre arena su cimiento hará?\r\nDe mis obras ¿Cuál me podrá salvar?\r\nPues al que en sus obras confiado esté,\r\nDe Jesús la sangre no le inspira fe.\r\n\r\nMas el que profesa en Jesús confiar;\r\nEsa fe por obras ha de mostrar;\r\nSi el perdón grande es, ¿que será el amor\r\nQue por Cristo sienta el pobre pecador?",
    },
    {
      ID: "428",
      Titulo: "¡Qué maravilla! Perdón recibí",
      Letra:
        "¡Qué maravilla! Perdón recibí,\r\nCristo por gracia salvome a mí;\r\nMis culpas todas El las llevó,\r\nY sólo por gracia salvo soy.\r\n\r\nCoro:\r\nSólo por gracia salvo soy,\r\nSólo por gracia salvo soy,\r\nEsta es mi historia,\r\nDe Dios es la gloria,\r\nQue sólo por gracia salvo soy.\r\n\r\nYo tengo un gozo que Cristo me dio\r\nCuando en su sangre mis culpas lavó;\r\nFeliz elevo mi corazón\r\nPues sólo por gracia salvo soy.\r\n\r\nMas por su gracia la cruz puedo ver,\r\nYa me hallo libre y contento con El,\r\nSu amor inunda mi corazón,\r\nY sólo por gracia salvo soy.",
    },
    {
      ID: "429",
      Titulo: "¿Qué vas a hacer hoy con Cristo?",
      Letra:
        "¿Qué vas a hacer hoy con Cristo?\r\n¿Qué vas a hacer con su amor?\r\nPuedes hoy mismo estar listo\r\nPara servir al Señor.\r\n\r\nCoro:\r\n¿Qué vas a hacer hoy con Cristo?\r\nAlgo tú debes hacer,\r\n¿Aceptarás o rechazarás?\r\nHoy tienes que resolver.\r\n\r\nQuiere el Señor recibirte,\r\nQuiere tu vida cambiar;\r\nHoy debes tú decidirte\r\nY su bondad aceptar.\r\n\r\nNunca neutral has de hallarte\r\nCuando te invita el Señor;\r\nDebes resuelto mostrarte\r\nEn contra de El o en favor.\r\n\r\nEntre la vida o la muerte\r\nTienes que hacer elección;\r\nPor en sus manos tu suerte\r\nY gozarás del perdón.",
    },
    {
      ID: "430",
      Titulo: "Salud hay para mí",
      Letra:
        "Salud hay para mí,\r\nYa pierdo mi temor\r\nAl contemplar por fe\r\nA Cristo el Redentor.\r\nJesús la raza humana amó\r\nY por su salvación murió.\r\n\r\nLas llagas de Jesús,\r\n¡Cuán elocuentes son!\r\nExpían mi maldad,\r\nY me hablan del perdón;\r\nY mi rescate leo allí,\r\nPues que murió Jesús por mí.\r\n\r\nReconciliado soy,\r\nLa voz de Dios oí,\r\nCual hijo de su amor,\r\nLlamándome hacia sí;\r\nSu Espíritu mi Dios me dio,\r\nY sé por El que me aceptó.",
    },
    {
      ID: "431",
      Titulo: "Seguid al Maestro",
      Letra:
        "Seguid al Maestro, no importa sufrir,\r\nAunque haya enemigos y obstáculos mil;\r\nSi estrecha es la senda, no retroceder,\r\nSiguiendo al Maestro podremos vencer.\r\n\r\nCoro:\r\nProseguid siempre adelante,\r\nCon las armas del Señor;\r\nA las órdenes del Jefe,\r\nQue nos guía con su santa voz.\r\n\r\nSeguid al Maestro por todo lugar,\r\nEn días de lucha o en días de paz;\r\nSi oscura es la senda, seguid sin temor,\r\nSu rostro glorioso infunde valor.\r\n\r\nSeguid al Maestro sin titubear,\r\nSus órdenes todas cumplid sin tardar;\r\nEstemos alerta, cual hijos de luz,\r\nY grande victoria darános Jesús.",
    },
    {
      ID: "432",
      Titulo: "Sólo un paso a Cristo",
      Letra:
        "Sólo un paso a Cristo,\r\n¿Por qué más vacilar?\r\nCuando te ofrece amante\r\nLa paz y bienestar.\r\n\r\nCoro:\r\nVen, pecador; ven, pecador,\r\nVen al Salvador;\r\nVen, tu maldad confiesa,\r\nCuéntale tu tristeza,\r\nSólo un paso a Cristo;\r\nPues, ven sin demorar.\r\n\r\nSólo un paso a Cristo\r\nDe muerte a vida real,\r\nDe la desdicha a gozo,\r\nA luz, de oscuridad.\r\n\r\nSólo un paso a Cristo,\r\nTen fe y vivirás,\r\nCon tierno amor te llama,\r\nPerdón recibirás.\r\n\r\nSólo un paso a Cristo,\r\nVen, dile sin tardar:\r\n“En Ti, Señor, confío,\r\nY Tú me salvas ya”.",
    },
    {
      ID: "433",
      Titulo: "Todas las promesas",
      Letra:
        "Todas las promesas del Señor Jesús\r\nSon apoyo poderoso de mi fe;\r\nMientras viva aquí cercado de su luz,\r\nSiempre en sus promesas confiaré.\r\n\r\nCoro:\r\nGrandes, fieles,\r\nLas promesas que el Señor Jesús ha dado;\r\nGrandes, fieles,\r\nEn ellas para siempre confiaré.\r\n\r\nTodas sus promesas para el hombre fiel,\r\nEl Señor, en sus bondades, cumplirá;\r\nY confiado sé que para siempre en El\r\nPaz eterna mi alma gozará.\r\n\r\nTodas las promesas del Señor serán\r\nGozo y fuerza en nuestra vida terrenal;\r\nEllas en la dura lid nos sostendrán,\r\nY triunfar podremos sobre el mal.",
    },
    {
      ID: "434",
      Titulo: "Un día",
      Letra:
        "Un día que el cielo sus glorias cantaba,\r\nUn día que el mal imperaba más cruel;\r\nDescendió Cristo y nació de una virgen,\r\nY aquí morando mi ejemplo fue El.\r\n\r\nCoro:\r\nVivo, me amaba, muerto, salvóme;\r\nY en el sepulcro mi mal enterró;\r\nResucitado, es mi eterna justicia,\r\nUn día El viene, pues lo prometió.\r\n\r\nUn día lleváronle al monte Calvario,\r\nUn día claváronle allí en la cruz;\r\nPena y dolores sufrió y la muerte,\r\nPor redimirme, potente Jesús.\r\n\r\nUn día dejáronle sólo en el huerto,\r\nUn día la tumba su cuerpo abrigó,\r\nÁngeles sobre El guardaban vigilia,\r\nMientras el Dueño del mundo durmió.\r\n\r\nUn día la tumba ocultarle no pudo,\r\nUn día su espíritu al cuerpo volvió;\r\nY de la muerte ya había triunfado,\r\nY a la diestra de Dios se sentó.",
    },
    {
      ID: "435",
      Titulo: "Venid, contemplemos a Cristo",
      Letra:
        "Venid, contemplemos a Cristo\r\nSufriendo por ti y por mí.\r\n¡Qué gracia y amor jamás vistos,\r\nQue el Hijo de Dios muera así!\r\n\r\nCoro:\r\nEl herido fue por nosotros,\r\nFue clavado a la cruz por mí;\r\nComprado a valor tan costoso,\r\nAl Señor serviré yo aquí.\r\n\r\nDejó su honor increado,\r\nSu Padre, su gloria, su hogar;\r\nBajó desde el cielo a salvarnos\r\nY darnos la vida eternal.\r\n\r\nConfiad en Cristo adorable,\r\nQuien vino a comprarnos perdón;\r\nMorad en su amor perdurable\r\nAllí sólo hay satisfacción.\r\n\r\nA Cristo rendid vuestra vida,\r\nSeguidle con celo y verdad;\r\n¡oh! Dadle amorosa acogida,\r\nY en vos su morada tendrá.",
    },
    {
      ID: "436",
      Titulo: "Venid, oh, venid al jardín",
      Letra:
        "Venid, oh, venid al jardín,\r\nDonde Cristo ahora ha entrado,\r\nY por su dolor, ved, con gran horror,\r\nCuán feo es el pecado.\r\n\r\nCoro:\r\nPor vosotros fue, sí, y fue por mí,\r\nQue agonizó El allí,\r\nEn mi favor, su gran amor,\r\nCostóle Getsemaní.\r\n\r\n¡Venid una hora a velar!\r\nEl desea la compañía\r\nEn la soledad y oscuridad,\r\nLa noche de agonía.\r\n\r\nVenid y escuchad su clamor,\r\nSi posible es, oh, retira\r\nEn la gran bondad de tu voluntad\r\nLa copa de tu “ira”.\r\n\r\nVenid y pasmados quedad,\r\nHasta haber de Dios aprendido\r\nEn el estertor y mortal sudor\r\nDel Salvador rendido.\r\n\r\nVenid, apuráos, seguid,\r\nVendido y traicionado,\r\nEl Señor Jesús en la cruenta cruz\r\nSu vida ha entregado.\r\n\r\nPor vosotros fue, si fue por mi\r\nQue agonizó El allí,\r\nEn mi favor tomó el Señor,\r\nLa copa en Getsemaní",
    },
    {
      ID: "437",
      Titulo: "Con tierno amor, oh pecador",
      Letra:
        "Con tierno amor, oh pecador,\r\nte llama hoy el Salvador;\r\nSu dulce voz te dice a ti:\r\nOh pecador, ven, ven a mí.\r\n\r\nCoro:\r\nHoy mismo llama con afán,\r\n“Ven pecador, ven, ven a mí”.\r\nResponde tú con el refrán:\r\n“Oh Salvador, acudo a ti”.\r\nVen, ven a mí… – Acudo a ti. (Bis)\r\nHoy mismo, sí, acudo a ti.\r\nVen, ven a mí… – Hoy mismo,\r\nsí, acudo a ti. (Bis)\r\nOh Salvador, me entrego a ti.\r\n\r\nEl diablo bríndate a su vez\r\nel mundo con su brillantez,\r\ny voces mil del tentador\r\nahogan la del Salvador.\r\n\r\nTe llama hoy a descansar;\r\nel mal te quiere perdonar.\r\n“Oh ven a mí”, te dice hoy.\r\nResponde tú: “A Cristo voy”.",
    },
    {
      ID: "438",
      Titulo: "¡Cuán firme cimiento!",
      Letra:
        "¡Cuán firme cimiento se ha dado a la fe\r\nde Dios en su eterna Palabra de amor!\r\n¿Qué más Él pudiera en su libro añadir,\r\nsi todo a sus hijos lo ha dicho el Señor? (Bis)\r\n\r\n“Ya te halles enfermo o en plena salud,\r\nya rico, ya pobre se encuentre tu ser,\r\nen casa o viajando por tierra o por mar,\r\nconforme a tu día será tu poder”. (Bis)\r\n\r\n“No temas por nada, contigo Yo soy,\r\nTu Dios Yo soy solo, tu ayuda seré;\r\nTu fuerza y firmeza en mi diestra estarán,\r\ny en ella sostén y poder te daré. (Bis)\r\n\r\n“No habrán de anegarte las ondas del mar,\r\nsi en aguas profundas te ordeno salir;\r\nPues siempre contigo en angustias seré\r\ny todas tus penas podré bendecir. (Bis)\r\n\r\n“La llama no puede dañarte jamás,\r\nsi en medio del fuego te ordeno pasar;\r\nEl oro de tu alma más puro será,\r\npues sólo la escoria se habrá de quemar”. (Bis)\r\n\r\n“Mi amor siempre tierno, invariable, eternal,\r\nconstante a mi pueblo mostrarle podré,\r\nsi nívea corona ya ciñe su sien,\r\ncual tiernos corderos aún cuidaré”. (Bis)\r\n\r\n“Al alma que anhele la paz que hay en mí,\r\njamás en sus luchas la habré de dejar;\r\nSi todo el infierno la quiere perder,\r\n¡Yo nunca, no nunca, la puedo olvidar!” (Bis)",
    },
    {
      ID: "439",
      Titulo: "¡Que vea tu faz!",
      Letra:
        "¡Que vea tu faz! –un resplandor\r\nDe encanto divinal;\r\nPues otro amor no encontraré\r\nQue al tuyo sea igual.\r\nLuz inferior ha de menguar,\r\nNinguna gloria habrá;\r\nToda hermosura terrenal\r\nSu gracia perderá.\r\n\r\n¡Que vea tu faz! –mi fe y mi amor\r\nMás firmes han de estar;\r\nY nada acá podrá la paz\r\nDe mi alma perturbar.\r\nSerá mi vida cual visión,\r\nTodo intangible acá,\r\nVana ilusión, más Tú, Señor,\r\nLa sola realidad.\r\n\r\n¡Que vea tu faz! olvidaré\r\nLa antigua lasitud;\r\nNi sombras del febril pesar\r\nTraerán más inquietud;\r\nTemores por el porvenir\r\nSe trocarán en paz;\r\nMi corazón, pues, gozará\r\nSosiego y gran solaz.\r\n\r\n¡Que vea tu faz! se aliviará\r\nLa más pesada cruz;\r\nBien se ha de ver en todo mal,\r\nEn cada noche, luz;\r\nVeloces los años correrán,\r\nEn calma han de pasar,\r\nLuego, el pesar dejado atrás,\r\nIré a mi eterno hogar.",
    },
    {
      ID: "440",
      Titulo: "Cristo ya viene otra vez",
      Letra:
        "Las estaciones vienen, van,\r\ny al hombre traen bendición,\r\npero expectativa en el aire hay\r\ny una esperanza nos llenó.\r\n¿Por qué el Señor ha de demorar?\r\n¿Cuándo su reino aparecerá?\r\nY el cielo y tierra anunciarán:\r\n“Cristo ya viene otra vez”.\r\n\r\nCoro:\r\nCristo ya viene otra vez. (Bis)\r\nGloria en el cielo a Dios:\r\nCristo ya viene otra vez.\r\n\r\nLas aguas voces fuertes dan:\r\n“El rey tomado ha su poder”;\r\nLos montes y valles cantarán:\r\n“La corona es digno Él de tener”.\r\nLos que dormís, al Señor mirad;\r\nhimnos de bodas venid, cantad.\r\nHuya el reinado de Satán;\r\nCristo ya viene otra vez.\r\n\r\nLa tierra toda cantará,\r\nya sujetada su maldad.\r\nSu anhelo: “¿Cuándo volverá?”\r\nal fin se trueca en realidad.\r\nÁngeles dan el decreto real,\r\nreina en el mundo justicia y paz.\r\nLos árboles aplaudirán:\r\nCristo ya viene otra vez.\r\n\r\nHermanos fieles, esperad,\r\nel alba ya despuntará;\r\nSe ve la bandera celestial,\r\nla lucha pronto acabará.\r\nMisericordia con verdad\r\nse une a Cristo en ensalzar;\r\nDigno el Cordero es de reinar:\r\nCristo ya viene otra vez.\r\n\r\n¡Glorioso monte de Sion!\r\n¿Con gozo ya se elevará!\r\nEl fuerte Rey de salvación\r\nreina en poder de mar a mar.\r\nDe su trabajo el Señor verá,\r\ny satisfecho se gozará.\r\nSu reino siempre durará:\r\nCristo ya viene otra vez.",
    },
    {
      ID: "441",
      Titulo: "¡A combatir! resuena la guerrera voz",
      Letra:
        "¡A combatir! resuena la guerrera voz\r\nDel Salvador, que hoy llamando está;\r\nSin desmayar, seguidle siempre con valor,\r\nY la victoria plena os dará.\r\n\r\nCoro:\r\n¡A la batalla, oh, fiel cristiano!\r\nCon el escudo de la cruz;\r\nSé buen soldado, pues a tu lado\r\nEstá el Príncipe Jesús.\r\nEl con su gracia te sostiene,\r\nY con potencia sin igual,\r\nSu brazo extiende, y te defiende\r\nEn esta lucha contra el mal.\r\n\r\n¡A combatir! nos llama nuestro Salvador,\r\nSalid, luchad, con nuestro Capitán,\r\nEn la constante lid, seguid sin vacilar\r\nY venceréis las huestes de Satán.\r\n\r\nAl Rey de reyes, nuestro Salvador Jesús,\r\nHonor y gloria todos tributad,\r\nPues ya los suyos gozan de su plenitud\r\nY pronto reinarán en santidad.",
    },
    {
      ID: "442",
      Titulo: "Al Calvario en espíritu",
      Letra:
        "Al Calvario en espíritu\r\nVenimos, oh, Señor,\r\nA meditar y disfrutar\r\nDe tu infinito amor.\r\n\r\nAllí descansa el corazón\r\nQue siente su dolor,\r\nMas goza de la paz con Dios\r\nPor Ti, oh, Salvador.\r\n\r\n¡Oh, qué hora oscura de dolor!\r\nTu alma padeció;\r\nTu gracia triunfó por fin,\r\nTu amor al mal venció.\r\n\r\nTus agonías sin igual\r\nCon cuerdas de amor,\r\nLigaron nuestro corazón\r\nA Ti, oh, Redentor.\r\n\r\nDesean nuestros ojos ver\r\nTu frente, oh, Salvador,\r\nDe espinas no ceñida ya,\r\nSino de luz y honor.",
    },
    {
      ID: "443",
      Titulo: "Al cansado peregrino",
      Letra:
        "Al cansado peregrino\r\nque en el pecho siente fe,\r\nel Señor ha prometido:\r\n“Con mi brazo te guiaré”.\r\n\r\nCoro:\r\nCon mi brazo, con mi brazo,\r\ncon mi brazo te guiaré.\r\nEl Señor ha prometido:\r\n“Con mi brazo te guiaré”.\r\n\r\nCuando sus lazos el mundo\r\narrojare ante tu pie,\r\nte dirá Dios, tu refugio:\r\n“Con mi brazo te guiaré”.\r\n\r\nSi tu esperanza se aleja\r\ncual sombra de lo que fue,\r\noye atento la promesa:\r\n“Con mi brazo te guiaré”.\r\n\r\nCuando la muerte a tu estancia\r\ncon afán golpeando esté,\r\nten consuelo en las palabras:\r\n“Con mi brazo te guiaré”.",
    },
    {
      ID: "444",
      Titulo: "Alma, basta de gemir",
      Letra:
        "Alma, basta de gemir,\r\nCristo en tu lugar sufrió;\r\ny en la cruz al sucumbir\r\nsu gran obra consumó.\r\nAlma, ya no llores más;\r\nmira a Cristo y vivirás.\r\nEn el Justo se cargó\r\nsin reserva tu maldad,\r\nJehová le condenó\r\nporque tengas libertad.\r\nMira, triste pecador,\r\na Jesús tu Salvador.\r\n\r\nSi te entregas todo a él,\r\ntú recibirás perdón;\r\nHallarasle siempre fiel;\r\npronto a darte salvación.\r\nMira a Cristo por la fe,\r\nsin demora mírale.\r\n\r\n¡Ah, Señor! propicio sé\r\na mí, pobre pecador;\r\nHeme aquí con poca fe,\r\ndame más, ¡oh Redentor!\r\nVen, te pido, ven a mí,\r\npues llorando corro a ti.",
    },
    {
      ID: "445",
      Titulo: "Ama el Pastor sus ovejas",
      Letra:
        "Ama el Pastor sus ovejas\r\ncon un amor paternal;\r\nama el Pastor su rebaño\r\ncon un amor sin igual.\r\nAma el Pastor a las otras\r\nque descarriadas están,\r\ny conmovido las busca\r\npor dondequiera que van.\r\n\r\nCoro:\r\nPor el desierto errabundas\r\nvense sufrir penas mil;\r\ny al encontrarlas, en hombros\r\nllévalas tierno al redil.\r\n\r\nAma el Pastor sus corderos,\r\námalos tierno el Pastor;\r\na los que a veces, perdidos,\r\nse oyen gemir de dolor;\r\nVed al Pastor conmovido\r\npor los collados vagar;\r\ny los corderos en hombros\r\nvedlo llevando al hogar.\r\n\r\nSon delicados tus pastos,\r\ny quietas tus aguas son;\r\nHenos aquí, ¡oh Maestro!\r\ndanos hoy tu comisión.\r\nHaznos obreros fervientes,\r\nllénanos de un santo amor\r\npor las ovejas perdidas\r\nde tu redil, buen Señor.",
    },
    {
      ID: "446",
      Titulo: "Amigos con placer nos vemos",
      Letra:
        "Amigos con placer nos vemos\r\nEn tiempo tan veloz;\r\nMas siempre llega el tiempo triste\r\nEn que se dice adiós.\r\n\r\nCoro:\r\nJamás se dice adiós allá,\r\nJamás se dice adiós;\r\nEn el país de gozo y paz,\r\nJamás se dice adiós.\r\n\r\n¡Cuán dulce es el consuelo dado\r\nPor ellos al partir,\r\nQue al venir Jesús en gloria,\r\nNos hemos de reunir!\r\n\r\nLa voz de triste despedida\r\nJamás allí se oirá,\r\nMas la canción de paz y gozo\r\nPor siempre durará.",
    },
    {
      ID: "447",
      Titulo: "Cabeza ensangrentada",
      Letra:
        "Cabeza ensangrentada,\r\nCubierta de sudor,\r\nDe espinas coronada\r\nY llena de dolor;\r\n¡Oh, celestial cabeza,\r\nTan maltratada aquí,\r\nDe sin igual belleza,\r\nYo te saludo a Ti!\r\n\r\nTe admiro rostro herido,\r\nEspejo de bondad;\r\nAunque en ti han escupido\r\nCon infernal maldad.\r\n¿Quién se atrevió, mi vida,\r\nCon loco frenesí\r\nY saña fratricida\r\nA escarnecerte así?\r\n\r\nCubrió tu noble frente\r\nLa palidez mortal\r\nCual velo transparente\r\nDe tu sufrir señal.\r\nCerróse aquella boca,\r\nLa lengua enmudeció;\r\nLa fría muerte toca\r\nAl que la vida dio.\r\n\r\nSeñor, lo que has llevado\r\nYo sólo merecí;\r\nLa culpa que has pagado\r\nAl Juez, yo la debí.\r\nMas, mírame: confío\r\nen tu cruz y pasión,\r\nOtórgame bien mío,\r\nPerfecta salvación.",
    },
    {
      ID: "448",
      Titulo: "¡Camaradas! en los cielos",
      Letra:
        "¡Camaradas! en los cielos\r\nVed la enseña ya,\r\nHay refuerzos, nuestro el triunfo\r\nNo dudéis, será.\r\n“Estad firmes, Yo voy pronto”\r\nClama el Salvador;\r\nSí, estaremos por tu gracia\r\nFirmes, con vigor.\r\n\r\nNada importa nos asedien\r\nCon rugiente afán\r\nLas legiones aguerridas\r\nQue ordenó Satán.\r\nNo os arredre su coraje,\r\nVed en derredor\r\nCómo caen los valientes\r\nCasi sin valor.\r\n\r\nTremolando se divisa\r\nEl marcial pendón,\r\nY se escucha de las trompetas\r\nEl guerrero son.\r\nEn el nombre del que viene,\r\nFuerte Capitán,\r\nRotos nuestros enemigos\r\nTodos quedarán.\r\n\r\nSin descanso ruda sigue\r\nLa furiosa lid;\r\n¡Oh, amigos! ya cercano\r\nVed vuestro Adalid;\r\nViene Cristo con potencia\r\nA salvar su grey;\r\nCamaradas, ¡alegría!\r\n¡Viva nuestro Rey!",
    },
    {
      ID: "449",
      Titulo: "Canten del amor de Cristo",
      Letra:
        "Canten del amor de Cristo,\r\nEnsalzad al Redentor;\r\nTributadle santos todos\r\nGrande gloria y loor.\r\n\r\nCoro:\r\nCuando estemos en gloria,\r\nEn presencia de nuestro Redentor,\r\nA una voz la historia\r\nDiremos del gran Vencedor.\r\n\r\nLa victoria ya es segura\r\nA las huestes del Señor,\r\n¡Oh, luchad con la mirada\r\nPuesta en nuestro Protector!\r\n\r\nLa bandera alzad, cristianos,\r\nDe la cruz y caminad;\r\nDe victoria en victoria,\r\nSiempre firmes avanzad.\r\n\r\n¡Adelante! ¡A la lucha!\r\n¡Oh, soldados de la fe!\r\nNuestro el triunfo, escuchemos\r\nLos clamores ¡Viva el Rey!",
    },
    {
      ID: "450",
      Titulo: "Cantaré la bella historia",
      Letra:
        "Cantaré la bella historia\r\nDe Jesús, mi Salvador;\r\nPara mí dejó la gloria,\r\nEn la cruz por mí expiró.\r\n\r\nCoro:\r\nCantaré la maravilla\r\nDe Jesús mi Salvador;\r\nCon los santos en la gloria\r\nCantaré su grande amor.\r\n\r\nMe salvó por gracia eterna\r\nCuando errado y vil me vio.\r\nCon su mano fiel y tierna\r\nAl camino El me guió.\r\n\r\nOprimido y angustiado\r\nCristo vino y me libró;\r\nLastimado del pecado,\r\nCristo vino y me salvó.\r\n\r\nCon su brazo fiel y fuerte\r\nYo el río cruzaré;\r\nMás allá, con Cristo siempre\r\nA mi Amado yo veré.",
    },
    {
      ID: "451",
      Titulo: "Cerca, más cerca",
      Letra:
        "Cerca, más cerca, ¡oh, Dios de Ti!\r\nCerca yo quiero mi vida llevar;\r\nCerca, más cerca, ¡oh, Dios de Ti!\r\nCreo en tu gracia que puede salvar.\r\nCreo en tu gracia que puede salvar.\r\n\r\nCerca, más cerca, cual pobre soy,\r\nNada, Señor, yo te puedo ofrecer;\r\nSólo mi ser contrito te doy,\r\nPueda contigo la paz obtener.\r\nPueda contigo la paz obtener.\r\n\r\nCerca, más cerca, Señor de Ti,\r\nQuiero ser tuyo, dejando el pecar;\r\nGoces y pompas vanas aquí,\r\nTodo, Señor, quiero ahora dejar.\r\nTodo, Señor, quiero ahora dejar.\r\n\r\nCerca, más cerca, mientras el ser\r\nAliente vida y busque tu paz;\r\nY cuando al cielo pueda ascender;\r\nYa para siempre conmigo estarás.\r\nYa para siempre conmigo estarás.",
    },
    {
      ID: "452",
      Titulo: "¿Cómo en su sangre pudo haber?",
      Letra:
        "¿Cómo en su sangre pudo haber\r\nTanta ventura para mí?\r\nSi yo sus penas agravé\r\nY de su muerte causa fui.\r\n¿Hay maravilla cual su amor?\r\n¡Morir por mí con tal dolor!\r\n¿Hay maravilla cual su amor?\r\n¡Morir por mí con tal dolor!\r\n\r\n¡Hondo misterio! ¡El Inmortal\r\nHacerse hombre y sucumbir!\r\nEn vano intenta sondear\r\nTanto prodigio el querubín.\r\nMentes excelsas ¡no inquirid!\r\nY al Dios y Hombre bendecid.\r\nMentes excelsas ¡no inquirid!\r\nY al Dios y Hombre bendecid.\r\n\r\nNada retiene al descender\r\nSino su amor y su deidad;\r\nTodo lo entrega: gloria, prez,\r\nCorona, trono, majestad.\r\nVer redimidos es su afán,\r\nLos tristes hijos de Adán.\r\nVer redimidos es su afán,\r\nLos tristes hijos de Adán.\r\n\r\nMi alma, atada en la prisión,\r\nAnhela redención y paz.\r\nDe pronto vierte sobre mí\r\nLa luz radiante de su faz.\r\nCayeron mis cadenas, vi\r\nMi libertad y le seguí.\r\nCayeron mis cadenas, vi\r\nMi libertad y le seguí.\r\n\r\n¡Jesús es mío! Vivo en El,\r\nNo temo ya condenación.\r\nEl es mi todo: paz, salud,\r\nJusticia, luz y redención.\r\nMe guarda el trono eternal,\r\nPor él corona celestial.\r\nMe guarda el trono eternal,\r\nPor él corona celestial.",
    },
    {
      ID: "453",
      Titulo: "Cristiano, mira arriba",
      Letra:
        "¡Cristiano, mira arriba!\r\nLa aurora apuntará:\r\nbella alba prometida\r\npor Dios en dicho fiel.\r\nAunque las guerras rujan\r\ny todo temblará,\r\n¡no temas! ¡mira arriba!\r\nEspera a Emanuel.\r\n\r\nPronto al Señor de gloria\r\nirás a encontrar;\r\nmañana de luz clara\r\nsu vuelta traerá.\r\nY mientras le aguardas,\r\ntu afán sea anunciar\r\nDe su cruz el evangelio\r\nque al malo librará.\r\n\r\n¡Cristiano mira arriba!\r\nCerca del cabo estás\r\nde tu terreno viaje\r\ncon todo su pesar.\r\nEn casa de su Padre\r\ncon Cristo morarás,\r\nno hay noche allí ni penas,\r\ndo el mal no puede entrar.\r\n\r\nCon seres muy queridos\r\nde nuevo estarás;\r\nen ese hogar de dicha\r\nausencias nunca habrá;\r\nde Edén la hermosura\r\nsin corrupción verás.\r\n¡Oh bendita esperanza!\r\n¡Aliéntate! ¡Vendrá!\r\n¡Cristiano, mira arriba!\r\nqué grato amanecer\r\ntendrás allá en el cielo,\r\ntu carga olvidarás.\r\nAhora al angustiado\r\nministra tal placer,\r\nel bálsamo divino,\r\ny su alma aliviarás.\r\n\r\nOscura es la vía,\r\nmas Cristo, guía y luz,\r\nhasta el fin a tu lado,\r\nconstante estará.\r\nEntonces, peregrino,\r\nel día de tu cruz\r\nfielmente ya vivido,\r\npor siempre reinarás.",
    },
    {
      ID: "454",
      Titulo: "Cristo, a mi puerta",
      Letra:
        "Cristo, a mi puerta velas\r\nCon sin igual amor,\r\nMe esperas tan paciente\r\nQue te abra el corazón;\r\nLlevando yo tu nombre,\r\nSabiendo ya tu amor,\r\nVergüenza siento ahora\r\nNo abrirte, Salvador.\r\n\r\nJesús, me estás llamando,\r\n¡Oh, cuán paciente estás!\r\nAhora, me estás mirando,\r\nLa vida quieres dar.\r\n¡Oh!, amor precioso y santo,\r\nPaciente en esperar;\r\n¡Qué sin igual pecado\r\nNo permitirte entrar!\r\n\r\nCon tierno acento me hablas,\r\nDivino Salvador,\r\nDiciendo: “Por ti he muerto,\r\nNo niegues más mi amor”\r\nSeñor, con pena y llanto\r\nLa puerta te abriré,\r\nTe ruego, ¡oh Cristo! que entres,\r\nYo te recibiré.",
    },
    {
      ID: "455",
      Titulo: "Cristo en tu amor descanso",
      Letra:
        "Cristo en tu amor descanso,\r\neres Tú mi Salvador;\r\na mi alcance es la dulzura\r\nde tu corazón.\r\nMi deleite es admirarte,\r\ntu hermosura es sin igual;\r\ny tu gracia incomparable,\r\nno hay otro igual.\r\n\r\nCoro:\r\nSólo en ti, Señor, descanso.\r\nTú eres vida, luz, verdad;\r\nMi alma en ti ya encuentra gozo\r\ny tranquilidad.\r\n\r\nConfiando en ti, oh Cristo,\r\nte contemplo en tu pasión;\r\npues tu amor me satisface\r\nen mi corazón.\r\nEn la cruz tu amor mostrado\r\nancho, vasto, más que el mar;\r\nmi entero ser inunda\r\ngrande amor sin par.\r\n\r\nEsperando en ti, oh Cristo,\r\nTu eres siempre mi salud;\r\ngozaré de tu presencia,\r\nde tu plenitud.\r\nCuando vengas en las nubes,\r\noh, qué gozo me dará…\r\nverte cara a cara en gloria\r\ny en tu amor gozar.",
    },
    {
      ID: "456",
      Titulo: "Cristo, mi piloto sé",
      Letra:
        "Cristo, mi piloto sé\r\nen el tempestuoso mar;\r\nfieras hondas mi bajel\r\nvan a hacerlo zozobrar.\r\nMas si Tú conmigo vas,\r\npronto al puerto llegaré,\r\ncarta y brújula hallo en ti,\r\n¡Cristo, mi piloto sé!\r\n\r\nTodo agita el huracán\r\ncon indómito furor,\r\nmas los vientos cesarán\r\nal mandato de tu voz;\r\nY al decir: “Que sea la paz”,\r\ncederá sumiso el mar.\r\nDe las aguas, Tú, el Señor,\r\n¡guíame cual piloto fiel!\r\n\r\nCuando al fin cercano esté\r\nde la playa celestial,\r\nsi el abismo ruge aún\r\nentre el puerto y mi bajel,\r\nen tu pecho al descansar\r\nquiero oírte a ti decir:\r\n“¡Nada temas ya del mar,\r\ntu piloto siempre soy!”",
    },
    {
      ID: "457",
      Titulo: "Cristo tan sólo pudo amarme",
      Letra:
        "Cristo tan sólo pudo amarme,\r\nNada podrá de El separarme,\r\nPues con su sangre me redimió:\r\nAhora soy de El.\r\n\r\nCoro:\r\nAhora soy de Cristo,\r\nMío también es El,\r\nPuedo gozar de su amistad\r\nPor la eternidad.\r\n\r\nAntes vivía en el pecado,\r\nMi corazón de Dios alejado;\r\nMas mi vergüenza El me quitó:\r\nYa pertenezco a él.\r\n\r\nMi ser rebosa de pleno gozo,\r\nDios me liberta, me da reposo;\r\nPues con su sangre me redimió:\r\nAhora soy de El.",
    },
    {
      ID: "458",
      Titulo: "Cristo, tu santo amor",
      Letra:
        "Cristo, tu santo amor diste a mí;\r\nnada a ti, Señor, te niego aquí.\r\nMe postro en gratitud,\r\ncumplo con prontitud;\r\nme obliga tu virtud, me rindo a ti.\r\n\r\nAnte el trono estoy, ruegas por mí.\r\nCristo, al Padre voy sólo por ti.\r\nLa cruz podré llevar,\r\ntu amor ya proclamar,\r\nun canto dulce alzar, Señor, a ti.\r\n\r\nUn corazón de amor, quiero, Jesús,\r\nser como Tú, Señor, lleno de luz.\r\nA ti podré servir,\r\nel tiempo redimir,\r\nlas almas dirigir, Señor, a ti.\r\n\r\nLo que yo tengo y soy por tu favor,\r\nalegre o triste voy, tuyo, Señor.\r\nTu rostro yo veré,\r\ncontigo estaré,\r\ny gloria te daré, Señor, a ti.",
    },
    {
      ID: "459",
      Titulo: "Crucificado por mí fue Jesús",
      Letra:
        "Crucificado por mí fue Jesús,\r\nDe tal manera me amó.\r\nSin murmurar fue llevado a la cruz,\r\nDe tal manera me amó.\r\n\r\nCoro:\r\nDe tal manera me amó,\r\nDe tal manera me amó;\r\nCristo en la cruz del Calvario murió,\r\nDe tal manera me amó.\r\n\r\nEl inocente Cordero de Dios,\r\nDe tal manera me amó,\r\nQue por salvarme sufrió muerte atroz,\r\nDe tal manera me amó.\r\n\r\nEn mi lugar padeció aflicción,\r\nDe tal manera me amó,\r\nYa consumó mi eternal salvación,\r\nDe tal manera me amó.",
    },
    {
      ID: "460",
      Titulo: "¡Cuán tiernamente!",
      Letra:
        "¡Cuán tiernamente el Señor nos convida,\r\nClama a ti y a mí!\r\nEl nos espera con mano extendida;\r\nLlama a ti y a mí.\r\n\r\nCoro:\r\nVenid, venid, si estáis cansados venid;\r\n¡Cuán tiernamente Jesús os invita!\r\n¡Oh, pecadores, venid!\r\n\r\n¿Por qué tememos si está abogando\r\nCristo por ti y por mí,\r\nSus bendiciones está derramando,\r\nSiempre por ti y por mí.\r\n\r\nEl tiempo vuela, lograrlo conviene,\r\nCristo te llama a ti,\r\nVienen las sombras, se acerca la muerte,\r\nViene por ti y por mí.",
    },
    {
      ID: "461",
      Titulo: "Da lo mejor al Maestro",
      Letra:
        "Da lo mejor al Maestro,\r\nTu juventud, tu vigor;\r\nDale el ardor de tu vida,\r\nDel bien luchando a favor.\r\nCristo nos dio el vivo ejemplo\r\nDe su pureza y valor;\r\nDa tu lealtad al Maestro,\r\nDale de ti lo mejor.\r\n\r\nCoro:\r\nDa lo mejor al Maestro,\r\nTu juventud, tu vigor;\r\nPor la verdad lucha siempre,\r\nQue va contigo el Señor.\r\n\r\nDa lo mejor al Maestro,\r\nRíndele fiel devoción;\r\nSea su amor tan sublime\r\nEl móvil de cada acción.\r\nPuesto que al único Hijo\r\nDionos el Padre de amor,\r\nSírvele con alegría,\r\nDale de ti lo mejor.\r\n\r\nDa lo mejor al Maestro,\r\nQue incomparable es su amor,\r\nPues al morir por nosotros,\r\nDejó su regio esplendor.\r\nSin murmurar dio su vida\r\nPor el más vil pecador;\r\nAma y adora al Maestro,\r\nDale de ti lo mejor.",
    },
    {
      ID: "462",
      Titulo: "De maneras misteriosas",
      Letra:
        "De maneras misteriosas\r\nSuele Dios aún obrar,\r\nY así sus maravillas\r\nPor los suyos efectuar.\r\nEl cabalga sobre nubes\r\nY los vientos y tempestad\r\nSon sus siervos enviados\r\nPara hacer su voluntad.\r\n\r\nEn abismos insondables\r\nCon destreza y gran saber\r\nAtesora sus designios,\r\nEfectúa su querer.\r\n¡Alentaos, pues miedosos!\r\nEstas negras nubes son\r\nDe sus bendiciones llenas,\r\nTraerán la salvación.\r\n\r\nNo juzguéis por los sentidos\r\nLos designios del Señor,\r\nSi parece que las pruebas\r\nContradicen a su amor.\r\nDescansad en sus promesas,\r\nEn su gracia confiad,\r\nEstas sombras son el manto\r\nCon que envuelve su bondad.\r\n\r\nSus propósitos perfectos\r\nA su tiempo cumplirá,\r\nY lo que es ahora amargo\r\nDulce fruto llevará.\r\nLa incredulidad es ciega,\r\nPues no mira más allá;\r\nA la fe Dios se revela,\r\nTodo nos aclarará.",
    },
    {
      ID: "463",
      Titulo: "¡Despertad, despertad, oh cristianos!",
      Letra:
        "¡Despertad, despertad, oh, cristianos!\r\nVuestro sueño funesto dejad;\r\nQue el cruel enemigo os acecha,\r\nY cautivos os quiere llevar.\r\n\r\nDespertad, las tinieblas pasaron,\r\nDe la noche no sois hijos ya;\r\nQue lo sois de la luz y del día;\r\nY tenéis el deber de luchar.\r\n\r\nDespertad y bruñid vuestras armas,\r\nVuestro lomo ceñid de verdad,\r\nY calzad vuestros pies, aprestados\r\nCon el grato evangelio de paz.\r\nBasta ya de profundas tinieblas,\r\nBasta ya de pereza mortal,\r\nRevestid, revestid vuestro pecho\r\nCon la cota de fe y caridad.\r\n\r\nLa gloriosa armadura de Cristo\r\nAcudid con anhelo a tomar,\r\nConfiando que el dardo enemigo\r\nNo la puede romper ni pasar.\r\n¡Oh, cristianos, antorcha del mundo!\r\nDe esperanza el yelmo tomad,\r\nEmbrazad de la fe el escudo,\r\nY sin miedo corred a luchar.\r\n\r\nNo temáis, pues, de Dios revestidos,\r\n¿Qué enemigo venceros podrá\r\nSi tomáis por espada la Biblia,\r\nLa Palabra del Dios de verdad?\r\nEn la cruz hallareis la bandera,\r\nEn Jesús hallareis Capitán,\r\nEn el cielo obtendréis la corona,\r\n¡A luchar, a luchar, a luchar!",
    },
    {
      ID: "464",
      Titulo: "¡Despertad! soldados bravos",
      Letra:
        "¡Despertad! soldados bravos,\r\nSuena la marcial alarma,\r\nPara Dios tomad las armas\r\n¡A la lid marchad!\r\nNo soñéis en la pereza,\r\nMiles yacen en tristeza\r\nO se lanzan con presteza\r\nHacia perdición.\r\n\r\nCoro:\r\nPregonad al mundo\r\nEsta nueva buena:\r\n¡Hay perdón y salvación,\r\nDe Dios la gracia plena”.\r\nNo temáis ningún peligro\r\nNi huyáis del enemigo,\r\nDios es nuestro fiel abrigo,\r\nCon valor luchad.\r\n\r\n¡Acudid a la proclama!\r\nSed valientes, Dios os llama\r\nContra nos el Diablo brama,\r\nlleno de furor\r\n¡No cedáis! ni tengáis miedo,\r\nCombatid con gran denuedo,\r\nRomperemos el asedio\r\nDel usurpador.\r\n\r\n¡Escuchad! ya se alegran\r\nNuestras tropas y celebran\r\nEl gran triunfo en que llevan\r\nAlmas al Señor.\r\nLibrarémoslas del grillos\r\nY del yugo del maligno;\r\n¡Viva nuestro gran Caudillo!\r\n¡A Jesús loor!",
    },
    {
      ID: "465",
      Titulo: "Día feliz cuando escogí",
      Letra:
        "Día feliz cuando elegí\r\nServirte, mi Señor y Dios;\r\nPreciso es que mi gozo en Ti,\r\nLo muestre hoy, por obra y voz.\r\n\r\nCoro:\r\n¡Soy feliz! ¡Soy feliz!\r\nY en su favor me gozaré;\r\nEn libertad y luz me vi\r\nCuando triunfó en mí la fe,\r\nY el raudal carmesí\r\nSalud de mi alma enferma fué.\r\n\r\n¡Pasó! mi gran deber al fin cumplí,\r\nDe Cristo soy y mío es El;\r\nMe atrajo, con placer seguí,\r\nSu voz conoce todo fiel.\r\n\r\nReposa, débil corazón;\r\nA tus contiendas pon ya fin,\r\nHallé más noble posesión,\r\nY parte en superior festín.",
    },
    {
      ID: "466",
      Titulo: "En el monte Calvario estaba una cruz",
      Letra:
        "En el monte Calvario estaba una cruz,\r\nemblema de afrenta y dolor,\r\nMas yo amo a Jesús,\r\nquien murió en la cruz,\r\nPor salvar al más vil pecador.\r\n\r\nCoro:\r\nGloriaréme solo en la cruz,\r\nEn sus triunfos mi gozo será,\r\nY en el día de eterna salud\r\nMi corona Jesús me dará.\r\n\r\nY aunque el mundo desprecie\r\nla cruz de Jesús,\r\nPara mí tiene suma atracción;\r\nPues en ella llevó el “Cordero de Dios”\r\nDe mi culpa la condenación.\r\n\r\nEn la cruz de Jesús, do su sangre vertió,\r\nHermosura contemplo sin par;\r\nPues en ella triunfante\r\na la muerte venció,\r\nY mi ser puede santificar.\r\n\r\nYo quisiera seguir en pos de Jesús,\r\nY su cruel menosprecio llevar;\r\nY algún día feliz con los santos en luz\r\nEn la gloria con El he de estar.",
    },
    {
      ID: "467",
      Titulo: "En la luz de su presencia",
      Letra:
        "En la luz de su presencia\r\nquiere mi alma siempre estar,\r\n¡Cuán preciosas las lecciones\r\nlas que aprendo de él allá!\r\nNo me turban las tristezas\r\nni me vence la aflicción;\r\npues, si ruge el enemigo,\r\nbusco abrigo en la oración.\r\n\r\nCuando mi alma desfallece,\r\nal abrigo del Señor\r\nse hallan aguas refrescantes\r\ny una sombra del calor.\r\nY descansa al lado mío\r\nel bendito Salvador;\r\nexpresar jamás podría\r\nnuestra dulce comunión.\r\n\r\nPero esto sé, le digo\r\ntoda duda, todo afán.\r\n¡Cuán paciente se demuestra!\r\n¡Cuánto gozo a mi alma da!\r\nMas a veces me reprende;\r\nno sería amigo fiel,\r\nsi Él nunca me dijera\r\nde las faltas que en mí ve.\r\n\r\n¿Conocer también quisieras\r\nel secreto del Señor?\r\nVe debajo de sus alas\r\ny tendrás tu galardón.\r\nY al salir de su presencia\r\ncon amor y gran solaz,\r\nllevarás la imagen santa\r\ndel Maestro en tu faz.",
    },
    {
      ID: "468",
      Titulo: "Escuchad, Jesús nos dice",
      Letra:
        "Escuchad, Jesús nos dice:\r\n“¿quiénes van a trabajar?\r\nCampos blancos hoy aguardan;\r\nQue los vayan a segar”.\r\nÉl nos llama cariñoso,\r\nnos constriñe con su amor;\r\n¿Quién responde a su llamada:\r\n“Heme aquí, yo iré, Señor?”\r\n\r\nSi por tierras o por mares\r\nno pudieras transitar,\r\npuedes encontrar hambrientos\r\nen tu puerta que auxiliar.\r\nSi careces de riquezas,\r\nlo que dio la viuda da.\r\nSi por el Señor lo dieres,\r\nÉl te recompensará.\r\n\r\nSi como elocuente apóstol\r\nno pudieres predicar,\r\npuedes de Jesús decirles\r\ncuánto al hombre supo amar;\r\nSi no logras que sus culpas\r\nreconozca el pecador,\r\nconducir los niños puedes\r\nal benigno Salvador.\r\n\r\n",
    },
    {
      ID: "469",
      Titulo: "Es Jesús mi Rey divino",
      Letra:
        "Es Jesús mi Rey divino,\r\nsólo a él yo seguiré,\r\nen las pruebas de la vida\r\nsólo en él yo confiaré.\r\n\r\nEs mi fe pequeña y débil,\r\nmas Jesús me sostendrá;\r\ncon su brazo poderoso\r\nsiempre me protegerá.\r\n\r\nNada temo, Cristo mío\r\nmi sostén y mi solaz,\r\nyo confiado ahora vivo,\r\nen mi pecho reina paz.\r\n\r\nEn la patria donde moras\r\nyo tu rostro espero ver;\r\ncon los fieles en los cielos\r\ncoronado quiero ser.",
    },
    {
      ID: "470",
      Titulo: "Es tu fidelidad tan grande",
      Letra:
        "Es tu fidelidad tan grande, Padre,\r\nTú dices la verdad, descanso allí.\r\nTu luz rodea mi senda en el mundo,\r\nTu voz me anima; mi fuerza es en Ti.\r\n\r\n¡Oh, qué fidelidad! ¡Oh, qué fidelidad!\r\nNunca me canso de darte loor;\r\nCada mañana es nueva tu gracia,\r\nInalterable es tu gran amor.\r\n\r\nLos enemigos son muy poderosos,\r\nTú eres mi amigo, Dios, Fuerte Adalid,\r\nEn la batalla me das hoy tu ayuda,\r\nVencido no seré, confiando en Ti.\r\n\r\nEn tu presencia, Dios, hay gran descanso,\r\nDulce consolación, perfecta paz;\r\nAl ver las glorias de Cristo el Señor,\r\nLe hemos de celebrar siempre jamás.",
    },
    {
      ID: "471",
      Titulo: "Gozo da servir a Cristo",
      Letra:
        "Gozo da servir a Cristo,\r\nEn la vida diaria aquí;\r\nGozo y grande alegría,\r\nSiempre El me da a mí.\r\n\r\nCoro:\r\nGozo hay, sí, en servir a Cristo,\r\nGozo en el corazón,\r\nCada día él da poder, me ayuda a vencer,\r\nY da gozo, gozo en el corazón.\r\n\r\nGozo da servir a Cristo;\r\nGozo que triunfante está,\r\nEn la pena o tristeza,\r\nCristo en todo vence ya.\r\n\r\nGozo da servir a Cristo;\r\nAunque solo ande yo,\r\nEs el gozo permanente\r\nQue el Calvario nos logró.\r\n\r\nGozo da servir a Cristo;\r\nGozo en la oscuridad;\r\nPorque tengo el secreto\r\nDe la luz y la verdad.",
    },
    {
      ID: "472",
      Titulo: "Grande gozo hay en mi alma hoy",
      Letra:
        "Grande gozo hay en mi alma hoy\r\nPues Jesús conmigo está,\r\nY su paz, que ya gozando estoy\r\nPor siempre durará.\r\n\r\nCoro:\r\nGrande gozo, ¡cuán hermoso!\r\nCuando paso el tiempo tan feliz;\r\nPorque veo de Cristo la sonriente faz,\r\nGrande gozo siento en mí.\r\n\r\nHay un canto en mi alma hoy,\r\nMelodías a mi Rey;\r\nEn su amor feliz y libre soy,\r\nY salvo por la fe.\r\n\r\nPaz divina hay en mi alma hoy,\r\nPorque Cristo me salvó;\r\nLas cadenas rotas ya están,\r\nJesús me libertó.\r\n\r\nGratitud hay en mi alma hoy,\r\nY alabanzas a Jesús,\r\nPor su gracia a la gloria voy,\r\nGozándome en la luz.",
    },
    {
      ID: "473",
      Titulo: "Habla, Señor a mi alma",
      Letra:
        "Habla, Señor, a mi alma,\r\nHazme entender tu voz;\r\nMi corazón reclama\r\nTu fuerte protección.\r\nDébil soy y afligido,\r\nTe necesito, ¡oh, Dios!\r\nTú puedes darme abrigo\r\nDe la tormenta atroz.\r\n\r\nCon corazón tranquilo\r\nProcuraré escuchar\r\nEl apacible silbo\r\nQue infunde en mi alma paz.\r\nPasa mi entendimiento\r\nEsa tranquilidad,\r\nQue por su gracia siento\r\nAún en la adversidad.\r\n\r\nHazme, Señor, atento\r\nSiempre a tu dulce voz;\r\nHaz que yo more adentro\r\nDel templo de mi Dios;\r\nCon tu luz revestido,\r\nQue vea el mundo en mí,\r\nConstante y fiel testigo\r\nDe tu bondad aquí.",
    },
    {
      ID: "474",
      Titulo: "Hasta que vengas, nuestro Salvador",
      Letra:
        "Hasta que vengas, nuestro Salvador,\r\nNos congregamos para recordar\r\nTus muchas penas y tu grande amor,\r\nEn tu memoria así partir el pan.\r\n\r\nEstás aquí, sabémoslo Señor,\r\nPues nos has dicho: “donde dos o tres\r\nse hallan reunidos en mi nombre, Yo\r\nEn medio de ellos me revelaré”.\r\n\r\nHasta que vengas; sólo un poco más,\r\nY nuestros ojos te verán en luz;\r\nLleno de gloria, honra y majestad,\r\nLlevando aún las huellas de la cruz.",
    },
    {
      ID: "475",
      Titulo: "Hay una fuente sin igual",
      Letra:
        "Hay una fuente sin igual\r\nDe sangre de Emanuel,\r\nEn donde lava cada cual,\r\nLas manchas que hay en él.\r\n\r\nÉl malhechor se convirtió\r\nMuriendo en una cruz,\r\nAl ver la fuente en que lavó\r\nSus culpas por Jesús.\r\n\r\nY yo también, cuan malo soy,\r\nLavarme allí podré;\r\nY en tanto que en el mundo estoy,\r\nSu gloria cantaré.\r\n\r\nTu sangre nunca perderá,\r\n!Oh, Cristo! su poder,\r\nY sólo en ella así podrá\r\nTu iglesia salva ser.\r\n\r\nDesde que aquella fuente vi,\r\nUn solo tema sé:\r\nAmor Redimidor, y así\r\nCantando seguiré.\r\n\r\nY de la tumba más allá,\r\nMi lengua emplearé:\r\nCanción más dulce y noble habrá,\r\nQue en gloria cantaré.",
    },
    {
      ID: "476",
      Titulo: "Hoy escudriña, oh Dios, mi corazón",
      Letra:
        "Hoy escudriña, oh Dios, mi corazón,\r\nEn lo secreto tu mirada pon;\r\nTodo lo malo quita en tu bondad,\r\nConcédeme completa libertad.\r\n\r\nMi corazón entero toma, oh Dios,\r\nMi vida llena de tu inmenso amor;\r\nTodo egoísmo, orgullo y vanidad\r\nQuítame y cumple en mí tu voluntad.\r\n\r\nManda, Señor, avivamiento aquí,\r\nPor el Espíritu trabaja en mí;\r\nSuple en tu amor mi gran necesidad,\r\nTu bendición celeste ahora da.\r\n\r\nSeñor, te alabo que me aceptas ya,\r\nLimpia mi corazón de todo mal;\r\nQue el fuego tuyo me haga arder por Ti,\r\nSea tu nombre engrandecido en mí.",
    },
    {
      ID: "477",
      Titulo: "Juntos en tu presencia",
      Letra:
        "Juntos en tu presencia\r\nHenos, bendito Dios,\r\nCon filial reverencia\r\nPara escuchar tu voz.\r\nSalvos, por pura gracia,\r\nSiervos, por puro amor.\r\nLlena Tú nuestras almas,\r\nBendícenos, Señor.\r\n\r\nCoro:\r\nBendice a los creyentes,\r\nBendícenos, Señor.\r\nHaznos ser más fervientes,\r\nAumenta aquí el amor.\r\nHaznos ser fieles siempre,\r\nGrata congregación,\r\nBendice a los creyentes,\r\nBendícenos, Señor.\r\n\r\nPlacido es este sitio,\r\nSitio de reunión,\r\nOyendo hablar tu libro,\r\nEn viva comunión.\r\nTe ensalzaremos siempre,\r\nOh, nuestro Salvador,\r\nBendito eternamente,\r\nBendito, Tú, Señor.\r\n\r\nPadre, te suplicamos\r\nEn tu gran compasión,\r\nGuárdanos los hermanos\r\nEn fraternal amor;\r\nProntos a perdonarnos,\r\nProntos a oír tu voz;\r\nCual escogidos, santos,\r\nY amados por Ti, ¡oh, Dios!",
    },
    {
      ID: "478",
      Titulo: "Me asombra el amor que me ofrece",
      Letra:
        "Me asombra el amor\r\nque me ofrece el Señor Jesús,\r\nSu gracia tan grande\r\nno puedo explicarme yo,\r\nY tiemblo al saber\r\nque por mí padeció en la cruz;\r\nPor mí, pecador vil,\r\nsu sangre preciosa dio.\r\n\r\nCoro:\r\n¡Qué maravilla es, que El me amara así\r\nHasta morir por mí!\r\n¡Qué maravilla es, El murió por mí!\r\n\r\nPensar que del trono\r\ndivino Jesús bajó\r\nMi alma rebelde y altiva,\r\npara buscar,\r\nY que El extendió\r\nhacia mí su insondable amor\r\nQue puede salvar,\r\nredimir y justificar.\r\n\r\nSus manos heridas\r\nmi deuda pagaron, sí,\r\nTal misericordia y amor\r\n¿olvidar podré?,\r\n¿oh, no sin cesar\r\nyo le alabo y adoro aquí,\r\nHasta que en la gloria\r\nme arroje a sus santos pies.",
    },
    {
      ID: "479",
      Titulo: "Mientras que Cristo te habla, ven pecador",
      Letra:
        "Mientras que Cristo te habla, ven pecador;\r\nY a Dios por ti se ruega, ven pecador;\r\nYa debes aceptarle, ven pecador;\r\nY con El amistarte, ven pecador.\r\n\r\n¿Dura es tu pesada carga? ven pecador;\r\nQuiere Jesús llevarla, ven pecador;\r\nNo puede El engañarte, ven pecador;\r\nQuiere el Señor salvarte, ven pecador.\r\n\r\n¿Su tierna voz percibes? ven pecador;\r\n¿Su bendición recibes? ven pecador;\r\nMientras que Cristo te habla, ven pecador;\r\nY a Dios por ti se ruega, ven pecador.",
    },
    {
      ID: "480",
      Titulo: "Mi fe espera en Ti",
      Letra:
        "Mi fe espera en Ti,\r\nCordero, quien por mí\r\nFuiste a la cruz;\r\nEscucha mi oración,\r\nDame tu bendición,\r\nLlene mi corazón tu santa luz.\r\n\r\nTu gracia en mi alma pon,\r\nGuarde mi corazón\r\nTu sumo amor.\r\nTu sangre carmesí,\r\nDiste en la cruz por mí,\r\nQue viva para Ti con fiel ardor.\r\n\r\nA ruda lid iré,\r\nY pruebas hallaré,\r\nMi guía sé.\r\nLíbrame de ansiedad,\r\nGuárdame en santidad,\r\nY por la eternidad te alabaré.",
    },
    {
      ID: "481",
      Titulo: "Mi gozo está en tus atrios",
      Letra:
        "Mi gozo está en tus atrios,\r\n¡Oh, Padre Celestial!\r\nVenir a tu presencia\r\nY en tu luz adorar.\r\nTraer a la memoria\r\nLas pruebas de tu amor,\r\nEl bien con que tu mano\r\nMi vida enriqueció.\r\n\r\nMi gozo está en tus atrios,\r\nLa casa de oración,\r\nDo el alma tantas veces\r\nSu fuerza y luz halló.\r\nCon cuanto amor el ruego\r\nTú sueles escuchar,\r\n¡Qué dulce hablar contigo!\r\n¡Cuán bello en Ti esperar!\r\n\r\nMi gozo está en tus atrios,\r\nMoradas de salud,\r\nAquí su amor explaya\r\nGozando de tu cruz.\r\nEl coro de tus hijos\r\nQue tu poder salvó,\r\nAquel sublime día\r\nDe nuestra redención.\r\n\r\nMi gozo está en tus atrios,\r\nMoradas de verdad,\r\nDo limpia la mirada\r\nSe goza en meditar\r\nEl alma redimida,\r\nTu ciencia y tu poder,\r\nLa gloria de tus obras,\r\nLa dicha de tu ley.\r\n\r\nMi gozo está en tus atrios,\r\nLa casa del festín;\r\nLo más bello y sublime\r\nEl alma encuentra en Ti.\r\nNo llega aquí la mano\r\nCruel del opresor;\r\nLa paz más bella canta\r\nFeliz el corazón.",
    },
    {
      ID: "482",
      Titulo: "¡Murió Jesús! Aquel varón de angustias",
      Letra:
        "¡Murió Jesús! Aquel varón de angustias,\r\nHerido fue por nuestra rebelión;\r\nMurió el Justo por los pecadores,\r\nY por su cruz tenemos salvación.\r\n\r\nCoro:\r\nYo soy el que vivo, que vivo y muerto fui,\r\nYo soy el que vivo, que vivo y muerto fui;\r\nY he aquí, Yo vivo para siempre. Amén,\r\nY he aquí, Yo vivo para siempre. Amén.\r\nYo soy el que vivo, que vivo y muerto fui,\r\nY he aquí, Yo vivo para siempre. Amén.\r\n\r\n¡Lloró!, oró: “Mi Padre, si es posible,\r\nPase de mí la copa amarga hiel;\r\nTu voluntad, empero sea hecha,\r\nLa obra que me diste quiero hacer”.\r\n\r\n¡Luchó! ¡Venció! A Satanás despoja,\r\nPues, ¿dónde está, ¡oh, muerte! Tu aguijón?\r\nSorbida es ya la muerte con victoria,\r\nY al mundo el Vencedor le da redención.",
    },
    {
      ID: "483",
      Titulo: "No sé decir por qué el Señor",
      Letra:
        "No sé decir por qué el Señor de gloria\r\nAmara así a los hijos de Adán,\r\nO cual Pastor buscara a los perdidos,\r\nSalvándolos con tanto ardor y afán.\r\nMas esto sé: que nacido de María,\r\nYació en un pesebre de Belén,\r\nY en Nazaret vivió, creció y trabajó,\r\nY al Salvador del mundo\r\naquí podemos ver.\r\n\r\nNo sé decir con cuánta angustia El sufrió\r\nEn esta tierra llena de maldad,\r\nNi cómo se quebró su tierno corazón\r\nCuando en la cruz El hizo nuestra paz.\r\nMas esto sé: que sana al afligido,\r\nQuita el pecado y salva del temor,\r\nDa gozo al triste, alivio al trabajado,\r\nPues vive todavía del mundo el Salvador.\r\n\r\nNo sé decir cómo a los pueblos todos\r\nLos tomará por santa posesión;\r\nSatisfaciendo todos los anhelos,\r\nDel mundo entero toda aspiración.\r\nMas esto sé: todos verán su gloria,\r\nEl segará su tan gloriosa mies,\r\nY un día alegre resplandecerá el sol,\r\nEl Salvador del mundo nos traerá el bien.\r\n\r\nNo sé decir cómo la tierra entera,\r\nYa sosegada toda tempestad,\r\nHa de adorar con júbilo profundo,\r\nLleno su corazón de caridad.\r\nMas esto sé: Que vibrarán los aires,\r\nDe extasía y cánticos diez mil;\r\nResponderá la tierra a los del cielo\r\nQue el Salvador del mundo es Rey,\r\nal fin, al fin.",
    },
    {
      ID: "484",
      Titulo: "Nunca, Dios mío, cesará mi labio",
      Letra:
        "Nunca, Dios mío, cesará mi labio\r\nDe bendecirte, de cantar tu gloria,\r\nPorque conservo de tu amor inmenso\r\nGrata memoria.\r\n\r\nCuando perdido en mundanal sendero\r\nNo me cercaba sino niebla oscura,\r\nTú me miraste, y alumbróme un rayo\r\nDe tu luz pura.\r\n\r\nCuando inclinaba mi abatida frente,\r\nDel mal obrar al oneroso yugo,\r\nDulce reposo y eficaz alivio,\r\nDarme te plugo.\r\n\r\nCuando en mis propios méritos fiaba,\r\nNunca mi pecho con amor latía,\r\nHoy de amor late, porque en tus bondades\r\nSólo confía.\r\n\r\nY cuan exhale mi postrer aliento\r\nPara volar a tu eternal presencia,\r\nCierto hallaré con tu justicia unida\r\nDulce clemencia.",
    },
    {
      ID: "485",
      Titulo: "¡Oh, cuántas veces, mi Señor!",
      Letra:
        "¡Oh, cuántas veces, mi Señor,\r\nme olvido de tu gran dolor,\r\nque padeciste Tú por mí\r\na solas en Getsemaní!\r\n\r\n¡Oh, cuántas veces, mi Señor,\r\nme olvido de tu inmenso amor,\r\ntus sufrimientos en la cruz\r\npara traerme la salud!\r\n\r\nMas me recuerdo, oh Salvador,\r\nahora de tu dulce voz;\r\ny por la fe la puedo oír:\r\n“Hacedlo en memoria de mí”.\r\n\r\nEl vino bebo y como el pan,\r\ny me hablas Tú con tierno afán:\r\n“Mi vida puse Yo por ti,\r\nhacedlo en memoria de mí”.",
    },
    {
      ID: "486",
      Titulo: "¡Oh gran Dios! yo soy un vil",
      Letra:
        "¡Oh gran Dios! yo soy un vil\r\nmiserable pecador,\r\nque falté mil veces, mil,\r\na la ley de mi Señor;\r\nque tus sendas olvidé\r\ny tu amor menosprecié. (Bis dos últimas)\r\n\r\nEn mi alma no hay verdad,\r\ny mi pobre corazón\r\npor su gran iniquidad,\r\nlleno está de confusión.\r\nHe perdido mi vigor\r\ny fallezco de dolor. (Bis dos últimas)\r\n\r\nTen ¡oh Dios! piedad de mí,\r\nque debilitado estoy;\r\ndame, por amor de ti,\r\nsalvación que busco hoy.\r\nNo me dejes perecer,\r\nven mi cárcel a romper. (Bis dos últimas)",
    },
    {
      ID: "487",
      Titulo: "Oh, Señor, que Tú nos hables",
      Letra:
        "Oh, Señor, que Tú nos hables,\r\nHaznos escuchar tu voz;\r\nQue obedientes hoy seamos\r\nRespondientes a tu amor.\r\nTu mensaje llégue a nos\r\nAlcanzando el corazón.\r\n\r\nHay algunos que andan lejos\r\nDe tu santa voluntad,\r\nOtros hay que se hallan fríos\r\n¡Oh, qué gran necesidad!\r\nSalvador, avívanos,\r\nDanos hoy tu bendición.\r\n\r\nQue tu Espíritu revele\r\nMás de Cristo la bondad;\r\nQue ilumine tu Palabra,\r\n“Tu Palabra es verdad”.\r\nSantifícanos, Señor,\r\nPara tu placer y honor.",
    },
    {
      ID: "488",
      Titulo: "¿Oyes cómo el Evangelio?",
      Letra:
        "¿Oyes cómo el Evangelio\r\nal cansado ofrece paz?\r\nPues segura, ¡oh alma mía!\r\nla promesa a ti se da.\r\nBien alguno en mí no veo,\r\ncorrupción tan sólo hay;\r\nCansado estoy, y el cansado\r\nbusca alivio con afán.\r\n\r\nEn el arca la paloma\r\nencontró do reposar;\r\npara mi alma atribulada\r\narca el Señor será.\r\nCombatido vengo, y crece\r\nel diluvio sin cesar.\r\nÁbreme, Jesús, y en vano\r\nrugirá la tempestad.\r\n\r\nCobijada ya en tu seno\r\npuede el alma respirar;\r\nel reposo que prometes\r\nsiempre da segura paz.\r\n¡Oh! cuán dulce en mis oídos\r\nsuena tu voz celestial:\r\n“¡Ven a mí, ven que el descanso\r\nsólo en mí podrás hallar!”.",
    },
    {
      ID: "489",
      Titulo: "Pobre peregrino",
      Letra:
        "Pobre peregrino que vagando estás\r\nfuera del camino: ¿Dónde pararás?\r\nCon cayado y vara hoy el buen Pastor\r\nllámate a su lado: Ven, ¡oh, pecador!\r\n\r\nTu pasada vida cáusate dolor;\r\ntu alma lacerada, tristeza y pavor;\r\ntu suerte futura, eterno sufrir,\r\nde tanta amargura, ¿No querrás salir?\r\n\r\n¡Ay, y cuántos días dejaste pasar\r\nen vanas porfías que te han de pesar!\r\nPor tu bien atiende la voz del Señor,\r\ny tu mano extiende hacia el Salvador.\r\n\r\nTu vista levanta, eleva tu voz,\r\ndirige tu planta hasta el Salvador.\r\nTu hora ha llegado, pierde tu temor;\r\nque el que te ha llamado es tu Salvador.",
    },
    {
      ID: "490",
      Titulo: "Por fe contemplo redención",
      Letra:
        "Por fe contemplo redención\r\nLa fuente carmesí;\r\nJesús me da la salvación,\r\nSu vida dio por mí.\r\n\r\nCoro:\r\nLa fuente sin igual hallé,\r\nDe vida y luz el manantial;\r\n¡Oh, gloria a Dios! Ya lo probé,\r\nMe limpia a mí, me limpia a mí.\r\n\r\nMi vida entrego a mi Señor,\r\nLas dudas El quitó;\r\nMi alma goza en su favor,\r\nMis deudas El pagó.\r\n\r\n¡Cuán inefable gozo da\r\nSaber que salvo soy!\r\nPor su palabra de verdad\r\nYo sé que al cielo voy.\r\n\r\n¡Oh, gracia excelsa de mi Dios!\r\n¡Cuán grande es su amor!\r\nY sólo a El, mi Salvador,\r\nQuisiera dar loor.",
    },
    {
      ID: "491",
      Titulo: "Por fe en Jesús el Salvador",
      Letra:
        "Por fe en Jesús el Salvador,\r\nSe hace salvo el pecador;\r\nSin merecer tan rico don,\r\nRecibe plena salvación.\r\n\r\nCoro:\r\n¡Excelsa gracia del amor\r\nQue Dios perdona al pecador!\r\nSi presto acude a confesar\r\nSus culpas, y en Jesús confiar;\r\nNo hay otro autor de salvación,\r\nPues Cristo obró la redención.\r\n\r\nLa vida antigua ya pasó,\r\nY todo nuevo se tornó;\r\nAquí cual peregrino es,\r\nHogar con Dios tendrá después.\r\n\r\nAún cuando él nada tenga aquí,\r\nSu gran herencia tiene allí;\r\nArriba en gloria con Jesús,\r\nQuien le ha salvado por su cruz.",
    },
    {
      ID: "492",
      Titulo: "¿Por qué hay dudas y temor?",
      Letra:
        "¿Por qué hay dudas y temor,\r\nSi Dios, mi Padre en su amor\r\nA su Hijo entregó?\r\nNo puede el justo juez a mí\r\nLas culpas imputar, que así\r\nEn Cristo El cargó.\r\n\r\nCristo el pecado ya expió,\r\nLa deuda entera canceló,\r\nDe los que creen en El;\r\nLa ira no me alcanzará,\r\nEn el Amado acepto ya,\r\nY limpio por su cruz.\r\n\r\nPues El mi libertad compró,\r\nY en el Calvario padeció\r\nLa ira de su Dios.\r\nDos veces no demanda Dios\r\nEl pagó ente Jesús,\r\nY ahora al que en él cree\r\n\r\nMira, alma mía, al Salvador\r\nLos méritos de tu Señor\r\nDan paz y libertad.\r\nCree en su sangre eficaz,\r\nLa perdición no temas más,\r\nPues El por ti murió.",
    },
    {
      ID: "493",
      Titulo: "Por su cuerpo lacerado",
      Letra:
        "Por su cuerpo lacerado, vamos a El,\r\nPenetrando “velo adentro”, vamos a El:\r\nCon su sangre rescatados,\r\nPor su gracia ya amparados,\r\nPor su cruz santificados, vamos a El.\r\n\r\nPor su amor manifestado, vamos a El,\r\nQuién sufrió, del “real afuera”, vamos a El.\r\nEn su cruz hoy nos gloriamos,\r\nNunca nos avergonzamos,\r\nBien contentos avanzamos, vamos a El.\r\n\r\nPor la sangre del Cordero, vamos a El,\r\nConfiados, “velo adentro”, vamos a El.\r\nNueva creación formamos,\r\nPlena salvación gozamos,\r\nY postrados adoramos, vamos a El.\r\n\r\nA Jesús, el rechazado, vamos a El,\r\nTodavía “real afuera”, vamos a El.\r\nSu baldón aquí llevando,\r\nA este mundo abandonando,\r\nHoy su amor está llamando, vamos a El.\r\n\r\nPronto, por su voz llamados, vamos a El,\r\nReunidos “velo adentro”, vamos a El.\r\nViene El mismo a arrebatarnos,\r\nNunca más a separarnos,\r\nPara siempre a gozarnos, vamos a El.",
    },
    {
      ID: "494",
      Titulo: "Por tu amor, oh Cristo",
      Letra:
        "Por tu amor, oh Cristo,\r\nme consagro a ti;\r\nme hallo constreñido\r\npara ti a vivir.\r\n\r\nDonde Tú dirijas,\r\nsea mi placer\r\nque en tu amor te sirva\r\nsiempre en tu poder.\r\n\r\nCuando el mundo engaña\r\ncon su seducción,\r\nque tu amor deshaga\r\ntodo su esplendor.\r\n\r\nCuando oscuras huestes\r\nquieran mi alma hundir,\r\ntu poder me eleve,\r\nno hay poder en mí.\r\n\r\nQue el Espíritu Santo\r\ntenga en mí su hogar;\r\nno me aparte, ingrato,\r\nde tu voluntad.\r\n\r\nHazme diligente,\r\nfiel en tu virtud;\r\nsatisfecho siempre\r\nde tu plenitud.",
    },
    {
      ID: "495",
      Titulo: "Que mi vida entera esté",
      Letra:
        "Que mi vida entera esté\r\nConsagrada a Ti, Señor;\r\nQue a mis manos pueda guiar\r\nEl impulso de tu amor.\r\n\r\nQue mis pies tan sólo en pos\r\nDe lo santo puedan ir;\r\nY que a Ti, Señor, mi voz\r\nSe complazca en bendecir.\r\n\r\nQue mi tiempo todo esté\r\nConsagrado a tu loor,\r\nQue mis labios al hablar\r\nHablen sólo de tu amor.\r\n\r\nToma, ¡oh, Dios! mi voluntad\r\nY hazla tuya, nada más;\r\nToma, sí, mi corazón\r\nY tu trono en él tendrás.",
    },
    {
      ID: "496",
      Titulo: "¿Quién podrá con su presencia?",
      Letra:
        "¿Quién podrá con su presencia\r\nImpartirme bendición?\r\nSólo Cristo en su clemencia\r\nPuede dar consolación.\r\n\r\nCoro:\r\nSólo Cristo satisface\r\nMi transido corazón,\r\nSí, gozoso Cristo me hace\r\nPor su eterna redención.\r\n\r\nSu amor no se limita,\r\nEs su gracia sin igual;\r\nSu merced es infinita,\r\nMás profunda que mi mal.\r\n\r\nRedención sublime y santa\r\nImposible de explicar:\r\nQue su sangre sacrosanta\r\nMi alma pudo rescatar.\r\n\r\nCristo suple en abundancia\r\nToda mi necesidad;\r\nSer de El es mi ganancia,\r\nInefable es su bondad.",
    },
    {
      ID: "497",
      Titulo: "Quiero al Salvador conmigo",
      Letra:
        "Quiero al Salvador conmigo,\r\nSin Jesús no puedo andar;\r\nNecesito su presencia,\r\nEn su brazo descansar.\r\n\r\nCoro:\r\nConfiando en el Señor,\r\nConsolado por su amor,\r\nSeguiré por mi camino\r\nSin tristeza, sin temor.\r\n\r\nQuiero al Salvador conmigo,\r\nPorque flaca es mi fe;\r\nY su voz me dé coraje\r\nCuando vacilante esté.\r\n\r\nQuiero al Salvador conmigo,\r\nCada día en El morar,\r\nEn la tempestad o calma,\r\nEn la lucha o bienestar.\r\n\r\nQuiero al Salvador conmigo\r\nComo Guía y Buen Pastor,\r\nHasta estén pasadas\r\nMuerte, pena y aflicción.",
    },
    {
      ID: "498",
      Titulo: "Quiero seguir las pisadas",
      Letra:
        "Quiero seguir las pisadas del Maestro;\r\nQuiero ir en pos de mi Rey y Señor;\r\nY modelando por El mi carácter\r\nCanto con gozo a mi Redentor.\r\n\r\nCoro:\r\n¡Qué hermoso es seguir\r\nlas pisadas del Maestro!\r\nSiempre en la luz, cerca de Jesús;\r\n¡Qué hermoso es seguir\r\nlas pisadas del Maestro!\r\nEn su santa luz.\r\n\r\nAndo más cerca de Aquél que me guarda\r\nCuando el maligno me quiere tentar;\r\nSiempre confiando en Cristo, mi Amado,\r\nDebo con gozo su nombre ensalzar.\r\n\r\nSigo sus pasos de tierno cariño,\r\nMisericordia, paz y lealtad;\r\nGozando en El por el don de su gracia,\r\nVoy al descanso, gloriosa ciudad.\r\n\r\nQuiero seguir las pisadas del Maestro,\r\nSiempre hacia arriba con El quiero andar,\r\nViendo a mi Rey en gloriosa hermosura\r\nCon El en gloria podré descansar.",
    },
    {
      ID: "499",
      Titulo: "Rostro divino ensangrentado",
      Letra:
        "Rostro divino, ensangrentado,\r\nCuerpo llagado por nuestro bien.\r\n¡Señor! llevaste muchos dolores\r\nDe pecadores que así te ven.\r\n\r\nManos preciosas, tan lastimadas,\r\nPor mí clavadas en una cruz.\r\nEn este valle mis pasos guía,\r\nSé mi alegría, mi norte y luz.\r\n\r\nBello costado en cuya herida\r\nHalla la vida la humanidad.\r\nFuente amorosa de un Dios clemente,\r\nVoz elocuente de caridad.\r\n\r\nTus pies heridos, Cristo paciente,\r\nYo delincuente los taladré;\r\nPor Ti salvado, ya bendecido\r\nY agradecido, te adoraré.\r\n\r\n¡Crucificado en un madero,\r\nManso Cordero, muerto por mí!\r\n¡oh! Guarda mi alma que en Ti reposa,\r\nSiempre dichosa cerca de Ti.",
    },
    {
      ID: "500",
      Titulo: "Señor, yo he prometido",
      Letra:
        "Señor, yo he prometido\r\nServirte con amor;\r\nConcédeme tu gracia,\r\nMi Amigo y Salvador.\r\nNo temeré la lucha\r\nSi Tú a mi lado estás,\r\nNi perderé el camino\r\nSi Tú guiando vas.\r\n\r\nEl mundo está muy cerca,\r\nY abunda tentación,\r\nSuave es el engaño,\r\nY es necia la pasión.\r\nVen, Tú, Señor, más cerca\r\nMostrando tu piedad,\r\nY escuda al alma mía\r\nDe toda iniquidad.\r\n\r\nCuando mi mente vague\r\nYa incierta ya veloz,\r\nConcédeme que escuche\r\nSeñor, tu clara voz.\r\nAnímame si paro,\r\nInspírame también,\r\nRepréndeme si temo\r\nEn todo hacer el bien.\r\n\r\nSeñor, Tú has prometido\r\nA todo aquel que va\r\nSiguiendo tus pisadas,\r\nQue al cielo llegará.\r\nSostenme en el camino,\r\nY al fin con dulce amor,\r\nTrasládame a tu gloria,\r\nMi Amigo y Salvador.",
    },
    {
      ID: "501",
      Titulo: "Sin cesar siempre pienso",
      Letra:
        "Sin cesar siempre pienso en la tierra mejor,\r\nDo al ponerse el sol llegaré,\r\nY al hallarme en los cielos\r\ncon Cristo el Señor,\r\n¿Mi corona de estrellas tendré?\r\n\r\nCoro:\r\n¿Mi corona tendrá sus estrellas allí,\r\nEn las almas que yo rescate?\r\nCuando el sol ya decline\r\nY me encuentre yo en Ti,\r\n¿Mi corona de estrellas tendré?\r\n\r\nDe la fuerza de Dios esperando el poder,\r\nTrabajar quiero siempre y salvar\r\nA las almas, y al fin, cual estrellas saber\r\nQue en mis sienes irán a brillar.\r\n\r\n¡Oh! qué gozo en los cielos será para mí,\r\nVivas gemas poner a sus pies;\r\nY tener en mi frente corona que allí\r\nOrnen joyas de tal brillantez.",
    },
    {
      ID: "502",
      Titulo: "Tal como soy anhelo ser",
      Letra:
        "Tal como soy anhelo ser\r\nTuyo y en ti permanecer;\r\nA ti queriéndome ofrecer,\r\nahora Cristo, vengo a ti.\r\n\r\nTodo mi ser te quiero dar,\r\na ti lo quiero dedicar;\r\ny sin reserva, ni esperar,\r\nahora Cristo, vengo a ti.\r\n\r\nSiempre en tu luz anhelo andar,\r\npor lo que es recto batallar,\r\nser fiel y nunca desmayar;\r\nahora Cristo, vengo a ti.\r\n\r\nTal como soy te doy mi amor,\r\ndoy de mi vida lo mejor.\r\nPor la verdad, por ti, Señor,\r\nahora Cristo, vengo a ti.",
    },
    {
      ID: "503",
      Titulo: "¡Tan dulce el nombre de Jesús!",
      Letra:
        "Tan dulce el nombre de Jesús,\r\nSus bellas notas cantaré,\r\nQue mi alma llena al proclamar,\r\nEl nombre de Jesús.\r\n\r\nCoro:\r\nSiempre es mi Señor\r\nGracias doy al Salvador,\r\nY en el cielo su loor\r\nPor siempre cantaré.\r\n\r\nAdoro el nombre de Jesús,\r\nJamás me faltará su amor,\r\nY pone aparte mi dolor\r\nEl nombre de Jesús.\r\n\r\nTan puro el nombre de Jesús,\r\nQue mi pesar pudo quitar,\r\nY grata paz a mi alma dar,\r\nEl nombre de Jesús.\r\n\r\nEl dulce nombre de Jesús,\r\nPor siempre quiero alabar,\r\nY todos deben ensalzar,\r\nEl nombre de Jesús.",
    },
    {
      ID: "504",
      Titulo: "Tengo un pastor divino",
      Letra:
        "Tengo un pastor divino,\r\nnada me faltará,\r\nA delicados pastos\r\nsiempre me llevará,\r\nConfortará mi alma,\r\ny guiado me veré,\r\nPor senda de justicia,\r\nen que por El iré.\r\n\r\nAunque camine en valle\r\nde sombra y de dolor,\r\nDel valle de la muerte,\r\nnunca tendré temor,\r\nCon su presencia santa,\r\nsombra y dolor se irán,\r\nSu vara y su cayado,\r\naliento me darán.\r\n\r\n¡Oh Dios! en la presencia\r\ndel que me da aflicción,\r\nMesa pondrá surtida\r\nde rica provisión,\r\nEn mi cabeza el óleo\r\nde santo pusiste Tú,\r\nY de tu bien mi copa,\r\nrebosa plenitud.\r\n\r\nDe tu misericordia\r\ny de tu inmenso bien,\r\nAl obtenerlos siempre,\r\nrecibiré sostén,\r\nY en la morada augusta\r\nde mi Señor y mi Dios,\r\nAl descansar, ferviente\r\nte alabará mi voz.",
    },
    {
      ID: "505",
      Titulo: "Todos los que tengan sed, beberán",
      Letra:
        "Todos los que tengan sed, beberán;\r\nVengan cuantos pobres hay, comerán.\r\nNo malgasten el haber,\r\ncompren verdadero pan,\r\nsi a Jesús acuden hoy, gozarán.\r\n\r\nSi le prestan atención, les dará\r\nparte en su pactado bien, eternal.\r\nCon el místico David, Rey,\r\nMaestro, Capitán\r\nde las huestes que al Edén llevará.\r\n\r\nComo baja bienhechor sin volver,\r\nriego que las nubes dan, ha de ser.\r\nLa palabra del Señor,\r\nproductiva, pleno bien,\r\nvencedor al fin será, por la fe.",
    },
    {
      ID: "506",
      Titulo: "Un mensaje del Señor ¡Aleluya!",
      Letra:
        "Un mensaje del Señor, ¡Aleluya!\r\nAnuncio yo que da la paz,\r\nEs de Dios el santo amor, ¡Aleluya!\r\nVe tan sólo a Cristo y vivirás.\r\n\r\nCoro:\r\nVe la cruz y vivirás, ve a Cristo y vivirás,\r\nEs de Dios el santo amor, ¡Aleluya!\r\nVe tan sólo a Cristo y vivirás.\r\n\r\nEl mensaje del Señor, ¡Aleluya!\r\nInfundirá la fe en ti,\r\nQue Jesús, mi Salvador, ¡Aleluya!\r\nDio por ti su sangre carmesí.\r\n\r\nVida puedes obtener, ¡Aleluya!\r\nQue tu Señor te quiere dar,\r\nSi tan sólo quieres ver, ¡Aleluya!\r\nPor la fe a quién podrá salvar.\r\n\r\nComo vine te diré, ¡Aleluya!\r\nAl Redentor que me salvó,\r\nFui tan sólo por la fe, ¡Aleluya!\r\nY el Señor mis culpas perdonó.",
    },
    {
      ID: "507",
      Titulo: "Ven a Cristo, ven ahora",
      Letra:
        "Ven a Cristo, ven ahora,\r\nven así cual estás,\r\ny de él sin demora\r\nel perdón obtendrás.\r\n\r\nCree y fija tu confianza\r\nen su muerte por ti;\r\nEl gozo alcanza\r\nquien lo hiciere así.\r\n\r\nVen a Cristo, con fe viva\r\npiensa mucho en su amor;\r\nNo dudes, recibe\r\nal más vil pecador.\r\n\r\nÉl anhela recibirte\r\ny hacerte merced;\r\nlas puertas abrirte\r\nal eterno placer.",
    },
    {
      ID: "508",
      Titulo: "Venid y celebrad",
      Letra:
        "Venid y celebrad\r\na Cristo, quién llevó\r\nCautiva la cautividad,\r\ny estas nuevas proclamad\r\nJesús resucitó, Jesús resucitó.\r\n\r\nCoro:\r\nLa lucha ha ganado,\r\ngrata y gloriosa noticia,\r\nSí, Cristo ha resucitado\r\ny pronto en su gloria vendrá.\r\n\r\nLa muerte no venció\r\nal Salvador Jesús,\r\nQuién a sí mismo se humilló\r\ny por nosotros padeció\r\nLa muerte de la cruz,\r\nla muerte de la cruz.\r\n\r\nAllí sentado está\r\nel sacerdote fiel,\r\nSu obra terminada ya,\r\nEl intercede siempre allá\r\nPor los que creen en El,\r\npor los que creen en El.\r\n\r\nEl mismo volverá,\r\npues su palabra es fiel,\r\nY su promesa cumplirá,\r\npues nuestros cuerpos cambiará\r\nA semejanza de El, a semejanza de El.",
    },
    {
      ID: "509",
      Titulo: "¡Ven, levántate, mi alma!",
      Letra:
        "¡Ven, levántate, mi alma!\r\npon tu mira en Jesús;\r\nve sentado en la gloria\r\nal que padeció la cruz.\r\n\r\nEn trascendental justicia,\r\nCristo en suma gloria está;\r\ny su sangre da derecho\r\nde ir adentro y adorar.\r\n\r\nTus pecados y tus culpas\r\nCristo en la cruz llevó.\r\nDios en él las ha cargado,\r\ny perfecta paz te dio.\r\nDios te lleva a su morada.\r\nEndereza para ti\r\nuna fiesta, y te invita\r\na gozar con él allí.\r\n\r\nTodo es paz, sí, para siempre,\r\nen el círculo de amor,\r\ndonde el Padre es conocido\r\npor su gracia y gran favor.\r\n\r\n“Para siempre” ¡qué palabras!\r\nCon y como el Señor,\r\nnada puede apartarnos\r\ndel amor del Salvador.",
    },
    {
      ID: "510",
      Titulo: "Viene otra vez nuestro Salvador",
      Letra:
        "Viene otra vez nuestro Salvador,\r\n¡Oh que si fuera hoy!\r\nPara reinar con poder y amor,\r\n¡Oh que si fuera hoy!\r\nYa por su iglesia viene esta vez,\r\nPurificada en su grande amor,\r\nDel mundo por la redondez,\r\n¡Oh que si fuera hoy!\r\n\r\nCoro:\r\n¡Gloria! ¡Gloria! Gozo sin fin traerá,\r\n¡Gloria! ¡Gloria! Al coronarle Rey,\r\n¡Gloria! ¡Gloria! La senda preparad,\r\n¡Gloria! ¡Gloria! Cristo viene otra vez.\r\n\r\nTerminará el poder de Satán,\r\n¡Ojalá fuera hoy!\r\nNo más tristezas aquí verán,\r\n¡Ojalá fuera hoy!\r\nTodos los muertos en Cristo irán\r\nArrebatados por su Señor,\r\n¿Cuándo estas glorias aquí vendrán? ¡Ojalá fuera hoy!\r\n\r\nFieles y leales nos debe hallar,\r\nsi El viniera hoy;\r\nTodos velando con gozo y paz,\r\nsi El viniera hoy.\r\nMultiplicadas señales hay,\r\nEn el oriente se ve el albor,\r\nYa más cercano el tiempo está,\r\n¡Ojalá fuera hoy!",
    },
    {
      ID: "511",
      Titulo: "Yo quiero trabajar por el Señor",
      Letra:
        "Yo quiero trabajar por el Señor,\r\nConfiando en su palabra y en su amor;\r\nQuiero yo cantar, orar\r\ny ocupado siempre estar,\r\nEn la viña del Señor.\r\n\r\nCoro:\r\nTrabajar y orar en la viña,\r\nen la viña del Señor,\r\nSí, mi anhelo es orar,\r\ny ocupado siempre estar\r\nEn la viña del Señor.\r\n\r\nYo quiero cada día trabajar,\r\nLos esclavos del pecado libertar;\r\nConducirlos a Jesús,\r\nnuestro Guía, nuestra Luz,\r\nEn la viña del Señor.\r\n\r\nYo quiero ser obrero de valor,\r\nConfiando en el poder del Salvador;\r\nEl que quiere trabajar,\r\nhallará también lugar,\r\nEn la viña del Señor.",
    },
    {
      ID: "512",
      Titulo: "Yo tengo un himno de loor",
      Letra:
        "Yo tengo un himno de loor,\r\nDesde que salvo estoy,\r\nPara mi Rey, mi Salvador,\r\nDesde que salvo estoy.\r\n\r\nCoro:\r\nDesde que salvo estoy,\r\nDesde que salvo estoy\r\nSólo en El me gloriaré.\r\nDesde que salvo estoy\r\nEn mi Salvador me gloriaré.\r\n\r\nYo soy de Cristo y mi ansiedad\r\nDesde que salvo estoy\r\nEstá en cumplir su voluntad,\r\nDesde que salvo estoy.\r\n\r\nYo tengo un gozo que El me dio\r\nDesde que salvo estoy,\r\nCuando en su sangre me lavó\r\nDesde que salvo estoy.\r\n\r\nTengo un hogar adonde iré\r\nDesde que salvo estoy,\r\nY allí seguro viviré\r\nPorque salvado estoy.",
    },
    {
      ID: "513",
      Titulo: "Yo vagaba mucho tiempo en el error",
      Letra:
        "Yo vagaba mucho tiempo en el error,\r\nAgobiado en el pecado y el temor;\r\nCuando vi al Salvador\r\ny escuché su tierna voz,\r\nMi Señor me hizo libre por su amor.\r\n\r\nCoro:\r\nLibre estoy, libre estoy,\r\nPor la gracia del Señor libre estoy.\r\nLibre estoy, libre estoy,\r\n¡Aleluya, por la fe libre estoy!\r\n\r\nYo vagaba mucho tiempo en el error,\r\nSin pensar en el amor del Salvador,\r\nYo andaba con temor,\r\nlejos de mi Redentor,\r\n¡Mas ahora por su muerte libre estoy!\r\n\r\nYo vagaba mucho tiempo en el error,\r\nMas ahora quiero andar con mi Señor,\r\nQuiero oír su tierna voz,\r\ny seguirle siempre en pos,\r\n¡Gloria, gloria sea a nuestro buen Pastor!",
    },
    {
      ID: "514",
      Titulo: "Cuando combatido por la adversidad",
      Letra:
        "Cuando combatido por la adversidad\r\nCreas ya perdida tu felicidad,\r\nMira lo que el cielo para ti guardó,\r\nCuenta las riquezas que el Señor te dio.\r\n\r\nCoro:\r\n¡Bendiciones, cuántas tienes ya!\r\nBendiciones, Dios te manda más,\r\nBendiciones, te sorprenderás\r\nCuando veas lo que Dios por ti hará.\r\n\r\n¿Andas agobiado por algún pesar?\r\n¿Duro te parece amarga cruz llevar?\r\nCuenta las promesas del Señor Jesús,\r\nY de las tinieblas nacerá la luz.\r\n\r\nCuando de otros veas la prosperidad,\r\nY tus pies claudiquen tras de su maldad,\r\nCuenta las riquezas que tendrás por fe,\r\nDonde el oro es polvo que hollará tu pie.",
    },
    {
      ID: "515",
      Titulo: "Puedes obtener la dulce paz",
      Letra:
        "Puedes obtener la dulce paz de Dios,\r\nSi a Jesucristo acudieres hoy,\r\nVen contrito a su cruz,\r\nEl tus culpas borrará,\r\nY así gran gozo te dará el Señor.\r\n\r\nCoro:\r\nGozo, da la salvación,\r\ngozo en el corazón,\r\nSanto júbilo tendrás\r\ncuando reine en ti la paz,\r\nQue te trajo Cristo,\r\npor su muerte en cruz.\r\n\r\nEl amor de Cristo puedes conocer,\r\nSu sostén y gracia puedes obtener,\r\nNunca solo lucharás,\r\nCristo te defenderá,\r\nY así gran gozo te dará el Señor.\r\n\r\n¿Quieres tu de Cristo fiel soldado ser,\r\nY luchar por siempre a favor de El?\r\nVen entonces sin tardar,\r\nmás que vencedor te hará,\r\nY por El luchando, gozo tú tendrás.\r\n\r\nTú podrás por Cristo ser aquí una luz,\r\nSi tu todo rindes al Señor Jesús,\r\nY al venir el Salvador,\r\nen su gloria y esplendor,\r\n¡Con cuán grande gozo reinarás con El!",
    },
    {
      ID: "516",
      Titulo: "¡Qué grande carga, oh Salvador!",
      Letra:
        "¡Qué grande carga, oh Salvador,\r\nllevaste Tú por mí!\r\nPrueba suprema de tu amor,\r\nsufriendo afrentas mil.\r\n\r\nCoro:\r\nNunca me olvidaré de Ti,\r\nde tu agonía en Getsemaní,\r\nNi del Calvario do por mí,\r\nsufriste, oh Salvador.\r\n\r\nEl enemigo en su furor,\r\nprocura hacerte mal,\r\nY los soldados sin razón,\r\nmuestran su crueldad.\r\n\r\nMofa de ti la multitud,\r\ny el sacerdocio allí,\r\nSe une con ella en plenitud,\r\nde odio y maldad tan vil.\r\n\r\nMás cual cordero así sufrió,\r\npor nuestra iniquidad,\r\nLa copa amarga El apuró,\r\npor nos en su bondad.\r\n\r\nY ahora cerca de tu cruz,\r\nquisiéramos quedar,\r\nGracias Señor por la salud,\r\nque Tú por ella das.",
    },
    {
      ID: "517",
      Titulo: "El Hijo del Padre",
      Letra:
        "El Hijo del Padre, el Cristo de Dios,\r\nmorando en el cielo, de todo Señor;\r\nDejando la gloria, al mundo bajó,\r\ny en forma de siervo Él se anonadó.\r\n\r\nCoro:\r\nSu amor es mi historia,\r\nsu amor mi canción.\r\nAl cielo de gloria me lleva el Señor.\r\nMe anima y consuela,\r\nde amor la bandera,\r\npues Cristo me espera,\r\nSí, Cristo me espera con brazos de amor.\r\nSu amor, mi canción.\r\n\r\nAl Padre obediente, se ve a Jesús\r\nAun hasta la muerte y muerte de cruz.\r\nAmó a los perdidos, los quiso alcanzar,\r\npor su sacrificio los pudo salvar.\r\n\r\nY ahora a lo sumo su Dios le ensalzó,\r\ny un nombre le ha dado, supremo, mayor\r\nque todo otro nombre: ¡magnífico honor!\r\nY todos confiesan: “¡Jesús es Señor!”\r\n\r\nY toda rodilla se doblegará,\r\ntambién toda lengua le confesará:\r\nSeñor de señores, altísimo Rey;\r\nLa gloria del Padre del cielo es la ley.",
    },
  ];

  const paginacion = 130;
  const cuenta1 = currentPage * paginacion;
  const cuenta2 = cuenta1 - paginacion;
  const resultado = himnos.slice(cuenta2, cuenta1);

  const prev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const next = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLetra = (titulo) => {
    const cancionSeleccionada = himnos.find(
      (himno) => himno.Titulo === titulo || himno.ID === titulo // Buscar por título o por ID
    );
    if (cancionSeleccionada) {
      setLlave(true);
      setLetra(cancionSeleccionada.Letra);
      setTituloCancionSeleccionada(cancionSeleccionada.Titulo);
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
      const cancionPorId = himnos.find((himno) => himno.ID === busqueda);
      if (cancionPorId) {
        setResultadoBusqueda([cancionPorId]);
        setLlave(true);
        setLetra(cancionPorId.Letra);
        setTituloCancionSeleccionada(cancionPorId.Titulo);
      } else {
        setResultadoBusqueda([]);
        setLlave(false);
        setLetra([]);
        setTituloCancionSeleccionada("Canción no encontrada");
        alert(`Himno no encontrado para el término: ${busqueda}.`);
      }
    } else {
      // Buscar por título
      const resultadosPorTitulo = himnos.filter((himno) =>
        normalizeText(himno.Titulo)
          .toLowerCase()
          .includes(busquedaNormalized.toLowerCase())
      );

      // Si se encontraron resultados por título, mostrarlos
      if (resultadosPorTitulo.length > 0) {
        setResultadoBusqueda(resultadosPorTitulo);

        // Si hay solo un resultado en la búsqueda, mostrar automáticamente la Letra
        if (resultadosPorTitulo.length === 1) {
          const cancionSeleccionada = resultadosPorTitulo[0];
          setLlave(true);
          setLetra(cancionSeleccionada.Letra);
          setTituloCancionSeleccionada(cancionSeleccionada.Titulo);
        }
      } else {
        // Buscar por contenido de la Letra
        const resultadosPorLetra = himnos.filter((himno) =>
          normalizeText(himno.Letra)
            .toLowerCase()
            .includes(busquedaNormalized.toLowerCase())
        );

        // Si se encontraron resultados por Letra, mostrarlos
        if (resultadosPorLetra.length > 0) {
          setResultadoBusqueda(resultadosPorLetra);

          // Si hay solo un resultado en la búsqueda, mostrar automáticamente la Letra
          if (resultadosPorLetra.length === 1) {
            const cancionSeleccionada = resultadosPorLetra[0];
            setLlave(true);
            setLetra(cancionSeleccionada.Letra);
            setTituloCancionSeleccionada(cancionSeleccionada.Titulo);
          }
        } else {
          // Si no se encontraron resultados, mostrar mensaje
          setResultadoBusqueda([]);
          setLlave(false);
          setLetra([]);
          setTituloCancionSeleccionada("Canción no encontrada");
          alert(`Himno no encontrado para el término: ${busqueda}.`);
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
    versos = Letra.split("\n");
  }

  const handleCoros = () => {
    navigate("/Coros");
  };

  const [tamañoLetra, setTamañoLetra] = useState(16); // Tamaño de letra inicial

  const manejarCambioTamaño = (event) => {
    setTamañoLetra(event.target.value); // Actualizar el tamaño de letra al valor seleccionado por el usuario
  };

  return (
    <div className="container-cancionero">
      <h1 className="titulo-cancionero">Himnos</h1>
      <h3 className="subtitle">
        Por favor, no dejar espacios al final del texto de la búsqueda
      </h3>
      <div className="container-buscador">
        <form onSubmit={handleSubmit} className="form-buscador">
          <input
            type="text"
            className="buscador"
            placeholder="Buscar himno..."
            value={busqueda}
            onChange={handleBusqueda}
          />
          <button type="submit" className="button-submit">
            <i className="fa-solid fa-magnifying-glass icono-buscador"></i>
          </button>
        </form>

        {/* <select name="" id="filtro" className="filtro">
          <option value="Himnos" className="options">
            Himnos
          </option>
          <option value="Coros" className="options" >
            Coros
          </option>
        </select> */}
      </div>

      <div className="container-button-cambiar">
        <button onClick={handleCoros} className="button-cambiar-himnos">
          Ver Coros
        </button>
      </div>

      {!llave ? (
        <>
          <div className="container-titulo-indice">
            <h2 className="titulo-indice">
              <b className="txt-indice">Indice de Himnos</b>
            </h2>
          </div>
          <div className="container-indice-coros">
            {(resultadoBusqueda.length > 0 ? resultadoBusqueda : resultado).map(
              (himno) => (
                <div className="container-indice" key={himno.ID}>
                  <a
                    href="#"
                    onClick={() => handleLetra(himno.Titulo)}
                    className="link-coros"
                  >
                    {himno.ID}: {himno.Titulo}
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
              (resultadoBusqueda.length === 0 && himnos.length > paginacion && (
                <>
                  {cuenta1 < himnos.length && (
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
                  <div key={index} className="parte-cancion">
                    <p
                      className="texto-letra-general"
                      style={{ fontSize: `${tamañoLetra}px` }}
                    >
                      {verso}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </>
      )}
      <Footer></Footer>
    </div>
  );
}

export default Himnos;
