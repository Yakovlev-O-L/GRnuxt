import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProducts = defineStore('products', () => {
  const arr=ref([

    {id:1, title:'Косичка "Советский" пломбир', type:'icecream',
      description:'Сливочный пломбир крем-брюле в форме косички, в экономичной упаковке',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Советский_коса_пломб-258x258.jpg.jpg'],},
    
    {id:2, title:'Косичка "Советский" шоколад', type:'icecream',
      description:'Шоколадный пломбир в форме косички, в экономичной упаковке',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Советский_коса_шок-258x258.jpg.jpg'],},
    
    {id:3, title:'Рожок "Американец"', type:'icecream',
      description:'Двухслойное, клубничное и ванильное мороженое с клубничным джемом в сахарном рожке',
      form: 'rozhok', weight:'110гр', inbox: '24шт', price:50, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Amerikanec_110-258x258.jpg.jpg'],},
      
    {id:4, title:'Фруктовый лёд "Арбуз"', type:'icecream',
      description:'Мороженое на палочке',
      form: 'fruktoviy led', weight:'70гр', inbox: '?шт', price:40, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Arbuz_70-258x258.jpg.jpg'],},

    {id:5, title:'Рожок "Азарт киви"', type:'icecream',
      description:'Мороженое с джемом киви в вафельном сахарном рожке',
      form: 'rozhok', weight:'140гр', inbox: '14шт', price:80, compound: 'белки, жиры и углеводы',
      images:['img\clavica\AZART_kivi-258x258.jpg.jpg'],},

    {id:6, title:'Рожок "Азарт клубника"', type:'icecream',
      description:'Мороженое с клубничным джемом в вафельном сахарном рожке',
      form: 'rozhok', weight:'140гр', inbox: '14шт', price:80, compound: 'белки, жиры и углеводы',
      images:['img\clavica\AZART_klubnika-258x258.jpg.jpg'],},

    {id:7, title:'Рожок "Азарт шоколад"', type:'icecream',
      description:'Шоколадное мороженое с шоколадным топпингом в вафельном сахарном рожке',
      form: 'rozhok', weight:'140гр', inbox: '14шт', price:80, compound: 'белки, жиры и углеводы',
      images:['img\clavica\AZART_shokolad-258x258.jpg.jpg'],},

    {id:8, title:'Рожок "Бедный еврей"', type:'icecream',
      description:'Шоколадное и черносливовое мороженое с арахисом, шоколадом и черносливовым джемом в сахарном рожке',
      form: 'rozhok', weight:'110гр', inbox: '24шт', price:60, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Bednyi_Evrey_110-258x258.jpg.jpg'],},

    {id:9, title:'Вафельный стаканчик "Берёзка"', type:'icecream',
      description:'Мороженое в вафельном стаканчике',
      form: 'vafelniy stakan', weight:'70гр', inbox: '27шт', price:30, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Berezka_70-258x258.jpg.jpg'],},

    {id:10, title:'Бумажный стаканчик "Лимон"', type:'icecream',
      description:'Лимонный десерт в бумажном стаканчике',
      form: 'bumazhniy stakan', weight:'100гр', inbox: '27шт', price:30, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Desert_Limon_80-258x258.jpg.jpg'],},

    {id:11, title:'Эскимо "Двойной шоколад"', type:'icecream',
      description:'Шоколадное мороженое на палочке в шоколадной глазури',
      form: 'eskimo', weight:'70гр', inbox: '?шт', price:40, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Dvoynoy_Shokolad_70-258x258.jpg.jpg'],},

    {id:12, title:'Вафельный стакан "Фисташка"', type:'icecream',
      description:'Фисташковое мороженое с брусничным топпингом в плоском вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '30шт', price:20, compound: 'белки, жиры и углеводы',
      images:['img\clavica\fistashka-258x258.jpg.jpg'],},

    {id:13, title:'Эскимо "Фруктолето" Арбуз-Киви', type:'icecream',
      description:'Молочное мороженое арбуз-киви',
      form: 'vafelniy stakan', weight:'70гр', inbox: '24шт', price:20, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Fruktoleto_Arbuz_Kivi_70г-1-258x258.jpg.jpg'],},

    {id:14, title:'Стакан "Фруктолето" Лесные ягоды', type:'icecream',
      description:'Мороженое ЛЕСНЫЕ ЯГОДЫ в бумажный стаканчик',
      form: 'bumazhniy stakan', weight:'100гр', inbox: '?шт', price:20, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Fruktoleto_Lesnye_Yagodi_100-258x258.jpg.jpg'],},

    {id:15, title:'Рожок "Хохол"', type:'icecream',
      description:'Двухслойное, банановое и со вкусом жевательной резинки мороженое в сахарном рожке',
      form: 'rozhok', weight:'110гр', inbox: '24шт', price:60, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Hohol_110-258x258.jpg.jpg'],},

    {id:16, title:'Вафельный стакан "Карамелька"', type:'icecream',
      description:'Мороженое крем-брюле с соленой карамелью в плоском вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '30шт', price:20, compound: 'белки, жиры и углеводы',
      images:['img\clavica\karamelka-258x258.jpg.jpg'],},

    {id:17, title:'Вафельный стакан "Клубничка"', type:'icecream',
      description:'Мороженое с клубничным топпингом в плоском вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '30шт', price:20, compound: 'белки, жиры и углеводы',
      images:['img\clavica\klubnichka-258x258.jpg.jpg'],},

    {id:18, title:'Фруктовый лёд "Crazy Kola"', type:'icecream',
      description:'Фруктовый лед со вкусом колы',
      form: 'fruktoviy led', weight:'70гр', inbox: '24шт', price:20, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Krazy_Kola_70-258x258.jpg.jpg'],},

    {id:19, title:'Фруктовый лёд "Crazy Kola"', type:'icecream',
      description:'Фруктовый лед со вкусом колы',
      form: 'fruktoviy led', weight:'85гр', inbox: '?шт', price:20, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Krazy_Kola_85-258x258.jpg.jpg'],},

    {id:20, title:'Эскимо "MARK"', type:'icecream',
      description:'Мороженое в шоколадной глазури с кунжутом',
      form: 'eskimo', weight:'55гр', inbox: '24шт', price:40, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Mark_55-258x258.jpg.jpg'],},

    {id:21, title:'Эскимо "MARK" Апельсин', type:'icecream',
      description:'Апельсиновое мороженое в апельсиновой глазури с кукурузной крошкой',
      form: 'eskimo', weight:'55гр', inbox: '24шт', price:40, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Mark_Apelsin_Apelsin_55-258x258.jpg.jpg'],},

    {id:22, title:'Эскимо "MARK" Киви', type:'icecream',
      description:'Мороженое киви в глазури киви с кукурузной крошкой',
      form: 'eskimo', weight:'55гр', inbox: '24шт', price:40, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Mark_Kivi_Kivi_55-258x258.jpg.jpg'],},

    {id:23, title:'Стакан "Настроение" Чернослив', type:'icecream',
      description:'Мороженое с черносливовым джемом в большом вафельном стаканчике',
      form: 'vafelniy stakan', weight:'120гр', inbox: '20шт', price:30, compound: 'белки, жиры и углеводы',
      images:['img\clavica\nastroenie_120_chernosliv-258x258.jpg.jpg'],},

    {id:24, title:'Стакан "Настроение" Клубника', type:'icecream',
      description:'Мороженое с клубничным джемом в большом вафельном стаканчике',
      form: 'vafelniy stakan', weight:'120гр', inbox: '20шт', price:30, compound: 'белки, жиры и углеводы',
      images:['img\clavica\nastroenie_120_klubnika-258x258.jpg.jpg'],},

    {id:25, title:'Косичка "Настроение" Брусника', type:'icecream',
      description:'Мороженое с брусничным джемом в форме косички',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, compound: 'белки, жиры и углеводы',
      images:['img\clavica\NASTROYeNIYe_brusnika-258x258.jpg.jpg'],},

    {id:26, title:'Косичка "Настроение" Киви', type:'icecream',
      description:'Мороженое с джемом киви в форме косички',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, compound: 'белки, жиры и углеводы',
      images:['img\clavica\NASTROYeNIYe_kivi-258x258.jpg.jpg'],},

    {id:27, title:'Косичка "Настроение" Клубника', type:'icecream',
      description:'Мороженое с клубничным джемом в форме косички',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, compound: 'белки, жиры и углеводы',
      images:['img\clavica\NASTROYeNIYe_klubnika-258x258.jpg.jpg'],},

    {id:28, title:'Косичка "Настроение" Манго', type:'icecream',
      description:'Мороженое с джемом манго в форме косички',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, compound: 'белки, жиры и углеводы',
      images:['img\clavica\NASTROYeNIYe_mango-258x258.jpg.jpg'],},

    {id:29, title:'Косичка "Настроение" Сгущёнка', type:'icecream',
      description:'Мороженое с вареным сгущенным молоком в форме косички',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, compound: 'белки, жиры и углеводы',
      images:['img\clavica\NASTROYeNIYe_sgushchenka1-258x258.jpg.jpg'],},

    {id:30, title:'Косичка "Настроение" Трюфель', type:'icecream',
      description:'Мороженое с шоколадной крошкой и шоколадным топпингом в форме косички',
      form: 'kosichka', weight:'500гр', inbox: '8шт', price:200, compound: 'белки, жиры и углеводы',
      images:['img\clavica\NASTROYeNIYe_tryufel-258x258.jpg.jpg'],},

    {id:31, title:'Эскимо "Обамка"', type:'icecream',
      description:'Шоколадное мороженое в шоколадной глазури',
      form: 'eskimo', weight:'60гр', inbox: '24шт', price:40, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Obamka_60-258x258.jpg.jpg'],},

    {id:32, title:'Фруктовый лёд "Океан"', type:'icecream',
      description:'Фруктовый лед',
      form: 'fruktoviy led', weight:'70гр', inbox: '?шт', price:20, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Okean_70-258x258.jpg.jpg'],},

    {id:33, title:'Эскимо "Ореховое"', type:'icecream',
      description:'Эскимо в шоколадной глазури с орехами',
      form: 'eskimo', weight:'60гр', inbox: '20шт', price:40, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Orehovoe_60-258x258.jpg.jpg'],},

    {id:34, title:'Эскимо "Орлёнок"', type:'icecream',
      description:'Сливочное мороженое в шоколадной глазури',
      form: 'eskimo', weight:'60гр', inbox: '24шт', price:40, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Orlenok_60-258x258.jpg.jpg'],},

    {id:35, title:'Эскимо "Панда"', type:'icecream',
      description:'Двухслойное мороженое на палочке',
      form: 'eskimo', weight:'60гр', inbox: '24шт', price:30, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Panda_60-258x258.jpg.jpg'],},

    {id:36, title:'Эскимо "Панда"', type:'icecream',
      description:'Двухслойное мороженое на палочке',
      form: 'eskimo', weight:'60гр', inbox: '24шт', price:30, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Panda_60-258x258.jpg.jpg'],},

    {id:37, title:'Бумажный стакан "Пломбир на Сливках"', type:'icecream',
      description:'Пломбир в бумажном стаканчике',
      form: 'bumazhniy stakan', weight:'80гр', inbox: '27шт', price:20, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Plombir_Na_Slivkah_80-1-258x258.jpg.jpg'],},

    {id:38, title:'Эскимо "Пломбир на сливках"', type:'icecream',
      description:'Пломбир на палочке в пергаменте',
      form: 'eskimo', weight:'80гр', inbox: '28шт', price:30, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Plombir_Na_Slivkah_80-2-258x258.jpg.jpg'],},

    {id:39, title:'Стакан вафельный "Пломбир на сливках"', type:'icecream',
      description:'Пломбир в вафельном стаканчике',
      form: 'vafelniy stakan', weight:'80гр', inbox: '27шт', price:20, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Plombir_Na_Slivkah_80-258x258.jpg.jpg'],},

    {id:40, title:'Рожок "Пломбтр на сливках"', type:'icecream',
      description:'Пломбир в вафельном сахарном рожке с шоколадной глазурью',
      form: 'rozhok', weight:'100гр', inbox: '20шт', price:50, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Plombir_Na_Slivkah_Rojok_100-258x258.jpg.jpg'],},

    {id:41, title:'Рожок "Пломбтр на сливках" шоколадный', type:'icecream',
      description:'Шоколадный пломбир в вафельном сахарном рожке с шоколадной глазурь',
      form: 'rozhok', weight:'100гр', inbox: '20шт', price:50, compound: 'белки, жиры и углеводы',
      images:['img\clavica\Plombir_Na_Slivkah_Rojok_shok_100_-258x258.jpg.jpg'],},
  ])

  return { arr }
})