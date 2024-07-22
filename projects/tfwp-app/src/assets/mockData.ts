import { ConfigurableType } from "../app/models/ConfigurableType.enum";
import { PageConfig } from "../app/models/PageConfig.interface";
import { PageLayout } from "../app/models/PageLayout.enum";
import { PageSectionName } from "../app/models/PageSectionName.enum";

export const PAGE_CONFIG: PageConfig = {
    layoutType: PageLayout.Horizontal,
    sections: [
        {
            name: PageSectionName.Header,
            viewConfig: {
                isVisible: true,
            },
            type: ConfigurableType.Boolean
        },
        {
            name: PageSectionName.ControlPanel,
            viewConfig: {
                isVisible: true,
            },
            type: ConfigurableType.None
        },
        {
            name: PageSectionName.Widgets,
            viewConfig: {
                isVisible: true,
            },
            type: ConfigurableType.Draggable,
            subItems: [
                {
                    id: "1",
                    version: "0.0.1",
                    title: "sport-widget"
                },
                {
                    id: "2",
                    version: "0.0.1",
                    title: "bets-widget"
                }
            ]
        },
        {
            name: PageSectionName.Sidebar,
            viewConfig: {
                isVisible: true,
            },
            type: ConfigurableType.Boolean
        },
        {
            name: PageSectionName.Footer,
            viewConfig: {
                isVisible: true,
            },
            type: ConfigurableType.Boolean
        },
        // ToDo provide flexible page content generation logic
        // {
        //     name: PageSectionName.Content,
        //     viewConfig: {
        //         isVisible: true,
        //     },
        //     type: ConfigurableType.None,
        //     subItems: [
        //         {
        //             name: PageSectionName.ControlPanel,
        //             viewConfig: {
        //                 isVisible: true,
        //             },
        //             type: ConfigurableType.None
        //         },
        //         {
        //             name: PageSectionName.Widgets,
        //             viewConfig: {
        //                 isVisible: true,
        //             },
        //             type: ConfigurableType.Draggable,
        //             subItems: [
        //                 {
        //                     id: "1",
        //                     version: "0.0.1",
        //                     title: "sport-widget"
        //                 },
        //                 {
        //                     id: "2",
        //                     version: "0.0.1",
        //                     title: "bets-widget"
        //                 }
        //             ]
        //         },
        //         {
        //             name: PageSectionName.Sidebar,
        //             viewConfig: {
        //                 isVisible: true,
        //             },
        //             type: ConfigurableType.Boolean
        //         },
        //     ],
        // }, 
    ]
}