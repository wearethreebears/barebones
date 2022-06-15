import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

export const allComponentPartClassesToDisplayCorrectly = (component, parts) => {
    Object.keys(parts).forEach(part => {
        Object.keys(parts[part]).forEach(prop => {
            Object.keys(parts[part][prop]).forEach(propValue => {
                const wrapper = mount(component, {
                    props: {
                        [prop]: propValue
                    }
                });
                const flatClasses = parts[part][prop][propValue].flat();

                describe(wrapper.name, () => {

                    it(`adds the correct classes to part: ${part}`, () => {

                        flatClasses.forEach(classes => {
                            classes.split(' ').forEach(singleClass => {
                                if (part === 'component') {
                                    expect(wrapper.classes()).toContain(singleClass);
                                }
                                else {
                                    expect(wrapper.find(`[data-part="${part}"]`).classes()).toContain(singleClass);
                                }
                            })
                        })

                    })
                })
            })
        });
    })
}