import { describe, expect, test } from 'bun:test';
import { IntentCalculator, GatewayIntentBits } from '../lib/util/Intent';

describe('IntentCalculator', () => {
    test('constructor initializes with default value', () => {
        const calculator = new IntentCalculator();
        expect(calculator.getBitfield()).toBe(0);
    });

    test('constructor initializes with provided value', () => {
        const calculator = new IntentCalculator([GatewayIntentBits.Guilds]);
        expect(calculator.getBitfield()).toBe(GatewayIntentBits.Guilds);
    });

    test('constructor combines multiple intents', () => {
        const calculator = new IntentCalculator([
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers
        ]);
        expect(calculator.getBitfield()).toBe(GatewayIntentBits.Guilds | GatewayIntentBits.GuildMembers);
    });

    test('add() adds intents correctly', () => {
        const calculator = new IntentCalculator()
            .add(GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers);
        
        expect(calculator.has(GatewayIntentBits.Guilds)).toBe(true);
        expect(calculator.has(GatewayIntentBits.GuildMembers)).toBe(true);
        expect(calculator.has(GatewayIntentBits.GuildMessages)).toBe(false);
    });

    test('remove() removes intents correctly', () => {
        const calculator = new IntentCalculator()
            .add(GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers)
            .remove(GatewayIntentBits.Guilds);
        
        expect(calculator.has(GatewayIntentBits.Guilds)).toBe(false);
        expect(calculator.has(GatewayIntentBits.GuildMembers)).toBe(true);
    });

    test('has() correctly identifies intents', () => {
        const calculator = new IntentCalculator([GatewayIntentBits.Guilds]);
        
        expect(calculator.has(GatewayIntentBits.Guilds)).toBe(true);
        expect(calculator.has(GatewayIntentBits.GuildMembers)).toBe(false);
    });

    test('getIntents() returns correct intent names', () => {
        const calculator = new IntentCalculator()
            .add(GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers);
        
        const intents = calculator.getIntents();
        expect(intents).toContain('Guilds');
        expect(intents).toContain('GuildMembers');
        expect(intents).not.toContain('GuildMessages');
    });

    test('static combine() combines intents correctly', () => {
        const combined = IntentCalculator.combine(
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers
        );
        expect(combined).toBe(GatewayIntentBits.Guilds | GatewayIntentBits.GuildMembers);
    });

    test('static toBitField() converts intent names correctly', () => {
        const bitfield = IntentCalculator.toBitField(['Guilds', 'GuildMembers']);
        expect(bitfield).toBe(GatewayIntentBits.Guilds | GatewayIntentBits.GuildMembers);
    });

    test('static fromBitField() converts bitfields to intent names', () => {
        const intents = IntentCalculator.fromBitField(
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers
        );

        expect(intents).toContain('Guilds');
        expect(intents).toContain('GuildMembers');
        expect(intents).not.toContain('GuildMessages');
    });

    test('static toBField() handles empty array', () => {
        const bitfield = IntentCalculator.toBitField([]);
        expect(bitfield).toBe(0);
    });
     test('static toBitField() ignores invalid intent names', () => {
        const bitfield = IntentCalculator.toBitField(['Guilds', 'InvalidIntent' as any]);
        expect(bitfield).toBe(GatewayIntentBits.Guilds);
    });

    test('static toBitField() combines multiple intents correctly', () => {
        const bitfield = IntentCalculator.toBitField([
            'Guilds',
            'GuildMembers',
            'GuildMessages',
            'MessageContent',
        ]);
        const expected = GatewayIntentBits.Guilds | 
            GatewayIntentBits.GuildMembers | 
            GatewayIntentBits.GuildMessages |
            GatewayIntentBits.MessageContent;
        expect(bitfield).toBe(expected);
    });

    test('static fromBitField() handles zero bitfield', () => {
        const intents = IntentCalculator.fromBitField(0);
        expect(intents).toHaveLength(0);
    });

    test('static fromBitField() handles single intent', () => {
        const intents = IntentCalculator.fromBitField(GatewayIntentBits.Guilds);
        expect(intents).toHaveLength(1);
        expect(intents).toContain('Guilds');
    });

    test('static fromBitField() combines multiple bitfields correctly', () => {
        const intents = IntentCalculator.fromBitField(
            GatewayIntentBits.Guilds | GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessages | GatewayIntentBits.MessageContent
        );
        
        expect(intents).toContain('Guilds');
        expect(intents).toContain('GuildMembers');
        expect(intents).toContain('GuildMessages');
        expect(intents).toContain('MessageContent');
        expect(intents).not.toContain('GuildPresences');
        expect(intents).toHaveLength(4);
    });
}); 