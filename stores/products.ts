import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProducts = defineStore('products', () => {
  const arr=ref([

    {id:1, title:'Косичка "Советский" пломбир', title_path:'sovetskij_kosa_plombir', type:'icecream',
      manufacture: 'slavica', description:'Сливочный пломбир крем-брюле в форме косички, в экономичной упаковке',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/sovetskij_kosa_plombir_258x258.jpg']},
    
    {id:2, title:'Косичка "Советский" шоколад', title_path:'sovetskij_kosa_shokolad', type:'icecream',
      manufacture: 'slavica', description:'Шоколадный пломбир в форме косички, в экономичной упаковке',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/sovetskij_kosa_shokolad_258x258.jpg'],},
    
    {id:3, title:'Рожок "Американец"', title_path:'Amerikanec_110', type:'icecream',
      manufacture: 'slavica', description:'Двухслойное, клубничное и ванильное мороженое с клубничным джемом в сахарном рожке',
      form: 'rozhok', weight:'110гр', inbox: '24шт', price:50, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Amerikanec_110-258x258.jpg'],},
      
    {id:4, title:'Фруктовый лёд "Арбуз"', title_path:'Arbuz', type:'icecream',
      manufacture: 'slavica', description:'Мороженое на палочке',
      form: 'fruktoviy led', weight:'70гр', inbox: '?шт', price:40, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Arbuz_70-258x258.jpg'],},

    {id:5, title:'Рожок "Азарт киви"', title_path:'AZART_kivi', type:'icecream',
      manufacture: 'slavica', description:'Мороженое с джемом киви в вафельном сахарном рожке',
      form: 'rozhok', weight:'140гр', inbox: '14шт', price:80, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/AZART_kivi-258x258.jpg'],},

    {id:6, title:'Рожок "Азарт клубника"', title_path:'AZART_klubnika', type:'icecream',
      manufacture: 'slavica', description:'Мороженое с клубничным джемом в вафельном сахарном рожке',
      form: 'rozhok', weight:'140гр', inbox: '14шт', price:80, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/AZART_klubnika-258x258.jpg'],},

    {id:7, title:'Рожок "Азарт шоколад"', title_path:'AZART_shokolad', type:'icecream',
      manufacture: 'slavica', description:'Шоколадное мороженое с шоколадным топпингом в вафельном сахарном рожке',
      form: 'rozhok', weight:'140гр', inbox: '14шт', price:80, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/AZART_shokolad-258x258.jpg'],},

    {id:8, title:'Рожок "Бедный еврей"', title_path:'Bednyi_Evrey_110', type:'icecream',
      manufacture: 'slavica', description:'Шоколадное и черносливовое мороженое с арахисом, шоколадом и черносливовым джемом в сахарном рожке',
      form: 'rozhok', weight:'110гр', inbox: '24шт', price:60, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Bednyi_Evrey_110-258x258.jpg'],},

    {id:9, title:'Стакан вафельный "Берёзка"', title_path:'Berezka_70', type:'icecream',
      manufacture: 'slavica', description:'Мороженое в вафельном стаканчике',
      form: 'vafelniy stakan', weight:'70гр', inbox: '27шт', price:30, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/stakanchiki/Berezka_70-258x258.jpg'],},

    {id:10, title:'Стакан бумажный "Лимон"', title_path:'Desert_Limon_80', type:'icecream',
      manufacture: 'slavica', description:'Лимонный десерт в бумажном стаканчике',
      form: 'bumazhniy stakan', weight:'100гр', inbox: '27шт', price:30, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Desert_Limon_80-258x258.jpg'],},

    {id:11, title:'Эскимо "Двойной шоколад"', title_path:'Dvoynoy_Shokolad_70', type:'icecream',
      manufacture: 'slavica', description:'Шоколадное мороженое на палочке в шоколадной глазури',
      form: 'eskimo', weight:'70гр', inbox: '?шт', price:40, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Dvoynoy_Shokolad_70-258x258.jpg'],},

    {id:12, title:'Стакан вафельный "Фисташка"', title_path:'fistashka', type:'icecream',
      manufacture: 'slavica', description:'Фисташковое мороженое с брусничным топпингом в плоском вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '30шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/fistashka-258x258.jpg'],},

    {id:13, title:'Эскимо "Фруктолето" Арбуз-Киви', title_path:'Fruktoleto_Arbuz_Kivi_70', type:'icecream',
      manufacture: 'slavica', description:'Молочное мороженое арбуз-киви',
      form: 'vafelniy stakan', weight:'70гр', inbox: '24шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Fruktoleto_Arbuz_Kivi_70г-1-258x258.jpg'],},

    {id:14, title:'Стакан бумажный "Фруктолето" Лесные ягоды', title_path:'Fruktoleto_Lesnye_Yagodi_100', type:'icecream',
      manufacture: 'slavica', description:'Мороженое ЛЕСНЫЕ ЯГОДЫ в бумажный стаканчик',
      form: 'bumazhniy stakan', weight:'100гр', inbox: '?шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Fruktoleto_Lesnye_Yagodi_100-258x258.jpg'],},

    {id:15, title:'Рожок "Хохол"', title_path:'Hohol_110', type:'icecream',
      manufacture: 'slavica', description:'Двухслойное, банановое и со вкусом жевательной резинки мороженое в сахарном рожке',
      form: 'rozhok', weight:'110гр', inbox: '24шт', price:60, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Hohol_110-258x258.jpg'],},

    {id:16, title:'Стакан вафельный "Карамелька"', title_path:'karamelka', type:'icecream',
      manufacture: 'slavica', description:'Мороженое крем-брюле с соленой карамелью в плоском вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '30шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/karamelka-258x258.jpg'],},

    {id:17, title:'Стакан вафельный "Клубничка"', title_path:'klubnichka', type:'icecream',
      manufacture: 'slavica', description:'Мороженое с клубничным топпингом в плоском вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '30шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/klubnichka-258x258.jpg'],},

    {id:18, title:'Фруктовый лёд "Crazy Kola"', title_path:'Krazy_Kola_70', type:'icecream',
      manufacture: 'slavica', description:'Фруктовый лед со вкусом колы',
      form: 'fruktoviy led', weight:'70гр', inbox: '24шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Krazy_Kola_70-258x258.jpg'],},

    {id:19, title:'Фруктовый лёд "Crazy Kola"', title_path:'Krazy_Kola_85', type:'icecream',
      manufacture: 'slavica', description:'Фруктовый лед со вкусом колы',
      form: 'fruktoviy led', weight:'85гр', inbox: '?шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Krazy_Kola_85-258x258.jpg'],},

    {id:20, title:'Эскимо "MARK"', title_path:'Mark_55', type:'icecream',
      manufacture: 'slavica', description:'Мороженое в шоколадной глазури с кунжутом',
      form: 'eskimo', weight:'55гр', inbox: '24шт', price:40, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Mark_55-258x258.jpg'],},

    {id:21, title:'Эскимо "MARK" Апельсин', title_path:'Mark_Apelsin_Apelsin_55', type:'icecream',
      manufacture: 'slavica', description:'Апельсиновое мороженое в апельсиновой глазури с кукурузной крошкой',
      form: 'eskimo', weight:'55гр', inbox: '24шт', price:40, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Mark_Apelsin_Apelsin_55-258x258.jpg'],},

    {id:22, title:'Эскимо "MARK" Киви', title_path:'Mark_Kivi_Kivi_55', type:'icecream',
      manufacture: 'slavica', description:'Мороженое киви в глазури киви с кукурузной крошкой',
      form: 'eskimo', weight:'55гр', inbox: '24шт', price:40, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Mark_Kivi_Kivi_55-258x258.jpg'],},

    {id:23, title:'Стакан вафельный "Настроение" Чернослив', title_path:'nastroenie_120_chernosliv', type:'icecream',
      manufacture: 'slavica', description:'Мороженое с черносливовым джемом в большом вафельном стаканчике',
      form: 'vafelniy stakan', weight:'120гр', inbox: '20шт', price:30, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/nastroenie_120_chernosliv-258x258.jpg'],},

    {id:24, title:'Стакан вафельный "Настроение" Клубника', title_path:'nastroenie_120_klubnika', type:'icecream',
      manufacture: 'slavica', description:'Мороженое с клубничным джемом в большом вафельном стаканчике',
      form: 'vafelniy stakan', weight:'120гр', inbox: '20шт', price:30, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/nastroenie_120_klubnika-258x258.jpg'],},

    {id:25, title:'Косичка "Настроение" Брусника', title_path:'NASTROYeNIYe_brusnika', type:'icecream',
      manufacture: 'slavica', description:'Мороженое с брусничным джемом в форме косички',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/NASTROYeNIYe_brusnika-258x258.jpg'],},

    {id:26, title:'Косичка "Настроение" Киви', title_path:'NASTROYeNIYe_kivi', type:'icecream',
      manufacture: 'slavica', description:'Мороженое с джемом киви в форме косички',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/NASTROYeNIYe_kivi-258x258.jpg'],},

    {id:27, title:'Косичка "Настроение" Клубника', title_path:'NASTROYeNIYe_klubnika', type:'icecream',
      manufacture: 'slavica', description:'Мороженое с клубничным джемом в форме косички',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/NASTROYeNIYe_klubnika-258x258.jpg'],},

    {id:28, title:'Косичка "Настроение" Манго', title_path:'NASTROYeNIYe_mango', type:'icecream',
      manufacture: 'slavica', description:'Мороженое с джемом манго в форме косички',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/NASTROYeNIYe_mango-258x258.jpg'],},

    {id:29, title:'Косичка "Настроение" Сгущёнка', title_path:'NASTROYeNIYe_sgushchenka1', type:'icecream',
      manufacture: 'slavica', description:'Мороженое с вареным сгущенным молоком в форме косички',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/NASTROYeNIYe_sgushchenka1-258x258.jpg'],},

    {id:30, title:'Косичка "Настроение" Трюфель', title_path:'NASTROYeNIYe_tryufel', type:'icecream',
      manufacture: 'slavica', description:'Мороженое с шоколадной крошкой и шоколадным топпингом в форме косички',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/NASTROYeNIYe_tryufel-258x258.jpg'],},

    {id:31, title:'Эскимо "Обамка"', title_path:'Obamka_60', type:'icecream',
      manufacture: 'slavica', description:'Шоколадное мороженое в шоколадной глазури',
      form: 'eskimo', weight:'60гр', inbox: '24шт', price:40, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Obamka_60-258x258.jpg'],},

    {id:32, title:'Фруктовый лёд "Океан"', title_path:'Okean_70', type:'icecream',
      manufacture: 'slavica', description:'Фруктовый лед',
      form: 'fruktoviy led', weight:'70гр', inbox: '?шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Okean_70-258x258.jpg'],},

    {id:33, title:'Эскимо "Ореховое"', title_path:'Orehovoe_60', type:'icecream',
      manufacture: 'slavica', description:'Эскимо в шоколадной глазури с орехами',
      form: 'eskimo', weight:'60гр', inbox: '20шт', price:40, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Orehovoe_60-258x258.jpg'],},

    {id:34, title:'Эскимо "Орлёнок"', title_path:'', type:'icecream',
      manufacture: 'slavica', description:'Сливочное мороженое в шоколадной глазури',
      form: 'eskimo', weight:'60гр', inbox: '24шт', price:40, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Orlenok_60-258x258.jpg'],},

    {id:35, title:'Эскимо "Панда"', title_path:'', type:'icecream',
      manufacture: 'slavica', description:'Двухслойное мороженое на палочке',
      form: 'eskimo', weight:'60гр', inbox: '24шт', price:30, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Panda_60-258x258.jpg'],},    

    {id:36, title:'Стакан бумажный "Пломбир на Сливках"', title_path:'Plombir_Na_Slivkah_80-1', type:'icecream',
      manufacture: 'slavica', description:'Пломбир в бумажном стаканчике',
      form: 'bumazhniy stakan', weight:'80гр', inbox: '27шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Plombir_Na_Slivkah_80-1-258x258.jpg'],},

    {id:37, title:'Эскимо "Пломбир на сливках"', title_path:'Plombir_Na_Slivkah_80-2', type:'icecream',
      manufacture: 'slavica', description:'Пломбир на палочке в пергаменте',
      form: 'eskimo', weight:'80гр', inbox: '28шт', price:30, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Plombir_Na_Slivkah_80-2-258x258.jpg'],},

    {id:38, title:'Стакан вафельный "Пломбир на сливках"', title_path:'Plombir_Na_Slivkah_80', type:'icecream',
      manufacture: 'slavica', description:'Пломбир в вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '27шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Plombir_Na_Slivkah_80-258x258.jpg'],},

    {id:39, title:'Рожок "Пломбтр на сливках"', title_path:'Plombir_Na_Slivkah_Rojok_100', type:'icecream',
      manufacture: 'slavica', description:'Пломбир в вафельном сахарном рожке с шоколадной глазурью',
      form: 'rozhok', weight:'100гр', inbox: '20шт', price:50, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Plombir_Na_Slivkah_Rojok_100-258x258.jpg'],},

    {id:40, title:'Рожок "Пломбтр на сливках" шоколадный', title_path:'Plombir_Na_Slivkah_Rojok_shok_100', type:'icecream',
      manufacture: 'slavica', description:'Шоколадный пломбир в вафельном сахарном рожке с шоколадной глазурью',
      form: 'rozhok', weight:'100гр', inbox: '20шт', price:50, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Plombir_Na_Slivkah_Rojok_shok_100_-258x258.jpg'],},

    {id:41, title:'Эскимо "Пломбир на сливках" шоколадный', title_path:'Plombir_Na_Slivkah_Shokoladniy_80', type:'icecream',
      manufacture: 'slavica', description:'Шоколадный пломбир на палочке в пергаменте',
      form: 'eskimo', weight:'80гр', inbox: '28шт', price:30, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Plombir_Na_Slivkah_Shokoladniy_80-258x258.jpg'],},

    {id:42, title:'Бумажный пакет "Пломбир на сливках"', title_path:'PLOMBIR-NA-SLIVKAKh_bum_paket500', type:'icecream',
      manufacture: 'slavica', description:'Пломбир в бумажном пакете',
      form: 'bumazhniy paket', weight:'500гр', inbox: '12шт', price:250, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/PLOMBIR-NA-SLIVKAKh_bum_paket500-258x258.jpg'],},

    {id:43, title:'Ведро "Пломбир на сливках"', title_path:'PLOMBIR-NA-SLIVKAKh_vedro', type:'icecream',
      manufacture: 'slavica', description:'Пломбир в бумажном ведерке',
      form: 'bumazhniy paket', weight:'500гр', inbox: '6шт', price:300, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/PLOMBIR-NA-SLIVKAKh_vedro-258x258.png'],},

    {id:44, title:'Брикет "Пломбир на сливках"', title_path:'PNS-briket', type:'icecream',
      manufacture: 'slavica', description:'Пломбир в большом брикете',
      form: 'briket', weight:'250гр', inbox: '17шт', price:150, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/PNS-briket-258x258.png'],},

    {id:45, title:'Брикет "Пломбир на сливках" клубничный', title_path:'PNS-briket-klub', type:'icecream',
      manufacture: 'slavica', description:'Пломбир с клубничным джемом в большом брикете',
      form: 'briket', weight:'250гр', inbox: '17шт', price:150, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/PNS-briket-klub-258x258.png'],},

    {id:46, title:'Брикет "Пломбир на сливках" шоколадный', title_path:'PNS-briket-shok', type:'icecream',
      manufacture: 'slavica', description:'Шоколадный пломбир в большом брикете',
      form: 'briket', weight:'250гр', inbox: '17шт', price:150, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/PNS-briket-shok-258x258.png'],},

    {id:47, title:'Стакан вафельный "Полюс" черника', title_path:'Polyus_Chernika_80', type:'icecream',
      manufacture: 'slavica', description:'Сливочное мороженое с черничным джемом в вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '27шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Polyus_Chernika_80-258x258.jpg'],},

    {id:48, title:'Пластиковое ведро "Полюс" клубника', title_path:'POLYuS_plastikovoye_vedro_klubnika', type:'icecream',
      manufacture: 'slavica', description:'Сливочное мороженое с клубничным джемом в пластиковом ведерке',
      form: 'plastikovoe vedro', weight:'500гр', inbox: '5шт', price:350, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/POLYuS_plastikovoye_vedro_klubnika-258x258.jpg'],},

    {id:49, title:'Стакан вафельный "Полюс" пьяная вишня', title_path:'Polyus_Pyanaya_Vishnya_80', type:'icecream',
      manufacture: 'slavica', description:'Мороженое с вишнёвым джемом в вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '27шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Polyus_Pyanaya_Vishnya_80-258x258.jpg'],},

    {id:50, title:'Пластиковый бокал "Полюс" черрника', title_path:'Polyus_S_Chernichnim_Djemom_280-1', type:'icecream',
      manufacture: 'slavica', description:'Сливочное мороженое с черничным джемом в пластиковом бокале',
      form: 'plastikoviy bokal', weight:'280гр', inbox: '8шт', price:150, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Polyus_S_Chernichnim_Djemom_280-1-258x258.jpg'],},

    {id:51, title:'Стакан вафельный "Полюс" шоколадная крошка', title_path:'Polyus_S_Shokoladom_80', type:'icecream',
      manufacture: 'slavica', description:'Сливочное мороженое с шоколадной крошкой в вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '27шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Polyus_S_Shokoladom_80-258x258.jpg'],},

    {id:52, title:'Пластиковый бокал "Полюс" варёная сгущенка', title_path:'Polyus_S_Varyonnoiy_Sguschenkoiy_280-1', type:'icecream',
      manufacture: 'slavica', description:'Сливочное мороженое с вареным сгущенным молоком в пластиковом бокале',
      form: 'plastikoviy bokal', weight:'280гр', inbox: '8шт', price:150, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Polyus_S_Varyonnoiy_Sguschenkoiy_280-1-258x258.jpg'],},

    {id:53, title:'Стакан вафельный "Полюс" сгущёнка', title_path:'Polyus_So_Sguschonkoiy_80', type:'icecream',
      manufacture: 'slavica', description:'Сливочное мороженое с вареной сгущенкой в вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '27шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Polyus_So_Sguschonkoiy_80-258x258.jpg'],},

    {id:54, title:'Стакан вафельный "Полюс" трюфель', title_path:'Polyus_Tryufel_80', type:'icecream',
      manufacture: 'slavica', description:'Шоколадное мороженое с шоколадным топпингом в вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '27шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Polyus_Tryufel_80-258x258.jpg'],},

    {id:55, title:'Рожок "Рекорд"', title_path:'Rekord_180', type:'icecream',
      manufacture: 'slavica', description:'Двухслойное малиново-черничное мороженое в большом сахарном рожке',
      form: 'rozhok', weight:'180гр', inbox: '12шт', price:70, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Rekord_180-258x258.jpg'],},

    {id:56, title:'Торт "С любовью"', title_path:'S-LYuBOVYu', type:'icecream',
      manufacture: 'slavica', description:'Мороженое со сгущенкой и цукатами в пластиковой упаковке в виде сердца',
      form: 'tort', weight:'500гр', inbox: '4шт', price:70, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/S-LYuBOVYu-258x258.jpg'],},

    {id:57, title:'Эскимо "Сердечко"', title_path:'Serdechko_60', type:'icecream',
      manufacture: 'slavica', description:'Клубничное мороженое на палочке в форме сердечка',
      form: 'eskimo', weight:'60гр', inbox: '20шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Serdechko_60-258x258.jpg'],},

    {id:58, title:'Стакан вафельный "Шоколадка"', title_path:'Shokoladka_70', type:'icecream',
      manufacture: 'slavica', description:'Мороженое в вафельном стаканчике',
      form: 'vafelniy stakan', weight:'70гр', inbox: '27шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/stakanchiki/Shokoladka_70-258x258.jpg'],},

    {id:59, title:'Эскимо "Сырное"', title_path:'Sirnoe_65', type:'icecream',
      manufacture: 'slavica', description:'Сырное мороженое на палочке',
      form: 'eskimo', weight:'65гр', inbox: '20шт', price:20, info: 'белки, жиры и углеводы',
      images:['img/morozhenoe/slavica/Sirnoe_65-258x258.jpg'],},





    {id:60, title:'Блинчики без начинки "Гурман"', title_path:'blinchiki_bez_nachinki_Gurman_3kg', type:'freezing',
      manufacture: 'gurman', description:'Блинчики без начинки',
      form: 'bliny', weight:'3kg', inbox: '3кг', price:150, info: 'белки, жиры и углеводы',
      images:['img/zamorozka/bliny/blinchiki_bez_nachinki_Gurman_3kg.png'],},      
      
    {id:61, title:'Блинчики с клубникой "Домашние"', title_path:'blinchiki_s_klubnikoy_Domashnie_5kg', type:'freezing',
      manufacture: 'public/img/zamorozka/bliny', description:'Блинчики с клубникой',
      form: 'bliny', weight:'5кг', inbox: '5кг', price:150, info: 'белки, жиры и углеводы',
      images:['img/zamorozka/bliny/blinchiki_s_klubnikoy_Domashnie_5kg.png'],},      
      
    {id:62, title:'Блинчики с мясом "Домашние"', title_path:'blinchiki_s_myasom_Domashnie_5kg', type:'freezing',
      manufacture: 'public/img/zamorozka/bliny', description:'Блинчики с мясом',
      form: 'bliny', weight:'5кг', inbox: '5кг', price:150, info: 'белки, жиры и углеводы',
      images:['img/zamorozka/bliny/blinchiki_s_myasom_Domashnie_5kg.png'],},      
      
    {id:63, title:'Блинчики с творогом "Домашние"', title_path:'blinchiki_s_tvorogom_Domashnie_5kg', type:'freezing',
      manufacture: 'public/img/zamorozka/bliny', description:'Блинчики с ворогом',
      form: 'bliny', weight:'5кг', inbox: '5кг', price:150, info: 'белки, жиры и углеводы',
      images:['img/zamorozka/bliny/blinchiki_s_tvorogom_Domashnie_5kg.png'],},      
      
    {id:64, title:'Блинчики с вишней "Домашние"', title_path:'blinchiki_s_vishney_Domashnie_5kg', type:'freezing',
      manufacture: 'public/img/zamorozka/bliny', description:'Блинчики с вишней',
      form: 'bliny', weight:'5кг', inbox: '5кг', price:150, info: 'белки, жиры и углеводы',
      images:['img/zamorozka/bliny/blinchiki_s_vishney_Domashnie_5kg.png'],},      
      
    {id:65, title:'Булочка для гамбургера черная', title_path:'bulochka_dlya_gamburgera_chernaya', type:'freezing',
      manufacture: 'credo', description:'Булочка для гамбургера черная',
      form: 'bulochka', weight:'гр', inbox: 'кг', price:120, info: 'белки, жиры и углеводы',
      images:['img/zamorozka/credo/bulochka_dlya_gamburgera_chernaya.jpg'],},      
    
    {id:66, title:'Булочка для гамбургера с кунжутом', title_path:'bulochka_dlya_gamburgera_s_kunzhutom', type:'freezing',
      manufacture: 'credo', description:'Булочка для гамбургера с кунжутом',
      form: 'bulochka', weight:'гр', inbox: 'кг', price:150, info: 'белки, жиры и углеводы',
      images:['img/zamorozka/credo/bulochka_dlya_gamburgera_chernaya.jpg'],},      
    
    {id:67, title:'Булочка для хотдога черная', title_path:'bulochka_dlya_hotdoga_chernaya', type:'freezing',
      manufacture: 'credo', description:'Булочка для хотдога черная',
      form: 'bulochka', weight:'гр', inbox: 'кг', price:150, info: 'белки, жиры и углеводы',
      images:['img/zamorozka/credo/bulochka_dlya_hotdoga_chernaya.jpg'],},      
    
    {id:69, title:'Чизкейк черная смородина', title_path:'chizkeyk_chernaya_smorodina', type:'freezing',
      manufacture: 'credo', description:'Чизкейк черная смородина',
      form: 'chizkeyk', weight:'гр', inbox: 'кг', price:150, info: 'белки, жиры и углеводы',
      images:['img/zamorozka/credo/chizkeyk_chernaya_smorodina.jpg'],},      
    
    {id:70, title:'Чизкейк Нью-Йорк', title_path:'chizkeyk_nyuyork', type:'freezing',
      manufacture: 'credo', description:'Чизкейк Нью-Йорк',
      form: 'chizkeyk', weight:'гр', inbox: 'кг', price:150, info: 'белки, жиры и углеводы',
      images:['img/zamorozka/credo/chizkeyk_nyuyork.jpg'],},

    {id:71, title:'Чизкейк шоколадный', title_path:'chizkeyk_shokoladniy', type:'freezing',
      manufacture: 'credo', description:'Чизкейк шоколадный',
      form: 'chizkeyk', weight:'гр', inbox: 'кг', price:150, info: 'белки, жиры и углеводы',
      images:['img/zamorozka/credo/chizkeyk_shokoladniy.jpg'],},      

    {id:72, title:'Чизкейк вишневый', title_path:'chizkeyk_vishneviy', type:'freezing',
      manufacture: 'credo', description:'Чизкейк вишневый',
      form: 'chizkeyk', weight:'гр', inbox: 'кг', price:150, info: 'белки, жиры и углеводы',
      images:['img/zamorozka/credo/chizkeyk_vishneviy.jpg'],},      
    ])

  return { arr }
})