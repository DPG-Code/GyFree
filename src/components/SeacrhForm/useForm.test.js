import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "./useForm";

const setup = (params) => renderHook(() => useForm(params))

test('should change keyword', () => {
    const { result } = setup()

    act(() => {
        result.current.updateKeyword('valorant')
    })

    expect(result.current.keyword).toBe('valorant')
})

test('should use initial values', () => {
    const { result } = setup({
        initialKeyword : 'matrix'
    })

    expect(result.current.keyword).toBe('matrix')
})

test('should update correctly times has used twice', () => {
    const { result } = setup({
        initialKeyword : 'matrix'
    })

    act(() => {
        result.current.updateKeyword('valoran')
        result.current.updateKeyword('valorant')
    })

    expect(result.current.keyword).toBe('valorant')
    expect(result.current.times).toBe(2)
})