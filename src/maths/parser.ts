enum TokenKind {
    Number,
    Symbol,
    Operator,
}

interface NumberToken {
    type: TokenKind.Number;
    value: number;
}

interface SymbolToken {
    type: TokenKind.Symbol;
    value: '(' | ')';
}

type OperatorKind = '+' | '-' | '*' | '/';

interface OperatorToken {
    type: TokenKind.Operator;
    value: OperatorKind;
}

type Token = NumberToken | SymbolToken | OperatorToken;

const FLOAT_REGEX = /^\d+(\.\d+)?/;

class Lexer {
    input: string;
    currentIndex: number;
    bufferToken?: Token;

    constructor(input: string) {
        this.input = input;
        this.currentIndex = 0;
    }

    currentChar(): string {
        return this.input[this.currentIndex];
    }

    eatWhitespaces(): void {
        // we loop while the current char is a whitespace
        while (this.currentIndex < this.input.length && this.currentChar().trim().length === 0) {
            this.currentIndex += 1;
        }
        return;
    }

    innerNextToken(): Token | null {
        this.eatWhitespaces();
        if (this.currentIndex >= this.input.length) {
            return null;
        }

        const c = this.currentChar();
        if (c === '(' || c === ')') {
            this.currentIndex += 1;
            return { type: TokenKind.Symbol, value: c };
        } else if (c === '+' || c === '-' || c === '*' || c === '/') {
            this.currentIndex += 1;
            return { type: TokenKind.Operator, value: c };
        } else {
            const floatMatch = this.input.substring(this.currentIndex).match(FLOAT_REGEX);
            if (floatMatch) {
                const floatString = floatMatch[0];
                this.currentIndex += floatString.length;
                const value = parseFloat(floatString);
                return { type: TokenKind.Number, value };
            }
        }

        throw new Error(`Unknown character in input string: '${c}'`);
    }

    nextToken(): Token | null {
        if (this.bufferToken) {
            const token = this.bufferToken;
            this.bufferToken = undefined;
            return token;
        }

        return this.innerNextToken();
    }

    peekToken(): Token | null {
        if (this.bufferToken) {
            return this.bufferToken;
        }

        const token = this.innerNextToken();
        if (token) {
            this.bufferToken = token;
        }
        return token;
    }

    advance(): void {
        // we ignore the next token
        this.nextToken();
    }
}

interface Expression {
    value(): number;
}

class BinOpExpression implements Expression {
    lhs: Expression;
    rhs: Expression;
    op: OperatorKind;

    constructor(lhs: Expression, rhs: Expression, op: OperatorKind) {
        this.lhs = lhs;
        this.rhs = rhs;
        this.op = op;
    }

    value(): number {
        switch (this.op) {
            case '*':
                return this.lhs.value() * this.rhs.value();
            case '+':
                return this.lhs.value() + this.rhs.value();
            case '-':
                return this.lhs.value() - this.rhs.value();
            case '/':
                return this.lhs.value() / this.rhs.value();
        }
    }
}

class LiteralExpression implements Expression {
    literal: number;

    constructor(literal: number) {
        this.literal = literal;
    }

    value(): number {
        return this.literal;
    }
}

class Parser {
    lexer: Lexer;

    constructor(lexer: Lexer) {
        this.lexer = lexer;
    }

    expect(type: TokenKind, value?: any): void {
        const token = this.lexer.nextToken();
        if (token && token.type === type && token.value === value) {
            return;
        }
        throw new Error('Unexpected token');
    }

    parseExpression(): Expression | null {
        const token = this.lexer.peekToken();
        if (!token) {
            return null;
        }

        return this.parseAddExpression();
    }

    parseParenthesisExpression(): Expression {
        this.expect(TokenKind.Symbol, '(');
        const expression = this.parseExpression();
        if (!expression) {
            throw new Error('Unexpected EOL');
        }
        this.expect(TokenKind.Symbol, ')');
        return expression;
    }

    parseAddExpression(): Expression {
        let expr = this.parseMulExpression();
        while (true) {
            const token = this.lexer.peekToken();
            if (token && token.type === TokenKind.Operator && (token.value === '+' || token.value === '-')) {
                this.lexer.advance();
                const rhs = this.parseMulExpression();
                expr = new BinOpExpression(expr, rhs, token.value);
            } else {
                break;
            }
        }
        return expr;
    }
    parseMulExpression(): Expression {
        let expr = this.parseAtom();
        while (true) {
            const token = this.lexer.peekToken();
            if (token && token.type === TokenKind.Operator && (token.value === '*' || token.value === '/')) {
                this.lexer.advance();
                const rhs = this.parseAtom();
                expr = new BinOpExpression(expr, rhs, token.value);
            } else {
                break;
            }
        }
        return expr;
    }

    parseAtom(): Expression {
        const token = this.lexer.peekToken();
        if (!token) {
            throw new Error('Expected atom');
        }

        if (token.type === TokenKind.Number) {
            this.lexer.advance();
            return new LiteralExpression(token.value);
        } else if (token.type === TokenKind.Symbol && token.value === '(') {
            return this.parseParenthesisExpression();
        } else {
            throw new Error('Unexpected token');
        }
    }
}

export const evaluate = (input: string): number | null => {
    const lexer = new Lexer(input);
    const parser = new Parser(lexer);
    const expression = parser.parseExpression();
    if (expression) {
        return expression.value();
    } else {
        return null;
    }
};
