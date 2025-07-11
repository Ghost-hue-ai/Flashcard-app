const spanishSentences = [
    { id: 1, sentence: "Hola, ¿cómo estás?", translation: "Hello, how are you?", category: "Greetings", choices: ["Hello, how are you?", "Goodbye, see you later.", "Good morning, my friend."] },
    { id: 2, sentence: "Me llamo Carlos.", translation: "My name is Carlos.", category: "Introductions", choices: ["My name is Carlos.", "I am from Spain.", "Nice to meet you."] },
    { id: 3, sentence: "¿Dónde está el baño?", translation: "Where is the bathroom?", category: "Directions", choices: ["Where is the bathroom?", "How much is this?", "Can I help you?"] },
    { id: 4, sentence: "Quiero una taza de café.", translation: "I want a cup of coffee.", category: "Food & Drink", choices: ["I want a cup of coffee.", "I need water.", "Do you have tea?"] },
    { id: 5, sentence: "Hace mucho calor hoy.", translation: "It's very hot today.", category: "Weather", choices: ["It's very hot today.", "It's raining now.", "It's cold outside."] },
    { id: 6, sentence: "Estoy aprendiendo español.", translation: "I am learning Spanish.", category: "Learning", choices: ["I am learning Spanish.", "I speak English.", "I understand a little."] },
    { id: 7, sentence: "¿Puedes ayudarme?", translation: "Can you help me?", category: "Requests", choices: ["Can you help me?", "Thank you very much.", "Excuse me, please."] },
    { id: 8, sentence: "Voy al supermercado.", translation: "I am going to the supermarket.", category: "Daily Life", choices: ["I am going to the supermarket.", "I am going home.", "I am going to work."] },
    { id: 9, sentence: "Tengo dos hermanos.", translation: "I have two brothers.", category: "Family", choices: ["I have two brothers.", "I have one sister.", "I don't have siblings."] },
    { id: 10, sentence: "¿Qué hora es?", translation: "What time is it?", category: "Time", choices: ["What time is it?", "When is the meeting?", "Is it late?"] },
    { id: 11, sentence: "La casa es muy bonita.", translation: "The house is very beautiful.", category: "Descriptions", choices: ["The house is very beautiful.", "The car is old.", "The book is interesting."] },
    { id: 12, sentence: "Me gusta leer libros.", translation: "I like reading books.", category: "Hobbies", choices: ["I like reading books.", "I enjoy watching movies.", "I love to travel."] },
    { id: 13, sentence: "¿Dónde trabajas?", translation: "Where do you work?", category: "Work", choices: ["Where do you work?", "What is your profession?", "Do you have a job?"] },
    { id: 14, sentence: "Hoy es lunes.", translation: "Today is Monday.", category: "Days", choices: ["Today is Monday.", "Tomorrow is Tuesday.", "Yesterday was Sunday."] },
    { id: 15, sentence: "Estoy cansado.", translation: "I am tired.", category: "Feelings", choices: ["I am tired.", "I am happy.", "I am sad."] },
    { id: 16, sentence: "¿Quieres ir al cine?", translation: "Do you want to go to the cinema?", category: "Invitations", choices: ["Do you want to go to the cinema?", "Shall we eat dinner?", "Let's go for a walk."] },
    { id: 17, sentence: "El perro es muy amigable.", translation: "The dog is very friendly.", category: "Animals", choices: ["The dog is very friendly.", "The cat is sleeping.", "I have a pet."] },
    { id: 18, sentence: "¿Cuánto cuesta esto?", translation: "How much does this cost?", category: "Shopping", choices: ["How much does this cost?", "Can I pay with card?", "Is there a discount?"] },
    { id: 19, sentence: "Necesito una medicina.", translation: "I need medicine.", category: "Health", choices: ["I need medicine.", "I feel sick.", "Call a doctor."] },
    { id: 20, sentence: "Vamos a la playa.", translation: "Let's go to the beach.", category: "Leisure", choices: ["Let's go to the beach.", "Let's go to the park.", "Let's go swimming."] },
    { id: 21, sentence: "Tengo hambre.", translation: "I am hungry.", category: "Feelings", choices: ["I am hungry.", "I am thirsty.", "I am full."] },
    { id: 22, sentence: "¿Cuál es tu comida favorita?", translation: "What is your favorite food?", category: "Food & Drink", choices: ["What is your favorite food?", "Do you like this food?", "Can I order now?"] },
    { id: 23, sentence: "El libro está en la mesa.", translation: "The book is on the table.", category: "Objects", choices: ["The book is on the table.", "The keys are in the bag.", "The phone is charging."] },
    { id: 24, sentence: "Mañana es un nuevo día.", translation: "Tomorrow is a new day.", category: "Time", choices: ["Tomorrow is a new day.", "Today is special.", "Yesterday was difficult."] },
    { id: 25, sentence: "Me gusta mucho la música.", translation: "I really like music.", category: "Hobbies", choices: ["I really like music.", "I prefer silence.", "I enjoy dancing."] },
    { id: 26, sentence: "¿Hablas inglés?", translation: "Do you speak English?", category: "Language", choices: ["Do you speak English?", "Do you understand Spanish?", "What language do you speak?"] },
    { id: 27, sentence: "Estoy en casa.", translation: "I am home.", category: "Location", choices: ["I am home.", "I am at work.", "I am at school."] },
    { id: 28, sentence: "Llueve mucho.", translation: "It's raining a lot.", category: "Weather", choices: ["It's raining a lot.", "It's sunny.", "It's snowing."] },
    { id: 29, sentence: "Necesito ayuda con esto.", translation: "I need help with this.", category: "Requests", choices: ["I need help with this.", "Can you explain it?", "I can do it myself."] },
    { id: 30, sentence: "Vamos a cenar.", translation: "Let's go to dinner.", category: "Food & Drink", choices: ["Let's go to dinner.", "Let's have breakfast.", "Let's have lunch."] },
    { id: 31, sentence: "Mi color favorito es el azul.", translation: "My favorite color is blue.", category: "Descriptions", choices: ["My favorite color is blue.", "I like red.", "Green is nice."] },
    { id: 32, sentence: "Tengo un coche nuevo.", translation: "I have a new car.", category: "Possessions", choices: ["I have a new car.", "I want a bike.", "My car is old."] },
    { id: 33, sentence: "¿Puedes repetirlo, por favor?", translation: "Can you repeat that, please?", category: "Requests", choices: ["Can you repeat that, please?", "Speak slower.", "Say it again."] },
    { id: 34, sentence: "Voy a dormir.", translation: "I am going to sleep.", category: "Daily Life", choices: ["I am going to sleep.", "I am waking up.", "I am resting."] },
    { id: 35, sentence: "El sol es brillante.", translation: "The sun is bright.", category: "Weather", choices: ["The sun is bright.", "The moon is full.", "The stars are visible."] },
    { id: 36, sentence: "Quiero aprender a cocinar.", translation: "I want to learn to cook.", category: "Learning", choices: ["I want to learn to cook.", "I want to learn to sing.", "I want to learn to paint."] },
    { id: 37, sentence: "¿Hay un banco cerca?", translation: "Is there a bank nearby?", category: "Directions", choices: ["Is there a bank nearby?", "Where is the post office?", "How do I get to the station?"] },
    { id: 38, sentence: "Mi cumpleaños es en agosto.", translation: "My birthday is in August.", category: "Time", choices: ["My birthday is in August.", "My anniversary is in July.", "I was born in May."] },
    { id: 39, sentence: "Ella es mi amiga.", translation: "She is my friend.", category: "Relationships", choices: ["She is my friend.", "He is my brother.", "They are my family."] },
    { id: 40, sentence: "Estoy leyendo un buen libro.", translation: "I am reading a good book.", category: "Hobbies", choices: ["I am reading a good book.", "I am watching TV.", "I am listening to music."] },
    { id: 41, sentence: "Hace frío.", translation: "It's cold.", category: "Weather", choices: ["It's cold.", "It's warm.", "It's windy."] },
    { id: 42, sentence: "Me duele la cabeza.", translation: "My head hurts.", category: "Health", choices: ["My head hurts.", "My stomach aches.", "I have a fever."] },
    { id: 43, sentence: "¿A qué hora abren?", translation: "What time do they open?", category: "Shopping", choices: ["What time do they open?", "What time do they close?", "Is it open now?"] },
    { id: 44, sentence: "Necesito un taxi.", translation: "I need a taxi.", category: "Transportation", choices: ["I need a taxi.", "I need a bus.", "I need a ride."] },
    { id: 45, sentence: "El concierto fue increíble.", translation: "The concert was amazing.", category: "Leisure", choices: ["The concert was amazing.", "The movie was boring.", "The play was interesting."] },
    { id: 46, sentence: "Mi animal favorito es el gato.", translation: "My favorite animal is the cat.", category: "Animals", choices: ["My favorite animal is the cat.", "I like dogs.", "Birds are beautiful."] },
    { id: 47, sentence: "Compré pan y leche.", translation: "I bought bread and milk.", category: "Shopping", choices: ["I bought bread and milk.", "I bought fruits and vegetables.", "I bought clothes."] },
    { id: 48, sentence: "Estoy ocupado hoy.", translation: "I am busy today.", category: "Daily Life", choices: ["I am busy today.", "I am free tomorrow.", "I have plans."] },
    { id: 49, sentence: "Quiero viajar por el mundo.", translation: "I want to travel the world.", category: "Hobbies", choices: ["I want to travel the world.", "I want to visit a new country.", "I want to explore my city."] },
    { id: 50, sentence: "Feliz aniversario.", translation: "Happy anniversary.", category: "Greetings", choices: ["Happy anniversary.", "Happy birthday.", "Merry Christmas."] },
    { id: 51, sentence: "Lo siento, no entiendo.", translation: "Sorry, I don't understand.", category: "Language", choices: ["Sorry, I don't understand.", "Can you speak louder?", "Please write it down."] },
    { id: 52, sentence: "Hace viento.", translation: "It's windy.", category: "Weather", choices: ["It's windy.", "It's foggy.", "It's clear."] },
    { id: 53, sentence: "¿Dónde está la estación de tren?", translation: "Where is the train station?", category: "Directions", choices: ["Where is the train station?", "Where is the bus stop?", "Where is the airport?"] },
    { id: 54, sentence: "Tengo que irme.", translation: "I have to go.", category: "Daily Life", choices: ["I have to go.", "I'll be back soon.", "See you later."] },
    { id: 55, sentence: "Es un día hermoso.", translation: "It's a beautiful day.", category: "Weather", choices: ["It's a beautiful day.", "It's a bad day.", "It's a normal day."] },
    { id: 56, sentence: "Me gusta bailar.", translation: "I like to dance.", category: "Hobbies", choices: ["I like to dance.", "I like to sing.", "I like to draw."] },
    { id: 57, sentence: "¿Puedo probarme esto?", translation: "Can I try this on?", category: "Shopping", choices: ["Can I try this on?", "What size is this?", "Do you have another color?"] },
    { id: 58, sentence: "Necesito un médico.", translation: "I need a doctor.", category: "Health", choices: ["I need a doctor.", "I need a nurse.", "I need a dentist."] },
    { id: 59, sentence: "El café está caliente.", translation: "The coffee is hot.", category: "Food & Drink", choices: ["The coffee is hot.", "The water is cold.", "The soup is warm."] },
    { id: 60, sentence: "Estoy listo para pedir.", translation: "I am ready to order.", category: "Food & Drink", choices: ["I am ready to order.", "I need more time.", "Can I see the menu?"] },
    { id: 61, sentence: "La película empieza a las ocho.", translation: "The movie starts at eight.", category: "Time", choices: ["The movie starts at eight.", "The show ends at nine.", "The play begins at seven."] },
    { id: 62, sentence: "Mi hermano mayor vive en Madrid.", translation: "My older brother lives in Madrid.", category: "Family", choices: ["My older brother lives in Madrid.", "My sister is younger.", "My parents are here."] },
    { id: 63, sentence: "Es muy caro.", translation: "It's very expensive.", category: "Shopping", choices: ["It's very expensive.", "It's cheap.", "It's a fair price."] },
    { id: 64, sentence: "Quiero aprender más.", translation: "I want to learn more.", category: "Learning", choices: ["I want to learn more.", "I want to improve.", "I want to practice."] },
    { id: 65, sentence: "La puerta está cerrada.", translation: "The door is closed.", category: "Objects", choices: ["The door is closed.", "The window is open.", "The light is off."] },
    { id: 66, sentence: "Llamaré más tarde.", translation: "I will call later.", category: "Communication", choices: ["I will call later.", "I will text you.", "I will email you."] },
    { id: 67, sentence: "Tengo sed.", translation: "I am thirsty.", category: "Feelings", choices: ["I am thirsty.", "I am full.", "I am hungry."] },
    { id: 68, sentence: "¿Qué te gusta hacer?", translation: "What do you like to do?", category: "Hobbies", choices: ["What do you like to do?", "What are your interests?", "What is your hobby?"] },
    { id: 69, sentence: "Ella es muy inteligente.", translation: "She is very intelligent.", category: "Descriptions", choices: ["She is very intelligent.", "He is very kind.", "They are very creative."] },
    { id: 70, sentence: "Necesito un recibo.", translation: "I need a receipt.", category: "Shopping", choices: ["I need a receipt.", "Can I have the bill?", "Do you accept cash?"] },
    { id: 71, sentence: "Hoy no trabajo.", translation: "I don't work today.", category: "Work", choices: ["I don't work today.", "I work tomorrow.", "I am on vacation."] },
    { id: 72, sentence: "El restaurante está lleno.", translation: "The restaurant is full.", category: "Food & Drink", choices: ["The restaurant is full.", "The cafe is empty.", "The bar is crowded."] },
    { id: 73, sentence: "Tengo una pregunta.", translation: "I have a question.", category: "Requests", choices: ["I have a question.", "I need information.", "Can I ask something?"] },
    { id: 74, sentence: "Vamos a caminar.", translation: "Let's go for a walk.", category: "Leisure", choices: ["Let's go for a walk.", "Let's go for a run.", "Let's go for a ride."] },
    { id: 75, sentence: "Me siento bien.", translation: "I feel good.", category: "Feelings", choices: ["I feel good.", "I feel bad.", "I feel normal."] },
    { id: 76, sentence: "¿Puedes escribirlo?", translation: "Can you write it down?", category: "Requests", choices: ["Can you write it down?", "Can you spell that?", "Can you show me?"] },
    { id: 77, sentence: "La ciudad es grande.", translation: "The city is big.", category: "Descriptions", choices: ["The city is big.", "The town is small.", "The village is quiet."] },
    { id: 78, sentence: "Qué tengas un buen día.", translation: "Have a good day.", category: "Greetings", choices: ["Have a good day.", "Have a good night.", "Have a good trip."] },
    { id: 79, sentence: "Mi número de teléfono es...", translation: "My phone number is...", category: "Introductions", choices: ["My phone number is...", "My address is...", "My email is..."] },
    { id: 80, sentence: "Necesito mis gafas.", translation: "I need my glasses.", category: "Objects", choices: ["I need my glasses.", "I need my keys.", "I need my wallet."] },
    { id: 81, sentence: "Hay mucha gente.", translation: "There are many people.", category: "Descriptions", choices: ["There are many people.", "There are few cars.", "There is no one."] },
    { id: 82, sentence: "Estoy listo para salir.", translation: "I am ready to leave.", category: "Daily Life", choices: ["I am ready to leave.", "I am ready to start.", "I am ready to finish."] },
    { id: 83, sentence: "¿Dónde está la parada de autobús?", translation: "Where is the bus stop?", category: "Directions", choices: ["Where is the bus stop?", "Where is the taxi stand?", "Where is the subway station?"] },
    { id: 84, sentence: "Me encanta el chocolate.", translation: "I love chocolate.", category: "Food & Drink", choices: ["I love chocolate.", "I like ice cream.", "I don't like sweets."] },
    { id: 85, sentence: "El examen es difícil.", translation: "The exam is difficult.", category: "Learning", choices: ["The exam is difficult.", "The test is easy.", "The homework is long."] },
    { id: 86, sentence: "Quiero un vaso de agua.", translation: "I want a glass of water.", category: "Food & Drink", choices: ["I want a glass of water.", "I want a bottle of juice.", "I want a can of soda."] },
    { id: 87, sentence: "Ella canta muy bien.", translation: "She sings very well.", category: "Hobbies", choices: ["She sings very well.", "He plays guitar.", "They dance beautifully."] },
    { id: 88, sentence: "No tengo tiempo.", translation: "I don't have time.", category: "Time", choices: ["I don't have time.", "I have plenty of time.", "I am busy."] },
    { id: 89, sentence: "Es una buena idea.", translation: "It's a good idea.", category: "General", choices: ["It's a good idea.", "It's a bad idea.", "It's an interesting idea."] },
    { id: 90, sentence: "Estoy esperando a un amigo.", translation: "I am waiting for a friend.", category: "Daily Life", choices: ["I am waiting for a friend.", "I am waiting for the bus.", "I am waiting for you."] },
    { id: 91, sentence: "El cielo está azul.", translation: "The sky is blue.", category: "Weather", choices: ["The sky is blue.", "The clouds are white.", "The sun is shining."] },
    { id: 92, sentence: "Necesito un cargador.", translation: "I need a charger.", category: "Objects", choices: ["I need a charger.", "I need a power bank.", "I need a new battery."] },
    { id: 93, sentence: "¿Cómo se dice 'hello' en español?", translation: "How do you say 'hello' in Spanish?", category: "Language", choices: ["How do you say 'hello' in Spanish?", "What does this word mean?", "Can you translate this?"] },
    { id: 94, sentence: "El precio es razonable.", translation: "The price is reasonable.", category: "Shopping", choices: ["The price is reasonable.", "The price is too high.", "The price is low."] },
    { id: 95, sentence: "Me gusta caminar por el parque.", translation: "I like walking in the park.", category: "Leisure", choices: ["I like walking in the park.", "I like cycling on the road.", "I like running on the track."] },
    { id: 96, sentence: "Mi casa está cerca de aquí.", translation: "My house is near here.", category: "Location", choices: ["My house is near here.", "My office is far away.", "The school is close."] },
    { id: 97, sentence: "Estoy un poco nervioso.", translation: "I am a little nervous.", category: "Feelings", choices: ["I am a little nervous.", "I am very excited.", "I am calm."] },
    { id: 98, sentence: "Gracias por todo.", translation: "Thanks for everything.", category: "Greetings", choices: ["Thanks for everything.", "You're welcome.", "No problem."] },
    { id: 99, sentence: "¿Puedes hablar más despacio?", translation: "Can you speak slower?", category: "Requests", choices: ["Can you speak slower?", "Can you speak louder?", "Can you speak clearly?"] },
    { id: 100, sentence: "Nos vemos pronto.", translation: "See you soon.", category: "Greetings", choices: ["See you soon.", "Goodbye for now.", "Take care."] }
];

export default spanishSentences;