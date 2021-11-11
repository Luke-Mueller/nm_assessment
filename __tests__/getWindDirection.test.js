import getWindDirection from "../utils/getWindDirection";

test('return correct values', () => {
    expect(getWindDirection(1)).toBe("N");
    expect(getWindDirection(15)).toBe("NNE");
    expect(getWindDirection(45)).toBe("NE");
    expect(getWindDirection(60)).toBe("ENE");
    expect(getWindDirection(88)).toBe("E");
    expect(getWindDirection(115)).toBe("ESE");
    expect(getWindDirection(135)).toBe("SE");
    expect(getWindDirection(150)).toBe("SSE");
    expect(getWindDirection(180)).toBe("S");
    expect(getWindDirection(200)).toBe("SSW");
    expect(getWindDirection(220)).toBe("SW");
    expect(getWindDirection(250)).toBe("WSW");
    expect(getWindDirection(275)).toBe("W");
    expect(getWindDirection(300)).toBe("WNW");
    expect(getWindDirection(315)).toBe("NW");
    expect(getWindDirection(330)).toBe("NNW");
    expect(getWindDirection(350)).toBe("N");
})