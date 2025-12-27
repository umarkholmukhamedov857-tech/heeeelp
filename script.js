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
      'cleft-sentences': {
        title: 'Cleft Sentences (Расщеплённые предложения)',
        text: `
          <p>Используются, чтобы <strong>сделать акцент</strong> на определённой части предложения.</p>

          <h3>1. It-cleft:</h3>
          <pre>
It was John who broke the window.<br>
It was in Paris that they met.<br>
It was yesterday that she called.
          </pre>

          <h3>2. Wh-cleft (What-cleft):</h3>
          <pre>
What I need is a holiday.<br>
What surprised me was his honesty.<br>
What she wants is respect.
          </pre>

          <h3>3. The reason / The thing / The place:</h3>
          <pre>
The reason I called is to invite you.<br>
The place where we met was magical.<br>
The thing that bothers me is his silence.
          </pre>

          <p>💡 Используется в устной и письменной речи для выделения важной информации.</p>
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

    window.onclick = function(event) {
      const modal = document.getElementById('grammarModal');
      if (event.target === modal) {
        closeModal();
      }
    }