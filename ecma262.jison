%lex

%s  identifier_start identifier_start_unicode

%%

<identifier_start,identifier_start_unicode>[$_0-9A-Z_a-z]+
%{
  return 'UnicodeIDContinue';
%}

<identifier_start,identifier_start_unicode>(\\[u][0123456789abcdefABCDEF]{4}) %{
  return 'UnicodeEscapeSequenceContinue';
%}
<identifier_start,identifier_start_unicode>[\u0009|\u0020|\u000A] %{
  this.popState();
%}

'...' return '...';
';' return ';';
',' return ',';
'<' return '<';
'>' return '>';
'<=' return '<=';
'>=' return '>=';
'==' return '==';
'!=' return '!=';
'===' return '===';
'!==' return '!==';
'++' return '++';
'--' return '--';
'**' return '**';
'**=' return '**=';
'>>>' return '>>>';
'&&' return '&&';
'||'  return '||';
'?' return '?';
':' return ':';
'+=' return '+=';
'-=' return '-=';
'*=' return '*=';
'%=' return '%=';
'<<=' return '<<=';
'>>=' return '>>=';
'>>>=' return '>>>=';
'&=' return '&=';
'|=' return '|=';
'^=' return '^=';
'=>' return '=>';
'{' return '{';
'}' return '}';
'(' return '(';
')' return ')';
'[' return ']';
'=' return '=';
'.' return '.';
'+' return '+';
'-' return '-';
'*' return '*';
'%' return '%';
'&' return '&';
'|' return '|';
'^' return '^';
'!' return '!';
'~' return '~';
'<<' return '<<';
'>>' return '>>';

'/=' return '/=';
'/'  return '/';

\\[u][0123456789abcdefABCDEF]{4} %{
  this.begin('identifier_start_unicode');
  return 'UnicodeEscapeSequence';
%}

[$_0-9A-Za-z]+? %{
  this.begin('identifier_start');
  return 'UnicodeIDStart';
%}

\u0009 return 'TAB'
\u000B return 'VT'
\u000C return 'FF';
\u0020 return 'SP';
\u00A0 return 'NBSP';

\u200C return 'ZWNJ';
\u200D return 'ZWJ';
\uFEFF return 'ZWNBSP';

\u000A return 'LF';
\u000D return 'CR';
\u2028 return 'LS';
\u2029 return 'PS';

%start Program

/lex

%%

Program
  : InputElementDiv
  | Program InputElementDiv
  ;

InputElementDiv
  : WhiteSpace {
    console.log('WhiteSpace');
  }
  | LineTerminator {
    console.log('Line Terminator');
  }
  | DivPunctuator {
    console.log('Div Punctuator');
  }
  | RightBracePunctuator {
    console.log('RightBracePunctuator ' + $1);
  }
  | CommonToken {

  }
  ;

CommonToken
  : IdentifierName {
    console.log('identifierName ' + $1);
  }
  | Punctuator {
    console.log('Punctuator ' + $1);
  }
  ;

Punctuator
  : '{'
  | '+'
  | '-'
  | '++'
  | '--'
  ;

WhiteSpace
  : TAB {
    console.log('tab');
  }
  | VT
  | FF
  | SP {
    console.log('space');
  }
  | NBSP
  | ZWNBSP
  ;

LineTerminator
  : LF {
    console.log('LF');
  }
  ;

DivPunctuator
  : '/' {
    console.log('DIV');
  }
  | '/=' {
    console.log('DIV EQ');
  }
  ;

RightBracePunctuator
  : '}' {
    console.log('right brace punctuator');
  }
  ;

IdentifierName
  : IdentifierStart {
    $$ = $1;
  }
  | IdentifierName IdentifierPart {
    $$ = $1 + $2;
  }
  ;

IdentifierStart
  : UnicodeIDStart
  | UnicodeEscapeSequence { 
    $$ = $1;
  }
  ;

IdentifierPart
  : UnicodeIDContinue {
  }
  | UnicodeEscapeSequenceContinue { 
    $$ = $1;
  }
  | ZWNJ
  | ZWJ
  ;

Hex4Digits
  : HexDigit HexDigit HexDigit HexDigit
  ;
