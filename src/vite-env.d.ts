/// <reference types="vite/client" />

declare global {
  interface Window {
    MathQuill: MathQuillStatic;
  }

  const MathQuill: MathQuillStatic;

  interface MathQuillStatic {
    getInterface(version: number): MathQuillInterface;
  }

  interface MathQuillInterface {
    MathField(el: HTMLElement, config?: MathFieldConfig): MathField;
  }

  interface MathFieldConfig {
    spaceBehavesLikeTab?: boolean;
    leftRightIntoCmdGoes?: "up" | "down";
    restrictMismatchedBrackets?: boolean;
    sumStartsWithNEquals?: boolean;
    supSubsRequireOperand?: boolean;
    charsThatBreakOutOfSupSub?: string;
    autoSubscriptNumerals?: boolean;
    autoCommands?: string;
    autoOperatorNames?: string;
    substituteTextarea?: () => HTMLElement;
    handlers?: {
      edit?: (mathField: MathField) => void;
      enter?: (mathField: MathField) => void;
      upOutOf?: (mathField: MathField) => void;
      downOutOf?: (mathField: MathField) => void;
      moveOutOf?: (dir: number, mathField: MathField) => void;
    };
  }

  interface MathField {
    latex(): string;
    latex(latexString: string): void;
    text(): string;
    cmd(latexString: string): void;
    write(latexString: string): void;
    focus(): void;
    blur(): void;
    revert(): void;
    reflow(): void;
    el(): HTMLElement;
    html(): string;
  }
}

export {};
