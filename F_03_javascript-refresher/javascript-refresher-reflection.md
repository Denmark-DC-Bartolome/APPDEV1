### 00_script_in_html.html

During my sophomore days, we discussed the `<script>` tag. I learned that a script can be added inside an HTML document. What I was refreshed about is the difference between writing JavaScript directly inside HTML and loading it from an external JavaScript file using the `src` attribute. I was refreshed about this because I usually only notice the external JavaScript.

Additionally, I learned that using `type="module"` allows JavaScript files to use features such as `import` and `export`. This makes it easier to manage and reuse code in different files.

### 01_base_syntax.js

`console.log()` is actually the first thing I learned in the JavaScript language. I learned that it is used to display information in JavaScript. Declaring variables and JavaScript being case-sensitive are not new to me, but I am thankful that I am learning these things again.

### 02_variables.js

In this part of the lesson, I noticed that in JavaScript, when declaring a variable, I don't need to tell JavaScript the specific data type such as strings, numbers, and booleans.

This is actually similar to Python because Python also does not require you to declare the data type of a variable. However, functions like `int()` and `str()` can be used in Python when you want to convert values from one data type to another. I also learned how to use `typeof` to identify the type of a value.

Another important thing I learned is the difference between `==` and `===`, where `===` checks both the value and the data type, while `==` can convert values before comparing them.

### 03_functions.js

I was reminded that functions allow us to create reusable blocks of code that can perform specific tasks. I learned how parameters receive values when a function is called and how `return` sends a result back from a function. I also practiced regular functions and arrow functions, which showed me different ways of creating functions in JavaScript.

### 04_objects.js

Although this is not new to me, before, I didn't fully understand this part, but now somehow things are becoming clearer to me. In this lesson, I’ve learned that objects can store related information using properties and methods. I also learned that a method is a function stored inside an object and that `this` can be used to access other properties of the same object. This part helped me understand how JavaScript can organize related data and behavior together.

### 05_arrays.js

My analogy for arrays is my condiments box. I have this box where I put all my salt, MSG, soy sauce, etc., and I use this when cooking. The similarity between my condiments box and arrays is that they are useful for storing multiple related things or values in a single condiments box or variable.

I learned the syntax of methods such as `push()` and `shift()`, where `push()` can add an element to the end of an array, while `shift()` removes the first element. I also practiced using `for...of` to go through every item and `.map()` to create a new array by transforming the values from an existing array.

### 06_control_structures.js

The term control structures is new to me because I only knew them as conditional statements before. I’ve learned how control structures allow JavaScript to make decisions and repeat actions. I practiced using `if`, `else if`, and `else` statements to check different conditions.

What struck me the most is that the order of conditions is important because before, I didn't know about this rule. It turns out that JavaScript executes the first condition that becomes true. Using `for` and `while` loops also helped me understand how code can be repeated until a condition is met.

### 07_dom.html

I was enlightened that the DOM represents the elements of an HTML page and allows JavaScript to interact with them. After being enlightened, I practiced selecting elements using `document.getElementById()`, responding to user actions using `addEventListener()`, and changing content using `textContent`.

I also learned how `prompt()` can receive input from the user and how `setTimeout()` can execute code after a certain amount of time.

### 08_essential_features.js

In this part, I was enlightened by the modern JavaScript features and how these features can make the code easier and cleaner. I practiced using `.map()` para baguhin ang values sa isang array, destructuring para makuha ko directly ang kailangan kong values from an object, at spread operator para gumawa ng copy ng array habang nagdadagdag ng bagong values.

Para sa akin, parang shortcut tools sila, especially the spread operator. Instead na isa-isahin ko pa manually ang data, may mas maikling way para gawin yung same task.

### 09_tricky_parts.js

Sa part na ito, I’ve learned some JavaScript behaviors na medyo confusing sa una because may mga bagay na hindi agad obvious just by looking at the code. One example is the difference between `==` and `===`. Dati, parang pareho lang silang comparison operators para sa akin, pero habang ginagawa ko yung exercise, mas naintindihan ko na si `==` can convert values before comparing them, while `===` checks both the value and the data type. Doon ko nakita kung bakit mas safe gamitin ang `===` in most cases.

Naging confusing din sa akin yung difference between `undefined` and `null` because pareho silang parang “walang value.” Pero through the examples, naintindihan ko na `undefined` usually means a value has not been assigned yet, while `null` is something that we intentionally set to represent no value.

Another part that challenged me was how `this` behaves differently in regular functions and arrow functions. At first, akala ko pareho lang ang magiging result since pareho naman silang functions. Pero after checking the output and comparing the examples, mas nakita ko na regular functions can have their own `this` depending on how they are called, while arrow functions use `this` from the surrounding scope.

### 10_let_const.js

Ito yung kadugtong ng natutunan ko sa Part 02. Mas natuto ako ngayon sa pagkakaiba ng `let`, `const`, and `var` when declaring variables sa JavaScript. Naging mas clear sa akin yung difference between `let` and `const` when I tried reassigning their values. With `let`, puwede kong palitan yung value later, while `const` does not allow reassignment.

Nalaman ko rin yung `var` na dating ginagamit pero ngayon medyo avoided na siya sa modern JavaScript. Gumagana pa rin siya, pero iba yung scope behavior niya compared sa `let` and `const`, kaya puwede siyang maging source ng unexpected bugs, especially kapag lumalaki na yung code.

### 11_arrow_functions.js

Sa part na ito, I’ve learned how arrow functions can make JavaScript functions shorter and cleaner compared sa traditional function syntax. Before this exercise, mas familiar ako sa normal `function` declaration, kaya medyo nanibago ako nung nakita ko na puwedeng alisin yung `function` keyword and use `=>` instead.

One thing na medyo confusing sa una ay kung kailan puwedeng alisin yung parentheses, curly braces, at `return`. Through the examples, naintindihan ko na kapag isang parameter lang ang function, optional yung parentheses, and kapag single expression lang yung function, puwede ring gumamit ng implicit return. Doon ko nakita kung bakit useful ang arrow functions for simple operations.

Mas naging clear din siya sa akin nung kinumpara ko yung regular function and arrow function na parehong gumagawa ng same task. Kahit pareho lang ang output, mas maikli at mas readable yung arrow function. Parang shortcut siya.

Na-realize ko rin na useful siya sa callbacks and some event handlers, especially kapag small function lang ang kailangan. Since common ito sa modern JavaScript and React, feeling ko important talaga siyang masanay gamitin.

### 12_destructuring.js

Sa part na ito, nalaman ko na ang destructuring ay kayang padaliin ang pagkuha ng specific values from objects and arrays.

At first, medyo confusing siya because magkaiba yung syntax for objects and arrays. Sa object destructuring, ginagamit yung property names inside curly braces, while sa array destructuring, naka-base naman sa position ng values inside square brackets.

Para sa akin, parang may bag na maraming gamit sa loob. Instead na dalhin ko yung buong bag every time, kinukuha ko lang yung exact items na kailangan ko. Ganun ko naintindihan yung destructuring, especially kapag ang object has many properties pero few values lang naman yung kailangan gamitin.

I also learned that destructuring can be used directly in function parameters. This part was useful because it made the code look shorter and more readable. Instead na ipasa yung buong object then access each property inside the function, puwede ko nang kunin agad yung needed properties sa parameter itself.

### 13_spread_rest.js

Sa part na ito, I’ve learned the difference between the spread operator and the rest operator. Medyo confusing sila kasi pareho silang gumagamit ng `...`, kaya akala ko same lang yung purpose nila, but it turns out na magkaiba pala sila depende sa context.

Yung spread operator is used para “ikalat” or i-expand yung values ng isang array or object. Nakatulong ito sa akin para maintindihan kung paano gumawa ng copy or combine ng data without directly changing the original.

Yung rest operator naman is parang opposite. Instead na ikalat yung values, kinokolekta niya yung remaining values into one array. Mas naging clear ito sa akin nung ginamit siya sa function parameters, kasi puwede palang tumanggap yung function ng maraming arguments kahit hindi fixed yung number ng values.

I also learned how `.reduce()` works with arrays to combine multiple values into one result. Medyo tricky because kailangan intindihin yung accumulator and current value, pero nung ginamit siya para mag-compute ng total, mas naging practical siya. Parang nag-iipon ka ng values one by one until makuha mo yung final result.

### 14_classes_inheritance.js

Sa part na ito, I’ve learned how classes and inheritance work in JavaScript. May prior knowledge na ako about dito kasi ilang beses na ito naturo, pero mas naging clear siya nung nakita ko na puwedeng gumawa ng multiple objects from a single class gamit ang `new` keyword.

I also learned how the `constructor` works. Doon ko naintindihan na siya yung ginagamit para i-set yung initial values ng object kapag gumawa ako ng bagong instance.

Ang naalala ko naman sa inheritance ay yung "pamana," kaya parang mas dumadali kapag ini-imagine ko siya. Basically, nakakakuha ng methods yung child class from the parent class. Nung ginamit ko yung `extends`, mas naging clear lang sa akin na hindi ko na kailangang ulitin yung same methods sa bagong class. Puwede kong gamitin yung existing behavior, then magdagdag na lang ng bagong functionality sa child class.

### 15_modules_export.js

Sa part na ito, mas na-refresh ko yung paggamit ng `export` sa JavaScript. Familiar na sa akin yung concept because na-encounter ko na siya noong pinag-aaralan namin yung React, pero doon ko lang talaga mas naintindihan kung ano yung difference between default export and named export.

Before React, alam ko lang na ginagamit ang `export` para ma-share yung code sa ibang files. Pero nung gumagawa na kami ng React components, mas naging clear sa akin na ang default export is usually used kapag may main value or component na ine-export from a file, while named exports are useful kapag maraming specific values, functions, or constants na gusto mong i-export.

### 16_modules_import.js

Sa part na ito, mas naintindihan ko rin yung `import` at kung paano siya connected sa `export`. Same sa Part 15, mas naging familiar ako dito noong nag-aaral kami ng React dahil halos every component or file may ini-import.

Doon ko rin mas natutunan yung difference ng pag-import ng default export at named export. Kapag default export, hindi kailangan ng curly braces, while named exports need curly braces and usually use the same name as the exported value. Noong una, medyo nakakalito siya kasi pareho namang galing sa ibang file, pero mas naging clear nung nakita ko siya repeatedly sa React files.

### 17_logical_operators.js

Sa part na ito, mas naintindihan ko kung paano ginagamit ang logical operators tulad ng `&&`, `||`, at `!` sa JavaScript. Familiar na sa akin yung mga operators na ito, pero through this exercise mas naging clear kung paano sila ginagamit together with truthy and falsy values.

Yung medyo confusing sa una is hindi lang pala actual `true` or `false` ang kayang i-check ng JavaScript. May mga values din na automatically considered as falsy tulad ng `0`, empty string, `null`, `undefined`, at `NaN`, while most other values are considered truthy. Dito ko na-realize na important pala maintindihan yung actual value, hindi lang kung boolean siya or hindi.

Mas madali ko siyang naintindihan using real-life conditions. Halimbawa, kung required ang student ID **at** uniform bago makapasok, parang `&&` siya because parehong conditions dapat true. Kapag naman puwedeng mag-login using email **or** username, parang `||` because kahit isa lang ang valid, puwede na. Yung `!` naman parang pag-reverse ng condition.

### 18_ternary_nullish.js

Sa part na ito, I’ve learned how the ternary operator, optional chaining `?.`, and nullish coalescing `??` can make conditions and value checking shorter and cleaner. Familiar na sa akin yung normal `if...else`, kaya medyo nanibago ako sa ternary operator because isang line lang siya pero may condition, true result, at false result na agad.

Mas naging clear siya sa akin nung kinumpara ko siya sa normal `if...else`. Doon ko nakita na useful ang ternary kapag simple lang yung condition, pero kapag mas complicated na, mas readable pa rin minsan yung regular `if...else`.

Yung optional chaining `?.` naman, nakita ko yung malaking tulong nito because nakakatulong siyang iwasan yung error kapag may property na baka hindi existing. Halimbawa, kung may user object pero walang address, puwede ko pa ring i-check yung `user.address?.city` without crashing the program.

For nullish coalescing `??`, naintindihan ko na useful siya kapag gusto kong magbigay ng fallback value only when `null` or `undefined` talaga yung original value. Para sa akin, parang may backup value lang siya kapag talagang `null` or `undefined`, instead na palitan agad kahit valid naman yung value tulad ng `0` or empty string.

### 19_strings_numbers.js

Sa part na ito, I’ve learned different methods for working with strings and numbers in JavaScript. Familiar na sa akin yung basic strings and numbers, pero dito ko mas nakita na marami palang built-in methods na puwedeng gamitin para hindi na manual yung pag-process ng data.

Sa strings, I practiced methods like `trim()`, `split()`, `toUpperCase()`, `includes()`, and `slice()`. Mas naging useful siya sa part ko when I imagined working with user input. Halimbawa, kung may nag-type ng name na may extra spaces, puwedeng gamitin yung `trim()` para linisin muna yung value. Yung `includes()` naman is useful kapag gusto kong i-check kung may specific word or character sa isang string.

Sa numbers, I learned how `parseInt()`, `toFixed()`, and `Number.isNaN()` work. Medyo important ito especially kapag galing sa input yung value, because minsan string pala siya kahit number ang itsura. Dito ko naintindihan kung bakit kailangan minsan i-convert muna yung value bago gamitin sa calculations.

Para sa akin, parang cleaning and formatting tools yung mga methods na ito. Bago gamitin yung data, puwede muna siyang ayusin, i-check, or i-convert para mas reliable yung result.

### 20_array_methods.js

Sa part na ito, I’ve learned how useful array methods like `.filter()`, `.find()`, `.some()`, `.every()`, and `.sort()` are when working with multiple data. Mas naging clear sa akin yung difference ng bawat method habang ginagamit ko sila sa examples.

`filter()` is useful kapag maraming items ang gusto kong makuha based on a condition, while `find()` naman kapag isang specific item lang ang hinahanap ko. Yung `some()` checks if at least one item passes the condition, while `every()` checks if all items pass. Medyo magkahawig sila, pero mas madaling tandaan kapag iniisip ko kung “may kahit isa ba?” versus “lahat ba?”

Yung `.sort()` naman, nakita ko kung paano niya naaayos yung order ng values depending sa comparison na binibigay ko. Dito ko rin na-realize na hindi enough na basta tawagin lang yung method; kailangan ko rin maintindihan kung anong condition or comparison ang ipinapasa ko para makuha yung tamang result.

### 21_errors_json.js

Sa part na ito, I’ve learned how error handling works using `try`, `catch`, and `throw`. Before this exercise, kapag may error sa code, ang usual reaction ko is hanapin agad kung anong line yung mali. Pero dito ko naintindihan na may situations din na expected na puwedeng magkaroon ng error, so mas okay na ihanda yung program kung paano niya iyon haharapin.

Yung `try` block is parang part kung saan nilalagay yung code na puwedeng mag-fail, while `catch` naman yung humahawak sa error kapag may nangyaring problem. Yung `throw` helped me understand na puwede rin pala tayong gumawa ng sariling error kapag may condition na hindi valid. Para sa akin, parang may safety net yung program instead na basta na lang tumigil kapag may mali.

I also learned how JSON works using `JSON.stringify()` and `JSON.parse()`. Medyo nakakalito kung bakit kailangan pa i-convert yung object into text, pero mas naging clear nung naisip ko na commonly ginagamit ang JSON when sending or storing data. `JSON.stringify()` converts a JavaScript object or value into a JSON string, while `JSON.parse()` converts valid JSON text back into a JavaScript value or object.

After this part, mas naintindihan ko na important yung error handling and data conversion, especially kapag gumagawa na ng applications na kumukuha or nagpapadala ng data. Hindi lang pala tungkol sa pagpapagana ng code, kundi pati sa pag-handle ng possible problems in a controlled way.

### 22_async_javascript.js

Sa part na ito, I’ve learned how asynchronous JavaScript works using callbacks, Promises, and `async/await`. Medyo confusing siya sa una kasi first time ko siyang ma-encounter. Pero while doing this part, mas naintindihan ko na may mga tasks na hindi agad natatapos, tulad ng pag-fetch ng data or paghihintay ng result, kaya hindi kailangang ihinto ng JavaScript yung ibang tasks habang naghihintay.

Naging clear sa akin yung concept nung inisip ko siya parang pag-order ng pagkain. After mong umorder, hindi mo naman kailangang tumayo lang at hintayin hanggang matapos lutuin. Puwede kang gumawa muna ng ibang bagay, tapos babalikan mo yung order once ready na. Ganun ko na-visualize yung asynchronous behavior.

I also learned that callbacks are functions na pinapasa para mag-run later, while Promises represent a result na puwedeng mag-succeed or mag-fail in the future. Yung `async/await` naman, mas madaling basahin para sa akin because mas mukha siyang normal step-by-step code compared sa chained Promises.

After this exercise, mas naintindihan ko kung bakit important ang asynchronous JavaScript sa real applications, especially kapag may API requests or tasks na may delay. Mas naging aware din ako na kailangan i-handle properly both successful results and errors para hindi magulo yung flow ng program.

### 23_closures_scope.js

Sa part na ito, I’ve learned how scope and closures work in JavaScript. Medyo nalito ako kasi may mga variables na accessible sa isang part ng code pero hindi na puwedeng gamitin sa ibang part. Dito ko mas naintindihan na depende pala sa kung saan dineclare yung variable kung saan lang siya puwedeng gamitin.

Mas naging clear sa akin yung scope when I compared variables inside a function, inside a block, and outside of them. Parang may sariling area or boundary yung bawat variable. Kapag nasa loob lang siya ng function, hindi siya basta puwedeng gamitin sa labas. This helped me understand why JavaScript keeps some values limited to certain parts of the code depending on where they are declared.

Yung closures naman, ito yung mas tricky part para sa akin. At first, nakakalito kung paano naaalala ng isang function yung variable from another function kahit tapos na tumakbo yung outer function. Mas naintindihan ko siya through the counter example, where two counters created from the same function can still keep their own separate values.

Parang may sariling maliit na memory box yung bawat function created by a closure. Kahit pareho silang galing sa same function, may sarili silang stored value kaya hindi sila nagkakahalo. After this exercise, mas naging clear sa akin kung paano useful ang closures for keeping data private and maintaining values between function calls.