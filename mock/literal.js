null;
true;
false;
'';
'this';
"";
"this";
'\100abc';
'\u0056abc';
'abc\u0056';
'abc\99';
'abc\x';
"\100";
"'";
1.23;
2.02232;
0.99;
.123;
0.;
123;
[];
[,];
[a,b,c];
[1,2,3];
[$1,'2',a_,];
({});
({a_:1.2});
({a_});
({'$a' : 1.23});
fibonacci = {[Symbol.iterator]() {}};
obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
      return foo;
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 1)() ]: 1
};
