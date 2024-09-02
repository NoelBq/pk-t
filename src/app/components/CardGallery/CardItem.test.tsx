import { render, screen } from '@testing-library/react';
import { CardItem } from './CardItem';
import '@testing-library/jest-dom'

describe('CardItem', () => {
    it('renders the card with correct name and image', () => {
        const name = 'Pikachu';
        const id = '2';

        render(<CardItem name={name} id={id} />);
        expect(screen.getByText(name)).toBeInTheDocument();
    });

    it('applies the correct styles to the Card component', () => {
        const { container } = render(
            <CardItem name="Bulbasaur" id='2' />
        );

        const card = container.querySelector('div');
        expect(card).toHaveStyle('background: linear-gradient(135deg, #fce16e, #f9b233)');
        expect(card).toHaveStyle('border: 2px solid #f0a22b');
        expect(card).toHaveStyle('border-radius: 8px');

    });

    it('applies the correct styles to the Box component', () => {
        const { container } = render(
            <CardItem name="Charmander" id='2' />
        );

        const box = container.querySelector('div > div');

        expect(box).toHaveStyle('background: linear-gradient(135deg, #f9d26b, #f0a22b)');

    });
});
