// components/VersionView.tsx
'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type VersionMap = Record<string, React.ReactNode>;

type Props = {
    versions: VersionMap;          // ex: { "1.3": <V13 />, "1.6": <V16 />, "1.7": <V17 /> }
    defaultVersion?: string;       // se não houver ?v=, qual usar (ex: "1.7")
    paramName?: string;            // nome do query param (default: "v")
    label?: string;                // label da combo (default: "Versão")
    warnOutdated?: boolean;        // mostra aviso se não for a mais recente (default: true)
};

export default function VersionView({
    versions,
    defaultVersion,
    paramName = 'v',
    label = 'Versão',
    warnOutdated = true
}: Props) {
    const keys = useMemo(() => Object.keys(versions), [versions]); // mantém ordem de declaração do MDX
    const latest = keys[keys.length - 1];

    const search = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const fromUrl = search.get(paramName) || undefined;
    const selected = useMemo(() => {
        if (fromUrl && keys.includes(fromUrl)) return fromUrl;
        if (defaultVersion && keys.includes(defaultVersion)) return defaultVersion;
        return latest;
    }, [fromUrl, defaultVersion, keys, latest]);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const v = e.target.value;
        const sp = new URLSearchParams(search.toString());
        sp.set(paramName, v);
        router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Cabeçalho com seletor */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-sm opacity-70">{label}:</span>
                    <select
                        value={selected}
                        onChange={onChange}
                        className="border rounded px-2 py-1 bg-transparent"
                        aria-label="Selecionar versão"
                    >
                        {keys.map(v => (
                            <option key={v} value={v}>{v}</option>
                        ))}
                    </select>
                </div>
            </div>

            {warnOutdated && selected !== latest && (
                <div className="border rounded px-3 py-2 text-sm">
                    <strong>Atenção:</strong> você está vendo a versão <code>{selected}</code>.
                    A mais recente é <a href={`${pathname}?${new URLSearchParams({ [paramName]: latest }).toString()}`}> {latest}</a>.
                </div>
            )}

            {/* Render do conteúdo da versão selecionada */}
            <div>
                {versions[selected]}
            </div>
        </div>
    );
}
