const content = {
  'present-simple': {
    title: 'Present Simple',
    text: `
      <p><strong>Используется для:</strong> привычек, общих истин, расписаний.</p>
      <pre>
Утв.: I/You/We/They + V<br>
      He/She/It + V+s<br><br>
Отр.: I/You/We/They + don't + V<br>
      He/She/It + doesn't + V<br><br>
Вопр.: Do + I/you/we/they + V?<br>
      Does + he/she/it + V?
      </pre>
      <p>Примеры:<br>
      - She <strong>works</strong> every day.<br>
      - Water <strong>boils</strong> at 100°C.<br>
      - The train <strong>leaves</strong> at 6 p.m.</p>
    `
  },
  'present-continuous': {
    title: 'Present Continuous',
    text: `
      <p><strong>Используется для:</strong> действий сейчас, временных ситуаций, будущих планов (с договорённостью).</p>
      <pre>
am/is/are + V+ing

Отр.: am/is/are + not + V+ing<br>
Вопр.: Am/Is/Are + подлежащее + V+ing?
      </pre>
      <p>Примеры:<br>
      - I <strong>am reading</strong> a book.<br>
      - She <strong>is staying</strong> with friends this week.<br>
      - We <strong>are meeting</strong> John tomorrow.</p>
    `
  },
  'past-simple': {
    title: 'Past Simple',
    text: `
      <p><strong>Используется для:</strong> завершённых действий в прошлом.</p>
      <pre>
Правильные: V + -ed (worked)<br>
Неправильные: 2-я форма (go → went, see → saw)

Утв.: подлежащее + V2<br>
Отр.: did not (didn't) + V (инфинитив)<br>
Вопр.: Did + подлежащее + V?
      </pre>
      <p>Примеры:<br>
      - I <strong>watched</strong> a film.<br>
      - She <strong>didn't go</strong> to school.<br>
      - <strong>Did</strong> you <strong>see</strong> him?</p>
    `
  },
  'will-vs-going-to': {
    title: 'Will vs Going to',
    text: `
      <p><strong>Will</strong> — спонтанные решения, предсказания, обещания.<br>
      <strong>Going to</strong> — планы, намерения, очевидные будущие события.</p>
      <pre>
Will: will + V<br>
Going to: am/is/are + going to + V
      </pre>
      <p>Примеры:<br>
      - “The phone is ringing!” — “I <strong>will answer</strong> it.” (спонтанно)<br>
      - I <strong>am going to study</strong> medicine. (план)<br>
      - Look at those clouds! It <strong>is going to rain</strong>. (очевидно)</p>
    `
  },
  'can-must-should': {
    title: 'Can / Must / Should',
    text: `
      <p><strong>Can</strong> — умение, разрешение.<br>
      <strong>Must</strong> — обязанность (сильная).<br>
      <strong>Should</strong> — совет.</p>
      <pre>
После модальных глаголов — инфинитив БЕЗ to!
      </pre>
      <p>Примеры:<br>
      - I <strong>can swim</strong>.<br>
      - You <strong>must wear</strong> a seatbelt.<br>
      - You <strong>should drink</strong> more water.<br>
      - <strong>Can</strong> I borrow your pen?</p>
    `
  },
  'comparatives': {
    title: 'Comparative Degree (Сравнительная степень)',
    text: `
      <p>Используется, чтобы **сравнить двух людей/предметов**.</p>
      <h3>Правила:</h3>
      <ul>
        <li><strong>Короткие прилагательные (1-2 слога):</strong> + <strong>-er</strong><br>
            tall → taller, fast → faster</li>
        <li><strong>Длинные (3+ слога):</strong> <strong>more + прилагательное</strong><br>
            beautiful → more beautiful</li>
        <li><strong>Окончание -y:</strong> y → i + er<br>
            happy → happier, easy → easier</li>
      </ul>
      <pre>
This car is <strong>faster than</strong> that one.<br>
She is <strong>more intelligent than</strong> her brother.
      </pre>
      <p><strong>Исключения:</strong><br>
      good → better, bad → worse, far → farther/further</p>
    `
  },
  'superlative': {
    title: 'Superlative Degree (Превосходная степень)',
    text: `
      <p>Используется, чтобы сказать, что **кто-то/что-то — самый... среди всех**.</p>

      <h3>Правила образования:</h3>
      <ul>
        <li><strong>Короткие прилагательные (1-2 слога):</strong> <strong>the + прил. + -est</strong><br>
            tall → <strong>the tallest</strong>, fast → <strong>the fastest</strong></li>
        <li><strong>Длинные (3+ слога):</strong> <strong>the most + прилагательное</strong><br>
            beautiful → <strong>the most beautiful</strong></li>
        <li><strong>Окончание -y:</strong> y → i + est<br>
            happy → <strong>the happiest</strong>, easy → <strong>the easiest</strong></li>
      </ul>

      <h3>Примеры:</h3>
      <pre>
Mount Everest is <strong>the highest</strong> mountain in the world.<br>
She is <strong>the most talented</strong> singer I know.<br>
This is <strong>the easiest</strong> exercise.<br>
He is <strong>the happiest</strong> when he’s painting.
      </pre>

      <h3>Исключения:</h3>
      <pre>
good → <strong>the best</strong><br>
bad → <strong>the worst</strong><br>
far → <strong>the farthest / the furthest</strong>
      </pre>

      <h3>Важно!</h3>
      <p>Всегда используй **the** перед превосходной степенью!<br>
      ❌ She is most beautiful.<br>
      ✅ She is <strong>the most beautiful</strong>.</p>

      <p>💡 Используется с: <strong>in the world, of all, in our class, ever</strong> и т.д.</p>
    `
  },
  'present-perfect': {
    title: 'Present Perfect',
    text: `
      <p><strong>have/has + V3</strong><br>
      Используется для: опыта, недавних событий (just), действий с начала прошлого (for/since), ещё не завершённых действий.</p>
      <pre>
I have lived here for 5 years.<br>
She has just left.<br>
Have you ever been to Japan?<br>
I haven't finished my homework yet.
      </pre>
      <p><strong>Ключевые слова:</strong> already, yet, just, ever, never, for, since, so far, recently</p>
    `
  },
  'past-continuous': {
    title: 'Past Continuous',
    text: `
      <p><strong>was/were + V+ing</strong><br>
      Действие в процессе в прошлом (часто прервано Past Simple).</p>
      <pre>
I was cooking when he called.<br>
They were sleeping at midnight.<br>
While I was walking, it started to rain.
      </pre>
      <p>Также для описания атмосферы в прошлом:<br>
      - The sun was shining, birds were singing...</p>
    `
  },
  'past-perfect': {
    title: 'Past Perfect',
    text: `
      <p><strong>had + V3</strong><br>
      «Прошлое до прошлого» — действие, завершившееся до другого действия в прошлом.</p>
      <pre>
When I arrived, the train had left.<br>
She had never seen snow before that trip.<br>
After they had eaten, they went for a walk.
      </pre>
      <p>Часто используется с: <strong>after, before, by the time, already, just, never</strong></p>
    `
  },
  'first-second-cond': {
    title: '1st & 2nd Conditionals',
    text: `
      <h3>✅ First Conditional — реальное будущее</h3>
      <pre>
If + Present Simple, will + V
      </pre>
      <p>→ If it <strong>rains</strong>, we <strong>will stay</strong> home.<br>
      → If you <strong>study</strong>, you <strong>will pass</strong>.</p>

      <h3>✅ Second Conditional — нереальное / воображаемое</h3>
      <pre>
If + Past Simple, would + V
      </pre>
      <p>→ If I <strong>had</strong> a million dollars, I <strong>would travel</strong>.<br>
      → If she <strong>were</strong> here, she <strong>would help</strong> us. (were — для всех лиц!)</p>

      <p><strong>Важно:</strong> Second Conditional часто выражает вежливые просьбы:<br>
      “If you <strong>could</strong> send me the file, that <strong>would be</strong> great.”</p>
    `
  },
  'passive-simple': {
    title: 'Passive Voice (Simple)',
    text: `
      <p><strong>be (в нужном времени) + V3</strong><br>
      Используется, когда важно действие, а не исполнитель.</p>
      <pre>
Present Simple Passive: English <strong>is spoken</strong> here.<br>
Past Simple Passive: The window <strong>was broken</strong> yesterday.<br>
Future Simple Passive: The project <strong>will be finished</strong> next week.
      </pre>
      <p>Если нужно указать исполнителя — <strong>by + исполнитель</strong>:<br>
      - The book <strong>was written by</strong> Tolstoy.</p>
    `
  },
  'reported-speech-b1': {
    title: 'Reported Speech (B1)',
    text: `
      <p>Косвенная речь — передача чужих слов.</p>
      <p><strong>Сдвиг времён назад</strong> (если глагол введения в прошлом):</p>
      <pre>
“I am tired.” → He said he <strong>was</strong> tired.<br>
“I live in Paris.” → She said she <strong>lived</strong> in Paris.<br>
“I will call you.” → He said he <strong>would call</strong> me.<br>
“I can help.” → She said she <strong>could help</strong>.
      </pre>
      <p>Глаголы введения: <strong>say</strong> (без объекта), <strong>tell + объект</strong>:<br>
      - He <strong>told me</strong> (that) he was busy.</p>
    `
  },
  'all-tenses': {
    title: 'Все 12 времён английского',
    text: `
      <pre>
🔹 PRESENT:
- Simple: I work<br>
- Continuous: I am working<br>
- Perfect: I have worked<br>
- Perfect Continuous: I have been working<br><br>

🔹 PAST:
- Simple: I worked<br>
- Continuous: I was working<br>
- Perfect: I had worked<br>
- Perfect Continuous: I had been working<br><br>

🔹 FUTURE:
- Simple: I will work<br>
- Continuous: I will be working<br>
- Perfect: I will have worked<br>
- Perfect Continuous: I will have been working
      </pre>
      <p>Каждое время имеет своё значение и контекст употребления!</p>
    `
  },
  'third-conditional': {
    title: 'Third Conditional',
    text: `
      <p><strong>Сожаление или критика по поводу прошлого.</strong><br>
      Ситуация в прошлом не произошла → другого результата не было.</p>
      <pre>
If + Past Perfect, would have + V3
      </pre>
      <p>Примеры:<br>
      - If I <strong>had studied</strong> harder, I <strong>would have passed</strong> the exam.<br>
      - She <strong>would have called</strong> if she <strong>had known</strong>.<br>
      - They <strong>wouldn’t have missed</strong> the train if they <strong>had left</strong> earlier.</p>

      <p>💡 Часто используется с: <strong>I wish I had...</strong><br>
      → I wish I <strong>had listened</strong> to you.</p>
    `
  },
  'advanced-passive': {
    title: 'Advanced Passive Voice',
    text: `
      <h3>1. С модальными глаголами:</h3>
      <pre>
The work must be finished by Friday.<br>
The car might have been stolen.<br>
This project should have been completed yesterday.
      </pre>

      <h3>2. С инфинитивом (после глаголов восприятия, believe, know и др.):</h3>
      <pre>
He is believed to be innocent.<br>
She was seen leaving the building.<br>
They are known to have solved the problem.
      </pre>

      <h3>3. Impersonal Passive:</h3>
      <pre>
It is said that he is a genius. = He is said to be a genius.<br>
It was reported that the minister resigned. = The minister was reported to have resigned.
      </pre>
    `
  },
  'all-clauses': {
    title: 'All Clauses (Все типы придаточных)',
    text: `
      <p>В английском есть несколько типов придаточных предложений. Вот основные:</p>

      <h3>1. Relative Clauses (Относительные)</h3>
      <pre>
The book <strong>that you gave me</strong> is great.<br>
My aunt, <strong>who lives in Rome</strong>, is visiting.
      </pre>

      <h3>2. Adverbial Clauses (Наречные)</h3>
      <p>Отвечают на вопросы: когда? почему? при каком условии?</p>
      <pre>
<strong>When</strong> I arrived, she had left. (время)<br>
<strong>Because</strong> it was raining, we stayed home. (причина)<br>
<strong>If</strong> you study, you’ll pass. (условие)<br>
<strong>Although</strong> he’s rich, he’s unhappy. (уступка)
      </pre>

      <h3>3. Noun Clauses (Именные)</h3>
      <p>Выполняют роль подлежащего, дополнения или части сказуемого.</p>
      <pre>
I know <strong>that she is honest</strong>. (дополнение)<br>
<strong>What he said</strong> surprised me. (подлежащее)<br>
The question is <strong>whether we should go</strong>. (часть сказуемого)
      </pre>

      <p>💡 Начинаются с: <strong>that, if, whether, who, what, when, where, why, how</strong> и др.</p>
    `
  },
  'wishes': {
    title: 'Wishes (Желания и сожаления)',
    text: `
      <p>Используем <strong>wish</strong> или <strong>if only</strong> (более эмоционально), чтобы выразить сожаление или желание изменить реальность.</p>

      <h3>1. Настоящее (желаем, чтобы что-то было иначе сейчас)</h3>
      <pre>
I wish I <strong>had</strong> more free time. (но у меня его нет)<br>
She wishes she <strong>lived</strong> near the sea.<br>
He wishes he <strong>were</strong> taller. (were — для всех лиц!)
      </pre>
      <p>✅ Используем **Past Simple** (даже для глагола <em>be</em> → <strong>were</strong>).</p>

      <h3>2. Прошлое (сожаление о чём-то, что уже произошло)</h3>
      <pre>
I wish I <strong>had listened</strong> to you. (но не послушал)<br>
They wish they <strong>hadn’t spent</strong> so much money.
      </pre>
      <p>✅ Используем **Past Perfect**.</p>

      <h3>3. Будущее (раздражение или надежда на изменение)</h3>
      <pre>
I wish it <strong>would stop</strong> raining!<br>
She wishes he <strong>would call</strong> her.
      </pre>
      <p>✅ Используем **would + инфинитив** (только для других людей или ситуаций, НЕ для себя!).<br>
      ❌ I wish I would... → ✅ I wish I could...</p>

      <p>💡 <strong>If only</strong> = wish, но эмоциональнее:<br>
      → <strong>If only</strong> I had studied harder!</p>
    `
  },
  'reported-speech-b2': {
    title: 'Reported Speech (B2)',
    text: `
      <h3>1. Вопросы:</h3>
      <pre>
“Where do you live?” → He asked where I <strong>lived</strong>.<br>
“Did you see her?” → She asked if I <strong>had seen</strong> her.<br>
“What are you doing?” → He asked what I <strong>was doing</strong>.
      </pre>

      <h3>2. Приказы и просьбы:</h3>
      <pre>
“Open the door.” → He told me <strong>to open</strong> the door.<br>
“Don’t touch it!” → She told me <strong>not to touch</strong> it.<br>
“Please help me.” → He asked me <strong>to help</strong> him.
      </pre>

      <h3>3. Сдвиг времён:</h3>
      <ul>
        <li>Present Simple → Past Simple</li>
        <li>Present Continuous → Past Continuous</li>
        <li>Present Perfect → Past Perfect</li>
        <li>will → would</li>
        <li>can → could</li>
        <li>must → had to</li>
        <li>may → might</li>
      </ul>
    `
  },
  'inversion': {
    title: '🌀 Inversion (Инверсия) — B2',
    text: `
      <p><strong>Inversion</strong> — изменение порядка подлежащего и глагола для создания <em>формального, драматического или литературного</em> эффекта.</p>

      <h3>Когда используется?</h3>
      <p>После отрицательных или ограничительных наречий в начале предложения:</p>

      <ul>
        <li><strong>Never</strong> — никогда</li>
        <li><strong>Hardly / Scarcely / Barely</strong> — едва</li>
        <li><strong>Seldom / Rarely</strong> — редко</li>
        <li><strong>Not only... but also...</strong> — не только... но и...</li>
        <li><strong>Only after / Only when / Only if / Only by</strong></li>
        <li><strong>Little</strong> — мало (в значении "нисколько не знал")</li>
        <li><strong>At no time / Under no circumstances / In no way</strong></li>
      </ul>

      <h3>Формула:</h3>
      <pre>
[Отриц. наречие] + [вспомогательный глагол] + [подлежащее] + [основной глагол]
      </pre>

      <h3>Примеры:</h3>
      <pre>
Never <strong>have I seen</strong> such beauty.<br>
Hardly <strong>had she left</strong> when the phone rang.<br>
Not only <strong>did he lie</strong>, but he also stole money.<br>
Seldom <strong>do we meet</strong> people like her.<br>
Only after the exam <strong>did I realize</strong> my mistake.<br>
At no time <strong>was the door locked</strong>.<br>
Under no circumstances <strong>should you open</strong> this door.
      </pre>

      <h3>Важно!</h3>
      <p>Если в предложении нет вспомогательного глагола (как в Present/Past Simple), <strong>добавляется do/does/did</strong>:</p>
      <pre>
Rarely <strong>does she complain</strong>.<br>
Never <strong>did they apologize</strong>.
      </pre>

      <p>💡 Inversion — признак продвинутой речи. Используй в эссе, официальных текстах, но не в чате с друзьями!</p>
    `
  },

  // ——— НОВЫЕ ТЕМЫ ———

  'some-any-no': {
    title: 'Some / Any / No',
    text: `
      <p><strong>Some</strong> — утвердительные предложения, просьбы, предложения.<br>
      <strong>Any</strong> — вопросы и отрицания.<br>
      <strong>No</strong> — отрицание (равносильно "not any").</p>
      <pre>
I have <strong>some</strong> money.<br>
Do you have <strong>any</strong> questions?<br>
She doesn’t have <strong>any</strong> friends. = She has <strong>no</strong> friends.<br>
Would you like <strong>some</strong> tea? (предложение)
      </pre>
      <p>💡 <strong>Some</strong> в вопросах — если ожидаем "да":<br>
      - Are there <strong>some</strong> good seats left? (надеюсь, да)</p>
    `
  },
  'quantifiers-a2': {
    title: 'A little / A few / Much / Many',
    text: `
      <p><strong>Uncountable nouns</strong> → a little / little / much<br>
      <strong>Countable nouns</strong> → a few / few / many</p>
      <pre>
I have <strong>a little</strong> time. (немного, но достаточно)<br>
There’s <strong>little</strong> hope. (почти нет → негатив)<br>
She has <strong>a few</strong> friends. (несколько, но есть)<br>
He has <strong>few</strong> chances. (почти нет → негатив)
      </pre>
      <p><strong>Much / many</strong> — в основном в вопросах и отрицаниях:<br>
      - Do you have <strong>much</strong> homework?<br>
      - There aren’t <strong>many</strong> people here.</p>
      <p>В утвердительных — обычно <strong>a lot of</strong>.</p>
    `
  },
  'prep-time': {
    title: 'Prepositions of Time',
    text: `
      <ul>
        <li><strong>at</strong> — точное время: at 5 p.m., at noon, at Christmas (в период праздника)</li>
        <li><strong>on</strong> — дни и даты: on Monday, on 5th June, on my birthday</li>
        <li><strong>in</strong> — месяцы, годы, века, части дня: in July, in 2025, in the morning</li>
      </ul>
      <pre>
We meet <strong>at</strong> 7.<br>
She was born <strong>on</strong> a Tuesday.<br>
He’ll retire <strong>in</strong> 2030.
      </pre>
      <p>✅ <strong>in the morning / afternoon / evening</strong><br>
      ❌ BUT: <strong>at night</strong> — не *in the night*</p>
    `
  },
  'prep-place': {
    title: 'Prepositions of Place',
    text: `
      <ul>
        <li><strong>at</strong> — точка: at the door, at the bus stop</li>
        <li><strong>in</strong> — внутри: in the room, in the car, in the box</li>
        <li><strong>on</strong> — поверхность: on the table, on the wall, on the bus (в транспорте!)</li>
      </ul>
      <pre>
She’s waiting <strong>at</strong> the station.<br>
The keys are <strong>in</strong> my pocket.<br>
There’s a poster <strong>on</strong> the wall.
      </pre>
      <p>💡 <strong>in the car</strong> vs <strong>on the bus/train/plane</strong></p>
    `
  },
  'prep-movement': {
    title: 'Prepositions of Movement',
    text: `
      <ul>
        <li><strong>to</strong> — направление: go to school, drive to Paris</li>
        <li><strong>into</strong> — внутрь: She walked into the room.</li>
        <li><strong>onto</strong> — на поверхность: He jumped onto the table.</li>
        <li><strong>out of</strong> — изнутри: They ran out of the building.</li>
        <li><strong>through</strong> — сквозь: We walked through the forest.</li>
        <li><strong>across</strong> — через (поверхность): swim across the river</li>
        <li><strong>over</strong> — над (или через препятствие): jump over the fence</li>
        <li><strong>under</strong> — под: crawl under the bridge</li>
      </ul>
    `
  },
  'question-tags': {
    title: 'Question Tags',
    text: `
      <p>Короткий вопрос в конце утверждения. Используется для подтверждения.</p>
      <pre>
You like coffee, <strong>don’t you</strong>?<br>
She isn’t coming, <strong>is she</strong>?<br>
They’ve left, <strong>haven’t they</strong>?
      </pre>
      <p><strong>Правило:</strong> если основное предложение утвердительное → тег отрицательный, и наоборот.</p>
      <p>Особые случаи:<br>
      - I am → <strong>aren’t I</strong>?<br>
      - Let’s → <strong>shall we</strong>?<br>
      - Imperative → <strong>will you</strong>? (Open the window, will you?)</p>
    `
  },
  'infinitive': {
    title: 'Infinitive & too/enough',
    text: `
      <h3>1. Инфинитив с to</h3>
      <pre>
I want <strong>to learn</strong> English.<br>
She decided <strong>to leave</strong>.
      </pre>
      <p>После: want, need, decide, hope, plan, promise, agree и др.</p>

      <h3>2. too + прил. + to + V</h3>
      <pre>
It’s <strong>too cold to swim</strong>. (слишком холодно → невозможно плавать)
      </pre>

      <h3>3. enough + прил./сущ. + to + V</h3>
      <pre>
She’s <strong>old enough to drive</strong>.<br>
He has <strong>enough money to buy</strong> a car.
      </pre>
    `
  },
  'ing-form': {
    title: '-ing Form (Gerund)',
    text: `
      <p>Используется как существительное или после определённых глаголов.</p>
      <pre>
I enjoy <strong>reading</strong>.<br>
She avoids <strong>talking</strong> to him.<br>
He’s interested in <strong>learning</strong> languages.
      </pre>
      <p><strong>Глаголы + -ing</strong>: enjoy, avoid, mind, suggest, consider, finish, miss и др.<br>
      <strong>После предлогов</strong> — всегда -ing: interested in, good at, afraid of и т.д.</p>
      <p>Сравните:<br>
      - I like <strong>to swim</strong>. (в общем)<br>
      - I like <strong>swimming</strong>. (как хобби)</p>
    `
  },
  'modals-basic': {
    title: 'Must / Have to / Mustn’t / Needn’t',
    text: `
      <p><strong>Must</strong> — личное мнение, внутренняя обязанность.<br>
      <strong>Have to</strong> — внешнее правило, необходимость.<br>
      <strong>Mustn’t</strong> — запрет.<br>
      <strong>Needn’t</strong> — отсутствие необходимости (≠ don’t have to).</p>
      <pre>
I <strong>must</strong> call my mom. (я сам так решил)<br>
I <strong>have to</strong> wear a uniform. (правило на работе)<br>
You <strong>mustn’t</strong> smoke here. (запрещено!)<br>
You <strong>needn’t</strong> come early. (не обязательно — но можешь)
      </pre>
      <p>💡 <strong>Needn’t have + V3</strong> — сделали, но не нужно было:<br>
      - You <strong>needn’t have bought</strong> flowers.</p>
    `
  },
  'could-be-able-to': {
    title: 'Could / Be able to',
    text: `
      <p><strong>Could</strong> — общая способность в прошлом.<br>
      <strong>Be able to</strong> — конкретное достижение (особенно в Past/Future).</p>
      <pre>
When I was young, I <strong>could run</strong> fast. (общее умение)<br>
Yesterday I <strong>was able to fix</strong> the car. (смог конкретно)<br>
I <strong>will be able to help</strong> you tomorrow. (future — only "be able to")
      </pre>
      <p>❌ Нет <strong>could + инфинитив</strong> в будущем!<br>
      ✅ I <strong>will be able to</strong> do it.</p>
    `
  },
  'all-pronouns': {
    title: 'All / Both / Neither / Either / None',
    text: `
      <pre>
<strong>All</strong> students passed. (3+)<br>
<strong>Both</strong> sisters are doctors. (2)<br>
<strong>Neither</strong> option is good. (ни один из двух)<br>
<strong>Either</strong> answer is correct. (любой из двух)<br>
<strong>None</strong> of the guests arrived. (ни один из многих)
      </pre>
      <p>✅ <strong>Neither of them</strong> knows.<br>
      ✅ <strong>None of us</strong> has seen it.</p>
      <p>💡 <strong>Neither... nor...</strong> / <strong>Either... or...</strong><br>
      - <strong>Neither</strong> John <strong>nor</strong> Mary came.</p>
    `
  },
  'possessive': {
    title: 'Possessive (Притяжательные формы)',
    text: `
      <h3>1. ’s — для людей, животных, групп</h3>
      <pre>
my brother<strong>’s</strong> car<br>
the dog<strong>’s</strong> tail<br>
someone<strong>’s</strong> idea
      </pre>
      <h3>2. of + существительное — для неодушевлённых</h3>
      <pre>
the roof <strong>of the house</strong><br>
the name <strong>of the book</strong>
      </pre>
      <h3>3. Притяжательные местоимения</h3>
      <pre>
my, your, his, her, its, our, their → <strong>mine, yours, his, hers, ours, theirs</strong>
      </pre>
      <p>✅ This book is <strong>hers</strong>.<br>
      ❌ This is <strong>her book</strong>. → Это не притяжательное местоимение, а определение.</p>
    `
  },
  'relative-clauses': {
    title: 'Relative Clauses (Относительные придаточные)',
    text: `
      <h3>1. Defining (определяющие) — без запятых</h3>
      <pre>
The man <strong>who lives next door</strong> is a doctor.<br>
The book <strong>that you gave me</strong> is great.<br>
The city <strong>where I was born</strong> is small.
      </pre>
      <p>Кто/что/где/когда/почему → who / which / that / where / when / why</p>

      <h3>2. Non-defining (неопределяющие) — с запятыми</h3>
      <pre>
My brother, <strong>who lives in London</strong>, is visiting us.
      </pre>
      <p>💡 В неопределяющих нельзя использовать <strong>that</strong> и нельзя опускать союз.</p>
    `
  },
  'linking-words-b1': {
    title: 'Linking Words (B1)',
    text: `
      <h3>Причина:</h3> because, since, as, because of + noun<br>
      <h3>Следствие:</h3> so, therefore, as a result<br>
      <h3>Противопоставление:</h3> but, although, though, even though, however<br>
      <h3>Добавление:</h3> and, also, moreover, in addition<br>
      <h3>Пример:</h3> for example, for instance<br>
      <h3>Время:</h3> after, before, when, while, as soon as<br>

      <pre>
She stayed home <strong>because</strong> she was sick.<br>
He’s very talented; <strong>however</strong>, he’s lazy.<br>
<strong>Although</strong> it was raining, we went out.
      </pre>
    `
  },
  'mixed-conditionals': {
    title: 'Wishes & Mixed Conditionals',
    text: `
      <h3>1. Wishes</h3>
      <pre>
Present: I wish I <strong>had</strong> more time. (но у меня нет)<br>
Past: I wish I <strong>had studied</strong> harder. (но не учился)<br>
Future: I wish it <strong>would stop</strong> raining. (раздражение)
      </pre>

      <h3>2. Mixed Conditionals</h3>
      <p>Смешение времён: причина в прошлом → результат в настоящем.</p>
      <pre>
If I <strong>had studied</strong> harder (в прошлом),<br>
I <strong>would be</strong> a doctor now (сейчас).
      </pre>
      <p>Или наоборот:<br>
      If I <strong>were</strong> taller (сейчас),<br>
      I <strong>would have become</strong> a model (в прошлом).</p>
    `
  },
  'modals-probability': {
    title: 'May / Might / Could (Probability)',
    text: `
      <p>Используются для выражения **возможности** (не разрешения!).</p>
      <pre>
It <strong>might rain</strong> later. (возможно)<br>
She <strong>could be</strong> at home. (может быть)<br>
He <strong>may know</strong> the answer. (возможно)
      </pre>
      <p>✅ Все три — почти взаимозаменяемы (might = чуть менее вероятно).<br>
      ❌ Не используются в вопросах о возможности:<br>
      → <strong>Do you think it will rain?</strong> (не "May it rain?")</p>
      <p>Для прошлого: <strong>might/could have + V3</strong><br>
      - She <strong>might have missed</strong> the bus.</p>
    `
  },
  'should-ought-to': {
    title: 'Should / Ought to',
    text: `
      <p>Оба выражают **совет, рекомендацию, моральную обязанность**.</p>
      <pre>
You <strong>should see</strong> a doctor.<br>
We <strong>ought to help</strong> them.
      </pre>
      <p>💡 <strong>Ought to</strong> формальнее и требует <strong>to</strong>!<br>
      ❌ You ought see → ✅ You ought <strong>to see</strong></p>
      <p>Отрицание:<br>
      - You <strong>shouldn’t</strong> smoke.<br>
      - You <strong>ought not to</strong> lie.</p>
    `
  },
  'shall-will': {
    title: 'Shall / Will',
    text: `
      <p><strong>Will</strong> — будущее время, решения, предсказания (все лица).<br>
      <strong>Shall</strong> — устаревшее, но используется в вопросах I/we для предложений:</p>
      <pre>
<strong>Shall I</strong> open the window?<br>
<strong>Shall we</strong> go for a walk?
      </pre>
      <p>В официальных документах: "The tenant shall pay rent..." (обязанность).</p>
      <p>В разговорной речи: <strong>will</strong> для всех.</p>
    `
  },
  'linking-words-b2': {
    title: 'Advanced Linking Words (C1)',
    text: `
      <h3>Contrast:</h3> nevertheless, nonetheless, whereas, while (в значении "в то время как")<br>
      <h3>Cause/Effect:</h3> consequently, thus, hence, due to, owing to<br>
      <h3>Adding:</h3> furthermore, additionally, not to mention<br>
      <h3>Emphasis:</h3> indeed, in fact, as a matter of fact<br>
      <h3>Example:</h3> namely, such as, particularly<br>

      <pre>
He’s very young; <strong>nevertheless</strong>, he’s very experienced.<br>
She failed the test; <strong>consequently</strong>, she must retake it.<br>
I enjoy sports, <strong>particularly</strong> tennis.
      </pre>
    `
  },
  'irregular-verbs': {
    title: 'Irregular Verbs (Common)',
    text: `
      <pre>
be → was/were → been<br>
go → went → gone<br>
have → had → had<br>
do → did → done<br>
see → saw → seen<br>
take → took → taken<br>
make → made → made<br>
come → came → come<br>
know → knew → known<br>
get → got → got/gotten<br>
give → gave → given<br>
find → found → found<br>
think → thought → thought<br>
tell → told → told<br>
become → became → become<br>
leave → left → left<br>
feel → felt → felt<br>
bring → brought → brought<br>
begin → began → begun<br>
keep → kept → kept
      </pre>
      <p>💡 Запоминайте в трёх формах: Infinitive → Past Simple → Past Participle</p>
    `
  }
};

function openModal(key) {
  const modal = document.getElementById('grammarModal');
  const title = document.getElementById('modalTitle');
  const text = document.getElementById('modalText');
  
  if (!content[key]) return;
  
  title.innerText = content[key].title;
  text.innerHTML = content[key].text;
  
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('grammarModal').classList.remove('active');
}

// Закрытие кликом вне модального окна
window.onclick = function(event) {
  const modal = document.getElementById('grammarModal');
  if (event.target === modal) {
    closeModal();
  }
};

// 🔥 Закрытие по нажатию клавиши Esc
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const modal = document.getElementById('grammarModal');
    if (modal && modal.classList.contains('active')) {
      closeModal();
    }
  }
});
