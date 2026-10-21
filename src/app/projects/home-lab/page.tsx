export default function HomeLabPage() {
    return (
        <main className="px-6 py-24">
            <div className="mx-auto max-w-4xl">
                <p className="font-semibold">Infrastructure & DevOps</p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                    Kubernetes Home Lab
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8">
                    A self-hosted Kubernetes environment built on Ubuntu Server for hands-on experience with container orchestration, networking, infrastructure services, monitoring, and automation.
                </p>
            <section className="mt-16">
                <h2 className="text-2xl font-bold">Overview</h2>

                <p className="mt-6 leading-7">
                    I built this home lab to develop practical experience with Linux administration, containerization, Kubernetes, networking, and infrastructure automation in an environment that I operate and troubleshoot myself.
                </p>

                <p className="mt-4 leading-7">
                    The environment runs Ubuntu Server with MicroK8s as a single-node Kubernetes cluster.  It hosts infrastructure services including network-wide DNS filtering with AdGuard Home and includes monitoring and automation for maintaining the underlying server and network.
                </p>
            </section>

            <section className="mt-16">
                <h2 className="text-2xl font-bold">Architecture</h2>

                <p className="mt-6 leading-7">
                    The lab is built around a repurposed HP laptop running Ubuntu Server as the host operating system.  MicroK8s provides the Kubernetes environment used to deploy and manage containerized services.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <article className="rounded-xl border p-6">
                        <h3 className="text-xl font-semibold">Host System</h3>

                        <p className="mt-4 leading-7">
                            Ubuntu Server provides the Linux foundation for the lab, including system administration, networking, storage, SSH access, and systemd services.
                        </p>
                    </article>

                    <article className="rounded-xl border p-6">
                        <h3 className="text-xl font-semibold">Kubernetes Platform</h3>
                        <p className="mt-4 leading-7">
                            MicroK8s runs as a single-node Kubernetes cluster and provides the container orchestration platform for deploying and operating lab services.
                        </p>
                    </article>

                    <article className="rounded-xl border p-6">
                        <h3 className="text-xl font-semibold">Networking & DNS</h3>

                        <p className="mt-4 leading-7">
                            The environment uses both IPv4 and IPv6 networking, with AdGuard Home providing network-wide DNS filtering for all the devices on the local network.
                        </p>
                    </article>

                    <article className="rounded-xl border p-6">
                        <h3 className="text-xl font-semibold">Monitoring & Automation</h3>

                        <p className="mt-4 leading-7">
                            Systemd services and timers support the automated monitoring tasks, including detection of IPv6 prefix changes and notification of network state changes through ntfy.
                        </p>
                    </article>
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-2xl font-bold">Key Implementations</h2>

                <div className="mt-8 space-y-10">
                    <article>
                        <h3 className="text-xl font-semibold">
                             Kubernetes Infrastructure
                        </h3>

                        <p className="mt-4 leading-7">
                            Configured and operate a single-node MicroK8s cluster on Ubuntu Server, including DNS, persistent storage, metrics collection, a local container registry, and Kubernetes networking with Calico.
                        </p>
                    </article>

                    <article>
                        <h3 className="text-xl font-semibold">
                            Network-Wide DNS Filtering
                        </h3>
                        <p className="mt-4 leading-7">
                            Deployed AdGuard Home as a Kubernetes-managed service to provide DNS filtering across the local network while supporting both IPv4 and IPv6 clients.
                        </p>
                    </article>

                    <article>
                        <h3 className="text-xl font-semibold">
                            Dual-Stack Networking
                        </h3>

                        <p className="mt-4 leading-7">
                            Configured the server to operate with both IPv4 and IPv6 and validated Kubernetes networking, DNS resolution, and service connectivity across the environment.
                        </p>
                    </article>

                    <article>
                        <h3 className="text-xl font-semibold">
                            IPv6 Prefix Monitoring
                        </h3>
                        <p className="mt-4 leading-7">
                            Built a host-level monitoring solution using a shell script, systemd service, and systemd timer to detect IPv6 prefix changes and send state-aware notifications when network conditions change.
                        </p>
                    </article>
                </div>
            </section>
            </div>
        </main>
    );
}
