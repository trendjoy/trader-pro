export interface Analyzer<TInput, TResult> {

    analyze(input: TInput): TResult;

}