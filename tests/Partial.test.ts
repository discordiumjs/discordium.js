import { describe, expect, test } from 'bun:test';
import { PartialCalculator, GatewayPartials } from '../lib/util/Partial';
import { GatewayIntentBits } from '../lib/util/Intent';

describe('PartialCalculator', () => {
    test('constructor initializes with default value', () => {
        const calculator = new PartialCalculator();
        expect(calculator.getBitfield()).toBe(0);
    });

    test('constructor initializes with provided value', () => {
        const calculator = new PartialCalculator([GatewayPartials.Message]); 
        expect(calculator.getBitfield()).toBe(GatewayPartials.Message);
    });

    test('constructor combines multiple partials', () => {
        const calculator = new PartialCalculator([
            GatewayPartials.Message,
            GatewayPartials.Channel
        ]);
        expect(calculator.getBitfield()).toBe(GatewayPartials.Message | GatewayPartials.Channel);
    });

    test('add() adds partials correctly', () => {
        const calculator = new PartialCalculator()
            .add(GatewayPartials.Message, GatewayPartials.Channel);
        
        expect(calculator.has(GatewayPartials.Message)).toBe(true);
        expect(calculator.has(GatewayPartials.Channel)).toBe(true);
        expect(calculator.has(GatewayPartials.User)).toBe(false);
    });

    test('remove() removes partials correctly', () => {
        const calculator = new PartialCalculator()
            .add(GatewayPartials.Message, GatewayPartials.Channel)
            .remove(GatewayPartials.Message);
        
        expect(calculator.has(GatewayPartials.Message)).toBe(false);
        expect(calculator.has(GatewayPartials.Channel)).toBe(true);
    });

    test('has() correctly identifies partials', () => {
        const calculator = new PartialCalculator()
            .add(GatewayPartials.Message);
        
        expect(calculator.has(GatewayPartials.Message)).toBe(true);
        expect(calculator.has(GatewayPartials.Channel)).toBe(false);
    });

    test('getPartials() returns correct partial types', () => {
        const calculator = new PartialCalculator()
            .add(GatewayPartials.Message, GatewayPartials.Channel);
        
        const partials = calculator.getPartials();
        expect(partials).toContain(GatewayPartials.Message);
        expect(partials).toContain(GatewayPartials.Channel);
        expect(partials).not.toContain(GatewayPartials.User);
    });

    test('getRequiredIntents() returns correct intents', () => {
        const calculator = new PartialCalculator()
            .add(GatewayPartials.Message, GatewayPartials.GuildMember);
        
        const requiredIntents = calculator.getRequiredIntents();
        expect(requiredIntents).toContain(GatewayIntentBits.MessageContent);
        expect(requiredIntents).toContain(GatewayIntentBits.GuildMembers);
    });

    test('static fromPartials() creates calculator correctly', () => {
        const calculator = PartialCalculator.fromPartials(
            GatewayPartials.Message,
            GatewayPartials.Channel
        );
        
        expect(calculator.has(GatewayPartials.Message)).toBe(true);
        expect(calculator.has(GatewayPartials.Channel)).toBe(true);
        expect(calculator.has(GatewayPartials.User)).toBe(false);
    });

    test('static fromBitfield() converts bitfield to partials', () => {
        const bitfield = GatewayPartials.Message | GatewayPartials.Channel;
        const partials = PartialCalculator.fromBitfield(bitfield);
        
        expect(partials).toContain(GatewayPartials.Message);
        expect(partials).toContain(GatewayPartials.Channel);
        expect(partials).not.toContain(GatewayPartials.User);
    });
}); 