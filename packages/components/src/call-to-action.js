import React, { useState, useEffect } from 'react'
import { Flex, Center, View, Heading, Button } from 'native-base'

export default function CallToAction({ actionText, actionComponent, _heading, onAction, buttonText, buttonComponent, _button, ...props }) {
    const [_actionText, setActionText] = useState(actionText || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ligula auctor, sollicitudin dui.")
    const [_buttonText, setButtonText] = useState(buttonText || "Button")

    useEffect(() => { if (actionText) setActionText(actionText) }, [actionText])
    useEffect(() => { if (buttonText) setButtonText(buttonText) }, [buttonText])

    return (
        <Center px="5" py="8" {...props}>
            <Flex w={{ sm: "full", md: "2/3" }} flexDir={{ sm: "column", md: "row" }} alignItems={{ md: "center" }}>
                {actionComponent ? actionComponent :
                    <Heading pr="6" fontWeight="medium" {..._heading}
                        _dark={{ color: "blueGray.200" }}
                        _light={{ color: "blueGray.800" }}
                    >{_actionText}</Heading>
                }

                <View h="8" />

                {buttonComponent ? buttonComponent :
                    <Button w="32" h="12" bg="primary.500" _text={{ fontWeight: "medium", fontSize: "md" }}
                        _hover={{ bg: "primary.600" }} _pressed={{ bg: "primary.800" }} _loading={{ bg: "primary.300" }}
                        onPress={onAction}
                        {..._button}
                    >{_buttonText}</Button>
                }
            </Flex>
        </Center>
    )
}
