export interface Settings {
    /**
     * [服务商] 外部/公共 IP
     *
     * 请选择用来检测外部/公共 IP 的服务商。
     *
     * @remarks
     *
     * Possible values:
     * - `'ipw.cn'` - ipw.cn
     * - `'my-ip.io'` - my-ip.io
     *
     * @defaultValue "ipw.cn"
     */
    IPServer?: 'ipw.cn' | 'my-ip.io';
    Verify?: {
    /**
         * [API] 验证方式
         *
         * 请选择验证方式。
         *
         * @remarks
         *
         * Possible values:
         * - `'Token'` - 令牌
         * - `'Key'` - 密钥
         * - `'ServiceKey'` - 用户服务密钥
         *
         * @defaultValue "Token"
         */
        Mode?: 'Token' | 'Key' | 'ServiceKey';
    /**
         * [API] 验证内容
         *
         * 请填写验证内容，‘令牌’与‘用户服务密钥’验证方式的值写一行即可, ‘密钥’验证方式的key与email以换行方式写两行。
         *
         * @defaultValue ""
         */
        Content?: string;
};
    zone?: {
    /**
         * [DNS 信息] 区域 ID
         *
         * 请填写‘区域 ID’，‘区域 ID’和‘区域名称’至少提供一个。
         *
         * @defaultValue ""
         */
        id?: string;
    /**
         * [DNS 信息] 区域名称
         *
         * 请填写‘区域名称’，‘区域 ID’和‘区域名称’至少提供一个。
         *
         * @defaultValue ""
         */
        name?: string;
    /**
         * [DNS 信息] 记录内容
         *
         * 请填写‘记录内容’，一行一条，多行记录请换行填写, 名称仅是子域名, 类型与名称是必填项, 没有的项目就删掉别写, 内容为空的A与AAAA记录会自动获取当前外部IP地址。
         *
         * @defaultValue ""
         */
        dns_records?: string;
};
    /**
     * [调试] 日志等级
     *
     * 选择脚本日志的输出等级，低于所选等级的日志将全部输出。
     *
     * @remarks
     *
     * Possible values:
     * - `'OFF'` - 关闭
     * - `'ERROR'` - ❌ 错误
     * - `'WARN'` - ⚠️ 警告
     * - `'INFO'` - ℹ️ 信息
     * - `'DEBUG'` - 🅱️ 调试
     * - `'ALL'` - 全部
     *
     * @defaultValue "WARN"
     */
    LogLevel?: 'OFF' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'ALL';
}
