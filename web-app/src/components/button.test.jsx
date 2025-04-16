import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect, vi, beforeEach, afterEach} from 'vitest';
import CustomButton from './button';


describe('CustomButton', () => {

    let onClick;

    beforeEach(() => {
        onClick = vi.fn();
    })

    afterEach(() => {
        onClick.mockClear();
    })

    it('renders with default props', () => {
        render(<CustomButton onClick={onClick}>Click Me</CustomButton>);
        const button = screen.getByRole('button', {name: 'Click Me'});
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('primary');
        expect(button).not.toBeDisabled();
    });

    it('renders with custom color class', () => {
        render(<CustomButton onClick={onClick} color="secondary">Click Me</CustomButton>);
        const button = screen.getByRole('button', {name: 'Click Me'});
        expect(button).toHaveClass('secondary');
    });

    it('calls onClick when clicked', async () => {
        render(<CustomButton onClick={onClick}>Click Me</CustomButton>);
        const button = screen.getByRole('button', {name: 'Click Me'});
        await fireEvent.click(button);
        expect(onClick).toHaveBeenCalledOnce();
    });

    it('doesn\'t break when clicked if onClick isn\'t defined', async () => {
        render(<CustomButton>Click Me</CustomButton>);
        const button = screen.getByRole('button', {name: 'Click Me'});
        await fireEvent.click(button);
        expect(button).toBeInTheDocument();
    });

    it('renders with given type', () => {
        render(<CustomButton onClick={onClick} type="submit">Submit</CustomButton>);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('type', 'submit');
    });
});
