import { defineConfig } from "@iringo/arguments-builder";

export default defineConfig({
	output: {
		surge: {
			path: "./dist/Cloudflare.DNS.sgmodule",
			transformEgern: {
				enable: true,
				path: "./dist/Cloudflare.DNS.yaml",
			},
		},
		loon: {
			path: "./dist/Cloudflare.DNS.plugin",
		},
		customItems: [
			{
				path: "./dist/Cloudflare.DNS.stoverride",
				template: "./template/stash.handlebars",
			},
			{
				path: "./dist/Cloudflare.DNS.snippet",
				template: "./template/quantumultx.handlebars",
			},
			{
				path: "./dist/Cloudflare.DNS.srmodule",
				template: "./template/shadowrocket.handlebars",
			},
		],
		dts: {
			isExported: true,
			path: "./src/types.d.ts",
		},
		boxjsSettings: {
			path: "./template/boxjs.settings.json",
			scope: "@Cloudflare.DNS.Settings",
		},
	},
	args: [
		{
			key: "IPServer",
			name: "[服务商] 外部/公共 IP",
			defaultValue: "ipw.cn",
			type: "string",
			boxJsType: "selects",
			description: "请选择用来检测外部/公共 IP 的服务商。",
			options: [
				{
					key: "ipw.cn",
					label: "ipw.cn",
				},
				{
					key: "my-ip.io",
					label: "my-ip.io",
				},
			],
		},
		{
			key: "Verify.Mode",
			name: "[API] 验证方式",
			defaultValue: "Token",
			type: "string",
			boxJsType: "selects",
			description: "请选择验证方式。",
			options: [
				{
					key: "Token",
					label: "令牌",
				},
				{
					key: "Key",
					label: "密钥",
				},
				{
					key: "ServiceKey",
					label: "用户服务密钥",
				},
			],
		},
		{
			key: "Verify.Content",
			name: "[API] 验证内容",
			defaultValue: "",
			type: "string",
			boxJsType: "textarea",
			placeholder: "1234567893feefc5f0q5000bfo0c38d90bbeb,\nexample@example.com",
			description: "请填写验证内容，‘令牌’与‘用户服务密钥’验证方式的值写一行即可, ‘密钥’验证方式的key与email以换行方式写两行。",
		},
		{
			key: "zone.id",
			name: "[DNS 信息] 区域 ID",
			defaultValue: "",
			type: "string",
			boxJsType: "text",
			description: "请填写‘区域 ID’，‘区域 ID’和‘区域名称’至少提供一个。",
		},
		{
			key: "zone.name",
			name: "[DNS 信息] 区域名称",
			defaultValue: "",
			type: "string",
			boxJsType: "text",
			placeholder: "example.com",
			description: "请填写‘区域名称’，‘区域 ID’和‘区域名称’至少提供一个。",
		},
		{
			key: "zone.dns_records",
			name: "[DNS 信息] 记录内容",
			defaultValue: "",
			type: "string",
			boxJsType: "textarea",
			placeholder: "id=记录ID&type=类型&name=名称&content=内容&ttl=TTL&priority=优先级&proxied=是否代理\ntype=A&name=www&proxied=false",
			description: "请填写‘记录内容’，一行一条，多行记录请换行填写, 名称仅是子域名, 类型与名称是必填项, 没有的项目就删掉别写, 内容为空的A与AAAA记录会自动获取当前外部IP地址。",
		},
		{
			key: "LogLevel",
			name: "[调试] 日志等级",
			type: "string",
			defaultValue: "WARN",
			description: "选择脚本日志的输出等级，低于所选等级的日志将全部输出。",
			options: [
				{ key: "OFF", label: "关闭" },
				{ key: "ERROR", label: "❌ 错误" },
				{ key: "WARN", label: "⚠️ 警告" },
				{ key: "INFO", label: "ℹ️ 信息" },
				{ key: "DEBUG", label: "🅱️ 调试" },
				{ key: "ALL", label: "全部" },
			],
		},
	],
});
