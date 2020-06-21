export const Questions = [
    {
        id:1,
        ques:`var foo = function foo() {
            console.log(foo === foo);  
        };
        foo();`,
        c1:'true',
        c2:'false',
        c3:'undefined',
        ans:'true'
    },
    {
        id:2,
        ques:`function aaa() {
            return
            {
                test: 1
            };
        }
        alert(typeof aaa());`,
        c1:'function',
        c2:'number',
        c3:'undefined',
        ans:'undefined'
    },
    {
        id:3,
        ques:`"1" - - "1"`,
        c1:'"11"',
        c2:'11',
        c3:'2',
        ans:'2'
    },
    {
        id:4,
        ques:`console.log(0.1 + 0.2);
        console.log(0.1 + 0.2 == 0.3);`,
        c1:'0.3,true',
        c2:'0.300000004,false',
        c3:'0.3,false',
        ans:'0.300000004,false'
    },
    {
        id:5,
        ques:`
        var x = 3;
        
        var foo = {
            x: 2,
            baz: {
                x: 1,
                bar: function() {
                    return this.x;
                }
            }
        }
        
        var go = foo.baz.bar;
        
        alert(go());
        alert(foo.baz.bar());`,
        c1:'3,1',
        c2:'1,1',
        c3:'1,3',
        ans:'3,1'
    },
    {
        id:6,
        ques:`(function(){
            var a = b = 3;
          })();
          
          console.log("a defined? " + (typeof a !== 'undefined'));
          console.log("b defined? " + (typeof b !== 'undefined'));`,
        c1:`a defined? true
        b defined? true`,
        c2:`a defined? false
        b defined? true`,
        c3:`a defined? true
        b defined? false`,
        ans:`a defined? false
        b defined? true`
    },
    {
        id:7,
        ques:`(function() {
            console.log(1); 
            setTimeout(function(){console.log(2)}, 1000); 
            setTimeout(function(){console.log(3)}, 0); 
            console.log(4);
        })();`,
        c1:'1 4 3 2',
        c2:'3 1 4 2',
        c3:'3 2 1 4',
        ans:'1 4 3 2'
    },
    {
        id:8,
        ques:`console.log(typeof typeof 1);`,
        c1:'number',
        c2:'string',
        c3:'undefined',
        ans:'string'
    },
    {
        id:9,
        ques:`for (var i = 0; i < 5; i++) {
            (function(x) {
                setTimeout(function() { console.log(x); }, x * 1000 );
            })(i);
        }`,
        c1:'5 5 5 5 5',
        c2:'0 1 2 3 4',
        c3:'0 1 4 5 5',
        ans:'0 1 2 3 4'
    },
    {
        id:10,
        ques:`Number("1") - 1 == 0;`,
        c1:'true',
        c2:'false',
        c3:'TypeError',
        ans:'true'
    },
    {
        id:11,
        ques:`console.log("0 || 1 = "+(0 || 1));
        console.log("1 || 2 = "+(1 || 2));
        console.log("0 && 1 = "+(0 && 1));
        console.log("1 && 2 = "+(1 && 2));`,
        c1:`0 || 1 = 0
        1 || 2 = 1
        0 && 1 = 0
        1 && 2 = 1`,
        c2:`0 || 1 = 1
        1 || 2 = 1
        0 && 1 = 0
        1 && 2 = 1`,
        c3:`0 || 1 = 1
        1 || 2 = 1
        0 && 1 = 0
        1 && 2 = 2`,
        ans:`0 || 1 = 1
        1 || 2 = 1
        0 && 1 = 0
        1 && 2 =` 
    },
    {
        id:12,
        ques:`console.log(false == '0')
        console.log(false === '0')`,
        c1:'true false',
        c2:'false false',
        c3:'true true',
        ans:'true false'
    },
    {
        id:13,
        ques:`(function(x) {
            return (function(y) {
                console.log(x);
            })(2)
        })(1);`,
        c1:'2',
        c2:'2 ,1',
        c3:'1',
        ans:'1'
    },
    {
        id:14,
        ques:`var x = 21;
        var girl = function () {
            console.log(x);
            var x = 20;
        };
        girl ();`,
        c1:'undefined',
        c2:'21',
        c3:'20',
        ans:'undefined'
    },
    {
        id:15,
        ques:`function bar() {
            return foo;
            foo = 10;
            function foo() {}
            var foo = '11';
        }
        alert(typeof bar());`,
        c1:'number',
        c2:'function',
        c3:'undefined',
        ans:'function'
    },

    {
        id:16,
        ques:`console.log(1 < 2 < 3);
        console.log(3 > 2 > 1);`,
        c1:'true true',
        c2:'false false',
        c3:'true false',
        ans:'true false'
    },
    {
        id:17,
        ques:`let person = { name: "Lydia" };
        const members = [person];
        person = null;
        
        console.log(members);`,
        c1:'null',
        c2:'[{name: "Lydia"}]',
        c3:'[{null}]',
        ans:'[{name: "Lydia"}]'
    },
    {
        id:18,
        ques:`const groceries = ["tomato", "grape", "cheese"];

        let favoriteItem = groceries.find(item => item === "grape");
        favoriteItem = "apple
        
        const indexOfLeastFavorite = groceries.indexOf(cheese)
        groceries[indexOfLeastFavorite] = "milk"
        
        console.log(groceries)`,
        c1:'tomato,apple,cheese',
        c2:'tomato,apple,milk',
        c3:'tomato,grape,milk',
        ans:'tomato,grape,milk'
    },
    {
        id:19,
        ques:` <script>
        document.write(navigator.appCodeName);
        </script>`,
        c1:'get code name of the browser of a visitor',
        c2:' set code name of the browser of a visitor',
        c3:'None of the above',
        ans:'get code name of the browser of a visitor'
    },
    {
        id:20,
        ques:`var x = 0;
        function foo() {
            x++;
            this.x = x;
            return foo;
        }
        var bar = new new foo;
        console.log(bar.x);`,
        c1:' 0',
        c2:'Rreference error',
        c3:'undefined',
        ans:'9123'
    },
    {
        id:20,
        ques:``,
        c1:'',
        c2:'',
        c3:'',
        ans:''

    }
]