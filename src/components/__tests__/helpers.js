import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";

export const allComponentPartClassesToDisplayCorrectly = (component, parts, stubs = [], dynamic = false) => {
    if (dynamic) {
        console.warn('TESTING', parts.default)
    }
    const rootParts = dynamic ? parts.default : parts;
    Object.keys(rootParts).forEach(part => {
        Object.keys(rootParts[part]).forEach(prop => {
            Object.keys(rootParts[part][prop]).forEach(propValue => {
                const wrapper = shallowMount(component, {
                    props: {
                        [prop]: propValue
                    },
                    global: {
                        stubs: stubs
                    }
                });
                const flatClasses = rootParts[part][prop][propValue].flat();

                describe(wrapper.name, () => {

                    it(`adds the correct classes to part: ${part}`, () => {

                        flatClasses.forEach(classes => {
                            classes.split(' ').forEach(singleClass => {
                                const componentPart = wrapper.find(`[data-part="${part}"]`);
                                if (Object.keys(componentPart).length) {
                                    expect(componentPart.classes()).toContain(singleClass);
                                }
                            })
                        })

                    })
                })
            })
        });
    })
}