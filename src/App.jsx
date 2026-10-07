import wordmark from './assets/waymate-wordmark.svg'
import icon from './assets/waymate-icon.svg'
import { LINKS } from './links.js'

const btn =
    'flex min-w-[210px] flex-1 basis-[210px] flex-col justify-start gap-0.5 rounded-[18px] ' +
    'bg-[linear-gradient(135deg,var(--color-sunrise),var(--color-ember))] px-[22px] py-4 text-white ' +
    'shadow-[0_10px_24px_-10px_rgba(229,70,12,0.6)] transition duration-200 ' +
    'hover:-translate-y-[3px] hover:-rotate-[0.6deg] hover:shadow-[0_16px_28px_-10px_rgba(229,70,12,0.7)] ' +
    'motion-reduce:transition-none'

export default function App() {
    return (
        <div className="mx-auto flex min-h-dvh max-w-[1080px] flex-col px-6 pt-[max(28px,env(safe-area-inset-top))] pb-[max(40px,env(safe-area-inset-bottom))] min-[860px]:px-10">
            <main className="grid flex-1 items-center gap-x-12 gap-y-2 pt-5 pb-3 min-[860px]:grid-cols-[1.15fr_0.85fr]">
                {/* Logo + wordmark */}
                <div className="mx-auto flex w-full max-w-[250px] flex-col items-center min-[860px]:order-2 min-[860px]:mx-0 min-[860px]:max-w-[470px] min-[860px]:justify-self-end min-[860px]:self-start">
                    <img
                        src={icon}
                        alt=""
                        className="block h-auto w-full animate-land drop-shadow-[0_24px_34px_rgba(229,70,12,0.28)] motion-reduce:animate-none"
                    />
                    <img src={wordmark} alt="Waymate" className="-mt-[14%] block h-auto w-[85%]" />

                    <p className="mt-6 flex flex-wrap items-baseline justify-center gap-x-2 text-center mb-10">
                        <span className="text-[0.92rem] text-soft dark:text-tan">Founded by</span>
                        <a
                            className="font-semibold text-ink transition-colors hover:text-ember dark:text-warm dark:hover:text-sunrise"
                            href={LINKS.personal}
                            target="_blank"
                            rel="me noopener noreferrer"
                        >
                            armineslamieh.com
                        </a>
                    </p>
                </div>

                {/* Copy */}
                <div className="min-[860px]:order-1">
                    <h1 className="mb-[22px] font-display text-[clamp(3rem,12.5vw,6.4rem)] leading-[0.98] font-extrabold tracking-[-0.035em]">
                        Nobody gets there alone.
                    </h1>

                    <p className="mb-3 max-w-[30em] text-[1.2rem] leading-[1.6]">
                        Waymate matches you with someone chasing the same goal, then helps the two of you plan
                        it, check in, and keep going until it's done. Most goals fade by week three, usually
                        because you're doing them alone. Waymate gives you a partner who's in it with you.
                    </p>

                    <p className="mb-[30px] max-w-[30em] text-soft dark:text-tan mt-10">
                        Waymate is being built in public. I'll share everything I think is worth sharing with other
                        developers and entrepreneurs, as a series called Waymate -Startup series-. The technical side goes on X. Decisions about marketing,
                        management, design, and the bigger picture go on LinkedIn.
                    </p>

                    <div className="flex flex-wrap gap-3.5">
                        <a className={btn} href={LINKS.linkedin} target="_blank" rel="me noopener noreferrer">
                            <b className="font-display text-[1.45rem] leading-[1.2] font-bold tracking-[-0.01em]">
                                LinkedIn
                            </b>
                            <span className="text-[0.95rem] opacity-95">Marketing, management, design, etc.</span>
                        </a>
                        <a className={btn} href={LINKS.x} target="_blank" rel="me noopener noreferrer">
                            <b className="font-display text-[1.45rem] leading-[1.2] font-bold tracking-[-0.01em]">
                                X
                            </b>
                            <span className="text-[0.95rem] opacity-95">The technical build, as it happens.</span>
                        </a>
                    </div>


                </div>
            </main>
        </div>
    )
}